(ns clj.core
    (:require [quil.core :as q :include-macros true]))

(defn draw-state []
  (q/no-stroke)
  (let [w [255 255 255]
	  b [0 0 0]
	  g [61 192 108]]
    (apply q/background w)

    (apply q/fill b)
    (q/rect 0 0 240 190)
    (q/rect 80 190 80 20)
    (q/rect 20 210 200 20)
    (q/rect 0 230 240 50)

    (apply q/fill w)
    (q/rect 20 20 200 150)

    (doseq [x [40 80 120 160]]
	   (q/rect x 250 20 20))
    (doseq [x [60 100 140 180]]
	   (q/rect x 230 20 20))

    (apply q/fill b)
    (q/rect 40 40 160 110)

    (apply q/fill g)
    (doseq [x [40 80 120]]
	   (q/rect x 60 20 20))

    (q/rect 60 100 40 20)
    (q/rect 120 100 40 20)))

(defn ^:export run-sketch []
  (q/defsketch rc-logo
  	       :host "clojure-canvas"
	       :size [240 280]
	       :draw draw-state))
