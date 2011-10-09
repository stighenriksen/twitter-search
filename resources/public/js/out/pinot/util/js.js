goog.provide('pinot.util.js');
goog.require('cljs.core');
pinot.util.js.map__GT_js = (function map__GT_js(m){
var out__2469 = cljs.core.js_obj.call(null);

var G__2470__2471 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__2470__2471))
{var G__2473__2475 = cljs.core.first.call(null,G__2470__2471);
var vec__2474__2476 = G__2473__2475;
var k__2477 = cljs.core.nth.call(null,vec__2474__2476,0,null);
var v__2478 = cljs.core.nth.call(null,vec__2474__2476,1,null);
var G__2470__2479 = G__2470__2471;

var G__2473__2480 = G__2473__2475;
var G__2470__2481 = G__2470__2479;

while(true){
var vec__2482__2483 = G__2473__2480;
var k__2484 = cljs.core.nth.call(null,vec__2482__2483,0,null);
var v__2485 = cljs.core.nth.call(null,vec__2482__2483,1,null);
var G__2470__2486 = G__2470__2481;

(out__2469[cljs.core.name.call(null,k__2484)] = v__2485);
var temp__3698__auto____2487 = cljs.core.next.call(null,G__2470__2486);

if(cljs.core.truth_(temp__3698__auto____2487))
{var G__2470__2488 = temp__3698__auto____2487;

{
var G__2489 = cljs.core.first.call(null,G__2470__2488);
var G__2490 = G__2470__2488;
G__2473__2480 = G__2489;
G__2470__2481 = G__2490;
continue;
}
} else
{}
break;
}
} else
{}
return out__2469;
});
pinot.util.js.log = (function log(text){
return console.log(text);
});
pinot.util.js.as_int = (function as_int(n){
return parseInt.call(null,n);
});
