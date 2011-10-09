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
{var elem__4983 = func.call(null);

return pinot.dom.attr.call(null,cljs.core.first.call(null,elem__4983),"﷐'pinotGroup");
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
pinot.dom.css = (function() { 
var css__delegate = function (elem,k,p__4984){
var vec__4985__4986 = p__4984;
var v__4987 = cljs.core.nth.call(null,vec__4985__4986,0,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,k)))
{var G__4988__4989 = cljs.core.seq.call(null,k);

if(cljs.core.truth_(G__4988__4989))
{var G__4991__4993 = cljs.core.first.call(null,G__4988__4989);
var vec__4992__4994 = G__4991__4993;
var prop__4995 = cljs.core.nth.call(null,vec__4992__4994,0,null);
var value__4996 = cljs.core.nth.call(null,vec__4992__4994,1,null);
var G__4988__4997 = G__4988__4989;

var G__4991__4998 = G__4991__4993;
var G__4988__4999 = G__4988__4997;

while(true){
var vec__5000__5001 = G__4991__4998;
var prop__5002 = cljs.core.nth.call(null,vec__5000__5001,0,null);
var value__5003 = cljs.core.nth.call(null,vec__5000__5001,1,null);
var G__4988__5004 = G__4988__4999;

css.call(null,elem,prop__5002,value__5003);
var temp__3698__auto____5005 = cljs.core.next.call(null,G__4988__5004);

if(cljs.core.truth_(temp__3698__auto____5005))
{var G__4988__5006 = temp__3698__auto____5005;

{
var G__5013 = cljs.core.first.call(null,G__4988__5006);
var G__5014 = G__4988__5006;
G__4991__4998 = G__5013;
G__4988__4999 = G__5014;
continue;
}
} else
{}
break;
}
} else
{}
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,v__4987)))
{goog.style.getStyle.call(null,elem,cljs.core.name.call(null,k));
} else
{if(cljs.core.truth_("﷐'else"))
{var G__5007__5008 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__5007__5008))
{var el__5009 = cljs.core.first.call(null,G__5007__5008);
var G__5007__5010 = G__5007__5008;

while(true){
goog.style.setStyle.call(null,el__5009,cljs.core.name.call(null,k),cljs.core.name.call(null,v__4987));
var temp__3698__auto____5011 = cljs.core.next.call(null,G__5007__5010);

if(cljs.core.truth_(temp__3698__auto____5011))
{var G__5007__5012 = temp__3698__auto____5011;

{
var G__5015 = cljs.core.first.call(null,G__5007__5012);
var G__5016 = G__5007__5012;
el__5009 = G__5015;
G__5007__5010 = G__5016;
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
var p__4984 = null;
if (goog.isDef(var_args)) {
  p__4984 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return css__delegate.call(this, elem, k, p__4984);
};
css.cljs$lang$maxFixedArity = 2;
css.cljs$lang$applyTo = (function (arglist__5017){
var elem = cljs.core.first(arglist__5017);
var k = cljs.core.first(cljs.core.next(arglist__5017));
var p__4984 = cljs.core.rest(cljs.core.next(arglist__5017));
return css__delegate.call(this, elem, k, p__4984);
});
return css;
})()
;
pinot.dom.attr = (function() {
var attr = null;
var attr__5043 = (function (elem,attrs){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__5018__5019 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__5018__5019))
{var G__5021__5023 = cljs.core.first.call(null,G__5018__5019);
var vec__5022__5024 = G__5021__5023;
var k__5025 = cljs.core.nth.call(null,vec__5022__5024,0,null);
var v__5026 = cljs.core.nth.call(null,vec__5022__5024,1,null);
var G__5018__5027 = G__5018__5019;

var G__5021__5028 = G__5021__5023;
var G__5018__5029 = G__5018__5027;

while(true){
var vec__5030__5031 = G__5021__5028;
var k__5032 = cljs.core.nth.call(null,vec__5030__5031,0,null);
var v__5033 = cljs.core.nth.call(null,vec__5030__5031,1,null);
var G__5018__5034 = G__5018__5029;

attr.call(null,elem,k__5032,v__5033);
var temp__3698__auto____5035 = cljs.core.next.call(null,G__5018__5034);

if(cljs.core.truth_(temp__3698__auto____5035))
{var G__5018__5036 = temp__3698__auto____5035;

{
var G__5046 = cljs.core.first.call(null,G__5018__5036);
var G__5047 = G__5018__5036;
G__5021__5028 = G__5046;
G__5018__5029 = G__5047;
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
var attr__5044 = (function (elem,k,v){
var G__5037__5038 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__5037__5038))
{var el__5039 = cljs.core.first.call(null,G__5037__5038);
var G__5037__5040 = G__5037__5038;

while(true){
el__5039.setAttribute(cljs.core.name.call(null,k),v);
var temp__3698__auto____5041 = cljs.core.next.call(null,G__5037__5040);

if(cljs.core.truth_(temp__3698__auto____5041))
{var G__5037__5042 = temp__3698__auto____5041;

{
var G__5048 = cljs.core.first.call(null,G__5037__5042);
var G__5049 = G__5037__5042;
el__5039 = G__5048;
G__5037__5040 = G__5049;
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
return attr__5043.call(this,elem,k);
case  3 :
return attr__5044.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return attr;
})()
;
pinot.dom.text = (function text(elem,v){
var G__5050__5051 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__5050__5051))
{var el__5052 = cljs.core.first.call(null,G__5050__5051);
var G__5050__5053 = G__5050__5051;

while(true){
goog.dom.setTextContent.call(null,el__5052,v);
var temp__3698__auto____5054 = cljs.core.next.call(null,G__5050__5053);

if(cljs.core.truth_(temp__3698__auto____5054))
{var G__5050__5055 = temp__3698__auto____5054;

{
var G__5056 = cljs.core.first.call(null,G__5050__5055);
var G__5057 = G__5050__5055;
el__5052 = G__5056;
G__5050__5053 = G__5057;
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
var val__delegate = function (elem,p__5058){
var vec__5059__5060 = p__5058;
var v__5061 = cljs.core.nth.call(null,vec__5059__5060,0,null);

var elem__5062 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,elem))?cljs.core.first.call(null,elem):elem);

if(cljs.core.truth_(v__5061))
{goog.dom.forms.setValue.call(null,elem__5062,v__5061);
return elem__5062;
} else
{return goog.dom.forms.getValue.call(null,elem__5062);
}
};
var val = function (elem,var_args){
var p__5058 = null;
if (goog.isDef(var_args)) {
  p__5058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, elem, p__5058);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__5063){
var elem = cljs.core.first(arglist__5063);
var p__5058 = cljs.core.rest(arglist__5063);
return val__delegate.call(this, elem, p__5058);
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
var G__5064__5066 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__5064__5066))
{var el__5067 = cljs.core.first.call(null,G__5064__5066);
var G__5064__5068 = G__5064__5066;

while(true){
var G__5065__5069 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,html));

if(cljs.core.truth_(G__5065__5069))
{var tag__5070 = cljs.core.first.call(null,G__5065__5069);
var G__5065__5071 = G__5065__5069;

while(true){
goog.dom.appendChild.call(null,el__5067,pinot.dom.dom_clone.call(null,tag__5070));
var temp__3698__auto____5072 = cljs.core.next.call(null,G__5065__5071);

if(cljs.core.truth_(temp__3698__auto____5072))
{var G__5065__5073 = temp__3698__auto____5072;

{
var G__5076 = cljs.core.first.call(null,G__5065__5073);
var G__5077 = G__5065__5073;
tag__5070 = G__5076;
G__5065__5071 = G__5077;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____5074 = cljs.core.next.call(null,G__5064__5068);

if(cljs.core.truth_(temp__3698__auto____5074))
{var G__5064__5075 = temp__3698__auto____5074;

{
var G__5078 = cljs.core.first.call(null,G__5064__5075);
var G__5079 = G__5064__5075;
el__5067 = G__5078;
G__5064__5068 = G__5079;
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
var G__5080__5081 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__5080__5081))
{var elem__5082 = cljs.core.first.call(null,G__5080__5081);
var G__5080__5083 = G__5080__5081;

while(true){
goog.dom.removeNode.call(null,elem__5082);
var temp__3698__auto____5084 = cljs.core.next.call(null,G__5080__5083);

if(cljs.core.truth_(temp__3698__auto____5084))
{var G__5080__5085 = temp__3698__auto____5084;

{
var G__5086 = cljs.core.first.call(null,G__5080__5085);
var G__5087 = G__5080__5085;
elem__5082 = G__5086;
G__5080__5083 = G__5087;
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
var iter__354__auto____5092 = (function iter__5088(s__5089){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5089__5090 = s__5089;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5089__5090)))
{var x__5091 = cljs.core.first.call(null,s__5089__5090);

return cljs.core.cons.call(null,(nl[x__5091]),iter__5088.call(null,cljs.core.rest.call(null,s__5089__5090)));
} else
{return null;
}
break;
}
})));
});

return iter__354__auto____5092.call(null,cljs.core.range.call(null,0,nl.length));
});
pinot.dom.query = (function query(q){
var q__5093 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,q))?cljs.core.str.call(null,"[pinotGroup$=",pinot.dom.pinot_group.call(null,q),"]"):q);
var results__5094 = goog.dom.query.call(null,q__5093);

return pinot.dom.nodelist__GT_coll.call(null,results__5094);
});
