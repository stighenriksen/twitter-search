goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____4121 = reader;

if(cljs.core.truth_(and__3546__auto____4121))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____4121;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____4122 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4122))
{return or__3548__auto____4122;
} else
{var or__3548__auto____4123 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____4123))
{return or__3548__auto____4123;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____4124 = reader;

if(cljs.core.truth_(and__3546__auto____4124))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____4124;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____4125 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4125))
{return or__3548__auto____4125;
} else
{var or__3548__auto____4126 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____4126))
{return or__3548__auto____4126;
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
var this__4127 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__4127.buffer_atom))))
{var idx__4128 = cljs.core.deref.call(null,this__4127.index_atom);

cljs.core.swap_BANG_.call(null,this__4127.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__4127.s,idx__4128);
} else
{var buf__4129 = cljs.core.deref.call(null,this__4127.buffer_atom);

cljs.core.swap_BANG_.call(null,this__4127.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__4129);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__4130 = this;
return cljs.core.swap_BANG_.call(null,this__4130.buffer_atom,(function (p1__4120_SHARP_){
return cljs.core.cons.call(null,ch,p1__4120_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____4131 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____4131))
{return or__3548__auto____4131;
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
var or__3548__auto____4132 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____4132))
{return or__3548__auto____4132;
} else
{var and__3546__auto____4134 = (function (){var or__3548__auto____4133 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____4133))
{return or__3548__auto____4133;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____4134))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__4135 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__4135);
return next_ch__4135;
})());
} else
{return and__3546__auto____4134;
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
reader_error.cljs$lang$applyTo = (function (arglist__4136){
var rdr = cljs.core.first(arglist__4136);
var msg = cljs.core.rest(arglist__4136);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____4137 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____4137))
{var and__3546__auto____4138 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____4138))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____4138;
}
} else
{return and__3546__auto____4137;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__4139 = (new goog.string.StringBuffer(initch));
var ch__4140 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4141 = cljs.core.nil_QMARK_.call(null,ch__4140);

if(cljs.core.truth_(or__3548__auto____4141))
{return or__3548__auto____4141;
} else
{var or__3548__auto____4142 = cljs.reader.whitespace_QMARK_.call(null,ch__4140);

if(cljs.core.truth_(or__3548__auto____4142))
{return or__3548__auto____4142;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__4140);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__4140);
return sb__4139.toString();
} else
{{
var G__4143 = (function (){sb__4139.append(ch__4140);
return sb__4139;
})();
var G__4144 = cljs.reader.read_char.call(null,rdr);
sb__4139 = G__4143;
ch__4140 = G__4144;
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
var ch__4145 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____4146 = cljs.core._EQ_.call(null,ch__4145,"n");

if(cljs.core.truth_(or__3548__auto____4146))
{return or__3548__auto____4146;
} else
{var or__3548__auto____4147 = cljs.core._EQ_.call(null,ch__4145,"r");

if(cljs.core.truth_(or__3548__auto____4147))
{return or__3548__auto____4147;
} else
{return cljs.core.nil_QMARK_.call(null,ch__4145);
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
var groups__4148 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);

if(cljs.core.truth_(cljs.core.nth.call(null,groups__4148,2)))
{return 0;
} else
{var negate__4150 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__4148,1)))?-1:1);
var vec__4149__4151 = (cljs.core.truth_(cljs.core.nth.call(null,groups__4148,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4148,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4148,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4148,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4148,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4148,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4148,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4148,7),parseInt.call(null,cljs.core.nth.call(null,groups__4148,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__4152 = cljs.core.nth.call(null,vec__4149__4151,0,null);
var radix__4153 = cljs.core.nth.call(null,vec__4149__4151,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__4152)))
{return null;
} else
{return (negate__4150 * parseInt.call(null,n__4152,radix__4153));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__4154 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__4155 = cljs.core.nth.call(null,groups__4154,1);
var denominator__4156 = cljs.core.nth.call(null,groups__4154,2);

return (parseInt.call(null,numinator__4155) / parseInt.call(null,denominator__4156));
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
var ch__4157 = cljs.reader.read_char.call(null,reader);
var mapresult__4158 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__4157);

if(cljs.core.truth_(mapresult__4158))
{return mapresult__4158;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4159 = cljs.core._EQ_.call(null,"u",ch__4157);

if(cljs.core.truth_(or__3548__auto____4159))
{return or__3548__auto____4159;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__4157);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__4157);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__4157);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__4160 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__4160)))
{{
var G__4161 = cljs.reader.read_char.call(null,rdr);
ch__4160 = G__4161;
continue;
}
} else
{return ch__4160;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__4162 = cljs.core.Vector.fromArray([]);

while(true){
var ch__4163 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__4163))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__4163)))
{return a__4162;
} else
{var temp__3695__auto____4164 = cljs.core.get.call(null,cljs.reader.macros,ch__4163);

if(cljs.core.truth_(temp__3695__auto____4164))
{var macrofn__4165 = temp__3695__auto____4164;

var mret__4166 = macrofn__4165.call(null,rdr,ch__4163);

{
var G__4168 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__4166,rdr))?a__4162:cljs.core.conj.call(null,a__4162,mret__4166));
a__4162 = G__4168;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__4163);
var o__4167 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__4169 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__4167,rdr))?a__4162:cljs.core.conj.call(null,a__4162,o__4167));
a__4162 = G__4169;
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
var ch__4170 = cljs.reader.read_char.call(null,rdr);
var dm__4171 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__4170);

if(cljs.core.truth_(dm__4171))
{return dm__4171.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__4170);
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
var l__4172 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__4172))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__4172);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__4173 = (new goog.string.StringBuffer(initch));
var ch__4174 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4175 = cljs.core.nil_QMARK_.call(null,ch__4174);

if(cljs.core.truth_(or__3548__auto____4175))
{return or__3548__auto____4175;
} else
{var or__3548__auto____4176 = cljs.reader.whitespace_QMARK_.call(null,ch__4174);

if(cljs.core.truth_(or__3548__auto____4176))
{return or__3548__auto____4176;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__4174);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__4174);
var s__4177 = buffer__4173.toString();

var or__3548__auto____4178 = cljs.reader.match_number.call(null,s__4177);

if(cljs.core.truth_(or__3548__auto____4178))
{return or__3548__auto____4178;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__4177,"]");
}
} else
{{
var G__4179 = (function (){buffer__4173.append(ch__4174);
return buffer__4173;
})();
var G__4180 = cljs.reader.read_char.call(null,reader);
buffer__4173 = G__4179;
ch__4174 = G__4180;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__4181 = (new goog.string.StringBuffer());
var ch__4182 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4182)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__4182)))
{{
var G__4183 = (function (){buffer__4181.append(cljs.reader.escape_char.call(null,buffer__4181,reader));
return buffer__4181;
})();
var G__4184 = cljs.reader.read_char.call(null,reader);
buffer__4181 = G__4183;
ch__4182 = G__4184;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__4182)))
{return buffer__4181.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__4185 = (function (){buffer__4181.append(ch__4182);
return buffer__4181;
})();
var G__4186 = cljs.reader.read_char.call(null,reader);
buffer__4181 = G__4185;
ch__4182 = G__4186;
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
var token__4187 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__4187,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__4187,0,token__4187.indexOf("/")),cljs.core.subs.call(null,(token__4187.indexOf("/") + 1),token__4187.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__4187,cljs.core.symbol.call(null,token__4187));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__4188 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));

if(cljs.core.truth_(goog.string.contains.call(null,token__4188,"/")))
{return cljs.core.keyword.call(null,cljs.core.subs.call(null,token__4188,0,token__4188.indexOf("/")),cljs.core.subs.call(null,token__4188,(token__4188.indexOf("/") + 1),token__4188.length));
} else
{return cljs.core.keyword.call(null,token__4188);
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
var m__4189 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__4189)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__4190 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__300__auto____4191 = o__4190;

if(cljs.core.truth_((function (){var and__3546__auto____4192 = x__300__auto____4191;

if(cljs.core.truth_(and__3546__auto____4192))
{var and__3546__auto____4193 = x__300__auto____4191.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____4193))
{return cljs.core.not.call(null,x__300__auto____4191.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____4193;
}
} else
{return and__3546__auto____4192;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__300__auto____4191);
}
})()))
{return cljs.core.with_meta.call(null,o__4190,cljs.core.merge.call(null,cljs.core.meta.call(null,o__4190),m__4189));
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
var ch__4194 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4194)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__4194)))
{{
var G__4196 = reader;
var G__4197 = eof_is_error;
var G__4198 = sentinel;
var G__4199 = is_recursive;
reader = G__4196;
eof_is_error = G__4197;
sentinel = G__4198;
is_recursive = G__4199;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__4194)))
{{
var G__4200 = cljs.reader.read_comment.call(null,reader,ch__4194);
var G__4201 = eof_is_error;
var G__4202 = sentinel;
var G__4203 = is_recursive;
reader = G__4200;
eof_is_error = G__4201;
sentinel = G__4202;
is_recursive = G__4203;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__4195 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__4194))?cljs.reader.macros.call(null,ch__4194).call(null,reader,ch__4194):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__4194))?cljs.reader.read_number.call(null,reader,ch__4194):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__4194):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__4195,reader)))
{{
var G__4204 = reader;
var G__4205 = eof_is_error;
var G__4206 = sentinel;
var G__4207 = is_recursive;
reader = G__4204;
eof_is_error = G__4205;
sentinel = G__4206;
is_recursive = G__4207;
continue;
}
} else
{return res__4195;
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
var r__4208 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__4208,true,null,false);
});
