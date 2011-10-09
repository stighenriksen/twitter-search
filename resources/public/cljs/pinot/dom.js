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
{var elem__4011 = func.call(null);

return pinot.dom.attr.call(null,cljs.core.first.call(null,elem__4011),"﷐'pinotGroup");
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
pinot.dom.css = (function() { 
var css__delegate = function (elem,k,p__4012){
var vec__4013__4014 = p__4012;
var v__4015 = cljs.core.nth.call(null,vec__4013__4014,0,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,k)))
{var G__4016__4017 = cljs.core.seq.call(null,k);

if(cljs.core.truth_(G__4016__4017))
{var G__4019__4021 = cljs.core.first.call(null,G__4016__4017);
var vec__4020__4022 = G__4019__4021;
var prop__4023 = cljs.core.nth.call(null,vec__4020__4022,0,null);
var value__4024 = cljs.core.nth.call(null,vec__4020__4022,1,null);
var G__4016__4025 = G__4016__4017;

var G__4019__4026 = G__4019__4021;
var G__4016__4027 = G__4016__4025;

while(true){
var vec__4028__4029 = G__4019__4026;
var prop__4030 = cljs.core.nth.call(null,vec__4028__4029,0,null);
var value__4031 = cljs.core.nth.call(null,vec__4028__4029,1,null);
var G__4016__4032 = G__4016__4027;

css.call(null,elem,prop__4030,value__4031);
var temp__3698__auto____4033 = cljs.core.next.call(null,G__4016__4032);

if(cljs.core.truth_(temp__3698__auto____4033))
{var G__4016__4034 = temp__3698__auto____4033;

{
var G__4041 = cljs.core.first.call(null,G__4016__4034);
var G__4042 = G__4016__4034;
G__4019__4026 = G__4041;
G__4016__4027 = G__4042;
continue;
}
} else
{}
break;
}
} else
{}
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,v__4015)))
{goog.style.getStyle.call(null,elem,cljs.core.name.call(null,k));
} else
{if(cljs.core.truth_("﷐'else"))
{var G__4035__4036 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4035__4036))
{var el__4037 = cljs.core.first.call(null,G__4035__4036);
var G__4035__4038 = G__4035__4036;

while(true){
goog.style.setStyle.call(null,el__4037,cljs.core.name.call(null,k),cljs.core.name.call(null,v__4015));
var temp__3698__auto____4039 = cljs.core.next.call(null,G__4035__4038);

if(cljs.core.truth_(temp__3698__auto____4039))
{var G__4035__4040 = temp__3698__auto____4039;

{
var G__4043 = cljs.core.first.call(null,G__4035__4040);
var G__4044 = G__4035__4040;
el__4037 = G__4043;
G__4035__4038 = G__4044;
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
var p__4012 = null;
if (goog.isDef(var_args)) {
  p__4012 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return css__delegate.call(this, elem, k, p__4012);
};
css.cljs$lang$maxFixedArity = 2;
css.cljs$lang$applyTo = (function (arglist__4045){
var elem = cljs.core.first(arglist__4045);
var k = cljs.core.first(cljs.core.next(arglist__4045));
var p__4012 = cljs.core.rest(cljs.core.next(arglist__4045));
return css__delegate.call(this, elem, k, p__4012);
});
return css;
})()
;
pinot.dom.attr = (function() {
var attr = null;
var attr__4071 = (function (elem,attrs){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__4046__4047 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__4046__4047))
{var G__4049__4051 = cljs.core.first.call(null,G__4046__4047);
var vec__4050__4052 = G__4049__4051;
var k__4053 = cljs.core.nth.call(null,vec__4050__4052,0,null);
var v__4054 = cljs.core.nth.call(null,vec__4050__4052,1,null);
var G__4046__4055 = G__4046__4047;

var G__4049__4056 = G__4049__4051;
var G__4046__4057 = G__4046__4055;

while(true){
var vec__4058__4059 = G__4049__4056;
var k__4060 = cljs.core.nth.call(null,vec__4058__4059,0,null);
var v__4061 = cljs.core.nth.call(null,vec__4058__4059,1,null);
var G__4046__4062 = G__4046__4057;

attr.call(null,elem,k__4060,v__4061);
var temp__3698__auto____4063 = cljs.core.next.call(null,G__4046__4062);

if(cljs.core.truth_(temp__3698__auto____4063))
{var G__4046__4064 = temp__3698__auto____4063;

{
var G__4074 = cljs.core.first.call(null,G__4046__4064);
var G__4075 = G__4046__4064;
G__4049__4056 = G__4074;
G__4046__4057 = G__4075;
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
var attr__4072 = (function (elem,k,v){
var G__4065__4066 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4065__4066))
{var el__4067 = cljs.core.first.call(null,G__4065__4066);
var G__4065__4068 = G__4065__4066;

while(true){
el__4067.setAttribute(cljs.core.name.call(null,k),v);
var temp__3698__auto____4069 = cljs.core.next.call(null,G__4065__4068);

if(cljs.core.truth_(temp__3698__auto____4069))
{var G__4065__4070 = temp__3698__auto____4069;

{
var G__4076 = cljs.core.first.call(null,G__4065__4070);
var G__4077 = G__4065__4070;
el__4067 = G__4076;
G__4065__4068 = G__4077;
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
return attr__4071.call(this,elem,k);
case  3 :
return attr__4072.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return attr;
})()
;
pinot.dom.text = (function text(elem,v){
var G__4078__4079 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4078__4079))
{var el__4080 = cljs.core.first.call(null,G__4078__4079);
var G__4078__4081 = G__4078__4079;

while(true){
goog.dom.setTextContent.call(null,el__4080,v);
var temp__3698__auto____4082 = cljs.core.next.call(null,G__4078__4081);

if(cljs.core.truth_(temp__3698__auto____4082))
{var G__4078__4083 = temp__3698__auto____4082;

{
var G__4084 = cljs.core.first.call(null,G__4078__4083);
var G__4085 = G__4078__4083;
el__4080 = G__4084;
G__4078__4081 = G__4085;
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
var val__delegate = function (elem,p__4086){
var vec__4087__4088 = p__4086;
var v__4089 = cljs.core.nth.call(null,vec__4087__4088,0,null);

var elem__4090 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,elem))?cljs.core.first.call(null,elem):elem);

if(cljs.core.truth_(v__4089))
{goog.dom.forms.setValue.call(null,elem__4090,v__4089);
return elem__4090;
} else
{return goog.dom.forms.getValue.call(null,elem__4090);
}
};
var val = function (elem,var_args){
var p__4086 = null;
if (goog.isDef(var_args)) {
  p__4086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, elem, p__4086);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__4091){
var elem = cljs.core.first(arglist__4091);
var p__4086 = cljs.core.rest(arglist__4091);
return val__delegate.call(this, elem, p__4086);
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
var G__4092__4094 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4092__4094))
{var el__4095 = cljs.core.first.call(null,G__4092__4094);
var G__4092__4096 = G__4092__4094;

while(true){
var G__4093__4097 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,html));

if(cljs.core.truth_(G__4093__4097))
{var tag__4098 = cljs.core.first.call(null,G__4093__4097);
var G__4093__4099 = G__4093__4097;

while(true){
goog.dom.appendChild.call(null,el__4095,pinot.dom.dom_clone.call(null,tag__4098));
var temp__3698__auto____4100 = cljs.core.next.call(null,G__4093__4099);

if(cljs.core.truth_(temp__3698__auto____4100))
{var G__4093__4101 = temp__3698__auto____4100;

{
var G__4104 = cljs.core.first.call(null,G__4093__4101);
var G__4105 = G__4093__4101;
tag__4098 = G__4104;
G__4093__4099 = G__4105;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4102 = cljs.core.next.call(null,G__4092__4096);

if(cljs.core.truth_(temp__3698__auto____4102))
{var G__4092__4103 = temp__3698__auto____4102;

{
var G__4106 = cljs.core.first.call(null,G__4092__4103);
var G__4107 = G__4092__4103;
el__4095 = G__4106;
G__4092__4096 = G__4107;
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
var G__4108__4109 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4108__4109))
{var elem__4110 = cljs.core.first.call(null,G__4108__4109);
var G__4108__4111 = G__4108__4109;

while(true){
goog.dom.removeNode.call(null,elem__4110);
var temp__3698__auto____4112 = cljs.core.next.call(null,G__4108__4111);

if(cljs.core.truth_(temp__3698__auto____4112))
{var G__4108__4113 = temp__3698__auto____4112;

{
var G__4114 = cljs.core.first.call(null,G__4108__4113);
var G__4115 = G__4108__4113;
elem__4110 = G__4114;
G__4108__4111 = G__4115;
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
var iter__356__auto____4120 = (function iter__4116(s__4117){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4117__4118 = s__4117;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4117__4118)))
{var x__4119 = cljs.core.first.call(null,s__4117__4118);

return cljs.core.cons.call(null,(nl[x__4119]),iter__4116.call(null,cljs.core.rest.call(null,s__4117__4118)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____4120.call(null,cljs.core.range.call(null,0,nl.length));
});
pinot.dom.query = (function query(q){
var q__4121 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,q))?cljs.core.str.call(null,"[pinotGroup$=",pinot.dom.pinot_group.call(null,q),"]"):q);
var results__4122 = goog.dom.query.call(null,q__4121);

return pinot.dom.nodelist__GT_coll.call(null,results__4122);
});
