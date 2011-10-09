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
{var sb__4123 = (new goog.string.StringBuffer());

var coll__4124 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__4124))
{sb__4123.append(cljs.core.first.call(null,coll__4124));
{
var G__4125 = cljs.core.next.call(null,coll__4124);
coll__4124 = G__4125;
continue;
}
} else
{}
break;
}
return sb__4123.toString();
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
var join__4126 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__4127 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__4126.call(this,separator);
case  2 :
return join__4127.call(this,separator,coll);
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
var split__4135 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__4136 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__4129 = s;
var limit__4130 = limit;
var parts__4131 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__4130,1)))
{return cljs.core.conj.call(null,parts__4131,s__4129);
} else
{var temp__3695__auto____4132 = cljs.core.re_find.call(null,re,s__4129);

if(cljs.core.truth_(temp__3695__auto____4132))
{var m__4133 = temp__3695__auto____4132;

var index__4134 = s__4129.indexOf(m__4133);

{
var G__4138 = s__4129.substring((index__4134 + cljs.core.count.call(null,m__4133)));
var G__4139 = (limit__4130 - 1);
var G__4140 = cljs.core.conj.call(null,parts__4131,s__4129.substring(0,index__4134));
s__4129 = G__4138;
limit__4130 = G__4139;
parts__4131 = G__4140;
continue;
}
} else
{return cljs.core.conj.call(null,parts__4131,s__4129);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__4135.call(this,s,re);
case  3 :
return split__4136.call(this,s,re,limit);
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
var index__4141 = s.length;

while(true){
if(cljs.core.truth_((index__4141 === 0)))
{return "";
} else
{var ch__4142 = cljs.core.get.call(null,s,(index__4141 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____4143 = cljs.core._EQ_.call(null,ch__4142,"\n");

if(cljs.core.truth_(or__3548__auto____4143))
{return or__3548__auto____4143;
} else
{return cljs.core._EQ_.call(null,ch__4142,"\r");
}
})()))
{{
var G__4144 = (index__4141 - 1);
index__4141 = G__4144;
continue;
}
} else
{return s.substring(0,index__4141);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__4145 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____4146 = cljs.core.not.call(null,s__4145);

if(cljs.core.truth_(or__3548__auto____4146))
{return or__3548__auto____4146;
} else
{var or__3548__auto____4147 = cljs.core._EQ_.call(null,"",s__4145);

if(cljs.core.truth_(or__3548__auto____4147))
{return or__3548__auto____4147;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__4145);
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
var buffer__4148 = (new goog.string.StringBuffer());
var length__4149 = s.length;

var index__4150 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__4149,index__4150)))
{return buffer__4148.toString();
} else
{var ch__4151 = s.charAt(index__4150);

var temp__3695__auto____4152 = cljs.core.get.call(null,cmap,ch__4151);

if(cljs.core.truth_(temp__3695__auto____4152))
{var replacement__4153 = temp__3695__auto____4152;

buffer__4148.append(cljs.core.str.call(null,replacement__4153));
} else
{buffer__4148.append(ch__4151);
}
{
var G__4154 = (index__4150 + 1);
index__4150 = G__4154;
continue;
}
}
break;
}
});
