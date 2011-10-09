goog.provide('twitter_search.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('pinot.html');
goog.require('pinot.dom');
goog.require('pinot.remotes');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
var group__2290__auto____2320 = cljs.core.swap_BANG_.call(null,pinot.html.group_id,cljs.core.inc);

twitter_search.core.tweet = (function tweet(p__2321){
var map__2322__2323 = p__2321;
var map__2322__2324 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2322__2323))?cljs.core.apply.call(null,cljs.core.hash_map,map__2322__2323):map__2322__2323);
var profile_image_url__2325 = cljs.core.get.call(null,map__2322__2324,"﷐'profile_image_url");
var text__2326 = cljs.core.get.call(null,map__2322__2324,"﷐'text");

return pinot.dom.attr.call(null,pinot.html.html.call(null,cljs.core.Vector.fromArray(["﷐'article",twitter_search.core.image.call(null,profile_image_url__2325),cljs.core.Vector.fromArray(["﷐'p",text__2326])])),cljs.core.ObjMap.fromObject(["﷐'pinotGroup"],{"﷐'pinotGroup":group__2290__auto____2320}));
});
