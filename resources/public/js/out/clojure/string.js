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
{var sb__3905 = (new goog.string.StringBuffer());

var coll__3906 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__3906))
{sb__3905.append(cljs.core.first.call(null,coll__3906));
{
var G__3907 = cljs.core.next.call(null,coll__3906);
coll__3906 = G__3907;
continue;
}
} else
{}
break;
}
return sb__3905.toString();
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
var join__3908 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__3909 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__3908.call(this,separator);
case  2 :
return join__3909.call(this,separator,coll);
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
var split__3917 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__3918 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__3911 = s;
var limit__3912 = limit;
var parts__3913 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__3912,1)))
{return cljs.core.conj.call(null,parts__3913,s__3911);
} else
{var temp__3695__auto____3914 = cljs.core.re_find.call(null,re,s__3911);

if(cljs.core.truth_(temp__3695__auto____3914))
{var m__3915 = temp__3695__auto____3914;

var index__3916 = s__3911.indexOf(m__3915);

{
var G__3920 = s__3911.substring((index__3916 + cljs.core.count.call(null,m__3915)));
var G__3921 = (limit__3912 - 1);
var G__3922 = cljs.core.conj.call(null,parts__3913,s__3911.substring(0,index__3916));
s__3911 = G__3920;
limit__3912 = G__3921;
parts__3913 = G__3922;
continue;
}
} else
{return cljs.core.conj.call(null,parts__3913,s__3911);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__3917.call(this,s,re);
case  3 :
return split__3918.call(this,s,re,limit);
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
var index__3923 = s.length;

while(true){
if(cljs.core.truth_((index__3923 === 0)))
{return "";
} else
{var ch__3924 = cljs.core.get.call(null,s,(index__3923 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____3925 = cljs.core._EQ_.call(null,ch__3924,"\n");

if(cljs.core.truth_(or__3548__auto____3925))
{return or__3548__auto____3925;
} else
{return cljs.core._EQ_.call(null,ch__3924,"\r");
}
})()))
{{
var G__3926 = (index__3923 - 1);
index__3923 = G__3926;
continue;
}
} else
{return s.substring(0,index__3923);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__3927 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____3928 = cljs.core.not.call(null,s__3927);

if(cljs.core.truth_(or__3548__auto____3928))
{return or__3548__auto____3928;
} else
{var or__3548__auto____3929 = cljs.core._EQ_.call(null,"",s__3927);

if(cljs.core.truth_(or__3548__auto____3929))
{return or__3548__auto____3929;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__3927);
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
var buffer__3930 = (new goog.string.StringBuffer());
var length__3931 = s.length;

var index__3932 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__3931,index__3932)))
{return buffer__3930.toString();
} else
{var ch__3933 = s.charAt(index__3932);

var temp__3695__auto____3934 = cljs.core.get.call(null,cmap,ch__3933);

if(cljs.core.truth_(temp__3695__auto____3934))
{var replacement__3935 = temp__3695__auto____3934;

buffer__3930.append(cljs.core.str.call(null,replacement__3935));
} else
{buffer__3930.append(ch__3933);
}
{
var G__3936 = (index__3932 + 1);
index__3932 = G__3936;
continue;
}
}
break;
}
});
