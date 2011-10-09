goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');
clojure.browser.event.EventType = {};
clojure.browser.event.event_types = (function event_types(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4390 = this$;

if(cljs.core.truth_(and__3546__auto____4390))
{return this$.clojure$browser$event$EventType$event_types;
} else
{return and__3546__auto____4390;
}
})()))
{return this$.clojure$browser$event$EventType$event_types(this$);
} else
{return (function (){var or__3548__auto____4391 = (clojure.browser.event.event_types[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4391))
{return or__3548__auto____4391;
} else
{var or__3548__auto____4392 = (clojure.browser.event.event_types["_"]);

if(cljs.core.truth_(or__3548__auto____4392))
{return or__3548__auto____4392;
} else
{throw cljs.core.missing_protocol.call(null,"EventType.event-types",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.clojure$browser$event$EventType$ = true;
Element.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4393){
var vec__4394__4395 = p__4393;
var k__4396 = cljs.core.nth.call(null,vec__4394__4395,0,null);
var v__4397 = cljs.core.nth.call(null,vec__4394__4395,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4396.toLowerCase()),v__4397]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
goog.events.EventTarget.prototype.clojure$browser$event$EventType$ = true;
goog.events.EventTarget.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4398){
var vec__4399__4400 = p__4398;
var k__4401 = cljs.core.nth.call(null,vec__4399__4400,0,null);
var v__4402 = cljs.core.nth.call(null,vec__4399__4400,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4401.toLowerCase()),v__4402]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
clojure.browser.event.listen = (function() {
var listen = null;
var listen__4403 = (function (src,type,fn){
return listen.call(null,src,type,fn,false);
});
var listen__4404 = (function (src,type,fn,capture_QMARK_){
return goog.events.listen.call(null,src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case  3 :
return listen__4403.call(this,src,type,fn);
case  4 :
return listen__4404.call(this,src,type,fn,capture_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return listen;
})()
;
clojure.browser.event.listen_once = (function() {
var listen_once = null;
var listen_once__4406 = (function (src,type,fn){
return listen_once.call(null,src,type,fn,false);
});
var listen_once__4407 = (function (src,type,fn,capture_QMARK_){
return goog.events.listenOnce.call(null,src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case  3 :
return listen_once__4406.call(this,src,type,fn);
case  4 :
return listen_once__4407.call(this,src,type,fn,capture_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return listen_once;
})()
;
clojure.browser.event.unlisten = (function() {
var unlisten = null;
var unlisten__4409 = (function (src,type,fn){
return unlisten.call(null,src,type,fn,false);
});
var unlisten__4410 = (function (src,type,fn,capture_QMARK_){
return goog.events.unlisten.call(null,src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case  3 :
return unlisten__4409.call(this,src,type,fn);
case  4 :
return unlisten__4410.call(this,src,type,fn,capture_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return unlisten;
})()
;
clojure.browser.event.unlisten_by_key = (function unlisten_by_key(key){
return goog.events.unlistenByKey.call(null,key);
});
clojure.browser.event.dispatch_event = (function dispatch_event(src,event){
return goog.events.dispatchEvent.call(null,src,event);
});
clojure.browser.event.expose = (function expose(e){
return goog.events.expose.call(null,e);
});
clojure.browser.event.fire_listeners = (function fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function total_listener_count(){
return goog.events.getTotalListenerCount.call(null);
});
clojure.browser.event.get_listener = (function get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function remove_all(opt_obj,opt_type,opt_capt){
return null;
});
