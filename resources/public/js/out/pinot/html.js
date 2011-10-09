goog.provide('pinot.html');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('pinot.dom');
goog.require('clojure.string');
goog.require('pinot.util.clj');
goog.require('pinot.util.js');
pinot.html.xmlns = cljs.core.ObjMap.fromObject(["﷐'xhtml","﷐'svg"],{"﷐'xhtml":"http://www.w3.org/1999/xhtml","﷐'svg":"http://www.w3.org/2000/svg"});
pinot.html.elem_id = cljs.core.atom.call(null,0);
pinot.html.group_id = cljs.core.atom.call(null,0);
pinot.html.as_content = (function as_content(parent,content){
var G__2420__2421 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__2420__2421))
{var c__2422 = cljs.core.first.call(null,G__2420__2421);
var G__2420__2423 = G__2420__2421;

while(true){
var child__2424 = (cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c__2422))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__2422))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__2422))?goog.dom.createTextNode.call(null,c__2422):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__2422))?pinot.html.elem_factory.call(null,c__2422):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__2422))?as_content.call(null,parent,c__2422):(cljs.core.truth_(c__2422.nodeName)?c__2422:null))))));

if(cljs.core.truth_(child__2424))
{goog.dom.appendChild.call(null,parent,child__2424);
} else
{}
var temp__3698__auto____2425 = cljs.core.next.call(null,G__2420__2423);

if(cljs.core.truth_(temp__3698__auto____2425))
{var G__2420__2426 = temp__3698__auto____2425;

{
var G__2427 = cljs.core.first.call(null,G__2420__2426);
var G__2428 = G__2420__2426;
c__2422 = G__2427;
G__2420__2423 = G__2428;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
pinot.html.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
pinot.html.normalize_element = (function normalize_element(p__2430){
var vec__2431__2432 = p__2430;
var tag__2433 = cljs.core.nth.call(null,vec__2431__2432,0,null);
var content__2434 = cljs.core.nthnext.call(null,vec__2431__2432,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____2435 = cljs.core.keyword_QMARK_.call(null,tag__2433);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{var or__3548__auto____2436 = cljs.core.symbol_QMARK_.call(null,tag__2433);

if(cljs.core.truth_(or__3548__auto____2436))
{return or__3548__auto____2436;
} else
{return cljs.core.string_QMARK_.call(null,tag__2433);
}
}
})())))
{throw cljs.core.str.call(null,tag__2433," is not a valid tag name.");
} else
{}
var vec__2437__2439 = cljs.core.re_matches.call(null,pinot.html.re_tag,cljs.core.name.call(null,tag__2433));
var ___2440 = cljs.core.nth.call(null,vec__2437__2439,0,null);
var tag__2441 = cljs.core.nth.call(null,vec__2437__2439,1,null);
var id__2442 = cljs.core.nth.call(null,vec__2437__2439,2,null);
var class$__2443 = cljs.core.nth.call(null,vec__2437__2439,3,null);
var vec__2438__2450 = (function (){var vec__2444__2445 = clojure.string.split.call(null,tag__2441,/:/);
var nsp__2446 = cljs.core.nth.call(null,vec__2444__2445,0,null);
var t__2447 = cljs.core.nth.call(null,vec__2444__2445,1,null);
var ns_xmlns__2448 = pinot.html.xmlns.call(null,cljs.core.keyword.call(null,nsp__2446));

if(cljs.core.truth_(t__2447))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____2449 = ns_xmlns__2448;

if(cljs.core.truth_(or__3548__auto____2449))
{return or__3548__auto____2449;
} else
{return nsp__2446;
}
})(),t__2447]);
} else
{return cljs.core.Vector.fromArray(["﷐'xhtml".call(null,pinot.html.xmlns),nsp__2446]);
}
})();
var nsp__2451 = cljs.core.nth.call(null,vec__2438__2450,0,null);
var tag__2452 = cljs.core.nth.call(null,vec__2438__2450,1,null);
var tag_attrs__2454 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__2429_SHARP_){
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.second.call(null,p1__2429_SHARP_)));
}),cljs.core.ObjMap.fromObject(["﷐'id","﷐'class"],{"﷐'id":(function (){var or__3548__auto____2453 = id__2442;

if(cljs.core.truth_(or__3548__auto____2453))
{return or__3548__auto____2453;
} else
{return null;
}
})(),"﷐'class":(cljs.core.truth_(class$__2443)?clojure.string.replace.call(null,class$__2443,/\./," "):null)})));
var map_attrs__2455 = cljs.core.first.call(null,content__2434);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__2455)))
{return cljs.core.Vector.fromArray([nsp__2451,tag__2452,cljs.core.merge.call(null,tag_attrs__2454,map_attrs__2455),cljs.core.next.call(null,content__2434)]);
} else
{return cljs.core.Vector.fromArray([nsp__2451,tag__2452,tag_attrs__2454,content__2434]);
}
});
pinot.html.parse_content = (function parse_content(elem,content){
var attrs__2456 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__2456)))
{pinot.dom.attr.call(null,elem,attrs__2456);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
pinot.html.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
pinot.html.elem_factory = (function elem_factory(tag_def){
var vec__2457__2458 = pinot.html.normalize_element.call(null,tag_def);
var nsp__2459 = cljs.core.nth.call(null,vec__2457__2458,0,null);
var tag__2460 = cljs.core.nth.call(null,vec__2457__2458,1,null);
var attrs__2461 = cljs.core.nth.call(null,vec__2457__2458,2,null);
var content__2462 = cljs.core.nth.call(null,vec__2457__2458,3,null);
var elem__2463 = pinot.html.create_elem.call(null,nsp__2459,tag__2460);

pinot.dom.attr.call(null,elem__2463,cljs.core.merge.call(null,attrs__2461,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":cljs.core.swap_BANG_.call(null,pinot.html.elem_id,cljs.core.inc)})));
pinot.html.as_content.call(null,elem__2463,content__2462);
return elem__2463;
});
/**
* @param {...*} var_args
*/
pinot.html.html = (function() { 
var html__delegate = function (tags){
return cljs.core.map.call(null,pinot.html.elem_factory,tags);
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__2464){
var tags = cljs.core.seq( arglist__2464 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
