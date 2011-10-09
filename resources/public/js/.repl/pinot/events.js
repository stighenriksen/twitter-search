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
pinot.events.match_QMARK_ = (function match_QMARK_(p__2594,init_target){
var map__2595__2596 = p__2594;
var map__2595__2597 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2595__2596))?cljs.core.apply.call(null,cljs.core.hash_map,map__2595__2596):map__2595__2596);
var pinotId__2598 = cljs.core.get.call(null,map__2595__2597,"﷐'pinotId");
var pinotGroup__2599 = cljs.core.get.call(null,map__2595__2597,"﷐'pinotGroup");
var elem__2600 = cljs.core.get.call(null,map__2595__2597,"﷐'elem");

var target__2601 = init_target;

while(true){
if(cljs.core.truth_(target__2601))
{var target_group__2602 = pinot.dom.attr.call(null,target__2601,"﷐'pinotGroup");
var target_pinot__2603 = pinot.dom.attr.call(null,target__2601,"﷐'pinotId");

if(cljs.core.truth_(cljs.core.not_EQ_.call(null,target__2601,pinot.dom.parent.call(null,pinot.events.get_body.call(null)))))
{if(cljs.core.truth_((function (){var or__3548__auto____2605 = (function (){var and__3546__auto____2604 = elem__2600;

if(cljs.core.truth_(and__3546__auto____2604))
{return cljs.core._EQ_.call(null,elem__2600,target__2601);
} else
{return and__3546__auto____2604;
}
})();

if(cljs.core.truth_(or__3548__auto____2605))
{return or__3548__auto____2605;
} else
{var or__3548__auto____2607 = (function (){var and__3546__auto____2606 = pinotGroup__2599;

if(cljs.core.truth_(and__3546__auto____2606))
{return cljs.core._EQ_.call(null,pinotGroup__2599,target_group__2602);
} else
{return and__3546__auto____2606;
}
})();

if(cljs.core.truth_(or__3548__auto____2607))
{return or__3548__auto____2607;
} else
{var and__3546__auto____2608 = pinotId__2598;

if(cljs.core.truth_(and__3546__auto____2608))
{return cljs.core._EQ_.call(null,pinotId__2598,target_pinot__2603);
} else
{return and__3546__auto____2608;
}
}
}
})()))
{return target__2601;
} else
{{
var G__2609 = pinot.dom.parent.call(null,target__2601);
target__2601 = G__2609;
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
var target__2610 = e.target;

var temp__3695__auto____2611 = pinot.events.match_QMARK_.call(null,parsed,target__2610);

if(cljs.core.truth_(temp__3695__auto____2611))
{var match__2612 = temp__3695__auto____2611;

return func.call(null,match__2612,e);
} else
{return true;
}
});
});
pinot.events.on = (function on(elem,event,func){
var ev_name__2613 = clojure.string.upper_case.call(null,cljs.core.name.call(null,event));
var event__2614 = (goog.events.EventType[ev_name__2613]);
var body_elem__2615 = pinot.events.get_body.call(null);

var G__2616__2617 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__2616__2617))
{var el__2618 = cljs.core.first.call(null,G__2616__2617);
var G__2616__2619 = G__2616__2617;

while(true){
var parsed__2620 = pinot.events.__GT_target.call(null,el__2618);

pinot.util.js.log.call(null,parsed__2620);
goog.events.listen.call(null,body_elem__2615,event__2614,pinot.events.make_listener.call(null,func,parsed__2620));
var temp__3698__auto____2621 = cljs.core.next.call(null,G__2616__2619);

if(cljs.core.truth_(temp__3698__auto____2621))
{var G__2616__2622 = temp__3698__auto____2621;

{
var G__2623 = cljs.core.first.call(null,G__2616__2622);
var G__2624 = G__2616__2622;
el__2618 = G__2623;
G__2616__2619 = G__2624;
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
