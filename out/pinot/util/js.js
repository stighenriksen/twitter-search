goog.provide('pinot.util.js');
goog.require('cljs.core');
pinot.util.js.map__GT_js = (function map__GT_js(m){
var out__3950 = cljs.core.js_obj.call(null);

var G__3951__3952 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__3951__3952))
{var G__3954__3956 = cljs.core.first.call(null,G__3951__3952);
var vec__3955__3957 = G__3954__3956;
var k__3958 = cljs.core.nth.call(null,vec__3955__3957,0,null);
var v__3959 = cljs.core.nth.call(null,vec__3955__3957,1,null);
var G__3951__3960 = G__3951__3952;

var G__3954__3961 = G__3954__3956;
var G__3951__3962 = G__3951__3960;

while(true){
var vec__3963__3964 = G__3954__3961;
var k__3965 = cljs.core.nth.call(null,vec__3963__3964,0,null);
var v__3966 = cljs.core.nth.call(null,vec__3963__3964,1,null);
var G__3951__3967 = G__3951__3962;

(out__3950[cljs.core.name.call(null,k__3965)] = v__3966);
var temp__3698__auto____3968 = cljs.core.next.call(null,G__3951__3967);

if(cljs.core.truth_(temp__3698__auto____3968))
{var G__3951__3969 = temp__3698__auto____3968;

{
var G__3970 = cljs.core.first.call(null,G__3951__3969);
var G__3971 = G__3951__3969;
G__3954__3961 = G__3970;
G__3951__3962 = G__3971;
continue;
}
} else
{}
break;
}
} else
{}
return out__3950;
});
pinot.util.js.log = (function log(text){
return console.log(text);
});
pinot.util.js.as_int = (function as_int(n){
return parseInt.call(null,n);
});
