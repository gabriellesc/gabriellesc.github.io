// insert navbar and footer

let nav = document.createElement('div');
nav.innerHTML = `<ul class="nav nav-tabs">
      <li role="presentation"><a href="../index.html"><b>Home</b></a></li>
      <li role="presentation" id="GOL-nav">
        <a href="../GOL/index.html">Game of Life</a>
      </li>
      <li role="presentation" id="ticTacToe-nav">
        <a href="../ticTacToe/index.html">Tic-Tac-Toe</a>
      </li>
      <li role="presentation" id="mazily-nav">
        <a href="../mazily/index.html">Mazily</a>
      </li>
      <li role="presentation" id="robotGrid-nav">
        <a href="../robotGrid/index.html">Robot Navigation</a>
      </li>
      <!--li role="presentation" id="spaceInvaders-nav">
        <a href="../spaceInvaders/index.html">Space Invaders</a>
      </li-->
      <li role="presentation" id="piet-nav">
        <a href="../piet/index.html">MasterPiets</a>
      </li>
      <li role="presentation" id="wordplay-nav">
        <a href="../wordplay/index.html">Wordplay</a>
      </li>
      <li role="presentation" id="logos-nav">
        <a href="../logos/index.html">RC Logos</a>
      </li>
      <li role="presentation" id="jsfuck-nav">
        <a href="../jsfuck/pres.html">JSFuck Presentation</a>
      </li>
      <li role="presentation" id="teaching-nav">
        <a href="../teaching/index.html">Teaching Materials</a>
      </li>
    </ul>`;

let footer = document.createElement('div');
footer.innerHTML = `<footer class="footer">
      <div class="container col-xs-12">
        <span class="text-muted">Gabrielle Singh Cadieux, 2017.</span>
      </div>
    </footer>`;

document.body.insertBefore(footer, document.body.firstChild);
document.body.insertBefore(nav, footer);
