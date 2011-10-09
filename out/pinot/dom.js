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
{var elem__4004 = func.call(null);

return pinot.dom.attr.call(null,cljs.core.first.call(null,elem__4004),"﷐'pinotGroup");
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
pinot.dom.css = (function() { 
var css__delegate = function (elem,k,p__4005){
var vec__4006__4007 = p__4005;
var v__4008 = cljs.core.nth.call(null,vec__4006__4007,0,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,k)))
{var G__4009__4010 = cljs.core.seq.call(null,k);

if(cljs.core.truth_(G__4009__4010))
{var G__4012__4014 = cljs.core.first.call(null,G__4009__4010);
var vec__4013__4015 = G__4012__4014;
var prop__4016 = cljs.core.nth.call(null,vec__4013__4015,0,null);
var value__4017 = cljs.core.nth.call(null,vec__4013__4015,1,null);
var G__4009__4018 = G__4009__4010;

var G__4012__4019 = G__4012__4014;
var G__4009__4020 = G__4009__4018;

while(true){
var vec__4021__4022 = G__4012__4019;
var prop__4023 = cljs.core.nth.call(null,vec__4021__4022,0,null);
var value__4024 = cljs.core.nth.call(null,vec__4021__4022,1,null);
var G__4009__4025 = G__4009__4020;

css.call(null,elem,prop__4023,value__4024);
var temp__3698__auto____4026 = cljs.core.next.call(null,G__4009__4025);

if(cljs.core.truth_(temp__3698__auto____4026))
{var G__4009__4027 = temp__3698__auto____4026;

{
var G__4034 = cljs.core.first.call(null,G__4009__4027);
var G__4035 = G__4009__4027;
G__4012__4019 = G__4034;
G__4009__4020 = G__4035;
continue;
}
} else
{}
break;
}
} else
{}
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,v__4008)))
{goog.style.getStyle.call(null,elem,cljs.core.name.call(null,k));
} else
{if(cljs.core.truth_("﷐'else"))
{var G__4028__4029 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4028__4029))
{var el__4030 = cljs.core.first.call(null,G__4028__4029);
var G__4028__4031 = G__4028__4029;

while(true){
goog.style.setStyle.call(null,el__4030,cljs.core.name.call(null,k),cljs.core.name.call(null,v__4008));
var temp__3698__auto____4032 = cljs.core.next.call(null,G__4028__4031);

if(cljs.core.truth_(temp__3698__auto____4032))
{var G__4028__4033 = temp__3698__auto____4032;

{
var G__4036 = cljs.core.first.call(null,G__4028__4033);
var G__4037 = G__4028__4033;
el__4030 = G__4036;
G__4028__4031 = G__4037;
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
var p__4005 = null;
if (goog.isDef(var_args)) {
  p__4005 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return css__delegate.call(this, elem, k, p__4005);
};
css.cljs$lang$maxFixedArity = 2;
css.cljs$lang$applyTo = (function (arglist__4038){
var elem = cljs.core.first(arglist__4038);
var k = cljs.core.first(cljs.core.next(arglist__4038));
var p__4005 = cljs.core.rest(cljs.core.next(arglist__4038));
return css__delegate.call(this, elem, k, p__4005);
});
return css;
})()
;
pinot.dom.attr = (function() {
var attr = null;
var attr__4064 = (function (elem,attrs){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__4039__4040 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__4039__4040))
{var G__4042__4044 = cljs.core.first.call(null,G__4039__4040);
var vec__4043__4045 = G__4042__4044;
var k__4046 = cljs.core.nth.call(null,vec__4043__4045,0,null);
var v__4047 = cljs.core.nth.call(null,vec__4043__4045,1,null);
var G__4039__4048 = G__4039__4040;

var G__4042__4049 = G__4042__4044;
var G__4039__4050 = G__4039__4048;

while(true){
var vec__4051__4052 = G__4042__4049;
var k__4053 = cljs.core.nth.call(null,vec__4051__4052,0,null);
var v__4054 = cljs.core.nth.call(null,vec__4051__4052,1,null);
var G__4039__4055 = G__4039__4050;

attr.call(null,elem,k__4053,v__4054);
var temp__3698__auto____4056 = cljs.core.next.call(null,G__4039__4055);

if(cljs.core.truth_(temp__3698__auto____4056))
{var G__4039__4057 = temp__3698__auto____4056;

{
var G__4067 = cljs.core.first.call(null,G__4039__4057);
var G__4068 = G__4039__4057;
G__4042__4049 = G__4067;
G__4039__4050 = G__4068;
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
var attr__4065 = (function (elem,k,v){
var G__4058__4059 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4058__4059))
{var el__4060 = cljs.core.first.call(null,G__4058__4059);
var G__4058__4061 = G__4058__4059;

while(true){
el__4060.setAttribute(cljs.core.name.call(null,k),v);
var temp__3698__auto____4062 = cljs.core.next.call(null,G__4058__4061);

if(cljs.core.truth_(temp__3698__auto____4062))
{var G__4058__4063 = temp__3698__auto____4062;

{
var G__4069 = cljs.core.first.call(null,G__4058__4063);
var G__4070 = G__4058__4063;
el__4060 = G__4069;
G__4058__4061 = G__4070;
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
return attr__4064.call(this,elem,k);
case  3 :
return attr__4065.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return attr;
})()
;
pinot.dom.text = (function text(elem,v){
var G__4071__4072 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4071__4072))
{var el__4073 = cljs.core.first.call(null,G__4071__4072);
var G__4071__4074 = G__4071__4072;

while(true){
goog.dom.setTextContent.call(null,el__4073,v);
var temp__3698__auto____4075 = cljs.core.next.call(null,G__4071__4074);

if(cljs.core.truth_(temp__3698__auto____4075))
{var G__4071__4076 = temp__3698__auto____4075;

{
var G__4077 = cljs.core.first.call(null,G__4071__4076);
var G__4078 = G__4071__4076;
el__4073 = G__4077;
G__4071__4074 = G__4078;
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
var val__delegate = function (elem,p__4079){
var vec__4080__4081 = p__4079;
var v__4082 = cljs.core.nth.call(null,vec__4080__4081,0,null);

var elem__4083 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,elem))?cljs.core.first.call(null,elem):elem);

if(cljs.core.truth_(v__4082))
{goog.dom.forms.setValue.call(null,elem__4083,v__4082);
return elem__4083;
} else
{return goog.dom.forms.getValue.call(null,elem__4083);
}
};
var val = function (elem,var_args){
var p__4079 = null;
if (goog.isDef(var_args)) {
  p__4079 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, elem, p__4079);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__4084){
var elem = cljs.core.first(arglist__4084);
var p__4079 = cljs.core.rest(arglist__4084);
return val__delegate.call(this, elem, p__4079);
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
var G__4085__4087 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4085__4087))
{var el__4088 = cljs.core.first.call(null,G__4085__4087);
var G__4085__4089 = G__4085__4087;

while(true){
var G__4086__4090 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,html));

if(cljs.core.truth_(G__4086__4090))
{var tag__4091 = cljs.core.first.call(null,G__4086__4090);
var G__4086__4092 = G__4086__4090;

while(true){
goog.dom.appendChild.call(null,el__4088,pinot.dom.dom_clone.call(null,tag__4091));
var temp__3698__auto____4093 = cljs.core.next.call(null,G__4086__4092);

if(cljs.core.truth_(temp__3698__auto____4093))
{var G__4086__4094 = temp__3698__auto____4093;

{
var G__4097 = cljs.core.first.call(null,G__4086__4094);
var G__4098 = G__4086__4094;
tag__4091 = G__4097;
G__4086__4092 = G__4098;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4095 = cljs.core.next.call(null,G__4085__4089);

if(cljs.core.truth_(temp__3698__auto____4095))
{var G__4085__4096 = temp__3698__auto____4095;

{
var G__4099 = cljs.core.first.call(null,G__4085__4096);
var G__4100 = G__4085__4096;
el__4088 = G__4099;
G__4085__4089 = G__4100;
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
var G__4101__4102 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__4101__4102))
{var elem__4103 = cljs.core.first.call(null,G__4101__4102);
var G__4101__4104 = G__4101__4102;

while(true){
goog.dom.removeNode.call(null,elem__4103);
var temp__3698__auto____4105 = cljs.core.next.call(null,G__4101__4104);

if(cljs.core.truth_(temp__3698__auto____4105))
{var G__4101__4106 = temp__3698__auto____4105;

{
var G__4107 = cljs.core.first.call(null,G__4101__4106);
var G__4108 = G__4101__4106;
elem__4103 = G__4107;
G__4101__4104 = G__4108;
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
var iter__354__auto____4113 = (function iter__4109(s__4110){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4110__4111 = s__4110;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4110__4111)))
{var x__4112 = cljs.core.first.call(null,s__4110__4111);

return cljs.core.cons.call(null,(nl[x__4112]),iter__4109.call(null,cljs.core.rest.call(null,s__4110__4111)));
} else
{return null;
}
break;
}
})));
});

return iter__354__auto____4113.call(null,cljs.core.range.call(null,0,nl.length));
});
pinot.dom.query = (function query(q){
var q__4114 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,q))?cljs.core.str.call(null,"[pinotGroup$=",pinot.dom.pinot_group.call(null,q),"]"):q);
var results__4115 = goog.dom.query.call(null,q__4114);

return pinot.dom.nodelist__GT_coll.call(null,results__4115);
});
