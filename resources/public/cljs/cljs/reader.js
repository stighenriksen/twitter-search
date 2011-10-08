goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____4138 = reader;

if(cljs.core.truth_(and__3546__auto____4138))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____4138;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____4139 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4139))
{return or__3548__auto____4139;
} else
{var or__3548__auto____4140 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____4140))
{return or__3548__auto____4140;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____4141 = reader;

if(cljs.core.truth_(and__3546__auto____4141))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____4141;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____4142 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4142))
{return or__3548__auto____4142;
} else
{var or__3548__auto____4143 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____4143))
{return or__3548__auto____4143;
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
var this__4144 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__4144.buffer_atom))))
{var idx__4145 = cljs.core.deref.call(null,this__4144.index_atom);

cljs.core.swap_BANG_.call(null,this__4144.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__4144.s,idx__4145);
} else
{var buf__4146 = cljs.core.deref.call(null,this__4144.buffer_atom);

cljs.core.swap_BANG_.call(null,this__4144.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__4146);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__4147 = this;
return cljs.core.swap_BANG_.call(null,this__4147.buffer_atom,(function (p1__4137_SHARP_){
return cljs.core.cons.call(null,ch,p1__4137_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____4148 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____4148))
{return or__3548__auto____4148;
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
var or__3548__auto____4149 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____4149))
{return or__3548__auto____4149;
} else
{var and__3546__auto____4151 = (function (){var or__3548__auto____4150 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____4150))
{return or__3548__auto____4150;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____4151))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__4152 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__4152);
return next_ch__4152;
})());
} else
{return and__3546__auto____4151;
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
reader_error.cljs$lang$applyTo = (function (arglist__4153){
var rdr = cljs.core.first(arglist__4153);
var msg = cljs.core.rest(arglist__4153);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____4154 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____4154))
{var and__3546__auto____4155 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____4155))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____4155;
}
} else
{return and__3546__auto____4154;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__4156 = (new goog.string.StringBuffer(initch));
var ch__4157 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4158 = cljs.core.nil_QMARK_.call(null,ch__4157);

if(cljs.core.truth_(or__3548__auto____4158))
{return or__3548__auto____4158;
} else
{var or__3548__auto____4159 = cljs.reader.whitespace_QMARK_.call(null,ch__4157);

if(cljs.core.truth_(or__3548__auto____4159))
{return or__3548__auto____4159;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__4157);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__4157);
return sb__4156.toString();
} else
{{
var G__4160 = (function (){sb__4156.append(ch__4157);
return sb__4156;
})();
var G__4161 = cljs.reader.read_char.call(null,rdr);
sb__4156 = G__4160;
ch__4157 = G__4161;
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
var ch__4162 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____4163 = cljs.core._EQ_.call(null,ch__4162,"n");

if(cljs.core.truth_(or__3548__auto____4163))
{return or__3548__auto____4163;
} else
{var or__3548__auto____4164 = cljs.core._EQ_.call(null,ch__4162,"r");

if(cljs.core.truth_(or__3548__auto____4164))
{return or__3548__auto____4164;
} else
{return cljs.core.nil_QMARK_.call(null,ch__4162);
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
var groups__4165 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);

if(cljs.core.truth_(cljs.core.nth.call(null,groups__4165,2)))
{return 0;
} else
{var negate__4167 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__4165,1)))?-1:1);
var vec__4166__4168 = (cljs.core.truth_(cljs.core.nth.call(null,groups__4165,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4165,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4165,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4165,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4165,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4165,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4165,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4165,7),parseInt.call(null,cljs.core.nth.call(null,groups__4165,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__4169 = cljs.core.nth.call(null,vec__4166__4168,0,null);
var radix__4170 = cljs.core.nth.call(null,vec__4166__4168,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__4169)))
{return null;
} else
{return (negate__4167 * parseInt.call(null,n__4169,radix__4170));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__4171 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__4172 = cljs.core.nth.call(null,groups__4171,1);
var denominator__4173 = cljs.core.nth.call(null,groups__4171,2);

return (parseInt.call(null,numinator__4172) / parseInt.call(null,denominator__4173));
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
var ch__4174 = cljs.reader.read_char.call(null,reader);
var mapresult__4175 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__4174);

if(cljs.core.truth_(mapresult__4175))
{return mapresult__4175;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4176 = cljs.core._EQ_.call(null,"u",ch__4174);

if(cljs.core.truth_(or__3548__auto____4176))
{return or__3548__auto____4176;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__4174);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__4174);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__4174);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__4177 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__4177)))
{{
var G__4178 = cljs.reader.read_char.call(null,rdr);
ch__4177 = G__4178;
continue;
}
} else
{return ch__4177;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__4179 = cljs.core.Vector.fromArray([]);

while(true){
var ch__4180 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__4180))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__4180)))
{return a__4179;
} else
{var temp__3695__auto____4181 = cljs.core.get.call(null,cljs.reader.macros,ch__4180);

if(cljs.core.truth_(temp__3695__auto____4181))
{var macrofn__4182 = temp__3695__auto____4181;

var mret__4183 = macrofn__4182.call(null,rdr,ch__4180);

{
var G__4185 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__4183,rdr))?a__4179:cljs.core.conj.call(null,a__4179,mret__4183));
a__4179 = G__4185;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__4180);
var o__4184 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__4186 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__4184,rdr))?a__4179:cljs.core.conj.call(null,a__4179,o__4184));
a__4179 = G__4186;
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
var ch__4187 = cljs.reader.read_char.call(null,rdr);
var dm__4188 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__4187);

if(cljs.core.truth_(dm__4188))
{return dm__4188.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__4187);
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
var l__4189 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__4189))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__4189);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__4190 = (new goog.string.StringBuffer(initch));
var ch__4191 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4192 = cljs.core.nil_QMARK_.call(null,ch__4191);

if(cljs.core.truth_(or__3548__auto____4192))
{return or__3548__auto____4192;
} else
{var or__3548__auto____4193 = cljs.reader.whitespace_QMARK_.call(null,ch__4191);

if(cljs.core.truth_(or__3548__auto____4193))
{return or__3548__auto____4193;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__4191);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__4191);
var s__4194 = buffer__4190.toString();

var or__3548__auto____4195 = cljs.reader.match_number.call(null,s__4194);

if(cljs.core.truth_(or__3548__auto____4195))
{return or__3548__auto____4195;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__4194,"]");
}
} else
{{
var G__4196 = (function (){buffer__4190.append(ch__4191);
return buffer__4190;
})();
var G__4197 = cljs.reader.read_char.call(null,reader);
buffer__4190 = G__4196;
ch__4191 = G__4197;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__4198 = (new goog.string.StringBuffer());
var ch__4199 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4199)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__4199)))
{{
var G__4200 = (function (){buffer__4198.append(cljs.reader.escape_char.call(null,buffer__4198,reader));
return buffer__4198;
})();
var G__4201 = cljs.reader.read_char.call(null,reader);
buffer__4198 = G__4200;
ch__4199 = G__4201;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__4199)))
{return buffer__4198.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__4202 = (function (){buffer__4198.append(ch__4199);
return buffer__4198;
})();
var G__4203 = cljs.reader.read_char.call(null,reader);
buffer__4198 = G__4202;
ch__4199 = G__4203;
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
var token__4204 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__4204,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__4204,0,token__4204.indexOf("/")),cljs.core.subs.call(null,(token__4204.indexOf("/") + 1),token__4204.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__4204,cljs.core.symbol.call(null,token__4204));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__4205 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));

if(cljs.core.truth_(goog.string.contains.call(null,token__4205,"/")))
{return cljs.core.keyword.call(null,cljs.core.subs.call(null,token__4205,0,token__4205.indexOf("/")),cljs.core.subs.call(null,token__4205,(token__4205.indexOf("/") + 1),token__4205.length));
} else
{return cljs.core.keyword.call(null,token__4205);
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
var m__4206 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__4206)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__4207 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__302__auto____4208 = o__4207;

if(cljs.core.truth_((function (){var and__3546__auto____4209 = x__302__auto____4208;

if(cljs.core.truth_(and__3546__auto____4209))
{var and__3546__auto____4210 = x__302__auto____4208.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____4210))
{return cljs.core.not.call(null,x__302__auto____4208.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____4210;
}
} else
{return and__3546__auto____4209;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__302__auto____4208);
}
})()))
{return cljs.core.with_meta.call(null,o__4207,cljs.core.merge.call(null,cljs.core.meta.call(null,o__4207),m__4206));
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
var ch__4211 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4211)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__4211)))
{{
var G__4213 = reader;
var G__4214 = eof_is_error;
var G__4215 = sentinel;
var G__4216 = is_recursive;
reader = G__4213;
eof_is_error = G__4214;
sentinel = G__4215;
is_recursive = G__4216;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__4211)))
{{
var G__4217 = cljs.reader.read_comment.call(null,reader,ch__4211);
var G__4218 = eof_is_error;
var G__4219 = sentinel;
var G__4220 = is_recursive;
reader = G__4217;
eof_is_error = G__4218;
sentinel = G__4219;
is_recursive = G__4220;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__4212 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__4211))?cljs.reader.macros.call(null,ch__4211).call(null,reader,ch__4211):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__4211))?cljs.reader.read_number.call(null,reader,ch__4211):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__4211):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__4212,reader)))
{{
var G__4221 = reader;
var G__4222 = eof_is_error;
var G__4223 = sentinel;
var G__4224 = is_recursive;
reader = G__4221;
eof_is_error = G__4222;
sentinel = G__4223;
is_recursive = G__4224;
continue;
}
} else
{return res__4212;
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
var r__4225 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__4225,true,null,false);
});
