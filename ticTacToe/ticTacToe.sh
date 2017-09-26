#!/bin/sh
#######################################################################
# dash implementation of tic-tac-toe, with AI logic based on:
# https://blog.ostermiller.org/tic-tac-toe-strategy
#
# 25.06.2017 G.S.C.
#######################################################################

# intermediate representation of different board square values
empty=0
x=1
o=2

# display representation of different board square values
emptyD=' '
xD='X'
oD='O'

# move counter
moves=0

# create variables b1-9 representing the squares and set them to empty
for i in `seq 1 9`; do
    eval b$i=$empty
done

### utility functions ###

# pretty print the current board state
# usage: printBoard
printBoard() {
    echo "\n $b1 | $b2 | $b3 \n---+---+---\n $b4 | $b5 | $b6 \n---+---+---\n $b7 | $b8 | $b9 \n" \
	| tr $empty$x$o "$emptyD$xD$oD"
}

# randomly choose one of the arguments to chooseRand
# usage: chooseRand arg...
chooseRand() {
    choice=`awk -v min=1 -v max=$# 'BEGIN{srand(); print int(min+rand()*(max-min+1))}'`
    eval echo '$'$choice
}

# find the empty square in a potential three-in-a-row, or 0 if none exists
# usage: check2Seq sq1 sq2 sq3
check2Seq() {
    if eval test '$b'$1 '-eq' $empty; then
	if eval test '$b'$2 '-ne' $empty '-a' '$b'$2 '-eq' '$b'$3; then
	    eval echo $1 '$b'$2
	    return
	fi
	
    elif eval test '$b'$2 '-eq' $empty; then
	if eval test '$b'$1 '-eq' '$b'$3; then
	    eval echo $2 '$b'$1
	    return
	fi
    
    elif eval test '$b'$3 '-eq' $empty '-a' '$b'$1 '-eq' '$b'$2; then
	eval echo $3 '$b'$1
	return
    fi

    echo 0
}

# get a list of all currently empty squares
# usage: emptySqs
emptySqs() {
    for i in `seq 1 9`; do	
	eval test '$b'$i -eq $empty && echo $i' \c'
    done
}

# check whether the game is finished (one player has won, or the board is full) and if so,
# print the result
# usage: finished
finished() {
    winner=$empty

    # possible paths for winning:
    #   rows: (1 2 3) (4 5 6) (7 8 9)
    #   columns: (1 4 7) (2 5 8) (3 6 9)
    #   diagonals: (1 5 9) (3 5 7)
    paths='123 456 789 147 258 369 147 258 369 159 357'

    for path in $paths; do
	if test $winner -ne $empty; then
	    break
	fi

	f=`expr substr $path 1 1`
	s=`expr substr $path 2 1`
	t=`expr substr $path 3 1`
	
	if eval test '$b'$f '-ne' $empty '-a' '$b'$f '-eq' '$b'$s '-a' '$b'$f '-eq' '$b'$t; then
	    eval winner='$b'$f
	fi
    done

    if test $winner -ne $empty; then
	echo "Congratulations $winner, you won!" | tr $x$o "$xD$oD"
	return 0
    fi
    
    # if there was no winner, check whether the board is full
    if test -z "`emptySqs`"; then
	echo "It's a stalemate."
	return 0
    fi

    return 1
}

# build a full game tree, with move weight based on the number of winning outcomes a move
# leads to, and the number of steps to the winning outcome
# no tree pruning based on board symmetry
# usage: buildGameTree
#buildGameTree() { }

### claim functions ###

# read a claim from stdin
# usage: getUserClaim player
getUserClaim() {
    while true; do
	echo "$1\c" | tr $x$o "$xD$oD"
	read -p ", please select an empty square (1-9): " claim

	if expr "$claim" : '[1-9]$' >/dev/null && makeClaim $claim $1; then
	    return
	else
	    echo "Invalid selection!"
	fi
    done
}

# have computer choose a claim randomly
# usage: getNoviceClaim player
getNoviceClaim() {
    claim=$(chooseRand `emptySqs`)

    makeClaim $claim $1
    echo "##" `echo $1 | tr $x$o "$xD$oD"` "chose square $claim ##"
}

# have computer play at an intermediate level (reactionarily)
# usage: getIntClaim player
getIntClaim() {
    # possible three-in-a-rows:
    #   rows: (1 2 3) (4 5 6) (7 8 9)
    #   columns: (1 4 7) (2 5 8) (3 6 9)
    #   diagonals: (1 5 9) (3 5 7)
    paths='123 456 789 147 258 369 147 258 369 159 357'

    opponent=''
    
    # look for potential three-in-a-rows
    for path in $paths; do
	f=`expr substr $path 1 1`
	s=`expr substr $path 2 1`
	t=`expr substr $path 3 1`

	claim=`check2Seq $f $s $t`

	# empty square was found
	if test "$claim" != 0; then
	    emptySq=`expr substr "$claim" 1 1`
	    owner=`expr substr "$claim" 3 1`
	    
	    if test $owner -eq $1; then
		makeClaim $claim
		echo "##" `echo $1 | tr $x$o "$xD$oD"` "chose square $emptySq ##"
		return
		
	    elif test -z "$opponent"; then
		opponent=$emptySq
	    fi
	fi
    done

    # block a potential opponent three-in-a-row
    if test -n "$opponent"; then
	makeClaim $opponent $1
	echo "##" `echo $1 | tr $x$o "$xD$oD"` "chose square $opponent ##"
	
    else
	# play as a novice
	getNoviceClaim $1
    fi
}

# have computer play as an experienced player (choose a good first move)
# usage: getExpClaim player
getExpClaim() {
    # playing first
    if test $moves -eq 0; then
	# choose a corner square
	claim=`chooseRand 1 3 7 9`
	makeClaim $claim $1
	echo "##" `echo $1 | tr $x$o "$xD$oD"` "chose square $claim ##"

    elif test $moves -eq 1; then
	# playing second

	# player 1 chose the centre square
	if test $b5 -ne $empty; then
	    # choose a corner square
	    claim=`chooseRand 1 3 7 9`
	    makeClaim $claim $1
	    echo "##" `echo $1 | tr $x$o "$xD$oD"` "chose square $claim ##"

	else
	    # choose the centre square	    
	    makeClaim 5 $1
	    echo "##" `echo $1 | tr $x$o "$xD$oD"` "chose square 5 ##"
	fi

    else
	getIntClaim $1
    fi
}

# have computer play as an expert player (brute force with full game tree)
# usage: getExpertClaim player
getExpertClaim() {
    return
}

# have AI claim a square (claim depends on selected difficulty)
# usage: getAIClaim difficulty player
getAIClaim() {
    case $1 in
	1) getNoviceClaim $2
	   ;;
	2) getIntClaim $2
	   ;;
	3) getExpClaim $2
	   ;;
	4) getExpertClaim $2
	   ;;
    esac
}

# claim a square
# usage: makeClaim square player
makeClaim() {
    # check that the square is currently empty
    if eval test '$b'$1 '-ne' '$empty'; then
	return 1
    fi

    # replace the square's value in the board with its new value
    eval b$1=$2
}


### configuration ###

# preamble
preamble="### Time to play tic-tac-toe! ###\n"
echo "$preamble"

# choose type of adversary
prompt="Select a human or computer adversary [H / C]: "
read -p "$prompt" adversary
while test `expr "$adversary" : '[HhCc]$'` -eq 0; do
    echo "Invalid selection!"
    read -p "$prompt" adversary
done

# choose difficulty level of computer adversary and who plays first
if expr $adversary : '[Cc]' >/dev/null; then
    
    prompt="Select a difficulty level [novice: 1, intermediate: 2, experienced: 3, expert: 4]: "
    read -p "$prompt" difficulty
    while test `expr "$difficulty" : '[1-4]$'` -eq 0; do
	echo "Invalid selection!"
	read -p "$prompt" difficulty
    done

    prompt="Play as X? [Y / N] "
    read -p "$prompt" first
    while test `expr "$first" : '[YyNn]$'` -eq 0; do
	echo "Invalid selection!"
	read -p "$prompt" first
    done    
fi

echo "\nThe board squares are designated as follows:\n 1 | 2 | 3 \n---+---+---\n 4 | 5 | 6 \n---+---+---\n 7 | 8 | 9\n\nX plays first..."

### main program loop ###

while true; do
    
    # get player 1's claim
    case $adversary$first in
	[Hh]) getUserClaim $x
	      ;;
	[Cc][Yy]) getUserClaim $x
		  ;;
	*) getAIClaim $difficulty $x
	   ;;
    esac

    moves=`expr $moves + 1`
    printBoard
    
    # if we are done, then terminate
    if finished; then
	exit
    fi

    # get player 2's claim
    case $adversary$first in
	[Hh]) getUserClaim $o
	      ;;
	[Cc][Nn]) getUserClaim $o
		  ;;
	*) getAIClaim $difficulty $o
	   ;;
    esac

    moves=`expr $moves + 1`
    printBoard
    
    # if we are done, then terminate
    if finished; then
	exit
    fi
done
