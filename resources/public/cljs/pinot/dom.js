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
{var elem__3898 = func.call(null);

return pinot.dom.attr.call(null,cljs.core.first.call(null,elem__3898),"﷐'pinotGroup");
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
pinot.dom.css = (function() { 
var css__delegate = function (elem,k,p__3899){
var vec__3900__3901 = p__3899;
var v__3902 = cljs.core.nth.call(null,vec__3900__3901,0,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,k)))
{var G__3903__3904 = cljs.core.seq.call(null,k);

if(cljs.core.truth_(G__3903__3904))
{var G__3906__3908 = cljs.core.first.call(null,G__3903__3904);
var vec__3907__3909 = G__3906__3908;
var prop__3910 = cljs.core.nth.call(null,vec__3907__3909,0,null);
var value__3911 = cljs.core.nth.call(null,vec__3907__3909,1,null);
var G__3903__3912 = G__3903__3904;

var G__3906__3913 = G__3906__3908;
var G__3903__3914 = G__3903__3912;

while(true){
var vec__3915__3916 = G__3906__3913;
var prop__3917 = cljs.core.nth.call(null,vec__3915__3916,0,null);
var value__3918 = cljs.core.nth.call(null,vec__3915__3916,1,null);
var G__3903__3919 = G__3903__3914;

css.call(null,elem,prop__3917,value__3918);
var temp__3698__auto____3920 = cljs.core.next.call(null,G__3903__3919);

if(cljs.core.truth_(temp__3698__auto____3920))
{var G__3903__3921 = temp__3698__auto____3920;

{
var G__3928 = cljs.core.first.call(null,G__3903__3921);
var G__3929 = G__3903__3921;
G__3906__3913 = G__3928;
G__3903__3914 = G__3929;
continue;
}
} else
{}
break;
}
} else
{}
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,v__3902)))
{goog.style.getStyle.call(null,elem,cljs.core.name.call(null,k));
} else
{if(cljs.core.truth_("﷐'else"))
{var G__3922__3923 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__3922__3923))
{var el__3924 = cljs.core.first.call(null,G__3922__3923);
var G__3922__3925 = G__3922__3923;

while(true){
goog.style.setStyle.call(null,el__3924,cljs.core.name.call(null,k),cljs.core.name.call(null,v__3902));
var temp__3698__auto____3926 = cljs.core.next.call(null,G__3922__3925);

if(cljs.core.truth_(temp__3698__auto____3926))
{var G__3922__3927 = temp__3698__auto____3926;

{
var G__3930 = cljs.core.first.call(null,G__3922__3927);
var G__3931 = G__3922__3927;
el__3924 = G__3930;
G__3922__3925 = G__3931;
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
var p__3899 = null;
if (goog.isDef(var_args)) {
  p__3899 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return css__delegate.call(this, elem, k, p__3899);
};
css.cljs$lang$maxFixedArity = 2;
css.cljs$lang$applyTo = (function (arglist__3932){
var elem = cljs.core.first(arglist__3932);
var k = cljs.core.first(cljs.core.next(arglist__3932));
var p__3899 = cljs.core.rest(cljs.core.next(arglist__3932));
return css__delegate.call(this, elem, k, p__3899);
});
return css;
})()
;
pinot.dom.attr = (function() {
var attr = null;
var attr__3958 = (function (elem,attrs){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__3933__3934 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__3933__3934))
{var G__3936__3938 = cljs.core.first.call(null,G__3933__3934);
var vec__3937__3939 = G__3936__3938;
var k__3940 = cljs.core.nth.call(null,vec__3937__3939,0,null);
var v__3941 = cljs.core.nth.call(null,vec__3937__3939,1,null);
var G__3933__3942 = G__3933__3934;

var G__3936__3943 = G__3936__3938;
var G__3933__3944 = G__3933__3942;

while(true){
var vec__3945__3946 = G__3936__3943;
var k__3947 = cljs.core.nth.call(null,vec__3945__3946,0,null);
var v__3948 = cljs.core.nth.call(null,vec__3945__3946,1,null);
var G__3933__3949 = G__3933__3944;

attr.call(null,elem,k__3947,v__3948);
var temp__3698__auto____3950 = cljs.core.next.call(null,G__3933__3949);

if(cljs.core.truth_(temp__3698__auto____3950))
{var G__3933__3951 = temp__3698__auto____3950;

{
var G__3961 = cljs.core.first.call(null,G__3933__3951);
var G__3962 = G__3933__3951;
G__3936__3943 = G__3961;
G__3933__3944 = G__3962;
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
var attr__3959 = (function (elem,k,v){
var G__3952__3953 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__3952__3953))
{var el__3954 = cljs.core.first.call(null,G__3952__3953);
var G__3952__3955 = G__3952__3953;

while(true){
el__3954.setAttribute(cljs.core.name.call(null,k),v);
var temp__3698__auto____3956 = cljs.core.next.call(null,G__3952__3955);

if(cljs.core.truth_(temp__3698__auto____3956))
{var G__3952__3957 = temp__3698__auto____3956;

{
var G__3963 = cljs.core.first.call(null,G__3952__3957);
var G__3964 = G__3952__3957;
el__3954 = G__3963;
G__3952__3955 = G__3964;
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
return attr__3958.call(this,elem,k);
case  3 :
return attr__3959.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return attr;
})()
;
pinot.dom.text = (function text(elem,v){
var G__3965__3966 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__3965__3966))
{var el__3967 = cljs.core.first.call(null,G__3965__3966);
var G__3965__3968 = G__3965__3966;

while(true){
goog.dom.setTextContent.call(null,el__3967,v);
var temp__3698__auto____3969 = cljs.core.next.call(null,G__3965__3968);

if(cljs.core.truth_(temp__3698__auto____3969))
{var G__3965__3970 = temp__3698__auto____3969;

{
var G__3971 = cljs.core.first.call(null,G__3965__3970);
var G__3972 = G__3965__3970;
el__3967 = G__3971;
G__3965__3968 = G__3972;
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
var val__delegate = function (elem,p__3973){
var vec__3974__3975 = p__3973;
var v__3976 = cljs.core.nth.call(null,vec__3974__3975,0,null);

var elem__3977 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,elem))?cljs.core.first.call(null,elem):elem);

if(cljs.core.truth_(v__3976))
{goog.dom.forms.setValue.call(null,elem__3977,v__3976);
return elem__3977;
} else
{return goog.dom.forms.getValue.call(null,elem__3977);
}
};
var val = function (elem,var_args){
var p__3973 = null;
if (goog.isDef(var_args)) {
  p__3973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, elem, p__3973);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__3978){
var elem = cljs.core.first(arglist__3978);
var p__3973 = cljs.core.rest(arglist__3978);
return val__delegate.call(this, elem, p__3973);
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
var G__3979__3981 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__3979__3981))
{var el__3982 = cljs.core.first.call(null,G__3979__3981);
var G__3979__3983 = G__3979__3981;

while(true){
var G__3980__3984 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,html));

if(cljs.core.truth_(G__3980__3984))
{var tag__3985 = cljs.core.first.call(null,G__3980__3984);
var G__3980__3986 = G__3980__3984;

while(true){
goog.dom.appendChild.call(null,el__3982,pinot.dom.dom_clone.call(null,tag__3985));
var temp__3698__auto____3987 = cljs.core.next.call(null,G__3980__3986);

if(cljs.core.truth_(temp__3698__auto____3987))
{var G__3980__3988 = temp__3698__auto____3987;

{
var G__3991 = cljs.core.first.call(null,G__3980__3988);
var G__3992 = G__3980__3988;
tag__3985 = G__3991;
G__3980__3986 = G__3992;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3989 = cljs.core.next.call(null,G__3979__3983);

if(cljs.core.truth_(temp__3698__auto____3989))
{var G__3979__3990 = temp__3698__auto____3989;

{
var G__3993 = cljs.core.first.call(null,G__3979__3990);
var G__3994 = G__3979__3990;
el__3982 = G__3993;
G__3979__3983 = G__3994;
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
var G__3995__3996 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

if(cljs.core.truth_(G__3995__3996))
{var elem__3997 = cljs.core.first.call(null,G__3995__3996);
var G__3995__3998 = G__3995__3996;

while(true){
goog.dom.removeNode.call(null,elem__3997);
var temp__3698__auto____3999 = cljs.core.next.call(null,G__3995__3998);

if(cljs.core.truth_(temp__3698__auto____3999))
{var G__3995__4000 = temp__3698__auto____3999;

{
var G__4001 = cljs.core.first.call(null,G__3995__4000);
var G__4002 = G__3995__4000;
elem__3997 = G__4001;
G__3995__3998 = G__4002;
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
var iter__356__auto____4007 = (function iter__4003(s__4004){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4004__4005 = s__4004;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4004__4005)))
{var x__4006 = cljs.core.first.call(null,s__4004__4005);

return cljs.core.cons.call(null,(nl[x__4006]),iter__4003.call(null,cljs.core.rest.call(null,s__4004__4005)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____4007.call(null,cljs.core.range.call(null,0,nl.length));
});
pinot.dom.query = (function query(q){
var q__4008 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,q))?cljs.core.str.call(null,"[pinotGroup$=",pinot.dom.pinot_group.call(null,q),"]"):q);
var results__4009 = goog.dom.query.call(null,q__4008);

return pinot.dom.nodelist__GT_coll.call(null,results__4009);
});
