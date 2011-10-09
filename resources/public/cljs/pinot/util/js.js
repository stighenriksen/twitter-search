goog.provide('pinot.util.js');
goog.require('cljs.core');
pinot.util.js.map__GT_js = (function map__GT_js(m){
var out__3989 = cljs.core.js_obj.call(null);

var G__3990__3991 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__3990__3991))
{var G__3993__3995 = cljs.core.first.call(null,G__3990__3991);
var vec__3994__3996 = G__3993__3995;
var k__3997 = cljs.core.nth.call(null,vec__3994__3996,0,null);
var v__3998 = cljs.core.nth.call(null,vec__3994__3996,1,null);
var G__3990__3999 = G__3990__3991;

var G__3993__4000 = G__3993__3995;
var G__3990__4001 = G__3990__3999;

while(true){
var vec__4002__4003 = G__3993__4000;
var k__4004 = cljs.core.nth.call(null,vec__4002__4003,0,null);
var v__4005 = cljs.core.nth.call(null,vec__4002__4003,1,null);
var G__3990__4006 = G__3990__4001;

(out__3989[cljs.core.name.call(null,k__4004)] = v__4005);
var temp__3698__auto____4007 = cljs.core.next.call(null,G__3990__4006);

if(cljs.core.truth_(temp__3698__auto____4007))
{var G__3990__4008 = temp__3698__auto____4007;

{
var G__4009 = cljs.core.first.call(null,G__3990__4008);
var G__4010 = G__3990__4008;
G__3993__4000 = G__4009;
G__3990__4001 = G__4010;
continue;
}
} else
{}
break;
}
} else
{}
return out__3989;
});
pinot.util.js.log = (function log(text){
return console.log(text);
});
pinot.util.js.as_int = (function as_int(n){
return parseInt.call(null,n);
});
