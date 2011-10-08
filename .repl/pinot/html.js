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
var G__4884__4885 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__4884__4885))
{var c__4886 = cljs.core.first.call(null,G__4884__4885);
var G__4884__4887 = G__4884__4885;

while(true){
var child__4888 = (cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c__4886))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__4886))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__4886))?goog.dom.createTextNode.call(null,c__4886):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__4886))?pinot.html.elem_factory.call(null,c__4886):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__4886))?as_content.call(null,parent,c__4886):(cljs.core.truth_(c__4886.nodeName)?c__4886:null))))));

if(cljs.core.truth_(child__4888))
{goog.dom.appendChild.call(null,parent,child__4888);
} else
{}
var temp__3698__auto____4889 = cljs.core.next.call(null,G__4884__4887);

if(cljs.core.truth_(temp__3698__auto____4889))
{var G__4884__4890 = temp__3698__auto____4889;

{
var G__4891 = cljs.core.first.call(null,G__4884__4890);
var G__4892 = G__4884__4890;
c__4886 = G__4891;
G__4884__4887 = G__4892;
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
pinot.html.normalize_element = (function normalize_element(p__4894){
var vec__4895__4896 = p__4894;
var tag__4897 = cljs.core.nth.call(null,vec__4895__4896,0,null);
var content__4898 = cljs.core.nthnext.call(null,vec__4895__4896,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____4899 = cljs.core.keyword_QMARK_.call(null,tag__4897);

if(cljs.core.truth_(or__3548__auto____4899))
{return or__3548__auto____4899;
} else
{var or__3548__auto____4900 = cljs.core.symbol_QMARK_.call(null,tag__4897);

if(cljs.core.truth_(or__3548__auto____4900))
{return or__3548__auto____4900;
} else
{return cljs.core.string_QMARK_.call(null,tag__4897);
}
}
})())))
{throw cljs.core.str.call(null,tag__4897," is not a valid tag name.");
} else
{}
var vec__4901__4903 = cljs.core.re_matches.call(null,pinot.html.re_tag,cljs.core.name.call(null,tag__4897));
var ___4904 = cljs.core.nth.call(null,vec__4901__4903,0,null);
var tag__4905 = cljs.core.nth.call(null,vec__4901__4903,1,null);
var id__4906 = cljs.core.nth.call(null,vec__4901__4903,2,null);
var class$__4907 = cljs.core.nth.call(null,vec__4901__4903,3,null);
var vec__4902__4914 = (function (){var vec__4908__4909 = clojure.string.split.call(null,tag__4905,/:/);
var nsp__4910 = cljs.core.nth.call(null,vec__4908__4909,0,null);
var t__4911 = cljs.core.nth.call(null,vec__4908__4909,1,null);
var ns_xmlns__4912 = pinot.html.xmlns.call(null,cljs.core.keyword.call(null,nsp__4910));

if(cljs.core.truth_(t__4911))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____4913 = ns_xmlns__4912;

if(cljs.core.truth_(or__3548__auto____4913))
{return or__3548__auto____4913;
} else
{return nsp__4910;
}
})(),t__4911]);
} else
{return cljs.core.Vector.fromArray(["﷐'xhtml".call(null,pinot.html.xmlns),nsp__4910]);
}
})();
var nsp__4915 = cljs.core.nth.call(null,vec__4902__4914,0,null);
var tag__4916 = cljs.core.nth.call(null,vec__4902__4914,1,null);
var tag_attrs__4918 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__4893_SHARP_){
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.second.call(null,p1__4893_SHARP_)));
}),cljs.core.ObjMap.fromObject(["﷐'id","﷐'class"],{"﷐'id":(function (){var or__3548__auto____4917 = id__4906;

if(cljs.core.truth_(or__3548__auto____4917))
{return or__3548__auto____4917;
} else
{return null;
}
})(),"﷐'class":(cljs.core.truth_(class$__4907)?clojure.string.replace.call(null,class$__4907,/\./," "):null)})));
var map_attrs__4919 = cljs.core.first.call(null,content__4898);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__4919)))
{return cljs.core.Vector.fromArray([nsp__4915,tag__4916,cljs.core.merge.call(null,tag_attrs__4918,map_attrs__4919),cljs.core.next.call(null,content__4898)]);
} else
{return cljs.core.Vector.fromArray([nsp__4915,tag__4916,tag_attrs__4918,content__4898]);
}
});
pinot.html.parse_content = (function parse_content(elem,content){
var attrs__4920 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__4920)))
{pinot.dom.attr.call(null,elem,attrs__4920);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
pinot.html.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
pinot.html.elem_factory = (function elem_factory(tag_def){
var vec__4921__4922 = pinot.html.normalize_element.call(null,tag_def);
var nsp__4923 = cljs.core.nth.call(null,vec__4921__4922,0,null);
var tag__4924 = cljs.core.nth.call(null,vec__4921__4922,1,null);
var attrs__4925 = cljs.core.nth.call(null,vec__4921__4922,2,null);
var content__4926 = cljs.core.nth.call(null,vec__4921__4922,3,null);
var elem__4927 = pinot.html.create_elem.call(null,nsp__4923,tag__4924);

pinot.dom.attr.call(null,elem__4927,cljs.core.merge.call(null,attrs__4925,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":cljs.core.swap_BANG_.call(null,pinot.html.elem_id,cljs.core.inc)})));
pinot.html.as_content.call(null,elem__4927,content__4926);
return elem__4927;
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
html.cljs$lang$applyTo = (function (arglist__4928){
var tags = cljs.core.seq( arglist__4928 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
