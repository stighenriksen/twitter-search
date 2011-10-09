goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____4156 = reader;

if(cljs.core.truth_(and__3546__auto____4156))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____4156;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____4157 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4157))
{return or__3548__auto____4157;
} else
{var or__3548__auto____4158 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____4158))
{return or__3548__auto____4158;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____4159 = reader;

if(cljs.core.truth_(and__3546__auto____4159))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____4159;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____4160 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4160))
{return or__3548__auto____4160;
} else
{var or__3548__auto____4161 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____4161))
{return or__3548__auto____4161;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__4162 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__4162.buffer_atom))))
{var idx__4163 = cljs.core.deref.call(null,this__4162.index_atom);

cljs.core.swap_BANG_.call(null,this__4162.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__4162.s,idx__4163);
} else
{var buf__4164 = cljs.core.deref.call(null,this__4162.buffer_atom);

cljs.core.swap_BANG_.call(null,this__4162.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__4164);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__4165 = this;
return cljs.core.swap_BANG_.call(null,this__4165.buffer_atom,(function (p1__4155_SHARP_){
return cljs.core.cons.call(null,ch,p1__4155_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____4166 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____4166))
{return or__3548__auto____4166;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____4167 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____4167))
{return or__3548__auto____4167;
} else
{var and__3546__auto____4169 = (function (){var or__3548__auto____4168 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____4168))
{return or__3548__auto____4168;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____4169))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__4170 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__4170);
return next_ch__4170;
})());
} else
{return and__3546__auto____4169;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__4171){
var rdr = cljs.core.first(arglist__4171);
var msg = cljs.core.rest(arglist__4171);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____4172 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____4172))
{var and__3546__auto____4173 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____4173))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____4173;
}
} else
{return and__3546__auto____4172;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__4174 = (new goog.string.StringBuffer(initch));
var ch__4175 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4176 = cljs.core.nil_QMARK_.call(null,ch__4175);

if(cljs.core.truth_(or__3548__auto____4176))
{return or__3548__auto____4176;
} else
{var or__3548__auto____4177 = cljs.reader.whitespace_QMARK_.call(null,ch__4175);

if(cljs.core.truth_(or__3548__auto____4177))
{return or__3548__auto____4177;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__4175);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__4175);
return sb__4174.toString();
} else
{{
var G__4178 = (function (){sb__4174.append(ch__4175);
return sb__4174;
})();
var G__4179 = cljs.reader.read_char.call(null,rdr);
sb__4174 = G__4178;
ch__4175 = G__4179;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__4180 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____4181 = cljs.core._EQ_.call(null,ch__4180,"n");

if(cljs.core.truth_(or__3548__auto____4181))
{return or__3548__auto____4181;
} else
{var or__3548__auto____4182 = cljs.core._EQ_.call(null,ch__4180,"r");

if(cljs.core.truth_(or__3548__auto____4182))
{return or__3548__auto____4182;
} else
{return cljs.core.nil_QMARK_.call(null,ch__4180);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.match_int = (function match_int(s){
var groups__4183 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);

if(cljs.core.truth_(cljs.core.nth.call(null,groups__4183,2)))
{return 0;
} else
{var negate__4185 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__4183,1)))?-1:1);
var vec__4184__4186 = (cljs.core.truth_(cljs.core.nth.call(null,groups__4183,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4183,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4183,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4183,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4183,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4183,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4183,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4183,7),parseInt.call(null,cljs.core.nth.call(null,groups__4183,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__4187 = cljs.core.nth.call(null,vec__4184__4186,0,null);
var radix__4188 = cljs.core.nth.call(null,vec__4184__4186,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__4187)))
{return null;
} else
{return (negate__4185 * parseInt.call(null,n__4187,radix__4188));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__4189 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__4190 = cljs.core.nth.call(null,groups__4189,1);
var denominator__4191 = cljs.core.nth.call(null,groups__4189,2);

return (parseInt.call(null,numinator__4190) / parseInt.call(null,denominator__4191));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__4192 = cljs.reader.read_char.call(null,reader);
var mapresult__4193 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__4192);

if(cljs.core.truth_(mapresult__4193))
{return mapresult__4193;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4194 = cljs.core._EQ_.call(null,"u",ch__4192);

if(cljs.core.truth_(or__3548__auto____4194))
{return or__3548__auto____4194;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__4192);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__4192);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__4192);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__4195 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__4195)))
{{
var G__4196 = cljs.reader.read_char.call(null,rdr);
ch__4195 = G__4196;
continue;
}
} else
{return ch__4195;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__4197 = cljs.core.Vector.fromArray([]);

while(true){
var ch__4198 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__4198))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__4198)))
{return a__4197;
} else
{var temp__3695__auto____4199 = cljs.core.get.call(null,cljs.reader.macros,ch__4198);

if(cljs.core.truth_(temp__3695__auto____4199))
{var macrofn__4200 = temp__3695__auto____4199;

var mret__4201 = macrofn__4200.call(null,rdr,ch__4198);

{
var G__4203 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__4201,rdr))?a__4197:cljs.core.conj.call(null,a__4197,mret__4201));
a__4197 = G__4203;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__4198);
var o__4202 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__4204 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__4202,rdr))?a__4197:cljs.core.conj.call(null,a__4197,o__4202));
a__4197 = G__4204;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__4205 = cljs.reader.read_char.call(null,rdr);
var dm__4206 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__4205);

if(cljs.core.truth_(dm__4206))
{return dm__4206.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__4205);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__4207 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__4207))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__4207);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__4208 = (new goog.string.StringBuffer(initch));
var ch__4209 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4210 = cljs.core.nil_QMARK_.call(null,ch__4209);

if(cljs.core.truth_(or__3548__auto____4210))
{return or__3548__auto____4210;
} else
{var or__3548__auto____4211 = cljs.reader.whitespace_QMARK_.call(null,ch__4209);

if(cljs.core.truth_(or__3548__auto____4211))
{return or__3548__auto____4211;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__4209);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__4209);
var s__4212 = buffer__4208.toString();

var or__3548__auto____4213 = cljs.reader.match_number.call(null,s__4212);

if(cljs.core.truth_(or__3548__auto____4213))
{return or__3548__auto____4213;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__4212,"]");
}
} else
{{
var G__4214 = (function (){buffer__4208.append(ch__4209);
return buffer__4208;
})();
var G__4215 = cljs.reader.read_char.call(null,reader);
buffer__4208 = G__4214;
ch__4209 = G__4215;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__4216 = (new goog.string.StringBuffer());
var ch__4217 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4217)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__4217)))
{{
var G__4218 = (function (){buffer__4216.append(cljs.reader.escape_char.call(null,buffer__4216,reader));
return buffer__4216;
})();
var G__4219 = cljs.reader.read_char.call(null,reader);
buffer__4216 = G__4218;
ch__4217 = G__4219;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__4217)))
{return buffer__4216.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__4220 = (function (){buffer__4216.append(ch__4217);
return buffer__4216;
})();
var G__4221 = cljs.reader.read_char.call(null,reader);
buffer__4216 = G__4220;
ch__4217 = G__4221;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__4222 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__4222,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__4222,0,token__4222.indexOf("/")),cljs.core.subs.call(null,(token__4222.indexOf("/") + 1),token__4222.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__4222,cljs.core.symbol.call(null,token__4222));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__4223 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));

if(cljs.core.truth_(goog.string.contains.call(null,token__4223,"/")))
{return cljs.core.keyword.call(null,cljs.core.subs.call(null,token__4223,0,token__4223.indexOf("/")),cljs.core.subs.call(null,token__4223,(token__4223.indexOf("/") + 1),token__4223.length));
} else
{return cljs.core.keyword.call(null,token__4223);
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__4224 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__4224)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__4225 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__302__auto____4226 = o__4225;

if(cljs.core.truth_((function (){var and__3546__auto____4227 = x__302__auto____4226;

if(cljs.core.truth_(and__3546__auto____4227))
{var and__3546__auto____4228 = x__302__auto____4226.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____4228))
{return cljs.core.not.call(null,x__302__auto____4226.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____4228;
}
} else
{return and__3546__auto____4227;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__302__auto____4226);
}
})()))
{return cljs.core.with_meta.call(null,o__4225,cljs.core.merge.call(null,cljs.core.meta.call(null,o__4225),m__4224));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__4229 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4229)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__4229)))
{{
var G__4231 = reader;
var G__4232 = eof_is_error;
var G__4233 = sentinel;
var G__4234 = is_recursive;
reader = G__4231;
eof_is_error = G__4232;
sentinel = G__4233;
is_recursive = G__4234;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__4229)))
{{
var G__4235 = cljs.reader.read_comment.call(null,reader,ch__4229);
var G__4236 = eof_is_error;
var G__4237 = sentinel;
var G__4238 = is_recursive;
reader = G__4235;
eof_is_error = G__4236;
sentinel = G__4237;
is_recursive = G__4238;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__4230 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__4229))?cljs.reader.macros.call(null,ch__4229).call(null,reader,ch__4229):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__4229))?cljs.reader.read_number.call(null,reader,ch__4229):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__4229):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__4230,reader)))
{{
var G__4239 = reader;
var G__4240 = eof_is_error;
var G__4241 = sentinel;
var G__4242 = is_recursive;
reader = G__4239;
eof_is_error = G__4240;
sentinel = G__4241;
is_recursive = G__4242;
continue;
}
} else
{return res__4230;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__4243 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__4243,true,null,false);
});
