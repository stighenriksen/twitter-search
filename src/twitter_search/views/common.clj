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
                content]]))
