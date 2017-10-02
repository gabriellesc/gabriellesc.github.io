import Graphics.Gloss

main = display (InWindow "" (602, 702) (100, 100)) white picture

picture = Pictures [Color black (Polygon [(-300, -125), (-300, 350), (300, 350), (300, -125)]),
                    Color black (Polygon [(-100, -175), (-100, -125), (100, -125), (100, -175)]),
                    Color black (Polygon [(-250, -225), (-250, -175), (250, -175), (250, -225)]),
                    Color black (Polygon [(-300, -350), (-300, -225), (300, -225), (300, -350)]),
                    Color white (Polygon [(-250, -75), (-250, 300), (250, 300), (250, -75)]),
                    Color black (Polygon [(-200, -25), (-200, 250), (200, 250), (200, -25)]),
                    Pictures [square white x (-325) | x <- [-200,-100..100]],
                    Pictures [square white x (-275) | x <- [-150,-50..150]],
                    Pictures [square greenRc x 150 | x <- [-200,-100..0]],
                    Color greenRc (Polygon [(-150, 50), (-150, 100), (-50, 100), (-50, 50)]),
                    Color greenRc (Polygon [(0, 50), (0, 100), (100, 100), (100, 50)])
                   ]
                   where
                     greenRc = makeColorI 61 192 108 255
                     square color x y = Color color (Polygon [(x, y), (x, y+50), (x+50, y+50), (x+50, y)])