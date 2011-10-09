(ns twitter-search.server
  (:require [noir.server :as server]))

(server/load-views "src/twitter_search/views/")
(server/add-middleware wrap-remotes)


(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'twitter-search})))








