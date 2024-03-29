(ns twitter-search.views.welcome
  (:require [twitter-search.views.common :as common]
            [noir.content.pages :as pages]
            [clj-http.client :as client])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers
        hiccup.form-helpers
        twitter.oauth
        twitter.callbacks
        twitter.callbacks.handlers
        twitter.api.restful
        [clojure.data.json :only (json-str write-json read-json)]))

(defpage "/main" {:as keyword} 
  (common/layout
   (search-form keyword)))

(defpartial search-form [{:keys [keyword]}]
     (form-to [:post "/main"]
            (label "keyword" "Keyword:" )
            (text-field "keyword" keyword)
            (submit-button "Search")))

(defpage [:post "/main"] {:as keyword}
  (println keyword)
  (common/layout
   [:section
   (search-form keyword)
   (map tweet (search-twitter (:keyword keyword)))]))

(defpartial tweet [{:keys [text profile_image_url]}]
  [:article
   (image profile_image_url)
   [:p text]])
   

(defn search-twitter
  "Retrieves tweets from Twitter containing the search-string"
  ([search-string num-tweets]
     (let [search-response
           (client/get "http://search.twitter.com/search.json"
                       {:query-params {"q" search-string "rpp" num-tweets "lang" "EN"}})
           tweets (read-json (:body search-response))]
       (second (first (remove #(not (= (first %) :results)) tweets)))))
  ([search-string]
     (search-twitter search-string 10)))
