goog.provide('pinot.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('pinot.util.clj');
goog.require('pinot.util.js');
goog.require('pinot.dom');
goog.require('clojure.string');
pinot.events.body = cljs.core.atom.call(null,null);
pinot.events.get_body = (function get_body(){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.deref.call(null,pinot.events.body))))
{return cljs.core.reset_BANG_.call(null,pinot.events.body,cljs.core.first.call(null,pinot.dom.query.call(null,"body")));
} else
{return cljs.core.deref.call(null,pinot.events.body);
}
});
pinot.events.__GT_target = (function __GT_target(elem){
if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,elem)))
{return cljs.core.ObjMap.fromObject(["﷐'pinotGroup"],{"﷐'pinotGroup":pinot.dom.attr.call(null,cljs.core.first.call(null,elem.call(null)),"﷐'pinotGroup")});
} else
{if(cljs.core.truth_(pinot.dom.attr.call(null,elem,"﷐'pinotId")))
{return cljs.core.ObjMap.fromObject(["﷐'elem","﷐'pinotId"],{"﷐'elem":elem,"﷐'pinotId":pinot.dom.attr.call(null,elem,"﷐'pinotId")});
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.ObjMap.fromObject(["﷐'elem"],{"﷐'elem":elem});
} else
{return null;
}
}
}
});
pinot.events.match_QMARK_ = (function match_QMARK_(p__2551,init_target){
var map__2552__2553 = p__2551;
var map__2552__2554 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2552__2553))?cljs.core.apply.call(null,cljs.core.hash_map,map__2552__2553):map__2552__2553);
var pinotId__2555 = cljs.core.get.call(null,map__2552__2554,"﷐'pinotId");
var pinotGroup__2556 = cljs.core.get.call(null,map__2552__2554,"﷐'pinotGroup");
var elem__2557 = cljs.core.get.call(null,map__2552__2554,"﷐'elem");

var target__2558 = init_target;

while(true){
if(cljs.core.truth_(target__2558))
{var target_group__2559 = pinot.dom.attr.call(null,target__2558,"﷐'pinotGroup");
var target_pinot__2560 = pinot.dom.attr.call(null,target__2558,"﷐'pinotId");

if(cljs.core.truth_(cljs.core.not_EQ_.call(null,target__2558,pinot.dom.parent.call(null,pinot.events.get_body.call(null)))))
{if(cljs.core.truth_((function (){var or__3548__auto____2562 = (function (){var and__3546__auto____2561 = elem__2557;

if(cljs.core.truth_(and__3546__auto____2561))
{return cljs.core._EQ_.call(null,elem__2557,target__2558);
} else
{return and__3546__auto____2561;
}
})();

if(cljs.core.truth_(or__3548__auto____2562))
{return or__3548__auto____2562;
} else
{var or__3548__auto____2564 = (function (){var and__3546__auto____2563 = pinotGroup__2556;

if(cljs.core.truth_(and__3546__auto____2563))
{return cljs.core._EQ_.call(null,pinotGroup__2556,target_group__2559);
} else
{return and__3546__auto____2563;
}
})();

if(cljs.core.truth_(or__3548__auto____2564))
{return or__3548__auto____2564;
} else
{var and__3546__auto____2565 = pinotId__2555;

if(cljs.core.truth_(and__3546__auto____2565))
{return cljs.core._EQ_.call(null,pinotId__2555,target_pinot__2560);
} else
{return and__3546__auto____2565;
}
}
}
})()))
{return target__2558;
} else
{{
var G__2566 = pinot.dom.parent.call(null,target__2558);
target__2558 = G__2566;
continue;
}
}
} else
{return null;
}
} else
{return null;
}
break;
}
});
pinot.events.make_listener = (function make_listener(func,parsed){
return (function (e){
var target__2567 = e.target;

var temp__3695__auto____2568 = pinot.events.match_QMARK_.call(null,parsed,target__2567);

if(cljs.core.truth_(temp__3695__auto____2568))
{var match__2569 = temp__3695__auto____2568;

return func.call(null,match__2569,e);
} else
{return true;
}
});
});
pinot.events.on = (function on(elem,event,func){
var ev_name__2570 = clojure.string.upper_case.call(null,cljs.core.name.call(null,event));
var event__2571 = (goog.events.EventType[ev_name__2570]);
var body_elem__2572 = pinot.events.get_body.call(null);

var G__2573__2574 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__2573__2574))
{var el__2575 = cljs.core.first.call(null,G__2573__2574);
var G__2573__2576 = G__2573__2574;

while(true){
var parsed__2577 = pinot.events.__GT_target.call(null,el__2575);

pinot.util.js.log.call(null,parsed__2577);
goog.events.listen.call(null,body_elem__2572,event__2571,pinot.events.make_listener.call(null,func,parsed__2577));
var temp__3698__auto____2578 = cljs.core.next.call(null,G__2573__2576);

if(cljs.core.truth_(temp__3698__auto____2578))
{var G__2573__2579 = temp__3698__auto____2578;

{
var G__2580 = cljs.core.first.call(null,G__2573__2579);
var G__2581 = G__2573__2579;
el__2575 = G__2580;
G__2573__2576 = G__2581;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
});
pinot.events.prevent = (function prevent(e){
return e.preventDefault();
});
