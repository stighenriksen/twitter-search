(ns twitter-search.core
  (:require [clojure.browser.repl :as repl]
            [pinot.html :as html]
            [pinot.dom :as dom]
            [pinot.remotes :as remotes]
            [pinot.events :as events]
            [goog.events :as ev]
            )
  (:require-macros [pinot.macros :as pm]))
(repl/connect "http://localhost:9000/repl")

(pm/defpartial tweet [{:keys [text profile_image_url]}]
  [:article
   [:img {:src profile_image_url}]
   [:p text]])

(defn get-tweets [search-string]
  (pm/remote (search search-string) [result]
             (dom/unappend (dom/query "section div"))
             (dom/append (dom/query "section")
                         (html/html [:div (map tweet result)]))))

(def curr-timeout nil)

(events/on (dom/query "input") :keyup
           (fn [me e]
             (if (not (nil? curr-timeout))
               (js/clearTimeout curr-timeout))
             (def curr-timeout (js/setTimeout
                                (fn []
                                  (pm/remote (search (.value me)) [result]
                                             (dom/unappend (dom/query "section div"))
                                             (dom/append (dom/query "section")
                                                         (html/html [:div (map tweet result)]))))
                                             400))))
                

