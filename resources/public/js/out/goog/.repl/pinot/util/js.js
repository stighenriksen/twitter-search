goog.provide('pinot.util.js');
goog.require('cljs.core');
pinot.util.js.map__GT_js = (function map__GT_js(m){
var out__4929 = cljs.core.js_obj.call(null);

var G__4930__4931 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__4930__4931))
{var G__4933__4935 = cljs.core.first.call(null,G__4930__4931);
var vec__4934__4936 = G__4933__4935;
var k__4937 = cljs.core.nth.call(null,vec__4934__4936,0,null);
var v__4938 = cljs.core.nth.call(null,vec__4934__4936,1,null);
var G__4930__4939 = G__4930__4931;

var G__4933__4940 = G__4933__4935;
var G__4930__4941 = G__4930__4939;

while(true){
var vec__4942__4943 = G__4933__4940;
var k__4944 = cljs.core.nth.call(null,vec__4942__4943,0,null);
var v__4945 = cljs.core.nth.call(null,vec__4942__4943,1,null);
var G__4930__4946 = G__4930__4941;

(out__4929[cljs.core.name.call(null,k__4944)] = v__4945);
var temp__3698__auto____4947 = cljs.core.next.call(null,G__4930__4946);

if(cljs.core.truth_(temp__3698__auto____4947))
{var G__4930__4948 = temp__3698__auto____4947;

{
var G__4949 = cljs.core.first.call(null,G__4930__4948);
var G__4950 = G__4930__4948;
G__4933__4940 = G__4949;
G__4930__4941 = G__4950;
continue;
}
} else
{}
break;
}
} else
{}
return out__4929;
});
pinot.util.js.log = (function log(text){
return console.log(text);
});
pinot.util.js.as_int = (function as_int(n){
return parseInt.call(null,n);
});
