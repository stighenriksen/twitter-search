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
{var sb__3996 = (new goog.string.StringBuffer());

var coll__3997 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__3997))
{sb__3996.append(cljs.core.first.call(null,coll__3997));
{
var G__3998 = cljs.core.next.call(null,coll__3997);
coll__3997 = G__3998;
continue;
}
} else
{}
break;
}
return sb__3996.toString();
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
var join__3999 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__4000 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__3999.call(this,separator);
case  2 :
return join__4000.call(this,separator,coll);
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
var split__4008 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__4009 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__4002 = s;
var limit__4003 = limit;
var parts__4004 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__4003,1)))
{return cljs.core.conj.call(null,parts__4004,s__4002);
} else
{var temp__3695__auto____4005 = cljs.core.re_find.call(null,re,s__4002);

if(cljs.core.truth_(temp__3695__auto____4005))
{var m__4006 = temp__3695__auto____4005;

var index__4007 = s__4002.indexOf(m__4006);

{
var G__4011 = s__4002.substring((index__4007 + cljs.core.count.call(null,m__4006)));
var G__4012 = (limit__4003 - 1);
var G__4013 = cljs.core.conj.call(null,parts__4004,s__4002.substring(0,index__4007));
s__4002 = G__4011;
limit__4003 = G__4012;
parts__4004 = G__4013;
continue;
}
} else
{return cljs.core.conj.call(null,parts__4004,s__4002);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__4008.call(this,s,re);
case  3 :
return split__4009.call(this,s,re,limit);
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
var index__4014 = s.length;

while(true){
if(cljs.core.truth_((index__4014 === 0)))
{return "";
} else
{var ch__4015 = cljs.core.get.call(null,s,(index__4014 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____4016 = cljs.core._EQ_.call(null,ch__4015,"\n");

if(cljs.core.truth_(or__3548__auto____4016))
{return or__3548__auto____4016;
} else
{return cljs.core._EQ_.call(null,ch__4015,"\r");
}
})()))
{{
var G__4017 = (index__4014 - 1);
index__4014 = G__4017;
continue;
}
} else
{return s.substring(0,index__4014);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__4018 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____4019 = cljs.core.not.call(null,s__4018);

if(cljs.core.truth_(or__3548__auto____4019))
{return or__3548__auto____4019;
} else
{var or__3548__auto____4020 = cljs.core._EQ_.call(null,"",s__4018);

if(cljs.core.truth_(or__3548__auto____4020))
{return or__3548__auto____4020;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__4018);
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
var buffer__4021 = (new goog.string.StringBuffer());
var length__4022 = s.length;

var index__4023 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__4022,index__4023)))
{return buffer__4021.toString();
} else
{var ch__4024 = s.charAt(index__4023);

var temp__3695__auto____4025 = cljs.core.get.call(null,cmap,ch__4024);

if(cljs.core.truth_(temp__3695__auto____4025))
{var replacement__4026 = temp__3695__auto____4025;

buffer__4021.append(cljs.core.str.call(null,replacement__4026));
} else
{buffer__4021.append(ch__4024);
}
{
var G__4027 = (index__4023 + 1);
index__4023 = G__4027;
continue;
}
}
break;
}
});
