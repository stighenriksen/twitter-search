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
pinot.events.match_QMARK_ = (function match_QMARK_(p__5188,init_target){
var map__5189__5190 = p__5188;
var map__5189__5191 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5189__5190))?cljs.core.apply.call(null,cljs.core.hash_map,map__5189__5190):map__5189__5190);
var pinotId__5192 = cljs.core.get.call(null,map__5189__5191,"﷐'pinotId");
var pinotGroup__5193 = cljs.core.get.call(null,map__5189__5191,"﷐'pinotGroup");
var elem__5194 = cljs.core.get.call(null,map__5189__5191,"﷐'elem");

var target__5195 = init_target;

while(true){
if(cljs.core.truth_(target__5195))
{var target_group__5196 = pinot.dom.attr.call(null,target__5195,"﷐'pinotGroup");
var target_pinot__5197 = pinot.dom.attr.call(null,target__5195,"﷐'pinotId");

if(cljs.core.truth_(cljs.core.not_EQ_.call(null,target__5195,pinot.dom.parent.call(null,pinot.events.get_body.call(null)))))
{if(cljs.core.truth_((function (){var or__3548__auto____5199 = (function (){var and__3546__auto____5198 = elem__5194;

if(cljs.core.truth_(and__3546__auto____5198))
{return cljs.core._EQ_.call(null,elem__5194,target__5195);
} else
{return and__3546__auto____5198;
}
})();

if(cljs.core.truth_(or__3548__auto____5199))
{return or__3548__auto____5199;
} else
{var or__3548__auto____5201 = (function (){var and__3546__auto____5200 = pinotGroup__5193;

if(cljs.core.truth_(and__3546__auto____5200))
{return cljs.core._EQ_.call(null,pinotGroup__5193,target_group__5196);
} else
{return and__3546__auto____5200;
}
})();

if(cljs.core.truth_(or__3548__auto____5201))
{return or__3548__auto____5201;
} else
{var and__3546__auto____5202 = pinotId__5192;

if(cljs.core.truth_(and__3546__auto____5202))
{return cljs.core._EQ_.call(null,pinotId__5192,target_pinot__5197);
} else
{return and__3546__auto____5202;
}
}
}
})()))
{return target__5195;
} else
{{
var G__5203 = pinot.dom.parent.call(null,target__5195);
target__5195 = G__5203;
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
var target__5204 = e.target;

var temp__3695__auto____5205 = pinot.events.match_QMARK_.call(null,parsed,target__5204);

if(cljs.core.truth_(temp__3695__auto____5205))
{var match__5206 = temp__3695__auto____5205;

return func.call(null,match__5206,e);
} else
{return true;
}
});
});
pinot.events.on = (function on(elem,event,func){
var ev_name__5207 = clojure.string.upper_case.call(null,cljs.core.name.call(null,event));
var event__5208 = (goog.events.EventType[ev_name__5207]);
var body_elem__5209 = pinot.events.get_body.call(null);

var G__5210__5211 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__5210__5211))
{var el__5212 = cljs.core.first.call(null,G__5210__5211);
var G__5210__5213 = G__5210__5211;

while(true){
var parsed__5214 = pinot.events.__GT_target.call(null,el__5212);

pinot.util.js.log.call(null,parsed__5214);
goog.events.listen.call(null,body_elem__5209,event__5208,pinot.events.make_listener.call(null,func,parsed__5214));
var temp__3698__auto____5215 = cljs.core.next.call(null,G__5210__5213);

if(cljs.core.truth_(temp__3698__auto____5215))
{var G__5210__5216 = temp__3698__auto____5215;

{
var G__5217 = cljs.core.first.call(null,G__5210__5216);
var G__5218 = G__5210__5216;
el__5212 = G__5217;
G__5210__5213 = G__5218;
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
