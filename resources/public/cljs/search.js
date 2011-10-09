goog.provide('twitter_search.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('pinot.html');
goog.require('pinot.dom');
goog.require('pinot.remotes');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
var group__2497__auto____2527 = cljs.core.swap_BANG_.call(null,pinot.html.group_id,cljs.core.inc);

twitter_search.core.tweet = (function tweet(p__2528){
var map__2529__2530 = p__2528;
var map__2529__2531 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2529__2530))?cljs.core.apply.call(null,cljs.core.hash_map,map__2529__2530):map__2529__2530);
var profile_image_url__2532 = cljs.core.get.call(null,map__2529__2531,"﷐'profile_image_url");
var text__2533 = cljs.core.get.call(null,map__2529__2531,"﷐'text");

return pinot.dom.attr.call(null,pinot.html.html.call(null,cljs.core.Vector.fromArray(["﷐'article",twitter_search.core.image.call(null,profile_image_url__2532),cljs.core.Vector.fromArray(["﷐'p",text__2533])])),cljs.core.ObjMap.fromObject(["﷐'pinotGroup"],{"﷐'pinotGroup":group__2497__auto____2527}));
});
