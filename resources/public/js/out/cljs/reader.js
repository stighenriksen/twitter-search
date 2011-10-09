goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____3938 = reader;

if(cljs.core.truth_(and__3546__auto____3938))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____3938;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____3939 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____3939))
{return or__3548__auto____3939;
} else
{var or__3548__auto____3940 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____3940))
{return or__3548__auto____3940;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____3941 = reader;

if(cljs.core.truth_(and__3546__auto____3941))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____3941;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____3942 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____3942))
{return or__3548__auto____3942;
} else
{var or__3548__auto____3943 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____3943))
{return or__3548__auto____3943;
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
var this__3944 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__3944.buffer_atom))))
{var idx__3945 = cljs.core.deref.call(null,this__3944.index_atom);

cljs.core.swap_BANG_.call(null,this__3944.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__3944.s,idx__3945);
} else
{var buf__3946 = cljs.core.deref.call(null,this__3944.buffer_atom);

cljs.core.swap_BANG_.call(null,this__3944.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__3946);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__3947 = this;
return cljs.core.swap_BANG_.call(null,this__3947.buffer_atom,(function (p1__3937_SHARP_){
return cljs.core.cons.call(null,ch,p1__3937_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____3948 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____3948))
{return or__3548__auto____3948;
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
var or__3548__auto____3949 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____3949))
{return or__3548__auto____3949;
} else
{var and__3546__auto____3951 = (function (){var or__3548__auto____3950 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____3950))
{return or__3548__auto____3950;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____3951))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__3952 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__3952);
return next_ch__3952;
})());
} else
{return and__3546__auto____3951;
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
reader_error.cljs$lang$applyTo = (function (arglist__3953){
var rdr = cljs.core.first(arglist__3953);
var msg = cljs.core.rest(arglist__3953);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____3954 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____3954))
{var and__3546__auto____3955 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____3955))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____3955;
}
} else
{return and__3546__auto____3954;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__3956 = (new goog.string.StringBuffer(initch));
var ch__3957 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3958 = cljs.core.nil_QMARK_.call(null,ch__3957);

if(cljs.core.truth_(or__3548__auto____3958))
{return or__3548__auto____3958;
} else
{var or__3548__auto____3959 = cljs.reader.whitespace_QMARK_.call(null,ch__3957);

if(cljs.core.truth_(or__3548__auto____3959))
{return or__3548__auto____3959;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__3957);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__3957);
return sb__3956.toString();
} else
{{
var G__3960 = (function (){sb__3956.append(ch__3957);
return sb__3956;
})();
var G__3961 = cljs.reader.read_char.call(null,rdr);
sb__3956 = G__3960;
ch__3957 = G__3961;
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
var ch__3962 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____3963 = cljs.core._EQ_.call(null,ch__3962,"n");

if(cljs.core.truth_(or__3548__auto____3963))
{return or__3548__auto____3963;
} else
{var or__3548__auto____3964 = cljs.core._EQ_.call(null,ch__3962,"r");

if(cljs.core.truth_(or__3548__auto____3964))
{return or__3548__auto____3964;
} else
{return cljs.core.nil_QMARK_.call(null,ch__3962);
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
var groups__3965 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);

if(cljs.core.truth_(cljs.core.nth.call(null,groups__3965,2)))
{return 0;
} else
{var negate__3967 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__3965,1)))?-1:1);
var vec__3966__3968 = (cljs.core.truth_(cljs.core.nth.call(null,groups__3965,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3965,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3965,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3965,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3965,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3965,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3965,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3965,7),parseInt.call(null,cljs.core.nth.call(null,groups__3965,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__3969 = cljs.core.nth.call(null,vec__3966__3968,0,null);
var radix__3970 = cljs.core.nth.call(null,vec__3966__3968,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__3969)))
{return null;
} else
{return (negate__3967 * parseInt.call(null,n__3969,radix__3970));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__3971 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__3972 = cljs.core.nth.call(null,groups__3971,1);
var denominator__3973 = cljs.core.nth.call(null,groups__3971,2);

return (parseInt.call(null,numinator__3972) / parseInt.call(null,denominator__3973));
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
var ch__3974 = cljs.reader.read_char.call(null,reader);
var mapresult__3975 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__3974);

if(cljs.core.truth_(mapresult__3975))
{return mapresult__3975;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3976 = cljs.core._EQ_.call(null,"u",ch__3974);

if(cljs.core.truth_(or__3548__auto____3976))
{return or__3548__auto____3976;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__3974);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__3974);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__3974);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__3977 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__3977)))
{{
var G__3978 = cljs.reader.read_char.call(null,rdr);
ch__3977 = G__3978;
continue;
}
} else
{return ch__3977;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__3979 = cljs.core.Vector.fromArray([]);

while(true){
var ch__3980 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__3980))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__3980)))
{return a__3979;
} else
{var temp__3695__auto____3981 = cljs.core.get.call(null,cljs.reader.macros,ch__3980);

if(cljs.core.truth_(temp__3695__auto____3981))
{var macrofn__3982 = temp__3695__auto____3981;

var mret__3983 = macrofn__3982.call(null,rdr,ch__3980);

{
var G__3985 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__3983,rdr))?a__3979:cljs.core.conj.call(null,a__3979,mret__3983));
a__3979 = G__3985;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__3980);
var o__3984 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__3986 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__3984,rdr))?a__3979:cljs.core.conj.call(null,a__3979,o__3984));
a__3979 = G__3986;
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
var ch__3987 = cljs.reader.read_char.call(null,rdr);
var dm__3988 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__3987);

if(cljs.core.truth_(dm__3988))
{return dm__3988.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__3987);
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
var l__3989 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__3989))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__3989);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__3990 = (new goog.string.StringBuffer(initch));
var ch__3991 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3992 = cljs.core.nil_QMARK_.call(null,ch__3991);

if(cljs.core.truth_(or__3548__auto____3992))
{return or__3548__auto____3992;
} else
{var or__3548__auto____3993 = cljs.reader.whitespace_QMARK_.call(null,ch__3991);

if(cljs.core.truth_(or__3548__auto____3993))
{return or__3548__auto____3993;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__3991);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__3991);
var s__3994 = buffer__3990.toString();

var or__3548__auto____3995 = cljs.reader.match_number.call(null,s__3994);

if(cljs.core.truth_(or__3548__auto____3995))
{return or__3548__auto____3995;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__3994,"]");
}
} else
{{
var G__3996 = (function (){buffer__3990.append(ch__3991);
return buffer__3990;
})();
var G__3997 = cljs.reader.read_char.call(null,reader);
buffer__3990 = G__3996;
ch__3991 = G__3997;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__3998 = (new goog.string.StringBuffer());
var ch__3999 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__3999)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__3999)))
{{
var G__4000 = (function (){buffer__3998.append(cljs.reader.escape_char.call(null,buffer__3998,reader));
return buffer__3998;
})();
var G__4001 = cljs.reader.read_char.call(null,reader);
buffer__3998 = G__4000;
ch__3999 = G__4001;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__3999)))
{return buffer__3998.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__4002 = (function (){buffer__3998.append(ch__3999);
return buffer__3998;
})();
var G__4003 = cljs.reader.read_char.call(null,reader);
buffer__3998 = G__4002;
ch__3999 = G__4003;
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
var token__4004 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__4004,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__4004,0,token__4004.indexOf("/")),cljs.core.subs.call(null,(token__4004.indexOf("/") + 1),token__4004.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__4004,cljs.core.symbol.call(null,token__4004));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__4005 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));

if(cljs.core.truth_(goog.string.contains.call(null,token__4005,"/")))
{return cljs.core.keyword.call(null,cljs.core.subs.call(null,token__4005,0,token__4005.indexOf("/")),cljs.core.subs.call(null,token__4005,(token__4005.indexOf("/") + 1),token__4005.length));
} else
{return cljs.core.keyword.call(null,token__4005);
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
var m__4006 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__4006)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__4007 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__300__auto____4008 = o__4007;

if(cljs.core.truth_((function (){var and__3546__auto____4009 = x__300__auto____4008;

if(cljs.core.truth_(and__3546__auto____4009))
{var and__3546__auto____4010 = x__300__auto____4008.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____4010))
{return cljs.core.not.call(null,x__300__auto____4008.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____4010;
}
} else
{return and__3546__auto____4009;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__300__auto____4008);
}
})()))
{return cljs.core.with_meta.call(null,o__4007,cljs.core.merge.call(null,cljs.core.meta.call(null,o__4007),m__4006));
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
var ch__4011 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4011)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__4011)))
{{
var G__4013 = reader;
var G__4014 = eof_is_error;
var G__4015 = sentinel;
var G__4016 = is_recursive;
reader = G__4013;
eof_is_error = G__4014;
sentinel = G__4015;
is_recursive = G__4016;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__4011)))
{{
var G__4017 = cljs.reader.read_comment.call(null,reader,ch__4011);
var G__4018 = eof_is_error;
var G__4019 = sentinel;
var G__4020 = is_recursive;
reader = G__4017;
eof_is_error = G__4018;
sentinel = G__4019;
is_recursive = G__4020;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__4012 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__4011))?cljs.reader.macros.call(null,ch__4011).call(null,reader,ch__4011):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__4011))?cljs.reader.read_number.call(null,reader,ch__4011):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__4011):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__4012,reader)))
{{
var G__4021 = reader;
var G__4022 = eof_is_error;
var G__4023 = sentinel;
var G__4024 = is_recursive;
reader = G__4021;
eof_is_error = G__4022;
sentinel = G__4023;
is_recursive = G__4024;
continue;
}
} else
{return res__4012;
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
var r__4025 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__4025,true,null,false);
});
