(defproject clj "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [quil "2.6.0"]
                 [org.clojure/clojurescript "1.9.946"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.14"]]
  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds [; minified and bundled build for deployment
            {:source-paths ["src"]
             :compiler
             {:output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/optimized"
              :asset-path "js/optimized"
              :optimizations :advanced}}]})
