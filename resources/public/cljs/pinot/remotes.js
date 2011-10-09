goog.provide('pinot.remotes');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('pinot.util.js');
goog.require('cljs.reader');
goog.require('goog.events');
pinot.remotes.remote_uri = "/pinotremotecall";
pinot.remotes.xhr = (function xhr(uri,method,content,callback){
var req__4412 = (new goog.net.XhrIo());
var content__4413 = cljs.core.pr_str.call(null,content);
var method__4414 = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));

if(cljs.core.truth_(callback))
{goog.events.listen.call(null,req__4412,goog.net.EventType.COMPLETE,(function (){
return callback.call(null,req__4412);
}));
} else
{}
return req__4412.send(uri,method__4414,content__4413,pinot.util.js.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["Content-Type"],{"Content-Type":"application/clojure;charset=utf-8"})));
});
pinot.remotes.remote_callback = (function remote_callback(remote,params,callback){
return pinot.remotes.xhr.call(null,pinot.remotes.remote_uri,"﷐'post",cljs.core.ObjMap.fromObject(["﷐'remote","﷐'params"],{"﷐'remote":remote,"﷐'params":params}),(cljs.core.truth_(callback)?(function (req){
var data__4415 = req.getResponseText();

return callback.call(null,cljs.reader.read_string.call(null,data__4415));
}):null));
});
