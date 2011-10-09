goog.provide('pinot.html');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('pinot.dom');
goog.require('clojure.string');
goog.require('pinot.util.clj');
goog.require('pinot.util.js');
pinot.html.xmlns = cljs.core.ObjMap.fromObject(["﷐'xhtml","﷐'svg"],{"﷐'xhtml":"http://www.w3.org/1999/xhtml","﷐'svg":"http://www.w3.org/2000/svg"});
pinot.html.elem_id = cljs.core.atom.call(null,0);
pinot.html.group_id = cljs.core.atom.call(null,0);
pinot.html.as_content = (function as_content(parent,content){
var G__3905__3906 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__3905__3906))
{var c__3907 = cljs.core.first.call(null,G__3905__3906);
var G__3905__3908 = G__3905__3906;

while(true){
var child__3909 = (cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c__3907))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__3907))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__3907))?goog.dom.createTextNode.call(null,c__3907):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__3907))?pinot.html.elem_factory.call(null,c__3907):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__3907))?as_content.call(null,parent,c__3907):(cljs.core.truth_(c__3907.nodeName)?c__3907:null))))));

if(cljs.core.truth_(child__3909))
{goog.dom.appendChild.call(null,parent,child__3909);
} else
{}
var temp__3698__auto____3910 = cljs.core.next.call(null,G__3905__3908);

if(cljs.core.truth_(temp__3698__auto____3910))
{var G__3905__3911 = temp__3698__auto____3910;

{
var G__3912 = cljs.core.first.call(null,G__3905__3911);
var G__3913 = G__3905__3911;
c__3907 = G__3912;
G__3905__3908 = G__3913;
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
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
pinot.html.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
pinot.html.normalize_element = (function normalize_element(p__3915){
var vec__3916__3917 = p__3915;
var tag__3918 = cljs.core.nth.call(null,vec__3916__3917,0,null);
var content__3919 = cljs.core.nthnext.call(null,vec__3916__3917,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____3920 = cljs.core.keyword_QMARK_.call(null,tag__3918);

if(cljs.core.truth_(or__3548__auto____3920))
{return or__3548__auto____3920;
} else
{var or__3548__auto____3921 = cljs.core.symbol_QMARK_.call(null,tag__3918);

if(cljs.core.truth_(or__3548__auto____3921))
{return or__3548__auto____3921;
} else
{return cljs.core.string_QMARK_.call(null,tag__3918);
}
}
})())))
{throw cljs.core.str.call(null,tag__3918," is not a valid tag name.");
} else
{}
var vec__3922__3924 = cljs.core.re_matches.call(null,pinot.html.re_tag,cljs.core.name.call(null,tag__3918));
var ___3925 = cljs.core.nth.call(null,vec__3922__3924,0,null);
var tag__3926 = cljs.core.nth.call(null,vec__3922__3924,1,null);
var id__3927 = cljs.core.nth.call(null,vec__3922__3924,2,null);
var class$__3928 = cljs.core.nth.call(null,vec__3922__3924,3,null);
var vec__3923__3935 = (function (){var vec__3929__3930 = clojure.string.split.call(null,tag__3926,/:/);
var nsp__3931 = cljs.core.nth.call(null,vec__3929__3930,0,null);
var t__3932 = cljs.core.nth.call(null,vec__3929__3930,1,null);
var ns_xmlns__3933 = pinot.html.xmlns.call(null,cljs.core.keyword.call(null,nsp__3931));

if(cljs.core.truth_(t__3932))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____3934 = ns_xmlns__3933;

if(cljs.core.truth_(or__3548__auto____3934))
{return or__3548__auto____3934;
} else
{return nsp__3931;
}
})(),t__3932]);
} else
{return cljs.core.Vector.fromArray(["﷐'xhtml".call(null,pinot.html.xmlns),nsp__3931]);
}
})();
var nsp__3936 = cljs.core.nth.call(null,vec__3923__3935,0,null);
var tag__3937 = cljs.core.nth.call(null,vec__3923__3935,1,null);
var tag_attrs__3939 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__3914_SHARP_){
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.second.call(null,p1__3914_SHARP_)));
}),cljs.core.ObjMap.fromObject(["﷐'id","﷐'class"],{"﷐'id":(function (){var or__3548__auto____3938 = id__3927;

if(cljs.core.truth_(or__3548__auto____3938))
{return or__3548__auto____3938;
} else
{return null;
}
})(),"﷐'class":(cljs.core.truth_(class$__3928)?clojure.string.replace.call(null,class$__3928,/\./," "):null)})));
var map_attrs__3940 = cljs.core.first.call(null,content__3919);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__3940)))
{return cljs.core.Vector.fromArray([nsp__3936,tag__3937,cljs.core.merge.call(null,tag_attrs__3939,map_attrs__3940),cljs.core.next.call(null,content__3919)]);
} else
{return cljs.core.Vector.fromArray([nsp__3936,tag__3937,tag_attrs__3939,content__3919]);
}
});
pinot.html.parse_content = (function parse_content(elem,content){
var attrs__3941 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__3941)))
{pinot.dom.attr.call(null,elem,attrs__3941);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
pinot.html.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
pinot.html.elem_factory = (function elem_factory(tag_def){
var vec__3942__3943 = pinot.html.normalize_element.call(null,tag_def);
var nsp__3944 = cljs.core.nth.call(null,vec__3942__3943,0,null);
var tag__3945 = cljs.core.nth.call(null,vec__3942__3943,1,null);
var attrs__3946 = cljs.core.nth.call(null,vec__3942__3943,2,null);
var content__3947 = cljs.core.nth.call(null,vec__3942__3943,3,null);
var elem__3948 = pinot.html.create_elem.call(null,nsp__3944,tag__3945);

pinot.dom.attr.call(null,elem__3948,cljs.core.merge.call(null,attrs__3946,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":cljs.core.swap_BANG_.call(null,pinot.html.elem_id,cljs.core.inc)})));
pinot.html.as_content.call(null,elem__3948,content__3947);
return elem__3948;
});
/**
* @param {...*} var_args
*/
pinot.html.html = (function() { 
var html__delegate = function (tags){
return cljs.core.map.call(null,pinot.html.elem_factory,tags);
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__3949){
var tags = cljs.core.seq( arglist__3949 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
