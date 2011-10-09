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
{var elem__4028 = func.call(null);

return pinot.dom.attr.call(null,cljs.core.first.call(null,elem__4028),"﷐'pinotGroup");
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
pinot.dom.css = (function() { 
var css__delegate = function (elem,k,p__4029){
var vec__4030__4031 = p__4029;
var v__4032 = cljs.core.nth.call(null,vec__4030__4031,0,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,k)))
{var G__4033__4034 = cljs.core.seq.call(null,k);

if(cljs.core.truth_(G__4033__4034))
{var G__4036__4038 = cljs.core.first.call(null,G__4033__4034);
var vec__4037__4039 = G__4036__4038;
var prop__4040 = cljs.core.nth.call(null,vec__4037__4039,0,null);
var value__4041 = cljs.core.nth.call(null,vec__4037__4039,1,null);
var G__4033__4042 = G__4033__4034;

var G__4036__4043 = G__4036__4038;
var G__4033__4044 = G__4033__4042;

while(true){
var vec__4045__4046 = G__4036__4043;
var prop__4047 = cljs.core.nth.call(null,vec__4045__4046,0,null);
var value__4048 = cljs.core.nth.call(null,vec__4045__4046,1,null);
var G__4033__4049 = G__4033__4044;

css.call(null,elem,prop__4047,value__4048);
var temp__3698__auto____4050 = cljs.core.next.call(null,G__4033__4049);

if(cljs.core.truth_(temp__3698__auto____4050))
{var G__4033__4051 = temp__3698__auto____4050;

{
var G__4058 = cljs.core.first.call(null,G__4033__4051);
var G__4059 = G__4033__4051;
G__4036__4043 = G__4058;
G__4033__4044 = G__4059;
continue;
}
} else
{}
break;
}
} else
{}
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,v__4032)))
{goog.style.getStyle.call(null,elem,cljs.core.name.call(null,k));
} else
{if(cljs.core.truth_("﷐'else"))
{var G__4052__4053 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4052__4053))
{var el__4054 = cljs.core.first.call(null,G__4052__4053);
var G__4052__4055 = G__4052__4053;

while(true){
goog.style.setStyle.call(null,el__4054,cljs.core.name.call(null,k),cljs.core.name.call(null,v__4032));
var temp__3698__auto____4056 = cljs.core.next.call(null,G__4052__4055);

if(cljs.core.truth_(temp__3698__auto____4056))
{var G__4052__4057 = temp__3698__auto____4056;

{
var G__4060 = cljs.core.first.call(null,G__4052__4057);
var G__4061 = G__4052__4057;
el__4054 = G__4060;
G__4052__4055 = G__4061;
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
var p__4029 = null;
if (goog.isDef(var_args)) {
  p__4029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return css__delegate.call(this, elem, k, p__4029);
};
css.cljs$lang$maxFixedArity = 2;
css.cljs$lang$applyTo = (function (arglist__4062){
var elem = cljs.core.first(arglist__4062);
var k = cljs.core.first(cljs.core.next(arglist__4062));
var p__4029 = cljs.core.rest(cljs.core.next(arglist__4062));
return css__delegate.call(this, elem, k, p__4029);
});
return css;
})()
;
pinot.dom.attr = (function() {
var attr = null;
var attr__4088 = (function (elem,attrs){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__4063__4064 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__4063__4064))
{var G__4066__4068 = cljs.core.first.call(null,G__4063__4064);
var vec__4067__4069 = G__4066__4068;
var k__4070 = cljs.core.nth.call(null,vec__4067__4069,0,null);
var v__4071 = cljs.core.nth.call(null,vec__4067__4069,1,null);
var G__4063__4072 = G__4063__4064;

var G__4066__4073 = G__4066__4068;
var G__4063__4074 = G__4063__4072;

while(true){
var vec__4075__4076 = G__4066__4073;
var k__4077 = cljs.core.nth.call(null,vec__4075__4076,0,null);
var v__4078 = cljs.core.nth.call(null,vec__4075__4076,1,null);
var G__4063__4079 = G__4063__4074;

attr.call(null,elem,k__4077,v__4078);
var temp__3698__auto____4080 = cljs.core.next.call(null,G__4063__4079);

if(cljs.core.truth_(temp__3698__auto____4080))
{var G__4063__4081 = temp__3698__auto____4080;

{
var G__4091 = cljs.core.first.call(null,G__4063__4081);
var G__4092 = G__4063__4081;
G__4066__4073 = G__4091;
G__4063__4074 = G__4092;
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
var attr__4089 = (function (elem,k,v){
var G__4082__4083 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4082__4083))
{var el__4084 = cljs.core.first.call(null,G__4082__4083);
var G__4082__4085 = G__4082__4083;

while(true){
el__4084.setAttribute(cljs.core.name.call(null,k),v);
var temp__3698__auto____4086 = cljs.core.next.call(null,G__4082__4085);

if(cljs.core.truth_(temp__3698__auto____4086))
{var G__4082__4087 = temp__3698__auto____4086;

{
var G__4093 = cljs.core.first.call(null,G__4082__4087);
var G__4094 = G__4082__4087;
el__4084 = G__4093;
G__4082__4085 = G__4094;
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
return attr__4088.call(this,elem,k);
case  3 :
return attr__4089.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return attr;
})()
;
pinot.dom.text = (function text(elem,v){
var G__4095__4096 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4095__4096))
{var el__4097 = cljs.core.first.call(null,G__4095__4096);
var G__4095__4098 = G__4095__4096;

while(true){
goog.dom.setTextContent.call(null,el__4097,v);
var temp__3698__auto____4099 = cljs.core.next.call(null,G__4095__4098);

if(cljs.core.truth_(temp__3698__auto____4099))
{var G__4095__4100 = temp__3698__auto____4099;

{
var G__4101 = cljs.core.first.call(null,G__4095__4100);
var G__4102 = G__4095__4100;
el__4097 = G__4101;
G__4095__4098 = G__4102;
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
var val__delegate = function (elem,p__4103){
var vec__4104__4105 = p__4103;
var v__4106 = cljs.core.nth.call(null,vec__4104__4105,0,null);

var elem__4107 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,elem))?cljs.core.first.call(null,elem):elem);

if(cljs.core.truth_(v__4106))
{goog.dom.forms.setValue.call(null,elem__4107,v__4106);
return elem__4107;
} else
{return goog.dom.forms.getValue.call(null,elem__4107);
}
};
var val = function (elem,var_args){
var p__4103 = null;
if (goog.isDef(var_args)) {
  p__4103 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, elem, p__4103);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__4108){
var elem = cljs.core.first(arglist__4108);
var p__4103 = cljs.core.rest(arglist__4108);
return val__delegate.call(this, elem, p__4103);
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
var G__4109__4111 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4109__4111))
{var el__4112 = cljs.core.first.call(null,G__4109__4111);
var G__4109__4113 = G__4109__4111;

while(true){
var G__4110__4114 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,html));

if(cljs.core.truth_(G__4110__4114))
{var tag__4115 = cljs.core.first.call(null,G__4110__4114);
var G__4110__4116 = G__4110__4114;

while(true){
goog.dom.appendChild.call(null,el__4112,pinot.dom.dom_clone.call(null,tag__4115));
var temp__3698__auto____4117 = cljs.core.next.call(null,G__4110__4116);

if(cljs.core.truth_(temp__3698__auto____4117))
{var G__4110__4118 = temp__3698__auto____4117;

{
var G__4121 = cljs.core.first.call(null,G__4110__4118);
var G__4122 = G__4110__4118;
tag__4115 = G__4121;
G__4110__4116 = G__4122;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4119 = cljs.core.next.call(null,G__4109__4113);

if(cljs.core.truth_(temp__3698__auto____4119))
{var G__4109__4120 = temp__3698__auto____4119;

{
var G__4123 = cljs.core.first.call(null,G__4109__4120);
var G__4124 = G__4109__4120;
el__4112 = G__4123;
G__4109__4113 = G__4124;
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
var G__4125__4126 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4125__4126))
{var elem__4127 = cljs.core.first.call(null,G__4125__4126);
var G__4125__4128 = G__4125__4126;

while(true){
goog.dom.removeNode.call(null,elem__4127);
var temp__3698__auto____4129 = cljs.core.next.call(null,G__4125__4128);

if(cljs.core.truth_(temp__3698__auto____4129))
{var G__4125__4130 = temp__3698__auto____4129;

{
var G__4131 = cljs.core.first.call(null,G__4125__4130);
var G__4132 = G__4125__4130;
elem__4127 = G__4131;
G__4125__4128 = G__4132;
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
var iter__356__auto____4137 = (function iter__4133(s__4134){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4134__4135 = s__4134;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4134__4135)))
{var x__4136 = cljs.core.first.call(null,s__4134__4135);

return cljs.core.cons.call(null,(nl[x__4136]),iter__4133.call(null,cljs.core.rest.call(null,s__4134__4135)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____4137.call(null,cljs.core.range.call(null,0,nl.length));
});
pinot.dom.query = (function query(q){
var q__4138 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,q))?cljs.core.str.call(null,"[pinotGroup$=",pinot.dom.pinot_group.call(null,q),"]"):q);
var results__4139 = goog.dom.query.call(null,q__4138);

return pinot.dom.nodelist__GT_coll.call(null,results__4139);
});
