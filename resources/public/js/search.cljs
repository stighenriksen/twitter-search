(ns twitter-search.core
  (:require [clojure.browser.repl :as repl]
            [pinot.html :as html]
            [pinot.dom :as dom]
            [pinot.remotes :as remotes]
            [pinot.events :as events]
            [goog.events :as ev]
            [pinot.draw.visualization :as vis]
            )
  (:require-macros [pinot.macros :as pm]))
(repl/connect "http://localhost:9000/repl")


(def items (range 0 10))

;;For SVG we have to namespace our elements
(pm/defpartial canvas []
                [:svg:svg {:width 1000 :height 800}])

(pm/defpartial item [x]
                [:svg:circle {:r (* 2 x)}])

(dom/append (dom/query "#wrapper")
            (canvas))

(-> (vis/visual items)
  (vis/elem item)
  (vis/attr :stroke "#333")
  (vis/attr :fill "blue")
  (vis/attr :cx #(+ 20 (rand-int 800)))
  (vis/attr :cy #(+ 80 (* 10 (mod % 4))))
  (vis/enter (partial dom/append (dom/query "svg"))))

(-> (vis/select item)
  (vis/transition 500)
  (vis/data items)
  (vis/attr :cx #(* 70 %))
  (vis/attr :cy #(+ 30 (* 20 (mod % 3))))
  (vis/start))




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
                

