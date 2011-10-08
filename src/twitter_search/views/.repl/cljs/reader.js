goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____5100 = reader;

if(cljs.core.truth_(and__3546__auto____5100))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____5100;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____5101 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____5101))
{return or__3548__auto____5101;
} else
{var or__3548__auto____5102 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____5102))
{return or__3548__auto____5102;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____5103 = reader;

if(cljs.core.truth_(and__3546__auto____5103))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____5103;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____5104 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____5104))
{return or__3548__auto____5104;
} else
{var or__3548__auto____5105 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____5105))
{return or__3548__auto____5105;
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
var this__5106 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__5106.buffer_atom))))
{var idx__5107 = cljs.core.deref.call(null,this__5106.index_atom);

cljs.core.swap_BANG_.call(null,this__5106.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__5106.s,idx__5107);
} else
{var buf__5108 = cljs.core.deref.call(null,this__5106.buffer_atom);

cljs.core.swap_BANG_.call(null,this__5106.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__5108);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__5109 = this;
return cljs.core.swap_BANG_.call(null,this__5109.buffer_atom,(function (p1__5099_SHARP_){
return cljs.core.cons.call(null,ch,p1__5099_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____5110 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____5110))
{return or__3548__auto____5110;
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
var or__3548__auto____5111 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____5111))
{return or__3548__auto____5111;
} else
{var and__3546__auto____5113 = (function (){var or__3548__auto____5112 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____5112))
{return or__3548__auto____5112;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____5113))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__5114 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__5114);
return next_ch__5114;
})());
} else
{return and__3546__auto____5113;
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
reader_error.cljs$lang$applyTo = (function (arglist__5115){
var rdr = cljs.core.first(arglist__5115);
var msg = cljs.core.rest(arglist__5115);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____5116 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____5116))
{var and__3546__auto____5117 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____5117))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____5117;
}
} else
{return and__3546__auto____5116;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__5118 = (new goog.string.StringBuffer(initch));
var ch__5119 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____5120 = cljs.core.nil_QMARK_.call(null,ch__5119);

if(cljs.core.truth_(or__3548__auto____5120))
{return or__3548__auto____5120;
} else
{var or__3548__auto____5121 = cljs.reader.whitespace_QMARK_.call(null,ch__5119);

if(cljs.core.truth_(or__3548__auto____5121))
{return or__3548__auto____5121;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__5119);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__5119);
return sb__5118.toString();
} else
{{
var G__5122 = (function (){sb__5118.append(ch__5119);
return sb__5118;
})();
var G__5123 = cljs.reader.read_char.call(null,rdr);
sb__5118 = G__5122;
ch__5119 = G__5123;
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
var ch__5124 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____5125 = cljs.core._EQ_.call(null,ch__5124,"n");

if(cljs.core.truth_(or__3548__auto____5125))
{return or__3548__auto____5125;
} else
{var or__3548__auto____5126 = cljs.core._EQ_.call(null,ch__5124,"r");

if(cljs.core.truth_(or__3548__auto____5126))
{return or__3548__auto____5126;
} else
{return cljs.core.nil_QMARK_.call(null,ch__5124);
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
var groups__5127 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);

if(cljs.core.truth_(cljs.core.nth.call(null,groups__5127,2)))
{return 0;
} else
{var negate__5129 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__5127,1)))?-1:1);
var vec__5128__5130 = (cljs.core.truth_(cljs.core.nth.call(null,groups__5127,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__5127,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__5127,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__5127,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__5127,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__5127,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__5127,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__5127,7),parseInt.call(null,cljs.core.nth.call(null,groups__5127,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__5131 = cljs.core.nth.call(null,vec__5128__5130,0,null);
var radix__5132 = cljs.core.nth.call(null,vec__5128__5130,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__5131)))
{return null;
} else
{return (negate__5129 * parseInt.call(null,n__5131,radix__5132));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__5133 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__5134 = cljs.core.nth.call(null,groups__5133,1);
var denominator__5135 = cljs.core.nth.call(null,groups__5133,2);

return (parseInt.call(null,numinator__5134) / parseInt.call(null,denominator__5135));
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
var ch__5136 = cljs.reader.read_char.call(null,reader);
var mapresult__5137 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__5136);

if(cljs.core.truth_(mapresult__5137))
{return mapresult__5137;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____5138 = cljs.core._EQ_.call(null,"u",ch__5136);

if(cljs.core.truth_(or__3548__auto____5138))
{return or__3548__auto____5138;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__5136);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__5136);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__5136);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__5139 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__5139)))
{{
var G__5140 = cljs.reader.read_char.call(null,rdr);
ch__5139 = G__5140;
continue;
}
} else
{return ch__5139;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__5141 = cljs.core.Vector.fromArray([]);

while(true){
var ch__5142 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__5142))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__5142)))
{return a__5141;
} else
{var temp__3695__auto____5143 = cljs.core.get.call(null,cljs.reader.macros,ch__5142);

if(cljs.core.truth_(temp__3695__auto____5143))
{var macrofn__5144 = temp__3695__auto____5143;

var mret__5145 = macrofn__5144.call(null,rdr,ch__5142);

{
var G__5147 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__5145,rdr))?a__5141:cljs.core.conj.call(null,a__5141,mret__5145));
a__5141 = G__5147;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__5142);
var o__5146 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__5148 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__5146,rdr))?a__5141:cljs.core.conj.call(null,a__5141,o__5146));
a__5141 = G__5148;
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
var ch__5149 = cljs.reader.read_char.call(null,rdr);
var dm__5150 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__5149);

if(cljs.core.truth_(dm__5150))
{return dm__5150.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__5149);
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
var l__5151 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__5151))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__5151);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__5152 = (new goog.string.StringBuffer(initch));
var ch__5153 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____5154 = cljs.core.nil_QMARK_.call(null,ch__5153);

if(cljs.core.truth_(or__3548__auto____5154))
{return or__3548__auto____5154;
} else
{var or__3548__auto____5155 = cljs.reader.whitespace_QMARK_.call(null,ch__5153);

if(cljs.core.truth_(or__3548__auto____5155))
{return or__3548__auto____5155;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__5153);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__5153);
var s__5156 = buffer__5152.toString();

var or__3548__auto____5157 = cljs.reader.match_number.call(null,s__5156);

if(cljs.core.truth_(or__3548__auto____5157))
{return or__3548__auto____5157;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__5156,"]");
}
} else
{{
var G__5158 = (function (){buffer__5152.append(ch__5153);
return buffer__5152;
})();
var G__5159 = cljs.reader.read_char.call(null,reader);
buffer__5152 = G__5158;
ch__5153 = G__5159;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__5160 = (new goog.string.StringBuffer());
var ch__5161 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__5161)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__5161)))
{{
var G__5162 = (function (){buffer__5160.append(cljs.reader.escape_char.call(null,buffer__5160,reader));
return buffer__5160;
})();
var G__5163 = cljs.reader.read_char.call(null,reader);
buffer__5160 = G__5162;
ch__5161 = G__5163;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__5161)))
{return buffer__5160.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__5164 = (function (){buffer__5160.append(ch__5161);
return buffer__5160;
})();
var G__5165 = cljs.reader.read_char.call(null,reader);
buffer__5160 = G__5164;
ch__5161 = G__5165;
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
var token__5166 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__5166,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__5166,0,token__5166.indexOf("/")),cljs.core.subs.call(null,(token__5166.indexOf("/") + 1),token__5166.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__5166,cljs.core.symbol.call(null,token__5166));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__5167 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));

if(cljs.core.truth_(goog.string.contains.call(null,token__5167,"/")))
{return cljs.core.keyword.call(null,cljs.core.subs.call(null,token__5167,0,token__5167.indexOf("/")),cljs.core.subs.call(null,token__5167,(token__5167.indexOf("/") + 1),token__5167.length));
} else
{return cljs.core.keyword.call(null,token__5167);
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
var m__5168 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__5168)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__5169 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__300__auto____5170 = o__5169;

if(cljs.core.truth_((function (){var and__3546__auto____5171 = x__300__auto____5170;

if(cljs.core.truth_(and__3546__auto____5171))
{var and__3546__auto____5172 = x__300__auto____5170.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____5172))
{return cljs.core.not.call(null,x__300__auto____5170.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____5172;
}
} else
{return and__3546__auto____5171;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__300__auto____5170);
}
})()))
{return cljs.core.with_meta.call(null,o__5169,cljs.core.merge.call(null,cljs.core.meta.call(null,o__5169),m__5168));
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
var ch__5173 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__5173)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__5173)))
{{
var G__5175 = reader;
var G__5176 = eof_is_error;
var G__5177 = sentinel;
var G__5178 = is_recursive;
reader = G__5175;
eof_is_error = G__5176;
sentinel = G__5177;
is_recursive = G__5178;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__5173)))
{{
var G__5179 = cljs.reader.read_comment.call(null,reader,ch__5173);
var G__5180 = eof_is_error;
var G__5181 = sentinel;
var G__5182 = is_recursive;
reader = G__5179;
eof_is_error = G__5180;
sentinel = G__5181;
is_recursive = G__5182;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__5174 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__5173))?cljs.reader.macros.call(null,ch__5173).call(null,reader,ch__5173):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__5173))?cljs.reader.read_number.call(null,reader,ch__5173):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__5173):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__5174,reader)))
{{
var G__5183 = reader;
var G__5184 = eof_is_error;
var G__5185 = sentinel;
var G__5186 = is_recursive;
reader = G__5183;
eof_is_error = G__5184;
sentinel = G__5185;
is_recursive = G__5186;
continue;
}
} else
{return res__5174;
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
var r__5187 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__5187,true,null,false);
});
