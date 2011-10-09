goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
if(cljs.core.truth_(cljs.core._EQ_.call(null,s.length,0)))
{return "";
} else
{var sb__4951 = (new goog.string.StringBuffer());

var coll__4952 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__4952))
{sb__4951.append(cljs.core.first.call(null,coll__4952));
{
var G__4953 = cljs.core.next.call(null,coll__4952);
coll__4952 = G__4953;
continue;
}
} else
{}
break;
}
return sb__4951.toString();
}
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__4954 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__4955 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__4954.call(this,separator);
case  2 :
return join__4955.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__4963 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__4964 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__4957 = s;
var limit__4958 = limit;
var parts__4959 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__4958,1)))
{return cljs.core.conj.call(null,parts__4959,s__4957);
} else
{var temp__3695__auto____4960 = cljs.core.re_find.call(null,re,s__4957);

if(cljs.core.truth_(temp__3695__auto____4960))
{var m__4961 = temp__3695__auto____4960;

var index__4962 = s__4957.indexOf(m__4961);

{
var G__4966 = s__4957.substring((index__4962 + cljs.core.count.call(null,m__4961)));
var G__4967 = (limit__4958 - 1);
var G__4968 = cljs.core.conj.call(null,parts__4959,s__4957.substring(0,index__4962));
s__4957 = G__4966;
limit__4958 = G__4967;
parts__4959 = G__4968;
continue;
}
} else
{return cljs.core.conj.call(null,parts__4959,s__4957);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__4963.call(this,s,re);
case  3 :
return split__4964.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__4969 = s.length;

while(true){
if(cljs.core.truth_((index__4969 === 0)))
{return "";
} else
{var ch__4970 = cljs.core.get.call(null,s,(index__4969 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____4971 = cljs.core._EQ_.call(null,ch__4970,"\n");

if(cljs.core.truth_(or__3548__auto____4971))
{return or__3548__auto____4971;
} else
{return cljs.core._EQ_.call(null,ch__4970,"\r");
}
})()))
{{
var G__4972 = (index__4969 - 1);
index__4969 = G__4972;
continue;
}
} else
{return s.substring(0,index__4969);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__4973 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____4974 = cljs.core.not.call(null,s__4973);

if(cljs.core.truth_(or__3548__auto____4974))
{return or__3548__auto____4974;
} else
{var or__3548__auto____4975 = cljs.core._EQ_.call(null,"",s__4973);

if(cljs.core.truth_(or__3548__auto____4975))
{return or__3548__auto____4975;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__4973);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__4976 = (new goog.string.StringBuffer());
var length__4977 = s.length;

var index__4978 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__4977,index__4978)))
{return buffer__4976.toString();
} else
{var ch__4979 = s.charAt(index__4978);

var temp__3695__auto____4980 = cljs.core.get.call(null,cmap,ch__4979);

if(cljs.core.truth_(temp__3695__auto____4980))
{var replacement__4981 = temp__3695__auto____4980;

buffer__4976.append(cljs.core.str.call(null,replacement__4981));
} else
{buffer__4976.append(ch__4979);
}
{
var G__4982 = (index__4978 + 1);
index__4978 = G__4982;
continue;
}
}
break;
}
});
