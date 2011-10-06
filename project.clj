(defproject twitter-search "0.1.0-SNAPSHOT"
            :description "Clj twitter search demo!"
            :dependencies [[org.clojure/clojure  "1.3.0"]
                           [twitter-api "0.6.0"]
                           [noir "1.2.0"]
                           [pinot "0.1.1-SNAPSHOT"]
                           [clj-http "0.2.1"]
                           [org.danlarkin/clojure-json "1.2-SNAPSHOT"]]
            :main twitter-search.server)