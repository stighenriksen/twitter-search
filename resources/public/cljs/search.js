goog.provide('twitter_search.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('pinot.html');
goog.require('pinot.dom');
goog.require('pinot.remotes');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
twitter_search.core.x = pinot.html.html.call(null,cljs.core.Vector.fromArray(["﷐'p",cljs.core.Vector.fromArray(["﷐'em","hey"])]));
pinot.remotes.remote_callback.call(null,"search",cljs.core.Vector.fromArray(["emacs"]),(function (result){
return alert.call(null,"result gotten");
}));
