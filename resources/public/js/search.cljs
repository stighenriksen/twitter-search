(ns twitter-search.core
  (:require [clojure.browser.repl :as repl]
            [pinot.html :as html]
            [pinot.dom :as dom]
            [pinot.remotes :as remotes])
  (:require-macros [pinot.macros :as pm]))
(repl/connect "http://localhost:9000/repl")

(def x (html/html [:p [:em "hey"]]))

(pm/remote (search "emacs") [result]
           (js/alert "result gotten"))




















