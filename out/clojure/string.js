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
{var sb__3972 = (new goog.string.StringBuffer());

var coll__3973 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__3973))
{sb__3972.append(cljs.core.first.call(null,coll__3973));
{
var G__3974 = cljs.core.next.call(null,coll__3973);
coll__3973 = G__3974;
continue;
}
} else
{}
break;
}
return sb__3972.toString();
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
var join__3975 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__3976 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__3975.call(this,separator);
case  2 :
return join__3976.call(this,separator,coll);
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
var split__3984 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__3985 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__3978 = s;
var limit__3979 = limit;
var parts__3980 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__3979,1)))
{return cljs.core.conj.call(null,parts__3980,s__3978);
} else
{var temp__3695__auto____3981 = cljs.core.re_find.call(null,re,s__3978);

if(cljs.core.truth_(temp__3695__auto____3981))
{var m__3982 = temp__3695__auto____3981;

var index__3983 = s__3978.indexOf(m__3982);

{
var G__3987 = s__3978.substring((index__3983 + cljs.core.count.call(null,m__3982)));
var G__3988 = (limit__3979 - 1);
var G__3989 = cljs.core.conj.call(null,parts__3980,s__3978.substring(0,index__3983));
s__3978 = G__3987;
limit__3979 = G__3988;
parts__3980 = G__3989;
continue;
}
} else
{return cljs.core.conj.call(null,parts__3980,s__3978);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__3984.call(this,s,re);
case  3 :
return split__3985.call(this,s,re,limit);
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
var index__3990 = s.length;

while(true){
if(cljs.core.truth_((index__3990 === 0)))
{return "";
} else
{var ch__3991 = cljs.core.get.call(null,s,(index__3990 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____3992 = cljs.core._EQ_.call(null,ch__3991,"\n");

if(cljs.core.truth_(or__3548__auto____3992))
{return or__3548__auto____3992;
} else
{return cljs.core._EQ_.call(null,ch__3991,"\r");
}
})()))
{{
var G__3993 = (index__3990 - 1);
index__3990 = G__3993;
continue;
}
} else
{return s.substring(0,index__3990);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__3994 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____3995 = cljs.core.not.call(null,s__3994);

if(cljs.core.truth_(or__3548__auto____3995))
{return or__3548__auto____3995;
} else
{var or__3548__auto____3996 = cljs.core._EQ_.call(null,"",s__3994);

if(cljs.core.truth_(or__3548__auto____3996))
{return or__3548__auto____3996;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__3994);
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
var buffer__3997 = (new goog.string.StringBuffer());
var length__3998 = s.length;

var index__3999 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__3998,index__3999)))
{return buffer__3997.toString();
} else
{var ch__4000 = s.charAt(index__3999);

var temp__3695__auto____4001 = cljs.core.get.call(null,cmap,ch__4000);

if(cljs.core.truth_(temp__3695__auto____4001))
{var replacement__4002 = temp__3695__auto____4001;

buffer__3997.append(cljs.core.str.call(null,replacement__4002));
} else
{buffer__3997.append(ch__4000);
}
{
var G__4003 = (index__3999 + 1);
index__3999 = G__4003;
continue;
}
}
break;
}
});
