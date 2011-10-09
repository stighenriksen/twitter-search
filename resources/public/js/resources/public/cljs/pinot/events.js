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
pinot.events.match_QMARK_ = (function match_QMARK_(p__2605,init_target){
var map__2606__2607 = p__2605;
var map__2606__2608 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2606__2607))?cljs.core.apply.call(null,cljs.core.hash_map,map__2606__2607):map__2606__2607);
var pinotId__2609 = cljs.core.get.call(null,map__2606__2608,"﷐'pinotId");
var pinotGroup__2610 = cljs.core.get.call(null,map__2606__2608,"﷐'pinotGroup");
var elem__2611 = cljs.core.get.call(null,map__2606__2608,"﷐'elem");

var target__2612 = init_target;

while(true){
if(cljs.core.truth_(target__2612))
{var target_group__2613 = pinot.dom.attr.call(null,target__2612,"﷐'pinotGroup");
var target_pinot__2614 = pinot.dom.attr.call(null,target__2612,"﷐'pinotId");

if(cljs.core.truth_(cljs.core.not_EQ_.call(null,target__2612,pinot.dom.parent.call(null,pinot.events.get_body.call(null)))))
{if(cljs.core.truth_((function (){var or__3548__auto____2616 = (function (){var and__3546__auto____2615 = elem__2611;

if(cljs.core.truth_(and__3546__auto____2615))
{return cljs.core._EQ_.call(null,elem__2611,target__2612);
} else
{return and__3546__auto____2615;
}
})();

if(cljs.core.truth_(or__3548__auto____2616))
{return or__3548__auto____2616;
} else
{var or__3548__auto____2618 = (function (){var and__3546__auto____2617 = pinotGroup__2610;

if(cljs.core.truth_(and__3546__auto____2617))
{return cljs.core._EQ_.call(null,pinotGroup__2610,target_group__2613);
} else
{return and__3546__auto____2617;
}
})();

if(cljs.core.truth_(or__3548__auto____2618))
{return or__3548__auto____2618;
} else
{var and__3546__auto____2619 = pinotId__2609;

if(cljs.core.truth_(and__3546__auto____2619))
{return cljs.core._EQ_.call(null,pinotId__2609,target_pinot__2614);
} else
{return and__3546__auto____2619;
}
}
}
})()))
{return target__2612;
} else
{{
var G__2620 = pinot.dom.parent.call(null,target__2612);
target__2612 = G__2620;
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
var target__2621 = e.target;

var temp__3695__auto____2622 = pinot.events.match_QMARK_.call(null,parsed,target__2621);

if(cljs.core.truth_(temp__3695__auto____2622))
{var match__2623 = temp__3695__auto____2622;

return func.call(null,match__2623,e);
} else
{return true;
}
});
});
pinot.events.on = (function on(elem,event,func){
var ev_name__2624 = clojure.string.upper_case.call(null,cljs.core.name.call(null,event));
var event__2625 = (goog.events.EventType[ev_name__2624]);
var body_elem__2626 = pinot.events.get_body.call(null);

var G__2627__2628 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__2627__2628))
{var el__2629 = cljs.core.first.call(null,G__2627__2628);
var G__2627__2630 = G__2627__2628;

while(true){
var parsed__2631 = pinot.events.__GT_target.call(null,el__2629);

pinot.util.js.log.call(null,parsed__2631);
goog.events.listen.call(null,body_elem__2626,event__2625,pinot.events.make_listener.call(null,func,parsed__2631));
var temp__3698__auto____2632 = cljs.core.next.call(null,G__2627__2630);

if(cljs.core.truth_(temp__3698__auto____2632))
{var G__2627__2633 = temp__3698__auto____2632;

{
var G__2634 = cljs.core.first.call(null,G__2627__2633);
var G__2635 = G__2627__2633;
el__2629 = G__2634;
G__2627__2630 = G__2635;
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
