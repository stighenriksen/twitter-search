goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____3270 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3270))
{return or__3548__auto____3270;
} else
{var or__3548__auto____3271 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3271))
{return or__3548__auto____3271;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3272 = coll;

if(cljs.core.truth_(and__3546__auto____3272))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3272;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3273 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3273))
{return or__3548__auto____3273;
} else
{var or__3548__auto____3274 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3274))
{return or__3548__auto____3274;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3275 = coll;

if(cljs.core.truth_(and__3546__auto____3275))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3275;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3276 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3276))
{return or__3548__auto____3276;
} else
{var or__3548__auto____3277 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3277))
{return or__3548__auto____3277;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3278 = coll;

if(cljs.core.truth_(and__3546__auto____3278))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3278;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3279 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3279))
{return or__3548__auto____3279;
} else
{var or__3548__auto____3280 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3280))
{return or__3548__auto____3280;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__3287 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3281 = coll;

if(cljs.core.truth_(and__3546__auto____3281))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3281;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3282 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3282))
{return or__3548__auto____3282;
} else
{var or__3548__auto____3283 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3283))
{return or__3548__auto____3283;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3288 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3284 = coll;

if(cljs.core.truth_(and__3546__auto____3284))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3284;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3285 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3285))
{return or__3548__auto____3285;
} else
{var or__3548__auto____3286 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3286))
{return or__3548__auto____3286;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__3287.call(this,coll,n);
case  3 :
return _nth__3288.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3290 = coll;

if(cljs.core.truth_(and__3546__auto____3290))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3290;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3291 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3291))
{return or__3548__auto____3291;
} else
{var or__3548__auto____3292 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3292))
{return or__3548__auto____3292;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3293 = coll;

if(cljs.core.truth_(and__3546__auto____3293))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3293;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3294 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3294))
{return or__3548__auto____3294;
} else
{var or__3548__auto____3295 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3295))
{return or__3548__auto____3295;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__3302 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3296 = o;

if(cljs.core.truth_(and__3546__auto____3296))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3296;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3297 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3297))
{return or__3548__auto____3297;
} else
{var or__3548__auto____3298 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3298))
{return or__3548__auto____3298;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3303 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3299 = o;

if(cljs.core.truth_(and__3546__auto____3299))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3299;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3300 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3300))
{return or__3548__auto____3300;
} else
{var or__3548__auto____3301 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3301))
{return or__3548__auto____3301;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__3302.call(this,o,k);
case  3 :
return _lookup__3303.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3305 = coll;

if(cljs.core.truth_(and__3546__auto____3305))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3305;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3306 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3306))
{return or__3548__auto____3306;
} else
{var or__3548__auto____3307 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3307))
{return or__3548__auto____3307;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3308 = coll;

if(cljs.core.truth_(and__3546__auto____3308))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3308;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3309 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3309))
{return or__3548__auto____3309;
} else
{var or__3548__auto____3310 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3310))
{return or__3548__auto____3310;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3311 = coll;

if(cljs.core.truth_(and__3546__auto____3311))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3311;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3312 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3312))
{return or__3548__auto____3312;
} else
{var or__3548__auto____3313 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3313))
{return or__3548__auto____3313;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3314 = coll;

if(cljs.core.truth_(and__3546__auto____3314))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3314;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3315 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3315))
{return or__3548__auto____3315;
} else
{var or__3548__auto____3316 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3316))
{return or__3548__auto____3316;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3317 = coll;

if(cljs.core.truth_(and__3546__auto____3317))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3317;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3318 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3318))
{return or__3548__auto____3318;
} else
{var or__3548__auto____3319 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3319))
{return or__3548__auto____3319;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3320 = coll;

if(cljs.core.truth_(and__3546__auto____3320))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3320;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3321 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3321))
{return or__3548__auto____3321;
} else
{var or__3548__auto____3322 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3322))
{return or__3548__auto____3322;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3323 = coll;

if(cljs.core.truth_(and__3546__auto____3323))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3323;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3324 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3324))
{return or__3548__auto____3324;
} else
{var or__3548__auto____3325 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3325))
{return or__3548__auto____3325;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3326 = o;

if(cljs.core.truth_(and__3546__auto____3326))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3326;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3327 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3327))
{return or__3548__auto____3327;
} else
{var or__3548__auto____3328 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3328))
{return or__3548__auto____3328;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3329 = o;

if(cljs.core.truth_(and__3546__auto____3329))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3329;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3330 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3330))
{return or__3548__auto____3330;
} else
{var or__3548__auto____3331 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3331))
{return or__3548__auto____3331;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3332 = o;

if(cljs.core.truth_(and__3546__auto____3332))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3332;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3333 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3333))
{return or__3548__auto____3333;
} else
{var or__3548__auto____3334 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3334))
{return or__3548__auto____3334;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3335 = o;

if(cljs.core.truth_(and__3546__auto____3335))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3335;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3336 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3336))
{return or__3548__auto____3336;
} else
{var or__3548__auto____3337 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3337))
{return or__3548__auto____3337;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__3344 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3338 = coll;

if(cljs.core.truth_(and__3546__auto____3338))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3338;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3339 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3339))
{return or__3548__auto____3339;
} else
{var or__3548__auto____3340 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3340))
{return or__3548__auto____3340;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3345 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3341 = coll;

if(cljs.core.truth_(and__3546__auto____3341))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3341;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3342 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3342))
{return or__3548__auto____3342;
} else
{var or__3548__auto____3343 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3343))
{return or__3548__auto____3343;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__3344.call(this,coll,f);
case  3 :
return _reduce__3345.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3347 = o;

if(cljs.core.truth_(and__3546__auto____3347))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3347;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3348 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3348))
{return or__3548__auto____3348;
} else
{var or__3548__auto____3349 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3349))
{return or__3548__auto____3349;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3350 = o;

if(cljs.core.truth_(and__3546__auto____3350))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3350;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3351 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3351))
{return or__3548__auto____3351;
} else
{var or__3548__auto____3352 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3352))
{return or__3548__auto____3352;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3353 = o;

if(cljs.core.truth_(and__3546__auto____3353))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3353;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3354 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3354))
{return or__3548__auto____3354;
} else
{var or__3548__auto____3355 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3355))
{return or__3548__auto____3355;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____3356 = o;

if(cljs.core.truth_(and__3546__auto____3356))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3356;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3357 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3357))
{return or__3548__auto____3357;
} else
{var or__3548__auto____3358 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3358))
{return or__3548__auto____3358;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3359 = d;

if(cljs.core.truth_(and__3546__auto____3359))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3359;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3360 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3360))
{return or__3548__auto____3360;
} else
{var or__3548__auto____3361 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3361))
{return or__3548__auto____3361;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3362 = this$;

if(cljs.core.truth_(and__3546__auto____3362))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3362;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3363 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3363))
{return or__3548__auto____3363;
} else
{var or__3548__auto____3364 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3364))
{return or__3548__auto____3364;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3365 = this$;

if(cljs.core.truth_(and__3546__auto____3365))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3365;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3366 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3366))
{return or__3548__auto____3366;
} else
{var or__3548__auto____3367 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3367))
{return or__3548__auto____3367;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3368 = this$;

if(cljs.core.truth_(and__3546__auto____3368))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3368;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3369 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3369))
{return or__3548__auto____3369;
} else
{var or__3548__auto____3370 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3370))
{return or__3548__auto____3370;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__3371 = null;
var G__3371__3372 = (function (_,n){
return null;
});
var G__3371__3373 = (function (_,n,not_found){
return not_found;
});
G__3371 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3371__3372.call(this,_,n);
case  3 :
return G__3371__3373.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3371;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__3375 = null;
var G__3375__3376 = (function (_,f){
return f.call(null);
});
var G__3375__3377 = (function (_,f,start){
return start;
});
G__3375 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3375__3376.call(this,_,f);
case  3 :
return G__3375__3377.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3375;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3379 = null;
var G__3379__3380 = (function (o,k){
return null;
});
var G__3379__3381 = (function (o,k,not_found){
return not_found;
});
G__3379 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3379__3380.call(this,o,k);
case  3 :
return G__3379__3381.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3379;
})()
);
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString(),other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__3389 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3383 = cljs.core._nth.call(null,cicoll,0);
var n__3384 = 1;

while(true){
if(cljs.core.truth_((n__3384 < cljs.core._count.call(null,cicoll))))
{{
var G__3393 = f.call(null,val__3383,cljs.core._nth.call(null,cicoll,n__3384));
var G__3394 = (n__3384 + 1);
val__3383 = G__3393;
n__3384 = G__3394;
continue;
}
} else
{return val__3383;
}
break;
}
}
});
var ci_reduce__3390 = (function (cicoll,f,val){
var val__3385 = val;
var n__3386 = 0;

while(true){
if(cljs.core.truth_((n__3386 < cljs.core._count.call(null,cicoll))))
{{
var G__3395 = f.call(null,val__3385,cljs.core._nth.call(null,cicoll,n__3386));
var G__3396 = (n__3386 + 1);
val__3385 = G__3395;
n__3386 = G__3396;
continue;
}
} else
{return val__3385;
}
break;
}
});
var ci_reduce__3391 = (function (cicoll,f,val,idx){
var val__3387 = val;
var n__3388 = idx;

while(true){
if(cljs.core.truth_((n__3388 < cljs.core._count.call(null,cicoll))))
{{
var G__3397 = f.call(null,val__3387,cljs.core._nth.call(null,cicoll,n__3388));
var G__3398 = (n__3388 + 1);
val__3387 = G__3397;
n__3388 = G__3398;
continue;
}
} else
{return val__3387;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3389.call(this,cicoll,f);
case  3 :
return ci_reduce__3390.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3391.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3399 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3407 = null;
var G__3407__3408 = (function (coll,f){
var this__3400 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__3400.a[this__3400.i]),(this__3400.i + 1));
});
var G__3407__3409 = (function (coll,f,start){
var this__3401 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__3401.i);
});
G__3407 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3407__3408.call(this,coll,f);
case  3 :
return G__3407__3409.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3407;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3402 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3403 = this;
return this__3403.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3404 = this;
return (this__3404.a[this__3404.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3405 = this;
if(cljs.core.truth_(((this__3405.i + 1) < this__3405.a.length)))
{return (new cljs.core.IndexedSeq(this__3405.a,(this__3405.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3406 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__3411 = null;
var G__3411__3412 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3411__3413 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3411 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3411__3412.call(this,array,f);
case  3 :
return G__3411__3413.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3411;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3415 = null;
var G__3415__3416 = (function (array,k){
return (array[k]);
});
var G__3415__3417 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3415 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3415__3416.call(this,array,k);
case  3 :
return G__3415__3417.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3415;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3419 = null;
var G__3419__3420 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3419__3421 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3419 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3419__3420.call(this,array,n);
case  3 :
return G__3419__3421.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3419;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____3423 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3423))
{var s__3424 = temp__3698__auto____3423;

return cljs.core._first.call(null,s__3424);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__3425 = cljs.core.next.call(null,s);
s = G__3425;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__3426 = cljs.core.seq.call(null,x);
var n__3427 = 0;

while(true){
if(cljs.core.truth_(s__3426))
{{
var G__3428 = cljs.core.next.call(null,s__3426);
var G__3429 = (n__3427 + 1);
s__3426 = G__3428;
n__3427 = G__3429;
continue;
}
} else
{return n__3427;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__3430 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3431 = (function() { 
var G__3433__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3434 = conj.call(null,coll,x);
var G__3435 = cljs.core.first.call(null,xs);
var G__3436 = cljs.core.next.call(null,xs);
coll = G__3434;
x = G__3435;
xs = G__3436;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3433 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3433__delegate.call(this, coll, x, xs);
};
G__3433.cljs$lang$maxFixedArity = 2;
G__3433.cljs$lang$applyTo = (function (arglist__3437){
var coll = cljs.core.first(arglist__3437);
var x = cljs.core.first(cljs.core.next(arglist__3437));
var xs = cljs.core.rest(cljs.core.next(arglist__3437));
return G__3433__delegate.call(this, coll, x, xs);
});
return G__3433;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3430.call(this,coll,x);
default:
return conj__3431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3431.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__3438 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__3439 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3438.call(this,coll,n);
case  3 :
return nth__3439.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__3441 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3442 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3441.call(this,o,k);
case  3 :
return get__3442.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3445 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3446 = (function() { 
var G__3448__delegate = function (coll,k,v,kvs){
while(true){
var ret__3444 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3449 = ret__3444;
var G__3450 = cljs.core.first.call(null,kvs);
var G__3451 = cljs.core.second.call(null,kvs);
var G__3452 = cljs.core.nnext.call(null,kvs);
coll = G__3449;
k = G__3450;
v = G__3451;
kvs = G__3452;
continue;
}
} else
{return ret__3444;
}
break;
}
};
var G__3448 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3448__delegate.call(this, coll, k, v, kvs);
};
G__3448.cljs$lang$maxFixedArity = 3;
G__3448.cljs$lang$applyTo = (function (arglist__3453){
var coll = cljs.core.first(arglist__3453);
var k = cljs.core.first(cljs.core.next(arglist__3453));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3453)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3453)));
return G__3448__delegate.call(this, coll, k, v, kvs);
});
return G__3448;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3445.call(this,coll,k,v);
default:
return assoc__3446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3446.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__3455 = (function (coll){
return coll;
});
var dissoc__3456 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3457 = (function() { 
var G__3459__delegate = function (coll,k,ks){
while(true){
var ret__3454 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3460 = ret__3454;
var G__3461 = cljs.core.first.call(null,ks);
var G__3462 = cljs.core.next.call(null,ks);
coll = G__3460;
k = G__3461;
ks = G__3462;
continue;
}
} else
{return ret__3454;
}
break;
}
};
var G__3459 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3459__delegate.call(this, coll, k, ks);
};
G__3459.cljs$lang$maxFixedArity = 2;
G__3459.cljs$lang$applyTo = (function (arglist__3463){
var coll = cljs.core.first(arglist__3463);
var k = cljs.core.first(cljs.core.next(arglist__3463));
var ks = cljs.core.rest(cljs.core.next(arglist__3463));
return G__3459__delegate.call(this, coll, k, ks);
});
return G__3459;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3455.call(this,coll);
case  2 :
return dissoc__3456.call(this,coll,k);
default:
return dissoc__3457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3457.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__300__auto____3464 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3465 = x__300__auto____3464;

if(cljs.core.truth_(and__3546__auto____3465))
{var and__3546__auto____3466 = x__300__auto____3464.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3466))
{return cljs.core.not.call(null,x__300__auto____3464.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3466;
}
} else
{return and__3546__auto____3465;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__300__auto____3464);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__3468 = (function (coll){
return coll;
});
var disj__3469 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3470 = (function() { 
var G__3472__delegate = function (coll,k,ks){
while(true){
var ret__3467 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3473 = ret__3467;
var G__3474 = cljs.core.first.call(null,ks);
var G__3475 = cljs.core.next.call(null,ks);
coll = G__3473;
k = G__3474;
ks = G__3475;
continue;
}
} else
{return ret__3467;
}
break;
}
};
var G__3472 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3472__delegate.call(this, coll, k, ks);
};
G__3472.cljs$lang$maxFixedArity = 2;
G__3472.cljs$lang$applyTo = (function (arglist__3476){
var coll = cljs.core.first(arglist__3476);
var k = cljs.core.first(cljs.core.next(arglist__3476));
var ks = cljs.core.rest(cljs.core.next(arglist__3476));
return G__3472__delegate.call(this, coll, k, ks);
});
return G__3472;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3468.call(this,coll);
case  2 :
return disj__3469.call(this,coll,k);
default:
return disj__3470.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3470.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__300__auto____3477 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3478 = x__300__auto____3477;

if(cljs.core.truth_(and__3546__auto____3478))
{var and__3546__auto____3479 = x__300__auto____3477.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3479))
{return cljs.core.not.call(null,x__300__auto____3477.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3479;
}
} else
{return and__3546__auto____3478;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__300__auto____3477);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__300__auto____3480 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3481 = x__300__auto____3480;

if(cljs.core.truth_(and__3546__auto____3481))
{var and__3546__auto____3482 = x__300__auto____3480.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3482))
{return cljs.core.not.call(null,x__300__auto____3480.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3482;
}
} else
{return and__3546__auto____3481;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__300__auto____3480);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__300__auto____3483 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3484 = x__300__auto____3483;

if(cljs.core.truth_(and__3546__auto____3484))
{var and__3546__auto____3485 = x__300__auto____3483.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3485))
{return cljs.core.not.call(null,x__300__auto____3483.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3485;
}
} else
{return and__3546__auto____3484;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__300__auto____3483);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__300__auto____3486 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3487 = x__300__auto____3486;

if(cljs.core.truth_(and__3546__auto____3487))
{var and__3546__auto____3488 = x__300__auto____3486.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3488))
{return cljs.core.not.call(null,x__300__auto____3486.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3488;
}
} else
{return and__3546__auto____3487;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__300__auto____3486);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__300__auto____3489 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3490 = x__300__auto____3489;

if(cljs.core.truth_(and__3546__auto____3490))
{var and__3546__auto____3491 = x__300__auto____3489.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3491))
{return cljs.core.not.call(null,x__300__auto____3489.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3491;
}
} else
{return and__3546__auto____3490;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__300__auto____3489);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__300__auto____3492 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3493 = x__300__auto____3492;

if(cljs.core.truth_(and__3546__auto____3493))
{var and__3546__auto____3494 = x__300__auto____3492.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3494))
{return cljs.core.not.call(null,x__300__auto____3492.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3494;
}
} else
{return and__3546__auto____3493;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__300__auto____3492);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__300__auto____3495 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3496 = x__300__auto____3495;

if(cljs.core.truth_(and__3546__auto____3496))
{var and__3546__auto____3497 = x__300__auto____3495.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3497))
{return cljs.core.not.call(null,x__300__auto____3495.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3497;
}
} else
{return and__3546__auto____3496;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__300__auto____3495);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3498 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3498.push(key);
}));
return keys__3498;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__300__auto____3499 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3500 = x__300__auto____3499;

if(cljs.core.truth_(and__3546__auto____3500))
{var and__3546__auto____3501 = x__300__auto____3499.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3501))
{return cljs.core.not.call(null,x__300__auto____3499.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3501;
}
} else
{return and__3546__auto____3500;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__300__auto____3499);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____3502 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3502))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3503 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3503))
{return or__3548__auto____3503;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3502;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3504 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3504))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3504;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3505 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3505))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3505;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____3506 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3506))
{return (n == n.toFixed());
} else
{return and__3546__auto____3506;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3507 = coll;

if(cljs.core.truth_(and__3546__auto____3507))
{var and__3546__auto____3508 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3508))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3508;
}
} else
{return and__3546__auto____3507;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___3513 = (function (x){
return true;
});
var distinct_QMARK___3514 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3515 = (function() { 
var G__3517__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3509 = cljs.core.set([y,x]);
var xs__3510 = more;

while(true){
var x__3511 = cljs.core.first.call(null,xs__3510);
var etc__3512 = cljs.core.next.call(null,xs__3510);

if(cljs.core.truth_(xs__3510))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3509,x__3511)))
{return false;
} else
{{
var G__3518 = cljs.core.conj.call(null,s__3509,x__3511);
var G__3519 = etc__3512;
s__3509 = G__3518;
xs__3510 = G__3519;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3517 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3517__delegate.call(this, x, y, more);
};
G__3517.cljs$lang$maxFixedArity = 2;
G__3517.cljs$lang$applyTo = (function (arglist__3520){
var x = cljs.core.first(arglist__3520);
var y = cljs.core.first(cljs.core.next(arglist__3520));
var more = cljs.core.rest(cljs.core.next(arglist__3520));
return G__3517__delegate.call(this, x, y, more);
});
return G__3517;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3513.call(this,x);
case  2 :
return distinct_QMARK___3514.call(this,x,y);
default:
return distinct_QMARK___3515.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3515.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__3521 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3521)))
{return r__3521;
} else
{if(cljs.core.truth_(r__3521))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__3523 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3524 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3522 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3522,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3522);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3523.call(this,comp);
case  2 :
return sort__3524.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__3526 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3527 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3526.call(this,keyfn,comp);
case  3 :
return sort_by__3527.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__3529 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3530 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3529.call(this,f,val);
case  3 :
return reduce__3530.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3536 = (function (f,coll){
var temp__3695__auto____3532 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3532))
{var s__3533 = temp__3695__auto____3532;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3533),cljs.core.next.call(null,s__3533));
} else
{return f.call(null);
}
});
var seq_reduce__3537 = (function (f,val,coll){
var val__3534 = val;
var coll__3535 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3535))
{{
var G__3539 = f.call(null,val__3534,cljs.core.first.call(null,coll__3535));
var G__3540 = cljs.core.next.call(null,coll__3535);
val__3534 = G__3539;
coll__3535 = G__3540;
continue;
}
} else
{return val__3534;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3536.call(this,f,val);
case  3 :
return seq_reduce__3537.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3541 = null;
var G__3541__3542 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3541__3543 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3541 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3541__3542.call(this,coll,f);
case  3 :
return G__3541__3543.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3541;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3545 = (function (){
return 0;
});
var _PLUS___3546 = (function (x){
return x;
});
var _PLUS___3547 = (function (x,y){
return (x + y);
});
var _PLUS___3548 = (function() { 
var G__3550__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__3550 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3550__delegate.call(this, x, y, more);
};
G__3550.cljs$lang$maxFixedArity = 2;
G__3550.cljs$lang$applyTo = (function (arglist__3551){
var x = cljs.core.first(arglist__3551);
var y = cljs.core.first(cljs.core.next(arglist__3551));
var more = cljs.core.rest(cljs.core.next(arglist__3551));
return G__3550__delegate.call(this, x, y, more);
});
return G__3550;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3545.call(this);
case  1 :
return _PLUS___3546.call(this,x);
case  2 :
return _PLUS___3547.call(this,x,y);
default:
return _PLUS___3548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3548.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___3552 = (function (x){
return (- x);
});
var ___3553 = (function (x,y){
return (x - y);
});
var ___3554 = (function() { 
var G__3556__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__3556 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3556__delegate.call(this, x, y, more);
};
G__3556.cljs$lang$maxFixedArity = 2;
G__3556.cljs$lang$applyTo = (function (arglist__3557){
var x = cljs.core.first(arglist__3557);
var y = cljs.core.first(cljs.core.next(arglist__3557));
var more = cljs.core.rest(cljs.core.next(arglist__3557));
return G__3556__delegate.call(this, x, y, more);
});
return G__3556;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3552.call(this,x);
case  2 :
return ___3553.call(this,x,y);
default:
return ___3554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3554.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3558 = (function (){
return 1;
});
var _STAR___3559 = (function (x){
return x;
});
var _STAR___3560 = (function (x,y){
return (x * y);
});
var _STAR___3561 = (function() { 
var G__3563__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__3563 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3563__delegate.call(this, x, y, more);
};
G__3563.cljs$lang$maxFixedArity = 2;
G__3563.cljs$lang$applyTo = (function (arglist__3564){
var x = cljs.core.first(arglist__3564);
var y = cljs.core.first(cljs.core.next(arglist__3564));
var more = cljs.core.rest(cljs.core.next(arglist__3564));
return G__3563__delegate.call(this, x, y, more);
});
return G__3563;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3558.call(this);
case  1 :
return _STAR___3559.call(this,x);
case  2 :
return _STAR___3560.call(this,x,y);
default:
return _STAR___3561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3561.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___3565 = (function (x){
return (1 / x);
});
var _SLASH___3566 = (function (x,y){
return (x / y);
});
var _SLASH___3567 = (function() { 
var G__3569__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3569 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3569__delegate.call(this, x, y, more);
};
G__3569.cljs$lang$maxFixedArity = 2;
G__3569.cljs$lang$applyTo = (function (arglist__3570){
var x = cljs.core.first(arglist__3570);
var y = cljs.core.first(cljs.core.next(arglist__3570));
var more = cljs.core.rest(cljs.core.next(arglist__3570));
return G__3569__delegate.call(this, x, y, more);
});
return G__3569;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3565.call(this,x);
case  2 :
return _SLASH___3566.call(this,x,y);
default:
return _SLASH___3567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3567.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___3571 = (function (x){
return true;
});
var _LT___3572 = (function (x,y){
return (x < y);
});
var _LT___3573 = (function() { 
var G__3575__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3576 = y;
var G__3577 = cljs.core.first.call(null,more);
var G__3578 = cljs.core.next.call(null,more);
x = G__3576;
y = G__3577;
more = G__3578;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3575 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3575__delegate.call(this, x, y, more);
};
G__3575.cljs$lang$maxFixedArity = 2;
G__3575.cljs$lang$applyTo = (function (arglist__3579){
var x = cljs.core.first(arglist__3579);
var y = cljs.core.first(cljs.core.next(arglist__3579));
var more = cljs.core.rest(cljs.core.next(arglist__3579));
return G__3575__delegate.call(this, x, y, more);
});
return G__3575;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3571.call(this,x);
case  2 :
return _LT___3572.call(this,x,y);
default:
return _LT___3573.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3573.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___3580 = (function (x){
return true;
});
var _LT__EQ___3581 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3582 = (function() { 
var G__3584__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3585 = y;
var G__3586 = cljs.core.first.call(null,more);
var G__3587 = cljs.core.next.call(null,more);
x = G__3585;
y = G__3586;
more = G__3587;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3584 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3584__delegate.call(this, x, y, more);
};
G__3584.cljs$lang$maxFixedArity = 2;
G__3584.cljs$lang$applyTo = (function (arglist__3588){
var x = cljs.core.first(arglist__3588);
var y = cljs.core.first(cljs.core.next(arglist__3588));
var more = cljs.core.rest(cljs.core.next(arglist__3588));
return G__3584__delegate.call(this, x, y, more);
});
return G__3584;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3580.call(this,x);
case  2 :
return _LT__EQ___3581.call(this,x,y);
default:
return _LT__EQ___3582.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3582.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___3589 = (function (x){
return true;
});
var _GT___3590 = (function (x,y){
return (x > y);
});
var _GT___3591 = (function() { 
var G__3593__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3594 = y;
var G__3595 = cljs.core.first.call(null,more);
var G__3596 = cljs.core.next.call(null,more);
x = G__3594;
y = G__3595;
more = G__3596;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3593 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3593__delegate.call(this, x, y, more);
};
G__3593.cljs$lang$maxFixedArity = 2;
G__3593.cljs$lang$applyTo = (function (arglist__3597){
var x = cljs.core.first(arglist__3597);
var y = cljs.core.first(cljs.core.next(arglist__3597));
var more = cljs.core.rest(cljs.core.next(arglist__3597));
return G__3593__delegate.call(this, x, y, more);
});
return G__3593;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3589.call(this,x);
case  2 :
return _GT___3590.call(this,x,y);
default:
return _GT___3591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3591.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___3598 = (function (x){
return true;
});
var _GT__EQ___3599 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3600 = (function() { 
var G__3602__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3603 = y;
var G__3604 = cljs.core.first.call(null,more);
var G__3605 = cljs.core.next.call(null,more);
x = G__3603;
y = G__3604;
more = G__3605;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3602 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3602__delegate.call(this, x, y, more);
};
G__3602.cljs$lang$maxFixedArity = 2;
G__3602.cljs$lang$applyTo = (function (arglist__3606){
var x = cljs.core.first(arglist__3606);
var y = cljs.core.first(cljs.core.next(arglist__3606));
var more = cljs.core.rest(cljs.core.next(arglist__3606));
return G__3602__delegate.call(this, x, y, more);
});
return G__3602;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3598.call(this,x);
case  2 :
return _GT__EQ___3599.call(this,x,y);
default:
return _GT__EQ___3600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3600.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__3607 = (function (x){
return x;
});
var max__3608 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3609 = (function() { 
var G__3611__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__3611 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3611__delegate.call(this, x, y, more);
};
G__3611.cljs$lang$maxFixedArity = 2;
G__3611.cljs$lang$applyTo = (function (arglist__3612){
var x = cljs.core.first(arglist__3612);
var y = cljs.core.first(cljs.core.next(arglist__3612));
var more = cljs.core.rest(cljs.core.next(arglist__3612));
return G__3611__delegate.call(this, x, y, more);
});
return G__3611;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3607.call(this,x);
case  2 :
return max__3608.call(this,x,y);
default:
return max__3609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3609.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3613 = (function (x){
return x;
});
var min__3614 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3615 = (function() { 
var G__3617__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__3617 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3617__delegate.call(this, x, y, more);
};
G__3617.cljs$lang$maxFixedArity = 2;
G__3617.cljs$lang$applyTo = (function (arglist__3618){
var x = cljs.core.first(arglist__3618);
var y = cljs.core.first(cljs.core.next(arglist__3618));
var more = cljs.core.rest(cljs.core.next(arglist__3618));
return G__3617__delegate.call(this, x, y, more);
});
return G__3617;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3613.call(this,x);
case  2 :
return min__3614.call(this,x,y);
default:
return min__3615.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3615.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__3619 = (n % d);

return cljs.core.fix.call(null,((n - rem__3619) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3620 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3620));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3621 = (function (){
return Math.random.call(null);
});
var rand__3622 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3621.call(this);
case  1 :
return rand__3622.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___3624 = (function (x){
return true;
});
var _EQ__EQ___3625 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3626 = (function() { 
var G__3628__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3629 = y;
var G__3630 = cljs.core.first.call(null,more);
var G__3631 = cljs.core.next.call(null,more);
x = G__3629;
y = G__3630;
more = G__3631;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3628 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3628__delegate.call(this, x, y, more);
};
G__3628.cljs$lang$maxFixedArity = 2;
G__3628.cljs$lang$applyTo = (function (arglist__3632){
var x = cljs.core.first(arglist__3632);
var y = cljs.core.first(cljs.core.next(arglist__3632));
var more = cljs.core.rest(cljs.core.next(arglist__3632));
return G__3628__delegate.call(this, x, y, more);
});
return G__3628;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3624.call(this,x);
case  2 :
return _EQ__EQ___3625.call(this,x,y);
default:
return _EQ__EQ___3626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3626.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__3633 = n;
var xs__3634 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3635 = xs__3634;

if(cljs.core.truth_(and__3546__auto____3635))
{return (n__3633 > 0);
} else
{return and__3546__auto____3635;
}
})()))
{{
var G__3636 = (n__3633 - 1);
var G__3637 = cljs.core.next.call(null,xs__3634);
n__3633 = G__3636;
xs__3634 = G__3637;
continue;
}
} else
{return xs__3634;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3642 = null;
var G__3642__3643 = (function (coll,n){
var temp__3695__auto____3638 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3638))
{var xs__3639 = temp__3695__auto____3638;

return cljs.core.first.call(null,xs__3639);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3642__3644 = (function (coll,n,not_found){
var temp__3695__auto____3640 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3640))
{var xs__3641 = temp__3695__auto____3640;

return cljs.core.first.call(null,xs__3641);
} else
{return not_found;
}
});
G__3642 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3642__3643.call(this,coll,n);
case  3 :
return G__3642__3644.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3642;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__3646 = (function (){
return "";
});
var str__3647 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__3648 = (function() { 
var G__3650__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3651 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3652 = cljs.core.next.call(null,more);
sb = G__3651;
more = G__3652;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3650 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3650__delegate.call(this, x, ys);
};
G__3650.cljs$lang$maxFixedArity = 1;
G__3650.cljs$lang$applyTo = (function (arglist__3653){
var x = cljs.core.first(arglist__3653);
var ys = cljs.core.rest(arglist__3653);
return G__3650__delegate.call(this, x, ys);
});
return G__3650;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3646.call(this);
case  1 :
return str__3647.call(this,x);
default:
return str__3648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3648.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3654 = (function (s,start){
return s.substring(start);
});
var subs__3655 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3654.call(this,s,start);
case  3 :
return subs__3655.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__3657 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__3658 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3657.call(this,ns);
case  2 :
return symbol__3658.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__3660 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__3661 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3660.call(this,ns);
case  2 :
return keyword__3661.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3663 = cljs.core.seq.call(null,x);
var ys__3664 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__3663)))
{return cljs.core.nil_QMARK_.call(null,ys__3664);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__3664)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3663),cljs.core.first.call(null,ys__3664))))
{{
var G__3665 = cljs.core.next.call(null,xs__3663);
var G__3666 = cljs.core.next.call(null,ys__3664);
xs__3663 = G__3665;
ys__3664 = G__3666;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__3667_SHARP_,p2__3668_SHARP_){
return cljs.core.hash_combine.call(null,p1__3667_SHARP_,cljs.core.hash.call(null,p2__3668_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3669 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3670 = this;
return (new cljs.core.List(this__3670.meta,o,coll,(this__3670.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3671 = this;
return this__3671.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3672 = this;
return this__3672.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3673 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3674 = this;
return this__3674.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3675 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3676 = this;
return (new cljs.core.List(meta,this__3676.first,this__3676.rest,this__3676.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3677 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3678 = this;
return this__3678.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3679 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3680 = this;
return this__3680.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3681 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3682 = this;
return (new cljs.core.List(this__3682.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3683 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3684 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3685 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3686 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3687 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3688 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3689 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3690 = this;
return this__3690.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3691 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3692 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__3693){
var items = cljs.core.seq( arglist__3693 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3694 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3695 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3696 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3697 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3697.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3698 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3699 = this;
return this__3699.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3700 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3700.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3700.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3701 = this;
return this__3701.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3702 = this;
return (new cljs.core.Cons(meta,this__3702.first,this__3702.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3703 = null;
var G__3703__3704 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3703__3705 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3703 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3703__3704.call(this,string,f);
case  3 :
return G__3703__3705.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3703;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3707 = null;
var G__3707__3708 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3707__3709 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3707 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3707__3708.call(this,string,k);
case  3 :
return G__3707__3709.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3707;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3711 = null;
var G__3711__3712 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3711__3713 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3711 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3711__3712.call(this,string,n);
case  3 :
return G__3711__3713.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3711;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__3715 = null;
var G__3715__3716 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__3715__3717 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__3715 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__3715__3716.call(this,_,coll);
case  3 :
return G__3715__3717.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3715;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__3719 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3719;
} else
{lazy_seq.x = x__3719.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3720 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3721 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3722 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3723 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3723.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3724 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3725 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3726 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3727 = this;
return this__3727.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3728 = this;
return (new cljs.core.LazySeq(meta,this__3728.realized,this__3728.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3729 = cljs.core.array.call(null);

var s__3730 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3730)))
{ary__3729.push(cljs.core.first.call(null,s__3730));
{
var G__3731 = cljs.core.next.call(null,s__3730);
s__3730 = G__3731;
continue;
}
} else
{return ary__3729;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3732 = s;
var i__3733 = n;
var sum__3734 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3735 = (i__3733 > 0);

if(cljs.core.truth_(and__3546__auto____3735))
{return cljs.core.seq.call(null,s__3732);
} else
{return and__3546__auto____3735;
}
})()))
{{
var G__3736 = cljs.core.next.call(null,s__3732);
var G__3737 = (i__3733 - 1);
var G__3738 = (sum__3734 + 1);
s__3732 = G__3736;
i__3733 = G__3737;
sum__3734 = G__3738;
continue;
}
} else
{return sum__3734;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__3742 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3743 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3744 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3739 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3739))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3739),concat.call(null,cljs.core.rest.call(null,s__3739),y));
} else
{return y;
}
})));
});
var concat__3745 = (function() { 
var G__3747__delegate = function (x,y,zs){
var cat__3741 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3740 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3740))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3740),cat.call(null,cljs.core.rest.call(null,xys__3740),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3741.call(null,concat.call(null,x,y),zs);
};
var G__3747 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3747__delegate.call(this, x, y, zs);
};
G__3747.cljs$lang$maxFixedArity = 2;
G__3747.cljs$lang$applyTo = (function (arglist__3748){
var x = cljs.core.first(arglist__3748);
var y = cljs.core.first(cljs.core.next(arglist__3748));
var zs = cljs.core.rest(cljs.core.next(arglist__3748));
return G__3747__delegate.call(this, x, y, zs);
});
return G__3747;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3742.call(this);
case  1 :
return concat__3743.call(this,x);
case  2 :
return concat__3744.call(this,x,y);
default:
return concat__3745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3745.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___3749 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3750 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3751 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3752 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3753 = (function() { 
var G__3755__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3755 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3755__delegate.call(this, a, b, c, d, more);
};
G__3755.cljs$lang$maxFixedArity = 4;
G__3755.cljs$lang$applyTo = (function (arglist__3756){
var a = cljs.core.first(arglist__3756);
var b = cljs.core.first(cljs.core.next(arglist__3756));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3756)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3756))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3756))));
return G__3755__delegate.call(this, a, b, c, d, more);
});
return G__3755;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3749.call(this,a);
case  2 :
return list_STAR___3750.call(this,a,b);
case  3 :
return list_STAR___3751.call(this,a,b,c);
case  4 :
return list_STAR___3752.call(this,a,b,c,d);
default:
return list_STAR___3753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3753.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__3766 = (function (f,args){
var fixed_arity__3757 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3757 + 1)) <= fixed_arity__3757)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3767 = (function (f,x,args){
var arglist__3758 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3759 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3758,fixed_arity__3759) <= fixed_arity__3759)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3758));
} else
{return f.cljs$lang$applyTo(arglist__3758);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3758));
}
});
var apply__3768 = (function (f,x,y,args){
var arglist__3760 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3761 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3760,fixed_arity__3761) <= fixed_arity__3761)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3760));
} else
{return f.cljs$lang$applyTo(arglist__3760);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3760));
}
});
var apply__3769 = (function (f,x,y,z,args){
var arglist__3762 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3763 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3762,fixed_arity__3763) <= fixed_arity__3763)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3762));
} else
{return f.cljs$lang$applyTo(arglist__3762);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3762));
}
});
var apply__3770 = (function() { 
var G__3772__delegate = function (f,a,b,c,d,args){
var arglist__3764 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3765 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3764,fixed_arity__3765) <= fixed_arity__3765)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3764));
} else
{return f.cljs$lang$applyTo(arglist__3764);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3764));
}
};
var G__3772 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3772__delegate.call(this, f, a, b, c, d, args);
};
G__3772.cljs$lang$maxFixedArity = 5;
G__3772.cljs$lang$applyTo = (function (arglist__3773){
var f = cljs.core.first(arglist__3773);
var a = cljs.core.first(cljs.core.next(arglist__3773));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3773)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3773))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3773)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3773)))));
return G__3772__delegate.call(this, f, a, b, c, d, args);
});
return G__3772;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3766.call(this,f,a);
case  3 :
return apply__3767.call(this,f,a,b);
case  4 :
return apply__3768.call(this,f,a,b,c);
case  5 :
return apply__3769.call(this,f,a,b,c,d);
default:
return apply__3770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3770.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3774){
var obj = cljs.core.first(arglist__3774);
var f = cljs.core.first(cljs.core.next(arglist__3774));
var args = cljs.core.rest(cljs.core.next(arglist__3774));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3775 = (function (x){
return false;
});
var not_EQ___3776 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3777 = (function() { 
var G__3779__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3779 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3779__delegate.call(this, x, y, more);
};
G__3779.cljs$lang$maxFixedArity = 2;
G__3779.cljs$lang$applyTo = (function (arglist__3780){
var x = cljs.core.first(arglist__3780);
var y = cljs.core.first(cljs.core.next(arglist__3780));
var more = cljs.core.rest(cljs.core.next(arglist__3780));
return G__3779__delegate.call(this, x, y, more);
});
return G__3779;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3775.call(this,x);
case  2 :
return not_EQ___3776.call(this,x,y);
default:
return not_EQ___3777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3777.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3781 = pred;
var G__3782 = cljs.core.next.call(null,coll);
pred = G__3781;
coll = G__3782;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3783 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3783))
{return or__3548__auto____3783;
} else
{{
var G__3784 = pred;
var G__3785 = cljs.core.next.call(null,coll);
pred = G__3784;
coll = G__3785;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3786 = null;
var G__3786__3787 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3786__3788 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3786__3789 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3786__3790 = (function() { 
var G__3792__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3792 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3792__delegate.call(this, x, y, zs);
};
G__3792.cljs$lang$maxFixedArity = 2;
G__3792.cljs$lang$applyTo = (function (arglist__3793){
var x = cljs.core.first(arglist__3793);
var y = cljs.core.first(cljs.core.next(arglist__3793));
var zs = cljs.core.rest(cljs.core.next(arglist__3793));
return G__3792__delegate.call(this, x, y, zs);
});
return G__3792;
})()
;
G__3786 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3786__3787.call(this);
case  1 :
return G__3786__3788.call(this,x);
case  2 :
return G__3786__3789.call(this,x,y);
default:
return G__3786__3790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3786.cljs$lang$maxFixedArity = 2;
G__3786.cljs$lang$applyTo = G__3786__3790.cljs$lang$applyTo;
return G__3786;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3794__delegate = function (args){
return x;
};
var G__3794 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3794__delegate.call(this, args);
};
G__3794.cljs$lang$maxFixedArity = 0;
G__3794.cljs$lang$applyTo = (function (arglist__3795){
var args = cljs.core.seq( arglist__3795 );;
return G__3794__delegate.call(this, args);
});
return G__3794;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3799 = (function (){
return cljs.core.identity;
});
var comp__3800 = (function (f){
return f;
});
var comp__3801 = (function (f,g){
return (function() {
var G__3805 = null;
var G__3805__3806 = (function (){
return f.call(null,g.call(null));
});
var G__3805__3807 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3805__3808 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3805__3809 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3805__3810 = (function() { 
var G__3812__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3812 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3812__delegate.call(this, x, y, z, args);
};
G__3812.cljs$lang$maxFixedArity = 3;
G__3812.cljs$lang$applyTo = (function (arglist__3813){
var x = cljs.core.first(arglist__3813);
var y = cljs.core.first(cljs.core.next(arglist__3813));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3813)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3813)));
return G__3812__delegate.call(this, x, y, z, args);
});
return G__3812;
})()
;
G__3805 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3805__3806.call(this);
case  1 :
return G__3805__3807.call(this,x);
case  2 :
return G__3805__3808.call(this,x,y);
case  3 :
return G__3805__3809.call(this,x,y,z);
default:
return G__3805__3810.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3805.cljs$lang$maxFixedArity = 3;
G__3805.cljs$lang$applyTo = G__3805__3810.cljs$lang$applyTo;
return G__3805;
})()
});
var comp__3802 = (function (f,g,h){
return (function() {
var G__3814 = null;
var G__3814__3815 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3814__3816 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3814__3817 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3814__3818 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3814__3819 = (function() { 
var G__3821__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3821 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3821__delegate.call(this, x, y, z, args);
};
G__3821.cljs$lang$maxFixedArity = 3;
G__3821.cljs$lang$applyTo = (function (arglist__3822){
var x = cljs.core.first(arglist__3822);
var y = cljs.core.first(cljs.core.next(arglist__3822));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3822)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3822)));
return G__3821__delegate.call(this, x, y, z, args);
});
return G__3821;
})()
;
G__3814 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3814__3815.call(this);
case  1 :
return G__3814__3816.call(this,x);
case  2 :
return G__3814__3817.call(this,x,y);
case  3 :
return G__3814__3818.call(this,x,y,z);
default:
return G__3814__3819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3814.cljs$lang$maxFixedArity = 3;
G__3814.cljs$lang$applyTo = G__3814__3819.cljs$lang$applyTo;
return G__3814;
})()
});
var comp__3803 = (function() { 
var G__3823__delegate = function (f1,f2,f3,fs){
var fs__3796 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3824__delegate = function (args){
var ret__3797 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3796),args);
var fs__3798 = cljs.core.next.call(null,fs__3796);

while(true){
if(cljs.core.truth_(fs__3798))
{{
var G__3825 = cljs.core.first.call(null,fs__3798).call(null,ret__3797);
var G__3826 = cljs.core.next.call(null,fs__3798);
ret__3797 = G__3825;
fs__3798 = G__3826;
continue;
}
} else
{return ret__3797;
}
break;
}
};
var G__3824 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3824__delegate.call(this, args);
};
G__3824.cljs$lang$maxFixedArity = 0;
G__3824.cljs$lang$applyTo = (function (arglist__3827){
var args = cljs.core.seq( arglist__3827 );;
return G__3824__delegate.call(this, args);
});
return G__3824;
})()
;
};
var G__3823 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3823__delegate.call(this, f1, f2, f3, fs);
};
G__3823.cljs$lang$maxFixedArity = 3;
G__3823.cljs$lang$applyTo = (function (arglist__3828){
var f1 = cljs.core.first(arglist__3828);
var f2 = cljs.core.first(cljs.core.next(arglist__3828));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3828)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3828)));
return G__3823__delegate.call(this, f1, f2, f3, fs);
});
return G__3823;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3799.call(this);
case  1 :
return comp__3800.call(this,f1);
case  2 :
return comp__3801.call(this,f1,f2);
case  3 :
return comp__3802.call(this,f1,f2,f3);
default:
return comp__3803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3803.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3829 = (function (f,arg1){
return (function() { 
var G__3834__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3834 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3834__delegate.call(this, args);
};
G__3834.cljs$lang$maxFixedArity = 0;
G__3834.cljs$lang$applyTo = (function (arglist__3835){
var args = cljs.core.seq( arglist__3835 );;
return G__3834__delegate.call(this, args);
});
return G__3834;
})()
;
});
var partial__3830 = (function (f,arg1,arg2){
return (function() { 
var G__3836__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3836 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3836__delegate.call(this, args);
};
G__3836.cljs$lang$maxFixedArity = 0;
G__3836.cljs$lang$applyTo = (function (arglist__3837){
var args = cljs.core.seq( arglist__3837 );;
return G__3836__delegate.call(this, args);
});
return G__3836;
})()
;
});
var partial__3831 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3838__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3838 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3838__delegate.call(this, args);
};
G__3838.cljs$lang$maxFixedArity = 0;
G__3838.cljs$lang$applyTo = (function (arglist__3839){
var args = cljs.core.seq( arglist__3839 );;
return G__3838__delegate.call(this, args);
});
return G__3838;
})()
;
});
var partial__3832 = (function() { 
var G__3840__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3841__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3841 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3841__delegate.call(this, args);
};
G__3841.cljs$lang$maxFixedArity = 0;
G__3841.cljs$lang$applyTo = (function (arglist__3842){
var args = cljs.core.seq( arglist__3842 );;
return G__3841__delegate.call(this, args);
});
return G__3841;
})()
;
};
var G__3840 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3840__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3840.cljs$lang$maxFixedArity = 4;
G__3840.cljs$lang$applyTo = (function (arglist__3843){
var f = cljs.core.first(arglist__3843);
var arg1 = cljs.core.first(cljs.core.next(arglist__3843));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3843)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3843))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3843))));
return G__3840__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3840;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3829.call(this,f,arg1);
case  3 :
return partial__3830.call(this,f,arg1,arg2);
case  4 :
return partial__3831.call(this,f,arg1,arg2,arg3);
default:
return partial__3832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3832.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3844 = (function (f,x){
return (function() {
var G__3848 = null;
var G__3848__3849 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3848__3850 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3848__3851 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3848__3852 = (function() { 
var G__3854__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3854 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3854__delegate.call(this, a, b, c, ds);
};
G__3854.cljs$lang$maxFixedArity = 3;
G__3854.cljs$lang$applyTo = (function (arglist__3855){
var a = cljs.core.first(arglist__3855);
var b = cljs.core.first(cljs.core.next(arglist__3855));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3855)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3855)));
return G__3854__delegate.call(this, a, b, c, ds);
});
return G__3854;
})()
;
G__3848 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3848__3849.call(this,a);
case  2 :
return G__3848__3850.call(this,a,b);
case  3 :
return G__3848__3851.call(this,a,b,c);
default:
return G__3848__3852.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3848.cljs$lang$maxFixedArity = 3;
G__3848.cljs$lang$applyTo = G__3848__3852.cljs$lang$applyTo;
return G__3848;
})()
});
var fnil__3845 = (function (f,x,y){
return (function() {
var G__3856 = null;
var G__3856__3857 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3856__3858 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3856__3859 = (function() { 
var G__3861__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3861 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3861__delegate.call(this, a, b, c, ds);
};
G__3861.cljs$lang$maxFixedArity = 3;
G__3861.cljs$lang$applyTo = (function (arglist__3862){
var a = cljs.core.first(arglist__3862);
var b = cljs.core.first(cljs.core.next(arglist__3862));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3862)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3862)));
return G__3861__delegate.call(this, a, b, c, ds);
});
return G__3861;
})()
;
G__3856 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3856__3857.call(this,a,b);
case  3 :
return G__3856__3858.call(this,a,b,c);
default:
return G__3856__3859.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3856.cljs$lang$maxFixedArity = 3;
G__3856.cljs$lang$applyTo = G__3856__3859.cljs$lang$applyTo;
return G__3856;
})()
});
var fnil__3846 = (function (f,x,y,z){
return (function() {
var G__3863 = null;
var G__3863__3864 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3863__3865 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3863__3866 = (function() { 
var G__3868__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3868 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3868__delegate.call(this, a, b, c, ds);
};
G__3868.cljs$lang$maxFixedArity = 3;
G__3868.cljs$lang$applyTo = (function (arglist__3869){
var a = cljs.core.first(arglist__3869);
var b = cljs.core.first(cljs.core.next(arglist__3869));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3869)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3869)));
return G__3868__delegate.call(this, a, b, c, ds);
});
return G__3868;
})()
;
G__3863 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3863__3864.call(this,a,b);
case  3 :
return G__3863__3865.call(this,a,b,c);
default:
return G__3863__3866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3863.cljs$lang$maxFixedArity = 3;
G__3863.cljs$lang$applyTo = G__3863__3866.cljs$lang$applyTo;
return G__3863;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3844.call(this,f,x);
case  3 :
return fnil__3845.call(this,f,x,y);
case  4 :
return fnil__3846.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3872 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3870 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3870))
{var s__3871 = temp__3698__auto____3870;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3871)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3871)));
} else
{return null;
}
})));
});

return mapi__3872.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3873 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3873))
{var s__3874 = temp__3698__auto____3873;

var x__3875 = f.call(null,cljs.core.first.call(null,s__3874));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3875)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3874));
} else
{return cljs.core.cons.call(null,x__3875,keep.call(null,f,cljs.core.rest.call(null,s__3874)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3885 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3882 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3882))
{var s__3883 = temp__3698__auto____3882;

var x__3884 = f.call(null,idx,cljs.core.first.call(null,s__3883));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3884)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3883));
} else
{return cljs.core.cons.call(null,x__3884,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3883)));
}
} else
{return null;
}
})));
});

return keepi__3885.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3930 = (function (p){
return (function() {
var ep1 = null;
var ep1__3935 = (function (){
return true;
});
var ep1__3936 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3937 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3892 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3892))
{return p.call(null,y);
} else
{return and__3546__auto____3892;
}
})());
});
var ep1__3938 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3893 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3893))
{var and__3546__auto____3894 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3894))
{return p.call(null,z);
} else
{return and__3546__auto____3894;
}
} else
{return and__3546__auto____3893;
}
})());
});
var ep1__3939 = (function() { 
var G__3941__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3895 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3895))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3895;
}
})());
};
var G__3941 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3941__delegate.call(this, x, y, z, args);
};
G__3941.cljs$lang$maxFixedArity = 3;
G__3941.cljs$lang$applyTo = (function (arglist__3942){
var x = cljs.core.first(arglist__3942);
var y = cljs.core.first(cljs.core.next(arglist__3942));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3942)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3942)));
return G__3941__delegate.call(this, x, y, z, args);
});
return G__3941;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3935.call(this);
case  1 :
return ep1__3936.call(this,x);
case  2 :
return ep1__3937.call(this,x,y);
case  3 :
return ep1__3938.call(this,x,y,z);
default:
return ep1__3939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3939.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3931 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3943 = (function (){
return true;
});
var ep2__3944 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3896 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3896))
{return p2.call(null,x);
} else
{return and__3546__auto____3896;
}
})());
});
var ep2__3945 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3897 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3897))
{var and__3546__auto____3898 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3898))
{var and__3546__auto____3899 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3899))
{return p2.call(null,y);
} else
{return and__3546__auto____3899;
}
} else
{return and__3546__auto____3898;
}
} else
{return and__3546__auto____3897;
}
})());
});
var ep2__3946 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3900 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3900))
{var and__3546__auto____3901 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3901))
{var and__3546__auto____3902 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3902))
{var and__3546__auto____3903 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3903))
{var and__3546__auto____3904 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3904))
{return p2.call(null,z);
} else
{return and__3546__auto____3904;
}
} else
{return and__3546__auto____3903;
}
} else
{return and__3546__auto____3902;
}
} else
{return and__3546__auto____3901;
}
} else
{return and__3546__auto____3900;
}
})());
});
var ep2__3947 = (function() { 
var G__3949__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3905 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3905))
{return cljs.core.every_QMARK_.call(null,(function (p1__3876_SHARP_){
var and__3546__auto____3906 = p1.call(null,p1__3876_SHARP_);

if(cljs.core.truth_(and__3546__auto____3906))
{return p2.call(null,p1__3876_SHARP_);
} else
{return and__3546__auto____3906;
}
}),args);
} else
{return and__3546__auto____3905;
}
})());
};
var G__3949 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3949__delegate.call(this, x, y, z, args);
};
G__3949.cljs$lang$maxFixedArity = 3;
G__3949.cljs$lang$applyTo = (function (arglist__3950){
var x = cljs.core.first(arglist__3950);
var y = cljs.core.first(cljs.core.next(arglist__3950));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3950)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3950)));
return G__3949__delegate.call(this, x, y, z, args);
});
return G__3949;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3943.call(this);
case  1 :
return ep2__3944.call(this,x);
case  2 :
return ep2__3945.call(this,x,y);
case  3 :
return ep2__3946.call(this,x,y,z);
default:
return ep2__3947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3947.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3932 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3951 = (function (){
return true;
});
var ep3__3952 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3907 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3907))
{var and__3546__auto____3908 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3908))
{return p3.call(null,x);
} else
{return and__3546__auto____3908;
}
} else
{return and__3546__auto____3907;
}
})());
});
var ep3__3953 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3909 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3909))
{var and__3546__auto____3910 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3910))
{var and__3546__auto____3911 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3911))
{var and__3546__auto____3912 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3912))
{var and__3546__auto____3913 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3913))
{return p3.call(null,y);
} else
{return and__3546__auto____3913;
}
} else
{return and__3546__auto____3912;
}
} else
{return and__3546__auto____3911;
}
} else
{return and__3546__auto____3910;
}
} else
{return and__3546__auto____3909;
}
})());
});
var ep3__3954 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3914 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3914))
{var and__3546__auto____3915 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3915))
{var and__3546__auto____3916 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3916))
{var and__3546__auto____3917 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3917))
{var and__3546__auto____3918 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3918))
{var and__3546__auto____3919 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3919))
{var and__3546__auto____3920 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3920))
{var and__3546__auto____3921 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3921))
{return p3.call(null,z);
} else
{return and__3546__auto____3921;
}
} else
{return and__3546__auto____3920;
}
} else
{return and__3546__auto____3919;
}
} else
{return and__3546__auto____3918;
}
} else
{return and__3546__auto____3917;
}
} else
{return and__3546__auto____3916;
}
} else
{return and__3546__auto____3915;
}
} else
{return and__3546__auto____3914;
}
})());
});
var ep3__3955 = (function() { 
var G__3957__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3922 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3922))
{return cljs.core.every_QMARK_.call(null,(function (p1__3877_SHARP_){
var and__3546__auto____3923 = p1.call(null,p1__3877_SHARP_);

if(cljs.core.truth_(and__3546__auto____3923))
{var and__3546__auto____3924 = p2.call(null,p1__3877_SHARP_);

if(cljs.core.truth_(and__3546__auto____3924))
{return p3.call(null,p1__3877_SHARP_);
} else
{return and__3546__auto____3924;
}
} else
{return and__3546__auto____3923;
}
}),args);
} else
{return and__3546__auto____3922;
}
})());
};
var G__3957 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3957__delegate.call(this, x, y, z, args);
};
G__3957.cljs$lang$maxFixedArity = 3;
G__3957.cljs$lang$applyTo = (function (arglist__3958){
var x = cljs.core.first(arglist__3958);
var y = cljs.core.first(cljs.core.next(arglist__3958));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3958)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3958)));
return G__3957__delegate.call(this, x, y, z, args);
});
return G__3957;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3951.call(this);
case  1 :
return ep3__3952.call(this,x);
case  2 :
return ep3__3953.call(this,x,y);
case  3 :
return ep3__3954.call(this,x,y,z);
default:
return ep3__3955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3955.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3933 = (function() { 
var G__3959__delegate = function (p1,p2,p3,ps){
var ps__3925 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3960 = (function (){
return true;
});
var epn__3961 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3878_SHARP_){
return p1__3878_SHARP_.call(null,x);
}),ps__3925);
});
var epn__3962 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3879_SHARP_){
var and__3546__auto____3926 = p1__3879_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3926))
{return p1__3879_SHARP_.call(null,y);
} else
{return and__3546__auto____3926;
}
}),ps__3925);
});
var epn__3963 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3880_SHARP_){
var and__3546__auto____3927 = p1__3880_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3927))
{var and__3546__auto____3928 = p1__3880_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3928))
{return p1__3880_SHARP_.call(null,z);
} else
{return and__3546__auto____3928;
}
} else
{return and__3546__auto____3927;
}
}),ps__3925);
});
var epn__3964 = (function() { 
var G__3966__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3929 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3929))
{return cljs.core.every_QMARK_.call(null,(function (p1__3881_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3881_SHARP_,args);
}),ps__3925);
} else
{return and__3546__auto____3929;
}
})());
};
var G__3966 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3966__delegate.call(this, x, y, z, args);
};
G__3966.cljs$lang$maxFixedArity = 3;
G__3966.cljs$lang$applyTo = (function (arglist__3967){
var x = cljs.core.first(arglist__3967);
var y = cljs.core.first(cljs.core.next(arglist__3967));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3967)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3967)));
return G__3966__delegate.call(this, x, y, z, args);
});
return G__3966;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3960.call(this);
case  1 :
return epn__3961.call(this,x);
case  2 :
return epn__3962.call(this,x,y);
case  3 :
return epn__3963.call(this,x,y,z);
default:
return epn__3964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3964.cljs$lang$applyTo;
return epn;
})()
};
var G__3959 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3959__delegate.call(this, p1, p2, p3, ps);
};
G__3959.cljs$lang$maxFixedArity = 3;
G__3959.cljs$lang$applyTo = (function (arglist__3968){
var p1 = cljs.core.first(arglist__3968);
var p2 = cljs.core.first(cljs.core.next(arglist__3968));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3968)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3968)));
return G__3959__delegate.call(this, p1, p2, p3, ps);
});
return G__3959;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3930.call(this,p1);
case  2 :
return every_pred__3931.call(this,p1,p2);
case  3 :
return every_pred__3932.call(this,p1,p2,p3);
default:
return every_pred__3933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3933.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__4008 = (function (p){
return (function() {
var sp1 = null;
var sp1__4013 = (function (){
return null;
});
var sp1__4014 = (function (x){
return p.call(null,x);
});
var sp1__4015 = (function (x,y){
var or__3548__auto____3970 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3970))
{return or__3548__auto____3970;
} else
{return p.call(null,y);
}
});
var sp1__4016 = (function (x,y,z){
var or__3548__auto____3971 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3971))
{return or__3548__auto____3971;
} else
{var or__3548__auto____3972 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3972))
{return or__3548__auto____3972;
} else
{return p.call(null,z);
}
}
});
var sp1__4017 = (function() { 
var G__4019__delegate = function (x,y,z,args){
var or__3548__auto____3973 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3973))
{return or__3548__auto____3973;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4019 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4019__delegate.call(this, x, y, z, args);
};
G__4019.cljs$lang$maxFixedArity = 3;
G__4019.cljs$lang$applyTo = (function (arglist__4020){
var x = cljs.core.first(arglist__4020);
var y = cljs.core.first(cljs.core.next(arglist__4020));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4020)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4020)));
return G__4019__delegate.call(this, x, y, z, args);
});
return G__4019;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__4013.call(this);
case  1 :
return sp1__4014.call(this,x);
case  2 :
return sp1__4015.call(this,x,y);
case  3 :
return sp1__4016.call(this,x,y,z);
default:
return sp1__4017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4017.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__4009 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__4021 = (function (){
return null;
});
var sp2__4022 = (function (x){
var or__3548__auto____3974 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3974))
{return or__3548__auto____3974;
} else
{return p2.call(null,x);
}
});
var sp2__4023 = (function (x,y){
var or__3548__auto____3975 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3975))
{return or__3548__auto____3975;
} else
{var or__3548__auto____3976 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3976))
{return or__3548__auto____3976;
} else
{var or__3548__auto____3977 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3977))
{return or__3548__auto____3977;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4024 = (function (x,y,z){
var or__3548__auto____3978 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3978))
{return or__3548__auto____3978;
} else
{var or__3548__auto____3979 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3979))
{return or__3548__auto____3979;
} else
{var or__3548__auto____3980 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3980))
{return or__3548__auto____3980;
} else
{var or__3548__auto____3981 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3981))
{return or__3548__auto____3981;
} else
{var or__3548__auto____3982 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3982))
{return or__3548__auto____3982;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4025 = (function() { 
var G__4027__delegate = function (x,y,z,args){
var or__3548__auto____3983 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3983))
{return or__3548__auto____3983;
} else
{return cljs.core.some.call(null,(function (p1__3886_SHARP_){
var or__3548__auto____3984 = p1.call(null,p1__3886_SHARP_);

if(cljs.core.truth_(or__3548__auto____3984))
{return or__3548__auto____3984;
} else
{return p2.call(null,p1__3886_SHARP_);
}
}),args);
}
};
var G__4027 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4027__delegate.call(this, x, y, z, args);
};
G__4027.cljs$lang$maxFixedArity = 3;
G__4027.cljs$lang$applyTo = (function (arglist__4028){
var x = cljs.core.first(arglist__4028);
var y = cljs.core.first(cljs.core.next(arglist__4028));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4028)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4028)));
return G__4027__delegate.call(this, x, y, z, args);
});
return G__4027;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__4021.call(this);
case  1 :
return sp2__4022.call(this,x);
case  2 :
return sp2__4023.call(this,x,y);
case  3 :
return sp2__4024.call(this,x,y,z);
default:
return sp2__4025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4025.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__4010 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4029 = (function (){
return null;
});
var sp3__4030 = (function (x){
var or__3548__auto____3985 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3985))
{return or__3548__auto____3985;
} else
{var or__3548__auto____3986 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3986))
{return or__3548__auto____3986;
} else
{return p3.call(null,x);
}
}
});
var sp3__4031 = (function (x,y){
var or__3548__auto____3987 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3987))
{return or__3548__auto____3987;
} else
{var or__3548__auto____3988 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3988))
{return or__3548__auto____3988;
} else
{var or__3548__auto____3989 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3989))
{return or__3548__auto____3989;
} else
{var or__3548__auto____3990 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3990))
{return or__3548__auto____3990;
} else
{var or__3548__auto____3991 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3991))
{return or__3548__auto____3991;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4032 = (function (x,y,z){
var or__3548__auto____3992 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3992))
{return or__3548__auto____3992;
} else
{var or__3548__auto____3993 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3993))
{return or__3548__auto____3993;
} else
{var or__3548__auto____3994 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3994))
{return or__3548__auto____3994;
} else
{var or__3548__auto____3995 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3995))
{return or__3548__auto____3995;
} else
{var or__3548__auto____3996 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3996))
{return or__3548__auto____3996;
} else
{var or__3548__auto____3997 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3997))
{return or__3548__auto____3997;
} else
{var or__3548__auto____3998 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3998))
{return or__3548__auto____3998;
} else
{var or__3548__auto____3999 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3999))
{return or__3548__auto____3999;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4033 = (function() { 
var G__4035__delegate = function (x,y,z,args){
var or__3548__auto____4000 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4000))
{return or__3548__auto____4000;
} else
{return cljs.core.some.call(null,(function (p1__3887_SHARP_){
var or__3548__auto____4001 = p1.call(null,p1__3887_SHARP_);

if(cljs.core.truth_(or__3548__auto____4001))
{return or__3548__auto____4001;
} else
{var or__3548__auto____4002 = p2.call(null,p1__3887_SHARP_);

if(cljs.core.truth_(or__3548__auto____4002))
{return or__3548__auto____4002;
} else
{return p3.call(null,p1__3887_SHARP_);
}
}
}),args);
}
};
var G__4035 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4035__delegate.call(this, x, y, z, args);
};
G__4035.cljs$lang$maxFixedArity = 3;
G__4035.cljs$lang$applyTo = (function (arglist__4036){
var x = cljs.core.first(arglist__4036);
var y = cljs.core.first(cljs.core.next(arglist__4036));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4036)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4036)));
return G__4035__delegate.call(this, x, y, z, args);
});
return G__4035;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4029.call(this);
case  1 :
return sp3__4030.call(this,x);
case  2 :
return sp3__4031.call(this,x,y);
case  3 :
return sp3__4032.call(this,x,y,z);
default:
return sp3__4033.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4033.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__4011 = (function() { 
var G__4037__delegate = function (p1,p2,p3,ps){
var ps__4003 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4038 = (function (){
return null;
});
var spn__4039 = (function (x){
return cljs.core.some.call(null,(function (p1__3888_SHARP_){
return p1__3888_SHARP_.call(null,x);
}),ps__4003);
});
var spn__4040 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3889_SHARP_){
var or__3548__auto____4004 = p1__3889_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4004))
{return or__3548__auto____4004;
} else
{return p1__3889_SHARP_.call(null,y);
}
}),ps__4003);
});
var spn__4041 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3890_SHARP_){
var or__3548__auto____4005 = p1__3890_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4005))
{return or__3548__auto____4005;
} else
{var or__3548__auto____4006 = p1__3890_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____4006))
{return or__3548__auto____4006;
} else
{return p1__3890_SHARP_.call(null,z);
}
}
}),ps__4003);
});
var spn__4042 = (function() { 
var G__4044__delegate = function (x,y,z,args){
var or__3548__auto____4007 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4007))
{return or__3548__auto____4007;
} else
{return cljs.core.some.call(null,(function (p1__3891_SHARP_){
return cljs.core.some.call(null,p1__3891_SHARP_,args);
}),ps__4003);
}
};
var G__4044 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4044__delegate.call(this, x, y, z, args);
};
G__4044.cljs$lang$maxFixedArity = 3;
G__4044.cljs$lang$applyTo = (function (arglist__4045){
var x = cljs.core.first(arglist__4045);
var y = cljs.core.first(cljs.core.next(arglist__4045));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4045)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4045)));
return G__4044__delegate.call(this, x, y, z, args);
});
return G__4044;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4038.call(this);
case  1 :
return spn__4039.call(this,x);
case  2 :
return spn__4040.call(this,x,y);
case  3 :
return spn__4041.call(this,x,y,z);
default:
return spn__4042.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4042.cljs$lang$applyTo;
return spn;
})()
};
var G__4037 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4037__delegate.call(this, p1, p2, p3, ps);
};
G__4037.cljs$lang$maxFixedArity = 3;
G__4037.cljs$lang$applyTo = (function (arglist__4046){
var p1 = cljs.core.first(arglist__4046);
var p2 = cljs.core.first(cljs.core.next(arglist__4046));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4046)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4046)));
return G__4037__delegate.call(this, p1, p2, p3, ps);
});
return G__4037;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__4008.call(this,p1);
case  2 :
return some_fn__4009.call(this,p1,p2);
case  3 :
return some_fn__4010.call(this,p1,p2,p3);
default:
return some_fn__4011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4011.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__4059 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4047 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4047))
{var s__4048 = temp__3698__auto____4047;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4048)),map.call(null,f,cljs.core.rest.call(null,s__4048)));
} else
{return null;
}
})));
});
var map__4060 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4049 = cljs.core.seq.call(null,c1);
var s2__4050 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4051 = s1__4049;

if(cljs.core.truth_(and__3546__auto____4051))
{return s2__4050;
} else
{return and__3546__auto____4051;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4049),cljs.core.first.call(null,s2__4050)),map.call(null,f,cljs.core.rest.call(null,s1__4049),cljs.core.rest.call(null,s2__4050)));
} else
{return null;
}
})));
});
var map__4061 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4052 = cljs.core.seq.call(null,c1);
var s2__4053 = cljs.core.seq.call(null,c2);
var s3__4054 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____4055 = s1__4052;

if(cljs.core.truth_(and__3546__auto____4055))
{var and__3546__auto____4056 = s2__4053;

if(cljs.core.truth_(and__3546__auto____4056))
{return s3__4054;
} else
{return and__3546__auto____4056;
}
} else
{return and__3546__auto____4055;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4052),cljs.core.first.call(null,s2__4053),cljs.core.first.call(null,s3__4054)),map.call(null,f,cljs.core.rest.call(null,s1__4052),cljs.core.rest.call(null,s2__4053),cljs.core.rest.call(null,s3__4054)));
} else
{return null;
}
})));
});
var map__4062 = (function() { 
var G__4064__delegate = function (f,c1,c2,c3,colls){
var step__4058 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4057 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4057)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4057),step.call(null,map.call(null,cljs.core.rest,ss__4057)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3969_SHARP_){
return cljs.core.apply.call(null,f,p1__3969_SHARP_);
}),step__4058.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4064 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4064__delegate.call(this, f, c1, c2, c3, colls);
};
G__4064.cljs$lang$maxFixedArity = 4;
G__4064.cljs$lang$applyTo = (function (arglist__4065){
var f = cljs.core.first(arglist__4065);
var c1 = cljs.core.first(cljs.core.next(arglist__4065));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4065)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4065))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4065))));
return G__4064__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4064;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4059.call(this,f,c1);
case  3 :
return map__4060.call(this,f,c1,c2);
case  4 :
return map__4061.call(this,f,c1,c2,c3);
default:
return map__4062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4062.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____4066 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4066))
{var s__4067 = temp__3698__auto____4066;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4067),take.call(null,(n - 1),cljs.core.rest.call(null,s__4067)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__4070 = (function (n,coll){
while(true){
var s__4068 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4069 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4069))
{return s__4068;
} else
{return and__3546__auto____4069;
}
})()))
{{
var G__4071 = (n - 1);
var G__4072 = cljs.core.rest.call(null,s__4068);
n = G__4071;
coll = G__4072;
continue;
}
} else
{return s__4068;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4070.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4073 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4074 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4073.call(this,n);
case  2 :
return drop_last__4074.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__4076 = cljs.core.seq.call(null,coll);
var lead__4077 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4077))
{{
var G__4078 = cljs.core.next.call(null,s__4076);
var G__4079 = cljs.core.next.call(null,lead__4077);
s__4076 = G__4078;
lead__4077 = G__4079;
continue;
}
} else
{return s__4076;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4082 = (function (pred,coll){
while(true){
var s__4080 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4081 = s__4080;

if(cljs.core.truth_(and__3546__auto____4081))
{return pred.call(null,cljs.core.first.call(null,s__4080));
} else
{return and__3546__auto____4081;
}
})()))
{{
var G__4083 = pred;
var G__4084 = cljs.core.rest.call(null,s__4080);
pred = G__4083;
coll = G__4084;
continue;
}
} else
{return s__4080;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4082.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4085 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4085))
{var s__4086 = temp__3698__auto____4085;

return cljs.core.concat.call(null,s__4086,cycle.call(null,s__4086));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__4087 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4088 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4087.call(this,n);
case  2 :
return repeat__4088.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__4090 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4091 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4090.call(this,n);
case  2 :
return repeatedly__4091.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__4097 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4093 = cljs.core.seq.call(null,c1);
var s2__4094 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4095 = s1__4093;

if(cljs.core.truth_(and__3546__auto____4095))
{return s2__4094;
} else
{return and__3546__auto____4095;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4093),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4094),interleave.call(null,cljs.core.rest.call(null,s1__4093),cljs.core.rest.call(null,s2__4094))));
} else
{return null;
}
})));
});
var interleave__4098 = (function() { 
var G__4100__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4096 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4096)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4096),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4096)));
} else
{return null;
}
})));
};
var G__4100 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4100__delegate.call(this, c1, c2, colls);
};
G__4100.cljs$lang$maxFixedArity = 2;
G__4100.cljs$lang$applyTo = (function (arglist__4101){
var c1 = cljs.core.first(arglist__4101);
var c2 = cljs.core.first(cljs.core.next(arglist__4101));
var colls = cljs.core.rest(cljs.core.next(arglist__4101));
return G__4100__delegate.call(this, c1, c2, colls);
});
return G__4100;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4097.call(this,c1,c2);
default:
return interleave__4098.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4098.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__4104 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4102 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4102))
{var coll__4103 = temp__3695__auto____4102;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4103),cat.call(null,cljs.core.rest.call(null,coll__4103),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4104.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4105 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4106 = (function() { 
var G__4108__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4108 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4108__delegate.call(this, f, coll, colls);
};
G__4108.cljs$lang$maxFixedArity = 2;
G__4108.cljs$lang$applyTo = (function (arglist__4109){
var f = cljs.core.first(arglist__4109);
var coll = cljs.core.first(cljs.core.next(arglist__4109));
var colls = cljs.core.rest(cljs.core.next(arglist__4109));
return G__4108__delegate.call(this, f, coll, colls);
});
return G__4108;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4105.call(this,f,coll);
default:
return mapcat__4106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4106.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4110 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4110))
{var s__4111 = temp__3698__auto____4110;

var f__4112 = cljs.core.first.call(null,s__4111);
var r__4113 = cljs.core.rest.call(null,s__4111);

if(cljs.core.truth_(pred.call(null,f__4112)))
{return cljs.core.cons.call(null,f__4112,filter.call(null,pred,r__4113));
} else
{return filter.call(null,pred,r__4113);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__4115 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4115.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4114_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4114_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__4122 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4123 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4116 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4116))
{var s__4117 = temp__3698__auto____4116;

var p__4118 = cljs.core.take.call(null,n,s__4117);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4118))))
{return cljs.core.cons.call(null,p__4118,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4117)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4124 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4119 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4119))
{var s__4120 = temp__3698__auto____4119;

var p__4121 = cljs.core.take.call(null,n,s__4120);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4121))))
{return cljs.core.cons.call(null,p__4121,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4120)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4121,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4122.call(this,n,step);
case  3 :
return partition__4123.call(this,n,step,pad);
case  4 :
return partition__4124.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__4130 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4131 = (function (m,ks,not_found){
var sentinel__4126 = cljs.core.lookup_sentinel;
var m__4127 = m;
var ks__4128 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4128))
{var m__4129 = cljs.core.get.call(null,m__4127,cljs.core.first.call(null,ks__4128),sentinel__4126);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__4126,m__4129)))
{return not_found;
} else
{{
var G__4133 = sentinel__4126;
var G__4134 = m__4129;
var G__4135 = cljs.core.next.call(null,ks__4128);
sentinel__4126 = G__4133;
m__4127 = G__4134;
ks__4128 = G__4135;
continue;
}
}
} else
{return m__4127;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4130.call(this,m,ks);
case  3 :
return get_in__4131.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__4136,v){
var vec__4137__4138 = p__4136;
var k__4139 = cljs.core.nth.call(null,vec__4137__4138,0,null);
var ks__4140 = cljs.core.nthnext.call(null,vec__4137__4138,1);

if(cljs.core.truth_(ks__4140))
{return cljs.core.assoc.call(null,m,k__4139,assoc_in.call(null,cljs.core.get.call(null,m,k__4139),ks__4140,v));
} else
{return cljs.core.assoc.call(null,m,k__4139,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__4141,f,args){
var vec__4142__4143 = p__4141;
var k__4144 = cljs.core.nth.call(null,vec__4142__4143,0,null);
var ks__4145 = cljs.core.nthnext.call(null,vec__4142__4143,1);

if(cljs.core.truth_(ks__4145))
{return cljs.core.assoc.call(null,m,k__4144,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4144),ks__4145,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4144,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4144),args));
}
};
var update_in = function (m,p__4141,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4141, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4146){
var m = cljs.core.first(arglist__4146);
var p__4141 = cljs.core.first(cljs.core.next(arglist__4146));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4146)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4146)));
return update_in__delegate.call(this, m, p__4141, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4147 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4148 = this;
var new_array__4149 = cljs.core.aclone.call(null,this__4148.array);

new_array__4149.push(o);
return (new cljs.core.Vector(this__4148.meta,new_array__4149));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4150 = this;
if(cljs.core.truth_((this__4150.array.length > 0)))
{var vector_seq__4151 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4150.array.length)))
{return cljs.core.cons.call(null,(this__4150.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4151.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4152 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4153 = this;
var count__4154 = this__4153.array.length;

if(cljs.core.truth_((count__4154 > 0)))
{return (this__4153.array[(count__4154 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4155 = this;
if(cljs.core.truth_((this__4155.array.length > 0)))
{var new_array__4156 = cljs.core.aclone.call(null,this__4155.array);

new_array__4156.pop();
return (new cljs.core.Vector(this__4155.meta,new_array__4156));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4157 = this;
return (new cljs.core.Vector(meta,this__4157.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4158 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4158.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4172 = null;
var G__4172__4173 = (function (coll,n){
var this__4159 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4160 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4160))
{return (n < this__4159.array.length);
} else
{return and__3546__auto____4160;
}
})()))
{return (this__4159.array[n]);
} else
{return null;
}
});
var G__4172__4174 = (function (coll,n,not_found){
var this__4161 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4162 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4162))
{return (n < this__4161.array.length);
} else
{return and__3546__auto____4162;
}
})()))
{return (this__4161.array[n]);
} else
{return not_found;
}
});
G__4172 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4172__4173.call(this,coll,n);
case  3 :
return G__4172__4174.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4172;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4163 = this;
return this__4163.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4176 = null;
var G__4176__4177 = (function (v,f){
var this__4164 = this;
return cljs.core.ci_reduce.call(null,this__4164.array,f);
});
var G__4176__4178 = (function (v,f,start){
var this__4165 = this;
return cljs.core.ci_reduce.call(null,this__4165.array,f,start);
});
G__4176 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4176__4177.call(this,v,f);
case  3 :
return G__4176__4178.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4176;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4166 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4167 = this;
return this__4167.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4168 = this;
var new_array__4169 = cljs.core.aclone.call(null,this__4168.array);

(new_array__4169[k] = v);
return (new cljs.core.Vector(this__4168.meta,new_array__4169));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4180 = null;
var G__4180__4181 = (function (coll,k){
var this__4170 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4180__4182 = (function (coll,k,not_found){
var this__4171 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4180 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4180__4181.call(this,coll,k);
case  3 :
return G__4180__4182.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4180;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__4184 = null;
var G__4184__4185 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4184__4186 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4184 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4184__4185.call(this,_,k);
case  3 :
return G__4184__4186.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4184;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__4188){
var args = cljs.core.seq( arglist__4188 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4189 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__4190 = array.length;

var i__4191 = 0;

while(true){
if(cljs.core.truth_((i__4191 < len__4190)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4191]))))
{return i__4191;
} else
{{
var G__4192 = (i__4191 + incr);
i__4191 = G__4192;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___4194 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4195 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4193 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4193))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4193;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___4194.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4195.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4198 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4199 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4200 = this;
if(cljs.core.truth_((this__4200.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4197_SHARP_){
return cljs.core.vector.call(null,p1__4197_SHARP_,(this__4200.strobj[p1__4197_SHARP_]));
}),this__4200.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4201 = this;
return (new cljs.core.ObjMap(meta,this__4201.keys,this__4201.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4202 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4203 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4203))
{return this__4202.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4203;
}
})()))
{var new_keys__4204 = cljs.core.aclone.call(null,this__4202.keys);
var new_strobj__4205 = goog.object.clone.call(null,this__4202.strobj);

new_keys__4204.splice(cljs.core.scan_array.call(null,1,k,new_keys__4204),1);
cljs.core.js_delete.call(null,new_strobj__4205,k);
return (new cljs.core.ObjMap(this__4202.meta,new_keys__4204,new_strobj__4205));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4206 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4206.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4207 = this;
return this__4207.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4208 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4209 = this;
return this__4209.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4210 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4211 = goog.object.clone.call(null,this__4210.strobj);
var overwrite_QMARK___4212 = new_strobj__4211.hasOwnProperty(k);

(new_strobj__4211[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4212))
{return (new cljs.core.ObjMap(this__4210.meta,this__4210.keys,new_strobj__4211));
} else
{var new_keys__4213 = cljs.core.aclone.call(null,this__4210.keys);

new_keys__4213.push(k);
return (new cljs.core.ObjMap(this__4210.meta,new_keys__4213,new_strobj__4211));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4210.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4214 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4214.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4217 = null;
var G__4217__4218 = (function (coll,k){
var this__4215 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4217__4219 = (function (coll,k,not_found){
var this__4216 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4216.strobj,(this__4216.strobj[k]),not_found);
});
G__4217 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4217__4218.call(this,coll,k);
case  3 :
return G__4217__4219.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4217;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__4222 = null;
var G__4222__4223 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4222__4224 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4222 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4222__4223.call(this,_,k);
case  3 :
return G__4222__4224.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4222;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4226 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4227 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4228 = this;
if(cljs.core.truth_((this__4228.count > 0)))
{var hashes__4229 = cljs.core.js_keys.call(null,this__4228.hashobj);

return cljs.core.mapcat.call(null,(function (p1__4221_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4228.hashobj[p1__4221_SHARP_])));
}),hashes__4229);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4230 = this;
return (new cljs.core.HashMap(meta,this__4230.count,this__4230.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4231 = this;
var h__4232 = cljs.core.hash.call(null,k);
var bucket__4233 = (this__4231.hashobj[h__4232]);
var i__4234 = (cljs.core.truth_(bucket__4233)?cljs.core.scan_array.call(null,2,k,bucket__4233):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4234)))
{return coll;
} else
{var new_hashobj__4235 = goog.object.clone.call(null,this__4231.hashobj);

if(cljs.core.truth_((3 > bucket__4233.length)))
{cljs.core.js_delete.call(null,new_hashobj__4235,h__4232);
} else
{var new_bucket__4236 = cljs.core.aclone.call(null,bucket__4233);

new_bucket__4236.splice(i__4234,2);
(new_hashobj__4235[h__4232] = new_bucket__4236);
}
return (new cljs.core.HashMap(this__4231.meta,(this__4231.count - 1),new_hashobj__4235));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4237 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4237.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4238 = this;
return this__4238.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4239 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4240 = this;
return this__4240.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4241 = this;
var h__4242 = cljs.core.hash.call(null,k);
var bucket__4243 = (this__4241.hashobj[h__4242]);

if(cljs.core.truth_(bucket__4243))
{var new_bucket__4244 = cljs.core.aclone.call(null,bucket__4243);
var new_hashobj__4245 = goog.object.clone.call(null,this__4241.hashobj);

(new_hashobj__4245[h__4242] = new_bucket__4244);
var temp__3695__auto____4246 = cljs.core.scan_array.call(null,2,k,new_bucket__4244);

if(cljs.core.truth_(temp__3695__auto____4246))
{var i__4247 = temp__3695__auto____4246;

(new_bucket__4244[(i__4247 + 1)] = v);
return (new cljs.core.HashMap(this__4241.meta,this__4241.count,new_hashobj__4245));
} else
{new_bucket__4244.push(k,v);
return (new cljs.core.HashMap(this__4241.meta,(this__4241.count + 1),new_hashobj__4245));
}
} else
{var new_hashobj__4248 = goog.object.clone.call(null,this__4241.hashobj);

(new_hashobj__4248[h__4242] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4241.meta,(this__4241.count + 1),new_hashobj__4248));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4249 = this;
var bucket__4250 = (this__4249.hashobj[cljs.core.hash.call(null,k)]);
var i__4251 = (cljs.core.truth_(bucket__4250)?cljs.core.scan_array.call(null,2,k,bucket__4250):null);

if(cljs.core.truth_(i__4251))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4256 = null;
var G__4256__4257 = (function (coll,k){
var this__4252 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4256__4258 = (function (coll,k,not_found){
var this__4253 = this;
var bucket__4254 = (this__4253.hashobj[cljs.core.hash.call(null,k)]);
var i__4255 = (cljs.core.truth_(bucket__4254)?cljs.core.scan_array.call(null,2,k,bucket__4254):null);

if(cljs.core.truth_(i__4255))
{return (bucket__4254[(i__4255 + 1)]);
} else
{return not_found;
}
});
G__4256 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4256__4257.call(this,coll,k);
case  3 :
return G__4256__4258.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4256;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4260 = ks.length;

var i__4261 = 0;
var out__4262 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4261 < len__4260)))
{{
var G__4263 = (i__4261 + 1);
var G__4264 = cljs.core.assoc.call(null,out__4262,(ks[i__4261]),(vs[i__4261]));
i__4261 = G__4263;
out__4262 = G__4264;
continue;
}
} else
{return out__4262;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__4265 = null;
var G__4265__4266 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4265__4267 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4265 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4265__4266.call(this,_,k);
case  3 :
return G__4265__4267.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4265;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__4269 = cljs.core.seq.call(null,keyvals);
var out__4270 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4269))
{{
var G__4271 = cljs.core.nnext.call(null,in$__4269);
var G__4272 = cljs.core.assoc.call(null,out__4270,cljs.core.first.call(null,in$__4269),cljs.core.second.call(null,in$__4269));
in$__4269 = G__4271;
out__4270 = G__4272;
continue;
}
} else
{return out__4270;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__4273){
var keyvals = cljs.core.seq( arglist__4273 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__4274_SHARP_,p2__4275_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4276 = p1__4274_SHARP_;

if(cljs.core.truth_(or__3548__auto____4276))
{return or__3548__auto____4276;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4275_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__4277){
var maps = cljs.core.seq( arglist__4277 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__4280 = (function (m,e){
var k__4278 = cljs.core.first.call(null,e);
var v__4279 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4278)))
{return cljs.core.assoc.call(null,m,k__4278,f.call(null,cljs.core.get.call(null,m,k__4278),v__4279));
} else
{return cljs.core.assoc.call(null,m,k__4278,v__4279);
}
});
var merge2__4282 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4280,(function (){var or__3548__auto____4281 = m1;

if(cljs.core.truth_(or__3548__auto____4281))
{return or__3548__auto____4281;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4282,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__4283){
var f = cljs.core.first(arglist__4283);
var maps = cljs.core.rest(arglist__4283);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4285 = cljs.core.ObjMap.fromObject([],{});
var keys__4286 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4286))
{var key__4287 = cljs.core.first.call(null,keys__4286);
var entry__4288 = cljs.core.get.call(null,map,key__4287);

{
var G__4289 = (cljs.core.truth_(entry__4288)?cljs.core.assoc.call(null,ret__4285,key__4287,entry__4288):ret__4285);
var G__4290 = cljs.core.next.call(null,keys__4286);
ret__4285 = G__4289;
keys__4286 = G__4290;
continue;
}
} else
{return ret__4285;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4291 = this;
return (new cljs.core.Set(this__4291.meta,cljs.core.dissoc.call(null,this__4291.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4292 = this;
var and__3546__auto____4293 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4293))
{var and__3546__auto____4294 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4294))
{return cljs.core.every_QMARK_.call(null,(function (p1__4284_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4284_SHARP_);
}),other);
} else
{return and__3546__auto____4294;
}
} else
{return and__3546__auto____4293;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4295 = this;
return (new cljs.core.Set(this__4295.meta,cljs.core.assoc.call(null,this__4295.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4296 = this;
return cljs.core.keys.call(null,this__4296.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4297 = this;
return (new cljs.core.Set(meta,this__4297.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4298 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4298.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4299 = this;
return this__4299.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4300 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4301 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4304 = null;
var G__4304__4305 = (function (coll,v){
var this__4302 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4304__4306 = (function (coll,v,not_found){
var this__4303 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4303.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4304 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4304__4305.call(this,coll,v);
case  3 :
return G__4304__4306.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4304;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__4308 = null;
var G__4308__4309 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4308__4310 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4308 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4308__4309.call(this,_,k);
case  3 :
return G__4308__4310.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4308;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4313 = cljs.core.seq.call(null,coll);
var out__4314 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4313))))
{{
var G__4315 = cljs.core.rest.call(null,in$__4313);
var G__4316 = cljs.core.conj.call(null,out__4314,cljs.core.first.call(null,in$__4313));
in$__4313 = G__4315;
out__4314 = G__4316;
continue;
}
} else
{return out__4314;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__4317 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4318 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4318))
{var e__4319 = temp__3695__auto____4318;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4319));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4317,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4312_SHARP_){
var temp__3695__auto____4320 = cljs.core.find.call(null,smap,p1__4312_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4320))
{var e__4321 = temp__3695__auto____4320;

return cljs.core.second.call(null,e__4321);
} else
{return p1__4312_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4329 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4322,seen){
while(true){
var vec__4323__4324 = p__4322;
var f__4325 = cljs.core.nth.call(null,vec__4323__4324,0,null);
var xs__4326 = vec__4323__4324;

var temp__3698__auto____4327 = cljs.core.seq.call(null,xs__4326);

if(cljs.core.truth_(temp__3698__auto____4327))
{var s__4328 = temp__3698__auto____4327;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4325)))
{{
var G__4330 = cljs.core.rest.call(null,s__4328);
var G__4331 = seen;
p__4322 = G__4330;
seen = G__4331;
continue;
}
} else
{return cljs.core.cons.call(null,f__4325,step.call(null,cljs.core.rest.call(null,s__4328),cljs.core.conj.call(null,seen,f__4325)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4329.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4332 = cljs.core.Vector.fromArray([]);
var s__4333 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4333)))
{{
var G__4334 = cljs.core.conj.call(null,ret__4332,cljs.core.first.call(null,s__4333));
var G__4335 = cljs.core.next.call(null,s__4333);
ret__4332 = G__4334;
s__4333 = G__4335;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4332);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4336 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4336))
{return or__3548__auto____4336;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4337 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4337 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4337 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____4338 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4338))
{return or__3548__auto____4338;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4339 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4339 > -1)))
{return cljs.core.subs.call(null,x,2,i__4339);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__4342 = cljs.core.ObjMap.fromObject([],{});
var ks__4343 = cljs.core.seq.call(null,keys);
var vs__4344 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4345 = ks__4343;

if(cljs.core.truth_(and__3546__auto____4345))
{return vs__4344;
} else
{return and__3546__auto____4345;
}
})()))
{{
var G__4346 = cljs.core.assoc.call(null,map__4342,cljs.core.first.call(null,ks__4343),cljs.core.first.call(null,vs__4344));
var G__4347 = cljs.core.next.call(null,ks__4343);
var G__4348 = cljs.core.next.call(null,vs__4344);
map__4342 = G__4346;
ks__4343 = G__4347;
vs__4344 = G__4348;
continue;
}
} else
{return map__4342;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__4351 = (function (k,x){
return x;
});
var max_key__4352 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4353 = (function() { 
var G__4355__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4340_SHARP_,p2__4341_SHARP_){
return max_key.call(null,k,p1__4340_SHARP_,p2__4341_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4355 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4355__delegate.call(this, k, x, y, more);
};
G__4355.cljs$lang$maxFixedArity = 3;
G__4355.cljs$lang$applyTo = (function (arglist__4356){
var k = cljs.core.first(arglist__4356);
var x = cljs.core.first(cljs.core.next(arglist__4356));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4356)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4356)));
return G__4355__delegate.call(this, k, x, y, more);
});
return G__4355;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4351.call(this,k,x);
case  3 :
return max_key__4352.call(this,k,x,y);
default:
return max_key__4353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4353.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4357 = (function (k,x){
return x;
});
var min_key__4358 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4359 = (function() { 
var G__4361__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4349_SHARP_,p2__4350_SHARP_){
return min_key.call(null,k,p1__4349_SHARP_,p2__4350_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4361 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4361__delegate.call(this, k, x, y, more);
};
G__4361.cljs$lang$maxFixedArity = 3;
G__4361.cljs$lang$applyTo = (function (arglist__4362){
var k = cljs.core.first(arglist__4362);
var x = cljs.core.first(cljs.core.next(arglist__4362));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4362)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4362)));
return G__4361__delegate.call(this, k, x, y, more);
});
return G__4361;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4357.call(this,k,x);
case  3 :
return min_key__4358.call(this,k,x,y);
default:
return min_key__4359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4359.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4365 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4366 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4363 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4363))
{var s__4364 = temp__3698__auto____4363;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4364),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4364)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4365.call(this,n,step);
case  3 :
return partition_all__4366.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4368 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4368))
{var s__4369 = temp__3698__auto____4368;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4369))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4369),take_while.call(null,pred,cljs.core.rest.call(null,s__4369)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4370 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4371 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4372 = this;
return this__4372.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4373 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4373.meta,(this__4373.start + this__4373.step),this__4373.end,this__4373.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4374 = this;
var comp__4375 = (cljs.core.truth_((this__4374.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4375.call(null,this__4374.start,this__4374.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4376 = this;
return (new cljs.core.Range(meta,this__4376.start,this__4376.end,this__4376.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4377 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4377.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4387 = null;
var G__4387__4388 = (function (rng,n){
var this__4378 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4378.start + (n * this__4378.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4379 = (this__4378.start > this__4378.end);

if(cljs.core.truth_(and__3546__auto____4379))
{return cljs.core._EQ_.call(null,this__4378.step,0);
} else
{return and__3546__auto____4379;
}
})()))
{return this__4378.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4387__4389 = (function (rng,n,not_found){
var this__4380 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4380.start + (n * this__4380.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4381 = (this__4380.start > this__4380.end);

if(cljs.core.truth_(and__3546__auto____4381))
{return cljs.core._EQ_.call(null,this__4380.step,0);
} else
{return and__3546__auto____4381;
}
})()))
{return this__4380.start;
} else
{return not_found;
}
}
});
G__4387 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4387__4388.call(this,rng,n);
case  3 :
return G__4387__4389.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4387;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4382 = this;
return this__4382.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4391 = null;
var G__4391__4392 = (function (rng,f){
var this__4383 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4391__4393 = (function (rng,f,s){
var this__4384 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4391 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4391__4392.call(this,rng,f);
case  3 :
return G__4391__4393.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4391;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4385 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4386 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4386.end - this__4386.start) / this__4386.step));
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4395 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4396 = (function (end){
return range.call(null,0,end,1);
});
var range__4397 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4398 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4395.call(this);
case  1 :
return range__4396.call(this,start);
case  2 :
return range__4397.call(this,start,end);
case  3 :
return range__4398.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4400 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4400))
{var s__4401 = temp__3698__auto____4400;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4401),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4401)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4403 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4403))
{var s__4404 = temp__3698__auto____4403;

var fst__4405 = cljs.core.first.call(null,s__4404);
var fv__4406 = f.call(null,fst__4405);
var run__4407 = cljs.core.cons.call(null,fst__4405,cljs.core.take_while.call(null,(function (p1__4402_SHARP_){
return cljs.core._EQ_.call(null,fv__4406,f.call(null,p1__4402_SHARP_));
}),cljs.core.next.call(null,s__4404)));

return cljs.core.cons.call(null,run__4407,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4407),s__4404))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__4422 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4418 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4418))
{var s__4419 = temp__3695__auto____4418;

return reductions.call(null,f,cljs.core.first.call(null,s__4419),cljs.core.rest.call(null,s__4419));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4423 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4420 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4420))
{var s__4421 = temp__3698__auto____4420;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4421)),cljs.core.rest.call(null,s__4421));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4422.call(this,f,init);
case  3 :
return reductions__4423.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__4426 = (function (f){
return (function() {
var G__4431 = null;
var G__4431__4432 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4431__4433 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4431__4434 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4431__4435 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4431__4436 = (function() { 
var G__4438__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4438 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4438__delegate.call(this, x, y, z, args);
};
G__4438.cljs$lang$maxFixedArity = 3;
G__4438.cljs$lang$applyTo = (function (arglist__4439){
var x = cljs.core.first(arglist__4439);
var y = cljs.core.first(cljs.core.next(arglist__4439));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4439)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4439)));
return G__4438__delegate.call(this, x, y, z, args);
});
return G__4438;
})()
;
G__4431 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4431__4432.call(this);
case  1 :
return G__4431__4433.call(this,x);
case  2 :
return G__4431__4434.call(this,x,y);
case  3 :
return G__4431__4435.call(this,x,y,z);
default:
return G__4431__4436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4431.cljs$lang$maxFixedArity = 3;
G__4431.cljs$lang$applyTo = G__4431__4436.cljs$lang$applyTo;
return G__4431;
})()
});
var juxt__4427 = (function (f,g){
return (function() {
var G__4440 = null;
var G__4440__4441 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4440__4442 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4440__4443 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4440__4444 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4440__4445 = (function() { 
var G__4447__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4447 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4447__delegate.call(this, x, y, z, args);
};
G__4447.cljs$lang$maxFixedArity = 3;
G__4447.cljs$lang$applyTo = (function (arglist__4448){
var x = cljs.core.first(arglist__4448);
var y = cljs.core.first(cljs.core.next(arglist__4448));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4448)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4448)));
return G__4447__delegate.call(this, x, y, z, args);
});
return G__4447;
})()
;
G__4440 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4440__4441.call(this);
case  1 :
return G__4440__4442.call(this,x);
case  2 :
return G__4440__4443.call(this,x,y);
case  3 :
return G__4440__4444.call(this,x,y,z);
default:
return G__4440__4445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4440.cljs$lang$maxFixedArity = 3;
G__4440.cljs$lang$applyTo = G__4440__4445.cljs$lang$applyTo;
return G__4440;
})()
});
var juxt__4428 = (function (f,g,h){
return (function() {
var G__4449 = null;
var G__4449__4450 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4449__4451 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4449__4452 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4449__4453 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4449__4454 = (function() { 
var G__4456__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4456 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4456__delegate.call(this, x, y, z, args);
};
G__4456.cljs$lang$maxFixedArity = 3;
G__4456.cljs$lang$applyTo = (function (arglist__4457){
var x = cljs.core.first(arglist__4457);
var y = cljs.core.first(cljs.core.next(arglist__4457));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4457)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4457)));
return G__4456__delegate.call(this, x, y, z, args);
});
return G__4456;
})()
;
G__4449 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4449__4450.call(this);
case  1 :
return G__4449__4451.call(this,x);
case  2 :
return G__4449__4452.call(this,x,y);
case  3 :
return G__4449__4453.call(this,x,y,z);
default:
return G__4449__4454.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4449.cljs$lang$maxFixedArity = 3;
G__4449.cljs$lang$applyTo = G__4449__4454.cljs$lang$applyTo;
return G__4449;
})()
});
var juxt__4429 = (function() { 
var G__4458__delegate = function (f,g,h,fs){
var fs__4425 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4459 = null;
var G__4459__4460 = (function (){
return cljs.core.reduce.call(null,(function (p1__4408_SHARP_,p2__4409_SHARP_){
return cljs.core.conj.call(null,p1__4408_SHARP_,p2__4409_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4425);
});
var G__4459__4461 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4410_SHARP_,p2__4411_SHARP_){
return cljs.core.conj.call(null,p1__4410_SHARP_,p2__4411_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4425);
});
var G__4459__4462 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4412_SHARP_,p2__4413_SHARP_){
return cljs.core.conj.call(null,p1__4412_SHARP_,p2__4413_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4425);
});
var G__4459__4463 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4414_SHARP_,p2__4415_SHARP_){
return cljs.core.conj.call(null,p1__4414_SHARP_,p2__4415_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4425);
});
var G__4459__4464 = (function() { 
var G__4466__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4416_SHARP_,p2__4417_SHARP_){
return cljs.core.conj.call(null,p1__4416_SHARP_,cljs.core.apply.call(null,p2__4417_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4425);
};
var G__4466 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4466__delegate.call(this, x, y, z, args);
};
G__4466.cljs$lang$maxFixedArity = 3;
G__4466.cljs$lang$applyTo = (function (arglist__4467){
var x = cljs.core.first(arglist__4467);
var y = cljs.core.first(cljs.core.next(arglist__4467));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4467)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4467)));
return G__4466__delegate.call(this, x, y, z, args);
});
return G__4466;
})()
;
G__4459 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4459__4460.call(this);
case  1 :
return G__4459__4461.call(this,x);
case  2 :
return G__4459__4462.call(this,x,y);
case  3 :
return G__4459__4463.call(this,x,y,z);
default:
return G__4459__4464.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4459.cljs$lang$maxFixedArity = 3;
G__4459.cljs$lang$applyTo = G__4459__4464.cljs$lang$applyTo;
return G__4459;
})()
};
var G__4458 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4458__delegate.call(this, f, g, h, fs);
};
G__4458.cljs$lang$maxFixedArity = 3;
G__4458.cljs$lang$applyTo = (function (arglist__4468){
var f = cljs.core.first(arglist__4468);
var g = cljs.core.first(cljs.core.next(arglist__4468));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4468)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4468)));
return G__4458__delegate.call(this, f, g, h, fs);
});
return G__4458;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4426.call(this,f);
case  2 :
return juxt__4427.call(this,f,g);
case  3 :
return juxt__4428.call(this,f,g,h);
default:
return juxt__4429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4429.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__4470 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4473 = cljs.core.next.call(null,coll);
coll = G__4473;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4471 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4469 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4469))
{return (n > 0);
} else
{return and__3546__auto____4469;
}
})()))
{{
var G__4474 = (n - 1);
var G__4475 = cljs.core.next.call(null,coll);
n = G__4474;
coll = G__4475;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__4470.call(this,n);
case  2 :
return dorun__4471.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__4476 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4477 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4476.call(this,n);
case  2 :
return doall__4477.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__4479 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4479),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4479),1)))
{return cljs.core.first.call(null,matches__4479);
} else
{return cljs.core.vec.call(null,matches__4479);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__4480 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__4480)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4480),1)))
{return cljs.core.first.call(null,matches__4480);
} else
{return cljs.core.vec.call(null,matches__4480);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4481 = cljs.core.re_find.call(null,re,s);
var match_idx__4482 = s.search(re);
var match_str__4483 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4481))?cljs.core.first.call(null,match_data__4481):match_data__4481);
var post_match__4484 = cljs.core.subs.call(null,s,(match_idx__4482 + cljs.core.count.call(null,match_str__4483)));

if(cljs.core.truth_(match_data__4481))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4481,re_seq.call(null,re,post_match__4484));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4485_SHARP_){
return print_one.call(null,p1__4485_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
print.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4486 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4486))
{var and__3546__auto____4490 = (function (){var x__300__auto____4487 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4488 = x__300__auto____4487;

if(cljs.core.truth_(and__3546__auto____4488))
{var and__3546__auto____4489 = x__300__auto____4487.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4489))
{return cljs.core.not.call(null,x__300__auto____4487.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4489;
}
} else
{return and__3546__auto____4488;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__300__auto____4487);
}
})();

if(cljs.core.truth_(and__3546__auto____4490))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4490;
}
} else
{return and__3546__auto____4486;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__300__auto____4491 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4492 = x__300__auto____4491;

if(cljs.core.truth_(and__3546__auto____4492))
{var and__3546__auto____4493 = x__300__auto____4491.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4493))
{return cljs.core.not.call(null,x__300__auto____4491.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4493;
}
} else
{return and__3546__auto____4492;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__300__auto____4491);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__4494 = cljs.core.first.call(null,objs);
var sb__4495 = (new goog.string.StringBuffer());

var G__4496__4497 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4496__4497))
{var obj__4498 = cljs.core.first.call(null,G__4496__4497);
var G__4496__4499 = G__4496__4497;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__4498,first_obj__4494)))
{} else
{sb__4495.append(" ");
}
var G__4500__4501 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4498,opts));

if(cljs.core.truth_(G__4500__4501))
{var string__4502 = cljs.core.first.call(null,G__4500__4501);
var G__4500__4503 = G__4500__4501;

while(true){
sb__4495.append(string__4502);
var temp__3698__auto____4504 = cljs.core.next.call(null,G__4500__4503);

if(cljs.core.truth_(temp__3698__auto____4504))
{var G__4500__4505 = temp__3698__auto____4504;

{
var G__4508 = cljs.core.first.call(null,G__4500__4505);
var G__4509 = G__4500__4505;
string__4502 = G__4508;
G__4500__4503 = G__4509;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4506 = cljs.core.next.call(null,G__4496__4499);

if(cljs.core.truth_(temp__3698__auto____4506))
{var G__4496__4507 = temp__3698__auto____4506;

{
var G__4510 = cljs.core.first.call(null,G__4496__4507);
var G__4511 = G__4496__4507;
obj__4498 = G__4510;
G__4496__4499 = G__4511;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4495);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4512 = cljs.core.first.call(null,objs);

var G__4513__4514 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4513__4514))
{var obj__4515 = cljs.core.first.call(null,G__4513__4514);
var G__4513__4516 = G__4513__4514;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__4515,first_obj__4512)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4517__4518 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4515,opts));

if(cljs.core.truth_(G__4517__4518))
{var string__4519 = cljs.core.first.call(null,G__4517__4518);
var G__4517__4520 = G__4517__4518;

while(true){
cljs.core.string_print.call(null,string__4519);
var temp__3698__auto____4521 = cljs.core.next.call(null,G__4517__4520);

if(cljs.core.truth_(temp__3698__auto____4521))
{var G__4517__4522 = temp__3698__auto____4521;

{
var G__4525 = cljs.core.first.call(null,G__4517__4522);
var G__4526 = G__4517__4522;
string__4519 = G__4525;
G__4517__4520 = G__4526;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4523 = cljs.core.next.call(null,G__4513__4516);

if(cljs.core.truth_(temp__3698__auto____4523))
{var G__4513__4524 = temp__3698__auto____4523;

{
var G__4527 = cljs.core.first.call(null,G__4513__4524);
var G__4528 = G__4513__4524;
obj__4515 = G__4527;
G__4513__4516 = G__4528;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__4529){
var objs = cljs.core.seq( arglist__4529 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__4530){
var objs = cljs.core.seq( arglist__4530 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__4531){
var objs = cljs.core.seq( arglist__4531 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__4532){
var objs = cljs.core.seq( arglist__4532 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__4533){
var objs = cljs.core.seq( arglist__4533 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4534 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4534,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4535 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4535))
{var nspc__4536 = temp__3698__auto____4535;

return cljs.core.str.call(null,nspc__4536,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4537 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4537))
{var nspc__4538 = temp__3698__auto____4537;

return cljs.core.str.call(null,nspc__4538,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4539 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4539,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4540 = this;
var G__4541__4542 = cljs.core.seq.call(null,this__4540.watches);

if(cljs.core.truth_(G__4541__4542))
{var G__4544__4546 = cljs.core.first.call(null,G__4541__4542);
var vec__4545__4547 = G__4544__4546;
var key__4548 = cljs.core.nth.call(null,vec__4545__4547,0,null);
var f__4549 = cljs.core.nth.call(null,vec__4545__4547,1,null);
var G__4541__4550 = G__4541__4542;

var G__4544__4551 = G__4544__4546;
var G__4541__4552 = G__4541__4550;

while(true){
var vec__4553__4554 = G__4544__4551;
var key__4555 = cljs.core.nth.call(null,vec__4553__4554,0,null);
var f__4556 = cljs.core.nth.call(null,vec__4553__4554,1,null);
var G__4541__4557 = G__4541__4552;

f__4556.call(null,key__4555,this$,oldval,newval);
var temp__3698__auto____4558 = cljs.core.next.call(null,G__4541__4557);

if(cljs.core.truth_(temp__3698__auto____4558))
{var G__4541__4559 = temp__3698__auto____4558;

{
var G__4566 = cljs.core.first.call(null,G__4541__4559);
var G__4567 = G__4541__4559;
G__4544__4551 = G__4566;
G__4541__4552 = G__4567;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__4560 = this;
return this$.watches = cljs.core.assoc.call(null,this__4560.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4561 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4561.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4562 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4562.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4563 = this;
return this__4563.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4564 = this;
return this__4564.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4565 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__4574 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4575 = (function() { 
var G__4577__delegate = function (x,p__4568){
var map__4569__4570 = p__4568;
var map__4569__4571 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4569__4570))?cljs.core.apply.call(null,cljs.core.hash_map,map__4569__4570):map__4569__4570);
var validator__4572 = cljs.core.get.call(null,map__4569__4571,"﷐'validator");
var meta__4573 = cljs.core.get.call(null,map__4569__4571,"﷐'meta");

return (new cljs.core.Atom(x,meta__4573,validator__4572,null));
};
var G__4577 = function (x,var_args){
var p__4568 = null;
if (goog.isDef(var_args)) {
  p__4568 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4577__delegate.call(this, x, p__4568);
};
G__4577.cljs$lang$maxFixedArity = 1;
G__4577.cljs$lang$applyTo = (function (arglist__4578){
var x = cljs.core.first(arglist__4578);
var p__4568 = cljs.core.rest(arglist__4578);
return G__4577__delegate.call(this, x, p__4568);
});
return G__4577;
})()
;
atom = function(x,var_args){
var p__4568 = var_args;
switch(arguments.length){
case  1 :
return atom__4574.call(this,x);
default:
return atom__4575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4575.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4579 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4579))
{var validate__4580 = temp__3698__auto____4579;

if(cljs.core.truth_(validate__4580.call(null,new_value)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")));
}
} else
{}
var old_value__4581 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4581,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___4582 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4583 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4584 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4585 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4586 = (function() { 
var G__4588__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4588 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4588__delegate.call(this, a, f, x, y, z, more);
};
G__4588.cljs$lang$maxFixedArity = 5;
G__4588.cljs$lang$applyTo = (function (arglist__4589){
var a = cljs.core.first(arglist__4589);
var f = cljs.core.first(cljs.core.next(arglist__4589));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4589)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4589))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4589)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4589)))));
return G__4588__delegate.call(this, a, f, x, y, z, more);
});
return G__4588;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4582.call(this,a,f);
case  3 :
return swap_BANG___4583.call(this,a,f,x);
case  4 :
return swap_BANG___4584.call(this,a,f,x,y);
case  5 :
return swap_BANG___4585.call(this,a,f,x,y,z);
default:
return swap_BANG___4586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4586.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4590){
var iref = cljs.core.first(arglist__4590);
var f = cljs.core.first(cljs.core.next(arglist__4590));
var args = cljs.core.rest(cljs.core.next(arglist__4590));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__4591 = (function (){
return gensym.call(null,"G__");
});
var gensym__4592 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4591.call(this);
case  1 :
return gensym__4592.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4594 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__4594.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4595 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4595.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4595.state,this__4595.f);
}
return cljs.core.deref.call(null,this__4595.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__4596){
var body = cljs.core.seq( arglist__4596 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__4597__4598 = options;
var map__4597__4599 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4597__4598))?cljs.core.apply.call(null,cljs.core.hash_map,map__4597__4598):map__4597__4598);
var keywordize_keys__4600 = cljs.core.get.call(null,map__4597__4599,"﷐'keywordize-keys");
var keyfn__4601 = (cljs.core.truth_(keywordize_keys__4600)?cljs.core.keyword:cljs.core.str);
var f__4607 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__354__auto____4606 = (function iter__4602(s__4603){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4603__4604 = s__4603;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4603__4604)))
{var k__4605 = cljs.core.first.call(null,s__4603__4604);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4601.call(null,k__4605),thisfn.call(null,(x[k__4605]))]),iter__4602.call(null,cljs.core.rest.call(null,s__4603__4604)));
} else
{return null;
}
break;
}
})));
});

return iter__354__auto____4606.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__4607.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4608){
var x = cljs.core.first(arglist__4608);
var options = cljs.core.rest(arglist__4608);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__4609 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4613__delegate = function (args){
var temp__3695__auto____4610 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4609),args);

if(cljs.core.truth_(temp__3695__auto____4610))
{var v__4611 = temp__3695__auto____4610;

return v__4611;
} else
{var ret__4612 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4609,cljs.core.assoc,args,ret__4612);
return ret__4612;
}
};
var G__4613 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4613__delegate.call(this, args);
};
G__4613.cljs$lang$maxFixedArity = 0;
G__4613.cljs$lang$applyTo = (function (arglist__4614){
var args = cljs.core.seq( arglist__4614 );;
return G__4613__delegate.call(this, args);
});
return G__4613;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__4616 = (function (f){
while(true){
var ret__4615 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4615)))
{{
var G__4619 = ret__4615;
f = G__4619;
continue;
}
} else
{return ret__4615;
}
break;
}
});
var trampoline__4617 = (function() { 
var G__4620__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4620 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4620__delegate.call(this, f, args);
};
G__4620.cljs$lang$maxFixedArity = 1;
G__4620.cljs$lang$applyTo = (function (arglist__4621){
var f = cljs.core.first(arglist__4621);
var args = cljs.core.rest(arglist__4621);
return G__4620__delegate.call(this, f, args);
});
return G__4620;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4616.call(this,f);
default:
return trampoline__4617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4617.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4622 = (function (){
return rand.call(null,1);
});
var rand__4623 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4622.call(this);
case  1 :
return rand__4623.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__4625 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4625,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4625,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___4634 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4635 = (function (h,child,parent){
var or__3548__auto____4626 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4626))
{return or__3548__auto____4626;
} else
{var or__3548__auto____4627 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4627))
{return or__3548__auto____4627;
} else
{var and__3546__auto____4628 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4628))
{var and__3546__auto____4629 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4629))
{var and__3546__auto____4630 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4630))
{var ret__4631 = true;
var i__4632 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4633 = cljs.core.not.call(null,ret__4631);

if(cljs.core.truth_(or__3548__auto____4633))
{return or__3548__auto____4633;
} else
{return cljs.core._EQ_.call(null,i__4632,cljs.core.count.call(null,parent));
}
})()))
{return ret__4631;
} else
{{
var G__4637 = isa_QMARK_.call(null,h,child.call(null,i__4632),parent.call(null,i__4632));
var G__4638 = (i__4632 + 1);
ret__4631 = G__4637;
i__4632 = G__4638;
continue;
}
}
break;
}
} else
{return and__3546__auto____4630;
}
} else
{return and__3546__auto____4629;
}
} else
{return and__3546__auto____4628;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4634.call(this,h,child);
case  3 :
return isa_QMARK___4635.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__4639 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4640 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4639.call(this,h);
case  2 :
return parents__4640.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__4642 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4643 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4642.call(this,h);
case  2 :
return ancestors__4643.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__4645 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4646 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4645.call(this,h);
case  2 :
return descendants__4646.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__4656 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4657 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__4651 = "﷐'parents".call(null,h);
var td__4652 = "﷐'descendants".call(null,h);
var ta__4653 = "﷐'ancestors".call(null,h);
var tf__4654 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4655 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4651.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4653.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4653.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4651,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4654.call(null,"﷐'ancestors".call(null,h),tag,td__4652,parent,ta__4653),"﷐'descendants":tf__4654.call(null,"﷐'descendants".call(null,h),parent,ta__4653,tag,td__4652)});
})());

if(cljs.core.truth_(or__3548__auto____4655))
{return or__3548__auto____4655;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4656.call(this,h,tag);
case  3 :
return derive__4657.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__4663 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4664 = (function (h,tag,parent){
var parentMap__4659 = "﷐'parents".call(null,h);
var childsParents__4660 = (cljs.core.truth_(parentMap__4659.call(null,tag))?cljs.core.disj.call(null,parentMap__4659.call(null,tag),parent):cljs.core.set([]));
var newParents__4661 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4660))?cljs.core.assoc.call(null,parentMap__4659,tag,childsParents__4660):cljs.core.dissoc.call(null,parentMap__4659,tag));
var deriv_seq__4662 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4648_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4648_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4648_SHARP_),cljs.core.second.call(null,p1__4648_SHARP_)));
}),cljs.core.seq.call(null,newParents__4661)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4659.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4649_SHARP_,p2__4650_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4649_SHARP_,p2__4650_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4662));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4663.call(this,h,tag);
case  3 :
return underive__4664.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__4666 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4668 = (cljs.core.truth_((function (){var and__3546__auto____4667 = xprefs__4666;

if(cljs.core.truth_(and__3546__auto____4667))
{return xprefs__4666.call(null,y);
} else
{return and__3546__auto____4667;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4668))
{return or__3548__auto____4668;
} else
{var or__3548__auto____4670 = (function (){var ps__4669 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4669) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4669),prefer_table)))
{} else
{}
{
var G__4673 = cljs.core.rest.call(null,ps__4669);
ps__4669 = G__4673;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4670))
{return or__3548__auto____4670;
} else
{var or__3548__auto____4672 = (function (){var ps__4671 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4671) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4671),y,prefer_table)))
{} else
{}
{
var G__4674 = cljs.core.rest.call(null,ps__4671);
ps__4671 = G__4674;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4672))
{return or__3548__auto____4672;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4675 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4675))
{return or__3548__auto____4675;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4684 = cljs.core.reduce.call(null,(function (be,p__4676){
var vec__4677__4678 = p__4676;
var k__4679 = cljs.core.nth.call(null,vec__4677__4678,0,null);
var ___4680 = cljs.core.nth.call(null,vec__4677__4678,1,null);
var e__4681 = vec__4677__4678;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4679)))
{var be2__4683 = (cljs.core.truth_((function (){var or__3548__auto____4682 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4682))
{return or__3548__auto____4682;
} else
{return cljs.core.dominates.call(null,k__4679,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4681:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4683),k__4679,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4679," and ",cljs.core.first.call(null,be2__4683),", and neither is preferred")));
}
return be2__4683;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4684))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4684));
return cljs.core.second.call(null,best_entry__4684);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4685 = mf;

if(cljs.core.truth_(and__3546__auto____4685))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4685;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4686 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4686))
{return or__3548__auto____4686;
} else
{var or__3548__auto____4687 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4687))
{return or__3548__auto____4687;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4688 = mf;

if(cljs.core.truth_(and__3546__auto____4688))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4688;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4689 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4689))
{return or__3548__auto____4689;
} else
{var or__3548__auto____4690 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4690))
{return or__3548__auto____4690;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4691 = mf;

if(cljs.core.truth_(and__3546__auto____4691))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4691;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4692 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4692))
{return or__3548__auto____4692;
} else
{var or__3548__auto____4693 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4693))
{return or__3548__auto____4693;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4694 = mf;

if(cljs.core.truth_(and__3546__auto____4694))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4694;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4695 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4695))
{return or__3548__auto____4695;
} else
{var or__3548__auto____4696 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4696))
{return or__3548__auto____4696;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4697 = mf;

if(cljs.core.truth_(and__3546__auto____4697))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4697;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4698 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4698))
{return or__3548__auto____4698;
} else
{var or__3548__auto____4699 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4699))
{return or__3548__auto____4699;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4700 = mf;

if(cljs.core.truth_(and__3546__auto____4700))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4700;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4701 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4701))
{return or__3548__auto____4701;
} else
{var or__3548__auto____4702 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4702))
{return or__3548__auto____4702;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4703 = mf;

if(cljs.core.truth_(and__3546__auto____4703))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4703;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4704 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4704))
{return or__3548__auto____4704;
} else
{var or__3548__auto____4705 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4705))
{return or__3548__auto____4705;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4706 = mf;

if(cljs.core.truth_(and__3546__auto____4706))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____4706;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____4707 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4707))
{return or__3548__auto____4707;
} else
{var or__3548__auto____4708 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4708))
{return or__3548__auto____4708;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__4709 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4710 = cljs.core._get_method.call(null,mf,dispatch_val__4709);

if(cljs.core.truth_(target_fn__4710))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4709)));
}
return cljs.core.apply.call(null,target_fn__4710,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4711 = this;
cljs.core.swap_BANG_.call(null,this__4711.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4711.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4711.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4711.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4712 = this;
cljs.core.swap_BANG_.call(null,this__4712.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4712.method_cache,this__4712.method_table,this__4712.cached_hierarchy,this__4712.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4713 = this;
cljs.core.swap_BANG_.call(null,this__4713.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4713.method_cache,this__4713.method_table,this__4713.cached_hierarchy,this__4713.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4714 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4714.cached_hierarchy),cljs.core.deref.call(null,this__4714.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4714.method_cache,this__4714.method_table,this__4714.cached_hierarchy,this__4714.hierarchy);
}
var temp__3695__auto____4715 = cljs.core.deref.call(null,this__4714.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4715))
{var target_fn__4716 = temp__3695__auto____4715;

return target_fn__4716;
} else
{var temp__3695__auto____4717 = cljs.core.find_and_cache_best_method.call(null,this__4714.name,dispatch_val,this__4714.hierarchy,this__4714.method_table,this__4714.prefer_table,this__4714.method_cache,this__4714.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4717))
{var target_fn__4718 = temp__3695__auto____4717;

return target_fn__4718;
} else
{return cljs.core.deref.call(null,this__4714.method_table).call(null,this__4714.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4719 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4719.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4719.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4719.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4719.method_cache,this__4719.method_table,this__4719.cached_hierarchy,this__4719.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4720 = this;
return cljs.core.deref.call(null,this__4720.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4721 = this;
return cljs.core.deref.call(null,this__4721.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__4722 = this;
return cljs.core.do_invoke.call(null,mf,this__4722.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__4723__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__4723 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4723__delegate.call(this, _, args);
};
G__4723.cljs$lang$maxFixedArity = 1;
G__4723.cljs$lang$applyTo = (function (arglist__4724){
var _ = cljs.core.first(arglist__4724);
var args = cljs.core.rest(arglist__4724);
return G__4723__delegate.call(this, _, args);
});
return G__4723;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
