goog.provide('pinot.util.js');
goog.require('cljs.core');
pinot.util.js.map__GT_js = (function map__GT_js(m){
var out__3844 = cljs.core.js_obj.call(null);

var G__3845__3846 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__3845__3846))
{var G__3848__3850 = cljs.core.first.call(null,G__3845__3846);
var vec__3849__3851 = G__3848__3850;
var k__3852 = cljs.core.nth.call(null,vec__3849__3851,0,null);
var v__3853 = cljs.core.nth.call(null,vec__3849__3851,1,null);
var G__3845__3854 = G__3845__3846;

var G__3848__3855 = G__3848__3850;
var G__3845__3856 = G__3845__3854;

while(true){
var vec__3857__3858 = G__3848__3855;
var k__3859 = cljs.core.nth.call(null,vec__3857__3858,0,null);
var v__3860 = cljs.core.nth.call(null,vec__3857__3858,1,null);
var G__3845__3861 = G__3845__3856;

(out__3844[cljs.core.name.call(null,k__3859)] = v__3860);
var temp__3698__auto____3862 = cljs.core.next.call(null,G__3845__3861);

if(cljs.core.truth_(temp__3698__auto____3862))
{var G__3845__3863 = temp__3698__auto____3862;

{
var G__3864 = cljs.core.first.call(null,G__3845__3863);
var G__3865 = G__3845__3863;
G__3848__3855 = G__3864;
G__3845__3856 = G__3865;
continue;
}
} else
{}
break;
}
} else
{}
return out__3844;
});
pinot.util.js.log = (function log(text){
return console.log(text);
});
pinot.util.js.as_int = (function as_int(n){
return parseInt.call(null,n);
});
