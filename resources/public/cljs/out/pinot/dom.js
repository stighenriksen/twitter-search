goog.provide('pinot.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('goog.dom.forms');
goog.require('pinot.util.clj');
goog.require('pinot.util.js');
pinot.dom.pinot_group = (function pinot_group(func){
if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,func)))
{var elem__2308 = func.call(null);

return pinot.dom.attr.call(null,cljs.core.first.call(null,elem__2308),"﷐'pinotGroup");
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
pinot.dom.css = (function() { 
var css__delegate = function (elem,k,p__2309){
var vec__2310__2311 = p__2309;
var v__2312 = cljs.core.nth.call(null,vec__2310__2311,0,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,k)))
{var G__2313__2314 = cljs.core.seq.call(null,k);

if(cljs.core.truth_(G__2313__2314))
{var G__2316__2318 = cljs.core.first.call(null,G__2313__2314);
var vec__2317__2319 = G__2316__2318;
var prop__2320 = cljs.core.nth.call(null,vec__2317__2319,0,null);
var value__2321 = cljs.core.nth.call(null,vec__2317__2319,1,null);
var G__2313__2322 = G__2313__2314;

var G__2316__2323 = G__2316__2318;
var G__2313__2324 = G__2313__2322;

while(true){
var vec__2325__2326 = G__2316__2323;
var prop__2327 = cljs.core.nth.call(null,vec__2325__2326,0,null);
var value__2328 = cljs.core.nth.call(null,vec__2325__2326,1,null);
var G__2313__2329 = G__2313__2324;

css.call(null,elem,prop__2327,value__2328);
var temp__3698__auto____2330 = cljs.core.next.call(null,G__2313__2329);

if(cljs.core.truth_(temp__3698__auto____2330))
{var G__2313__2331 = temp__3698__auto____2330;

{
var G__2338 = cljs.core.first.call(null,G__2313__2331);
var G__2339 = G__2313__2331;
G__2316__2323 = G__2338;
G__2313__2324 = G__2339;
continue;
}
} else
{}
break;
}
} else
{}
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,v__2312)))
{goog.style.getStyle.call(null,elem,cljs.core.name.call(null,k));
} else
{if(cljs.core.truth_("﷐'else"))
{var G__2332__2333 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__2332__2333))
{var el__2334 = cljs.core.first.call(null,G__2332__2333);
var G__2332__2335 = G__2332__2333;

while(true){
goog.style.setStyle.call(null,el__2334,cljs.core.name.call(null,k),cljs.core.name.call(null,v__2312));
var temp__3698__auto____2336 = cljs.core.next.call(null,G__2332__2335);

if(cljs.core.truth_(temp__3698__auto____2336))
{var G__2332__2337 = temp__3698__auto____2336;

{
var G__2340 = cljs.core.first.call(null,G__2332__2337);
var G__2341 = G__2332__2337;
el__2334 = G__2340;
G__2332__2335 = G__2341;
continue;
}
} else
{}
break;
}
} else
{}
} else
{}
}
}
return elem;
};
var css = function (elem,k,var_args){
var p__2309 = null;
if (goog.isDef(var_args)) {
  p__2309 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return css__delegate.call(this, elem, k, p__2309);
};
css.cljs$lang$maxFixedArity = 2;
css.cljs$lang$applyTo = (function (arglist__2342){
var elem = cljs.core.first(arglist__2342);
var k = cljs.core.first(cljs.core.next(arglist__2342));
var p__2309 = cljs.core.rest(cljs.core.next(arglist__2342));
return css__delegate.call(this, elem, k, p__2309);
});
return css;
})()
;
pinot.dom.attr = (function() {
var attr = null;
var attr__2368 = (function (elem,attrs){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__2343__2344 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__2343__2344))
{var G__2346__2348 = cljs.core.first.call(null,G__2343__2344);
var vec__2347__2349 = G__2346__2348;
var k__2350 = cljs.core.nth.call(null,vec__2347__2349,0,null);
var v__2351 = cljs.core.nth.call(null,vec__2347__2349,1,null);
var G__2343__2352 = G__2343__2344;

var G__2346__2353 = G__2346__2348;
var G__2343__2354 = G__2343__2352;

while(true){
var vec__2355__2356 = G__2346__2353;
var k__2357 = cljs.core.nth.call(null,vec__2355__2356,0,null);
var v__2358 = cljs.core.nth.call(null,vec__2355__2356,1,null);
var G__2343__2359 = G__2343__2354;

attr.call(null,elem,k__2357,v__2358);
var temp__3698__auto____2360 = cljs.core.next.call(null,G__2343__2359);

if(cljs.core.truth_(temp__3698__auto____2360))
{var G__2343__2361 = temp__3698__auto____2360;

{
var G__2371 = cljs.core.first.call(null,G__2343__2361);
var G__2372 = G__2343__2361;
G__2346__2353 = G__2371;
G__2343__2354 = G__2372;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
});
var attr__2369 = (function (elem,k,v){
var G__2362__2363 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__2362__2363))
{var el__2364 = cljs.core.first.call(null,G__2362__2363);
var G__2362__2365 = G__2362__2363;

while(true){
el__2364.setAttribute(cljs.core.name.call(null,k),v);
var temp__3698__auto____2366 = cljs.core.next.call(null,G__2362__2365);

if(cljs.core.truth_(temp__3698__auto____2366))
{var G__2362__2367 = temp__3698__auto____2366;

{
var G__2373 = cljs.core.first.call(null,G__2362__2367);
var G__2374 = G__2362__2367;
el__2364 = G__2373;
G__2362__2365 = G__2374;
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
attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return attr__2368.call(this,elem,k);
case  3 :
return attr__2369.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return attr;
})()
;
pinot.dom.text = (function text(elem,v){
var G__2375__2376 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__2375__2376))
{var el__2377 = cljs.core.first.call(null,G__2375__2376);
var G__2375__2378 = G__2375__2376;

while(true){
goog.dom.setTextContent.call(null,el__2377,v);
var temp__3698__auto____2379 = cljs.core.next.call(null,G__2375__2378);

if(cljs.core.truth_(temp__3698__auto____2379))
{var G__2375__2380 = temp__3698__auto____2379;

{
var G__2381 = cljs.core.first.call(null,G__2375__2380);
var G__2382 = G__2375__2380;
el__2377 = G__2381;
G__2375__2378 = G__2382;
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
/**
* @param {...*} var_args
*/
pinot.dom.val = (function() { 
var val__delegate = function (elem,p__2383){
var vec__2384__2385 = p__2383;
var v__2386 = cljs.core.nth.call(null,vec__2384__2385,0,null);

var elem__2387 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,elem))?cljs.core.first.call(null,elem):elem);

if(cljs.core.truth_(v__2386))
{goog.dom.forms.setValue.call(null,elem__2387,v__2386);
return elem__2387;
} else
{return goog.dom.forms.getValue.call(null,elem__2387);
}
};
var val = function (elem,var_args){
var p__2383 = null;
if (goog.isDef(var_args)) {
  p__2383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, elem, p__2383);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__2388){
var elem = cljs.core.first(arglist__2388);
var p__2383 = cljs.core.rest(arglist__2388);
return val__delegate.call(this, elem, p__2383);
});
return val;
})()
;
pinot.dom.parent = (function parent(elem){
return elem.parentNode;
});
pinot.dom.is_dom_QMARK_ = (function is_dom_QMARK_(elem){
return goog.dom.isNodeLike.call(null,elem);
});
pinot.dom.dom_clone = (function dom_clone(elem){
return elem.cloneNode(true);
});
pinot.dom.append = (function append(elem,html){
var G__2389__2391 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__2389__2391))
{var el__2392 = cljs.core.first.call(null,G__2389__2391);
var G__2389__2393 = G__2389__2391;

while(true){
var G__2390__2394 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,html));

if(cljs.core.truth_(G__2390__2394))
{var tag__2395 = cljs.core.first.call(null,G__2390__2394);
var G__2390__2396 = G__2390__2394;

while(true){
goog.dom.appendChild.call(null,el__2392,pinot.dom.dom_clone.call(null,tag__2395));
var temp__3698__auto____2397 = cljs.core.next.call(null,G__2390__2396);

if(cljs.core.truth_(temp__3698__auto____2397))
{var G__2390__2398 = temp__3698__auto____2397;

{
var G__2401 = cljs.core.first.call(null,G__2390__2398);
var G__2402 = G__2390__2398;
tag__2395 = G__2401;
G__2390__2396 = G__2402;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____2399 = cljs.core.next.call(null,G__2389__2393);

if(cljs.core.truth_(temp__3698__auto____2399))
{var G__2389__2400 = temp__3698__auto____2399;

{
var G__2403 = cljs.core.first.call(null,G__2389__2400);
var G__2404 = G__2389__2400;
el__2392 = G__2403;
G__2389__2393 = G__2404;
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
pinot.dom.unappend = (function unappend(elem){
var G__2405__2406 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__2405__2406))
{var elem__2407 = cljs.core.first.call(null,G__2405__2406);
var G__2405__2408 = G__2405__2406;

while(true){
goog.dom.removeNode.call(null,elem__2407);
var temp__3698__auto____2409 = cljs.core.next.call(null,G__2405__2408);

if(cljs.core.truth_(temp__3698__auto____2409))
{var G__2405__2410 = temp__3698__auto____2409;

{
var G__2411 = cljs.core.first.call(null,G__2405__2410);
var G__2412 = G__2405__2410;
elem__2407 = G__2411;
G__2405__2408 = G__2412;
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
pinot.dom.nodelist__GT_coll = (function nodelist__GT_coll(nl){
var iter__356__auto____2417 = (function iter__2413(s__2414){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2414__2415 = s__2414;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2414__2415)))
{var x__2416 = cljs.core.first.call(null,s__2414__2415);

return cljs.core.cons.call(null,(nl[x__2416]),iter__2413.call(null,cljs.core.rest.call(null,s__2414__2415)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____2417.call(null,cljs.core.range.call(null,0,nl.length));
});
pinot.dom.query = (function query(q){
var q__2418 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,q))?cljs.core.str.call(null,"[pinotGroup$=",pinot.dom.pinot_group.call(null,q),"]"):q);
var results__2419 = goog.dom.query.call(null,q__2418);

return pinot.dom.nodelist__GT_coll.call(null,results__2419);
});
