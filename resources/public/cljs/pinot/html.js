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
var G__4244__4245 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__4244__4245))
{var c__4246 = cljs.core.first.call(null,G__4244__4245);
var G__4244__4247 = G__4244__4245;

while(true){
var child__4248 = (cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c__4246))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__4246))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__4246))?goog.dom.createTextNode.call(null,c__4246):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__4246))?pinot.html.elem_factory.call(null,c__4246):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__4246))?as_content.call(null,parent,c__4246):(cljs.core.truth_(c__4246.nodeName)?c__4246:null))))));

if(cljs.core.truth_(child__4248))
{goog.dom.appendChild.call(null,parent,child__4248);
} else
{}
var temp__3698__auto____4249 = cljs.core.next.call(null,G__4244__4247);

if(cljs.core.truth_(temp__3698__auto____4249))
{var G__4244__4250 = temp__3698__auto____4249;

{
var G__4251 = cljs.core.first.call(null,G__4244__4250);
var G__4252 = G__4244__4250;
c__4246 = G__4251;
G__4244__4247 = G__4252;
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
pinot.html.normalize_element = (function normalize_element(p__4254){
var vec__4255__4256 = p__4254;
var tag__4257 = cljs.core.nth.call(null,vec__4255__4256,0,null);
var content__4258 = cljs.core.nthnext.call(null,vec__4255__4256,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____4259 = cljs.core.keyword_QMARK_.call(null,tag__4257);

if(cljs.core.truth_(or__3548__auto____4259))
{return or__3548__auto____4259;
} else
{var or__3548__auto____4260 = cljs.core.symbol_QMARK_.call(null,tag__4257);

if(cljs.core.truth_(or__3548__auto____4260))
{return or__3548__auto____4260;
} else
{return cljs.core.string_QMARK_.call(null,tag__4257);
}
}
})())))
{throw cljs.core.str.call(null,tag__4257," is not a valid tag name.");
} else
{}
var vec__4261__4263 = cljs.core.re_matches.call(null,pinot.html.re_tag,cljs.core.name.call(null,tag__4257));
var ___4264 = cljs.core.nth.call(null,vec__4261__4263,0,null);
var tag__4265 = cljs.core.nth.call(null,vec__4261__4263,1,null);
var id__4266 = cljs.core.nth.call(null,vec__4261__4263,2,null);
var class$__4267 = cljs.core.nth.call(null,vec__4261__4263,3,null);
var vec__4262__4274 = (function (){var vec__4268__4269 = clojure.string.split.call(null,tag__4265,/:/);
var nsp__4270 = cljs.core.nth.call(null,vec__4268__4269,0,null);
var t__4271 = cljs.core.nth.call(null,vec__4268__4269,1,null);
var ns_xmlns__4272 = pinot.html.xmlns.call(null,cljs.core.keyword.call(null,nsp__4270));

if(cljs.core.truth_(t__4271))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____4273 = ns_xmlns__4272;

if(cljs.core.truth_(or__3548__auto____4273))
{return or__3548__auto____4273;
} else
{return nsp__4270;
}
})(),t__4271]);
} else
{return cljs.core.Vector.fromArray(["﷐'xhtml".call(null,pinot.html.xmlns),nsp__4270]);
}
})();
var nsp__4275 = cljs.core.nth.call(null,vec__4262__4274,0,null);
var tag__4276 = cljs.core.nth.call(null,vec__4262__4274,1,null);
var tag_attrs__4278 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__4253_SHARP_){
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.second.call(null,p1__4253_SHARP_)));
}),cljs.core.ObjMap.fromObject(["﷐'id","﷐'class"],{"﷐'id":(function (){var or__3548__auto____4277 = id__4266;

if(cljs.core.truth_(or__3548__auto____4277))
{return or__3548__auto____4277;
} else
{return null;
}
})(),"﷐'class":(cljs.core.truth_(class$__4267)?clojure.string.replace.call(null,class$__4267,/\./," "):null)})));
var map_attrs__4279 = cljs.core.first.call(null,content__4258);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__4279)))
{return cljs.core.Vector.fromArray([nsp__4275,tag__4276,cljs.core.merge.call(null,tag_attrs__4278,map_attrs__4279),cljs.core.next.call(null,content__4258)]);
} else
{return cljs.core.Vector.fromArray([nsp__4275,tag__4276,tag_attrs__4278,content__4258]);
}
});
pinot.html.parse_content = (function parse_content(elem,content){
var attrs__4280 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__4280)))
{pinot.dom.attr.call(null,elem,attrs__4280);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
pinot.html.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
pinot.html.elem_factory = (function elem_factory(tag_def){
var vec__4281__4282 = pinot.html.normalize_element.call(null,tag_def);
var nsp__4283 = cljs.core.nth.call(null,vec__4281__4282,0,null);
var tag__4284 = cljs.core.nth.call(null,vec__4281__4282,1,null);
var attrs__4285 = cljs.core.nth.call(null,vec__4281__4282,2,null);
var content__4286 = cljs.core.nth.call(null,vec__4281__4282,3,null);
var elem__4287 = pinot.html.create_elem.call(null,nsp__4283,tag__4284);

pinot.dom.attr.call(null,elem__4287,cljs.core.merge.call(null,attrs__4285,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":cljs.core.swap_BANG_.call(null,pinot.html.elem_id,cljs.core.inc)})));
pinot.html.as_content.call(null,elem__4287,content__4286);
return elem__4287;
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
html.cljs$lang$applyTo = (function (arglist__4288){
var tags = cljs.core.seq( arglist__4288 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
