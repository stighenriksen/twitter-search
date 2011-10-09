goog.provide('pinot.util.js');
goog.require('cljs.core');
pinot.util.js.map__GT_js = (function map__GT_js(m){
var out__3974 = cljs.core.js_obj.call(null);

var G__3975__3976 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__3975__3976))
{var G__3978__3980 = cljs.core.first.call(null,G__3975__3976);
var vec__3979__3981 = G__3978__3980;
var k__3982 = cljs.core.nth.call(null,vec__3979__3981,0,null);
var v__3983 = cljs.core.nth.call(null,vec__3979__3981,1,null);
var G__3975__3984 = G__3975__3976;

var G__3978__3985 = G__3978__3980;
var G__3975__3986 = G__3975__3984;

while(true){
var vec__3987__3988 = G__3978__3985;
var k__3989 = cljs.core.nth.call(null,vec__3987__3988,0,null);
var v__3990 = cljs.core.nth.call(null,vec__3987__3988,1,null);
var G__3975__3991 = G__3975__3986;

(out__3974[cljs.core.name.call(null,k__3989)] = v__3990);
var temp__3698__auto____3992 = cljs.core.next.call(null,G__3975__3991);

if(cljs.core.truth_(temp__3698__auto____3992))
{var G__3975__3993 = temp__3698__auto____3992;

{
var G__3994 = cljs.core.first.call(null,G__3975__3993);
var G__3995 = G__3975__3993;
G__3978__3985 = G__3994;
G__3975__3986 = G__3995;
continue;
}
} else
{}
break;
}
} else
{}
return out__3974;
});
pinot.util.js.log = (function log(text){
return console.log(text);
});
pinot.util.js.as_int = (function as_int(n){
return parseInt.call(null,n);
});
