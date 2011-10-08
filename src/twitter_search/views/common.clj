(ns twitter-search.views.common
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defpartial layout [& content]
            (html5
              [:head
               [:title "twitter-search"]
               (include-css "/css/reset.css" "/css/twitter-search.css")]
              [:body
               [:div#wrapper
                content]
               (include-js  "/js/out/goog/base.js" "/js/search.js")
               "<script type='text/javascript'>goog.require('twitter-search.core')</script>"]))
