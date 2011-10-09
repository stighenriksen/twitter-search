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
var G__3929__3930 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__3929__3930))
{var c__3931 = cljs.core.first.call(null,G__3929__3930);
var G__3929__3932 = G__3929__3930;

while(true){
var child__3933 = (cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c__3931))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__3931))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__3931))?goog.dom.createTextNode.call(null,c__3931):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__3931))?pinot.html.elem_factory.call(null,c__3931):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__3931))?as_content.call(null,parent,c__3931):(cljs.core.truth_(c__3931.nodeName)?c__3931:null))))));

if(cljs.core.truth_(child__3933))
{goog.dom.appendChild.call(null,parent,child__3933);
} else
{}
var temp__3698__auto____3934 = cljs.core.next.call(null,G__3929__3932);

if(cljs.core.truth_(temp__3698__auto____3934))
{var G__3929__3935 = temp__3698__auto____3934;

{
var G__3936 = cljs.core.first.call(null,G__3929__3935);
var G__3937 = G__3929__3935;
c__3931 = G__3936;
G__3929__3932 = G__3937;
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
pinot.html.normalize_element = (function normalize_element(p__3939){
var vec__3940__3941 = p__3939;
var tag__3942 = cljs.core.nth.call(null,vec__3940__3941,0,null);
var content__3943 = cljs.core.nthnext.call(null,vec__3940__3941,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____3944 = cljs.core.keyword_QMARK_.call(null,tag__3942);

if(cljs.core.truth_(or__3548__auto____3944))
{return or__3548__auto____3944;
} else
{var or__3548__auto____3945 = cljs.core.symbol_QMARK_.call(null,tag__3942);

if(cljs.core.truth_(or__3548__auto____3945))
{return or__3548__auto____3945;
} else
{return cljs.core.string_QMARK_.call(null,tag__3942);
}
}
})())))
{throw cljs.core.str.call(null,tag__3942," is not a valid tag name.");
} else
{}
var vec__3946__3948 = cljs.core.re_matches.call(null,pinot.html.re_tag,cljs.core.name.call(null,tag__3942));
var ___3949 = cljs.core.nth.call(null,vec__3946__3948,0,null);
var tag__3950 = cljs.core.nth.call(null,vec__3946__3948,1,null);
var id__3951 = cljs.core.nth.call(null,vec__3946__3948,2,null);
var class$__3952 = cljs.core.nth.call(null,vec__3946__3948,3,null);
var vec__3947__3959 = (function (){var vec__3953__3954 = clojure.string.split.call(null,tag__3950,/:/);
var nsp__3955 = cljs.core.nth.call(null,vec__3953__3954,0,null);
var t__3956 = cljs.core.nth.call(null,vec__3953__3954,1,null);
var ns_xmlns__3957 = pinot.html.xmlns.call(null,cljs.core.keyword.call(null,nsp__3955));

if(cljs.core.truth_(t__3956))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____3958 = ns_xmlns__3957;

if(cljs.core.truth_(or__3548__auto____3958))
{return or__3548__auto____3958;
} else
{return nsp__3955;
}
})(),t__3956]);
} else
{return cljs.core.Vector.fromArray(["﷐'xhtml".call(null,pinot.html.xmlns),nsp__3955]);
}
})();
var nsp__3960 = cljs.core.nth.call(null,vec__3947__3959,0,null);
var tag__3961 = cljs.core.nth.call(null,vec__3947__3959,1,null);
var tag_attrs__3963 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__3938_SHARP_){
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.second.call(null,p1__3938_SHARP_)));
}),cljs.core.ObjMap.fromObject(["﷐'id","﷐'class"],{"﷐'id":(function (){var or__3548__auto____3962 = id__3951;

if(cljs.core.truth_(or__3548__auto____3962))
{return or__3548__auto____3962;
} else
{return null;
}
})(),"﷐'class":(cljs.core.truth_(class$__3952)?clojure.string.replace.call(null,class$__3952,/\./," "):null)})));
var map_attrs__3964 = cljs.core.first.call(null,content__3943);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__3964)))
{return cljs.core.Vector.fromArray([nsp__3960,tag__3961,cljs.core.merge.call(null,tag_attrs__3963,map_attrs__3964),cljs.core.next.call(null,content__3943)]);
} else
{return cljs.core.Vector.fromArray([nsp__3960,tag__3961,tag_attrs__3963,content__3943]);
}
});
pinot.html.parse_content = (function parse_content(elem,content){
var attrs__3965 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__3965)))
{pinot.dom.attr.call(null,elem,attrs__3965);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
pinot.html.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
pinot.html.elem_factory = (function elem_factory(tag_def){
var vec__3966__3967 = pinot.html.normalize_element.call(null,tag_def);
var nsp__3968 = cljs.core.nth.call(null,vec__3966__3967,0,null);
var tag__3969 = cljs.core.nth.call(null,vec__3966__3967,1,null);
var attrs__3970 = cljs.core.nth.call(null,vec__3966__3967,2,null);
var content__3971 = cljs.core.nth.call(null,vec__3966__3967,3,null);
var elem__3972 = pinot.html.create_elem.call(null,nsp__3968,tag__3969);

pinot.dom.attr.call(null,elem__3972,cljs.core.merge.call(null,attrs__3970,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":cljs.core.swap_BANG_.call(null,pinot.html.elem_id,cljs.core.inc)})));
pinot.html.as_content.call(null,elem__3972,content__3971);
return elem__3972;
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
html.cljs$lang$applyTo = (function (arglist__3973){
var tags = cljs.core.seq( arglist__3973 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
