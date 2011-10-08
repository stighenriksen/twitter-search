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
var G__3799__3800 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__3799__3800))
{var c__3801 = cljs.core.first.call(null,G__3799__3800);
var G__3799__3802 = G__3799__3800;

while(true){
var child__3803 = (cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c__3801))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__3801))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__3801))?goog.dom.createTextNode.call(null,c__3801):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__3801))?pinot.html.elem_factory.call(null,c__3801):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__3801))?as_content.call(null,parent,c__3801):(cljs.core.truth_(c__3801.nodeName)?c__3801:null))))));

if(cljs.core.truth_(child__3803))
{goog.dom.appendChild.call(null,parent,child__3803);
} else
{}
var temp__3698__auto____3804 = cljs.core.next.call(null,G__3799__3802);

if(cljs.core.truth_(temp__3698__auto____3804))
{var G__3799__3805 = temp__3698__auto____3804;

{
var G__3806 = cljs.core.first.call(null,G__3799__3805);
var G__3807 = G__3799__3805;
c__3801 = G__3806;
G__3799__3802 = G__3807;
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
pinot.html.normalize_element = (function normalize_element(p__3809){
var vec__3810__3811 = p__3809;
var tag__3812 = cljs.core.nth.call(null,vec__3810__3811,0,null);
var content__3813 = cljs.core.nthnext.call(null,vec__3810__3811,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____3814 = cljs.core.keyword_QMARK_.call(null,tag__3812);

if(cljs.core.truth_(or__3548__auto____3814))
{return or__3548__auto____3814;
} else
{var or__3548__auto____3815 = cljs.core.symbol_QMARK_.call(null,tag__3812);

if(cljs.core.truth_(or__3548__auto____3815))
{return or__3548__auto____3815;
} else
{return cljs.core.string_QMARK_.call(null,tag__3812);
}
}
})())))
{throw cljs.core.str.call(null,tag__3812," is not a valid tag name.");
} else
{}
var vec__3816__3818 = cljs.core.re_matches.call(null,pinot.html.re_tag,cljs.core.name.call(null,tag__3812));
var ___3819 = cljs.core.nth.call(null,vec__3816__3818,0,null);
var tag__3820 = cljs.core.nth.call(null,vec__3816__3818,1,null);
var id__3821 = cljs.core.nth.call(null,vec__3816__3818,2,null);
var class$__3822 = cljs.core.nth.call(null,vec__3816__3818,3,null);
var vec__3817__3829 = (function (){var vec__3823__3824 = clojure.string.split.call(null,tag__3820,/:/);
var nsp__3825 = cljs.core.nth.call(null,vec__3823__3824,0,null);
var t__3826 = cljs.core.nth.call(null,vec__3823__3824,1,null);
var ns_xmlns__3827 = pinot.html.xmlns.call(null,cljs.core.keyword.call(null,nsp__3825));

if(cljs.core.truth_(t__3826))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____3828 = ns_xmlns__3827;

if(cljs.core.truth_(or__3548__auto____3828))
{return or__3548__auto____3828;
} else
{return nsp__3825;
}
})(),t__3826]);
} else
{return cljs.core.Vector.fromArray(["﷐'xhtml".call(null,pinot.html.xmlns),nsp__3825]);
}
})();
var nsp__3830 = cljs.core.nth.call(null,vec__3817__3829,0,null);
var tag__3831 = cljs.core.nth.call(null,vec__3817__3829,1,null);
var tag_attrs__3833 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__3808_SHARP_){
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.second.call(null,p1__3808_SHARP_)));
}),cljs.core.ObjMap.fromObject(["﷐'id","﷐'class"],{"﷐'id":(function (){var or__3548__auto____3832 = id__3821;

if(cljs.core.truth_(or__3548__auto____3832))
{return or__3548__auto____3832;
} else
{return null;
}
})(),"﷐'class":(cljs.core.truth_(class$__3822)?clojure.string.replace.call(null,class$__3822,/\./," "):null)})));
var map_attrs__3834 = cljs.core.first.call(null,content__3813);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__3834)))
{return cljs.core.Vector.fromArray([nsp__3830,tag__3831,cljs.core.merge.call(null,tag_attrs__3833,map_attrs__3834),cljs.core.next.call(null,content__3813)]);
} else
{return cljs.core.Vector.fromArray([nsp__3830,tag__3831,tag_attrs__3833,content__3813]);
}
});
pinot.html.parse_content = (function parse_content(elem,content){
var attrs__3835 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__3835)))
{pinot.dom.attr.call(null,elem,attrs__3835);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
pinot.html.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
pinot.html.elem_factory = (function elem_factory(tag_def){
var vec__3836__3837 = pinot.html.normalize_element.call(null,tag_def);
var nsp__3838 = cljs.core.nth.call(null,vec__3836__3837,0,null);
var tag__3839 = cljs.core.nth.call(null,vec__3836__3837,1,null);
var attrs__3840 = cljs.core.nth.call(null,vec__3836__3837,2,null);
var content__3841 = cljs.core.nth.call(null,vec__3836__3837,3,null);
var elem__3842 = pinot.html.create_elem.call(null,nsp__3838,tag__3839);

pinot.dom.attr.call(null,elem__3842,cljs.core.merge.call(null,attrs__3840,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":cljs.core.swap_BANG_.call(null,pinot.html.elem_id,cljs.core.inc)})));
pinot.html.as_content.call(null,elem__3842,content__3841);
return elem__3842;
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
html.cljs$lang$applyTo = (function (arglist__3843){
var tags = cljs.core.seq( arglist__3843 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
