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
var or__3548__auto____2327 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2327))
{return or__3548__auto____2327;
} else
{var or__3548__auto____2328 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2328))
{return or__3548__auto____2328;
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
if(cljs.core.truth_((function (){var and__3546__auto____2329 = coll;

if(cljs.core.truth_(and__3546__auto____2329))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2329;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2330 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2330))
{return or__3548__auto____2330;
} else
{var or__3548__auto____2331 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2331))
{return or__3548__auto____2331;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2332 = coll;

if(cljs.core.truth_(and__3546__auto____2332))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2332;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2333 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2333))
{return or__3548__auto____2333;
} else
{var or__3548__auto____2334 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2334))
{return or__3548__auto____2334;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2335 = coll;

if(cljs.core.truth_(and__3546__auto____2335))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2335;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2336 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2336))
{return or__3548__auto____2336;
} else
{var or__3548__auto____2337 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2337))
{return or__3548__auto____2337;
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
var _nth__2344 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2338 = coll;

if(cljs.core.truth_(and__3546__auto____2338))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2338;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2339 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2339))
{return or__3548__auto____2339;
} else
{var or__3548__auto____2340 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2340))
{return or__3548__auto____2340;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2345 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2341 = coll;

if(cljs.core.truth_(and__3546__auto____2341))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2341;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2342 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2342))
{return or__3548__auto____2342;
} else
{var or__3548__auto____2343 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2343))
{return or__3548__auto____2343;
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
return _nth__2344.call(this,coll,n);
case  3 :
return _nth__2345.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2347 = coll;

if(cljs.core.truth_(and__3546__auto____2347))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2347;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2348 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2348))
{return or__3548__auto____2348;
} else
{var or__3548__auto____2349 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2349))
{return or__3548__auto____2349;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2350 = coll;

if(cljs.core.truth_(and__3546__auto____2350))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2350;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2351 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2351))
{return or__3548__auto____2351;
} else
{var or__3548__auto____2352 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2352))
{return or__3548__auto____2352;
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
var _lookup__2359 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2353 = o;

if(cljs.core.truth_(and__3546__auto____2353))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2353;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2354 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2354))
{return or__3548__auto____2354;
} else
{var or__3548__auto____2355 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2355))
{return or__3548__auto____2355;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2360 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2356 = o;

if(cljs.core.truth_(and__3546__auto____2356))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2356;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2357 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2357))
{return or__3548__auto____2357;
} else
{var or__3548__auto____2358 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2358))
{return or__3548__auto____2358;
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
return _lookup__2359.call(this,o,k);
case  3 :
return _lookup__2360.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2362 = coll;

if(cljs.core.truth_(and__3546__auto____2362))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2362;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2363 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2363))
{return or__3548__auto____2363;
} else
{var or__3548__auto____2364 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2364))
{return or__3548__auto____2364;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2365 = coll;

if(cljs.core.truth_(and__3546__auto____2365))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2365;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2366 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2366))
{return or__3548__auto____2366;
} else
{var or__3548__auto____2367 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2367))
{return or__3548__auto____2367;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2368 = coll;

if(cljs.core.truth_(and__3546__auto____2368))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2368;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2369 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2369))
{return or__3548__auto____2369;
} else
{var or__3548__auto____2370 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2370))
{return or__3548__auto____2370;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2371 = coll;

if(cljs.core.truth_(and__3546__auto____2371))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2371;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2372 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2372))
{return or__3548__auto____2372;
} else
{var or__3548__auto____2373 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2373))
{return or__3548__auto____2373;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2374 = coll;

if(cljs.core.truth_(and__3546__auto____2374))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2374;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2375 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2375))
{return or__3548__auto____2375;
} else
{var or__3548__auto____2376 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2376))
{return or__3548__auto____2376;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2377 = coll;

if(cljs.core.truth_(and__3546__auto____2377))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2377;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2378 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2378))
{return or__3548__auto____2378;
} else
{var or__3548__auto____2379 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2379))
{return or__3548__auto____2379;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2380 = coll;

if(cljs.core.truth_(and__3546__auto____2380))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2380;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2381 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2381))
{return or__3548__auto____2381;
} else
{var or__3548__auto____2382 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2382))
{return or__3548__auto____2382;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2383 = o;

if(cljs.core.truth_(and__3546__auto____2383))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2383;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2384 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2384))
{return or__3548__auto____2384;
} else
{var or__3548__auto____2385 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2385))
{return or__3548__auto____2385;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2386 = o;

if(cljs.core.truth_(and__3546__auto____2386))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2386;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2387 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2387))
{return or__3548__auto____2387;
} else
{var or__3548__auto____2388 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2388))
{return or__3548__auto____2388;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2389 = o;

if(cljs.core.truth_(and__3546__auto____2389))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2389;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2390 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2390))
{return or__3548__auto____2390;
} else
{var or__3548__auto____2391 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2391))
{return or__3548__auto____2391;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2392 = o;

if(cljs.core.truth_(and__3546__auto____2392))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2392;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2393 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2393))
{return or__3548__auto____2393;
} else
{var or__3548__auto____2394 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2394))
{return or__3548__auto____2394;
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
var _reduce__2401 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2395 = coll;

if(cljs.core.truth_(and__3546__auto____2395))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2395;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2396 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2396))
{return or__3548__auto____2396;
} else
{var or__3548__auto____2397 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2397))
{return or__3548__auto____2397;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2402 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2398 = coll;

if(cljs.core.truth_(and__3546__auto____2398))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2398;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2399 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2399))
{return or__3548__auto____2399;
} else
{var or__3548__auto____2400 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2400))
{return or__3548__auto____2400;
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
return _reduce__2401.call(this,coll,f);
case  3 :
return _reduce__2402.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2404 = o;

if(cljs.core.truth_(and__3546__auto____2404))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2404;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2405 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2405))
{return or__3548__auto____2405;
} else
{var or__3548__auto____2406 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2406))
{return or__3548__auto____2406;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2407 = o;

if(cljs.core.truth_(and__3546__auto____2407))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2407;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2408 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2408))
{return or__3548__auto____2408;
} else
{var or__3548__auto____2409 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2409))
{return or__3548__auto____2409;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2410 = o;

if(cljs.core.truth_(and__3546__auto____2410))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2410;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2411 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2411))
{return or__3548__auto____2411;
} else
{var or__3548__auto____2412 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2412))
{return or__3548__auto____2412;
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
if(cljs.core.truth_((function (){var and__3546__auto____2413 = o;

if(cljs.core.truth_(and__3546__auto____2413))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2413;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2414 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2414))
{return or__3548__auto____2414;
} else
{var or__3548__auto____2415 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2415))
{return or__3548__auto____2415;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2416 = d;

if(cljs.core.truth_(and__3546__auto____2416))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2416;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2417 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2417))
{return or__3548__auto____2417;
} else
{var or__3548__auto____2418 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2418))
{return or__3548__auto____2418;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2419 = this$;

if(cljs.core.truth_(and__3546__auto____2419))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2419;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2420 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2420))
{return or__3548__auto____2420;
} else
{var or__3548__auto____2421 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2421))
{return or__3548__auto____2421;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2422 = this$;

if(cljs.core.truth_(and__3546__auto____2422))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2422;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2423 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2423))
{return or__3548__auto____2423;
} else
{var or__3548__auto____2424 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2424))
{return or__3548__auto____2424;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2425 = this$;

if(cljs.core.truth_(and__3546__auto____2425))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2425;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2426 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2426))
{return or__3548__auto____2426;
} else
{var or__3548__auto____2427 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2427))
{return or__3548__auto____2427;
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
var G__2428 = null;
var G__2428__2429 = (function (_,n){
return null;
});
var G__2428__2430 = (function (_,n,not_found){
return not_found;
});
G__2428 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2428__2429.call(this,_,n);
case  3 :
return G__2428__2430.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2428;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2432 = null;
var G__2432__2433 = (function (_,f){
return f.call(null);
});
var G__2432__2434 = (function (_,f,start){
return start;
});
G__2432 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2432__2433.call(this,_,f);
case  3 :
return G__2432__2434.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2432;
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
var G__2436 = null;
var G__2436__2437 = (function (o,k){
return null;
});
var G__2436__2438 = (function (o,k,not_found){
return not_found;
});
G__2436 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2436__2437.call(this,o,k);
case  3 :
return G__2436__2438.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2436;
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
var ci_reduce__2446 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2440 = cljs.core._nth.call(null,cicoll,0);
var n__2441 = 1;

while(true){
if(cljs.core.truth_((n__2441 < cljs.core._count.call(null,cicoll))))
{{
var G__2450 = f.call(null,val__2440,cljs.core._nth.call(null,cicoll,n__2441));
var G__2451 = (n__2441 + 1);
val__2440 = G__2450;
n__2441 = G__2451;
continue;
}
} else
{return val__2440;
}
break;
}
}
});
var ci_reduce__2447 = (function (cicoll,f,val){
var val__2442 = val;
var n__2443 = 0;

while(true){
if(cljs.core.truth_((n__2443 < cljs.core._count.call(null,cicoll))))
{{
var G__2452 = f.call(null,val__2442,cljs.core._nth.call(null,cicoll,n__2443));
var G__2453 = (n__2443 + 1);
val__2442 = G__2452;
n__2443 = G__2453;
continue;
}
} else
{return val__2442;
}
break;
}
});
var ci_reduce__2448 = (function (cicoll,f,val,idx){
var val__2444 = val;
var n__2445 = idx;

while(true){
if(cljs.core.truth_((n__2445 < cljs.core._count.call(null,cicoll))))
{{
var G__2454 = f.call(null,val__2444,cljs.core._nth.call(null,cicoll,n__2445));
var G__2455 = (n__2445 + 1);
val__2444 = G__2454;
n__2445 = G__2455;
continue;
}
} else
{return val__2444;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2446.call(this,cicoll,f);
case  3 :
return ci_reduce__2447.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2448.call(this,cicoll,f,val,idx);
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
var this__2456 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2464 = null;
var G__2464__2465 = (function (coll,f){
var this__2457 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2457.a[this__2457.i]),(this__2457.i + 1));
});
var G__2464__2466 = (function (coll,f,start){
var this__2458 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2458.i);
});
G__2464 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2464__2465.call(this,coll,f);
case  3 :
return G__2464__2466.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2464;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2459 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2460 = this;
return this__2460.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2461 = this;
return (this__2461.a[this__2461.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2462 = this;
if(cljs.core.truth_(((this__2462.i + 1) < this__2462.a.length)))
{return (new cljs.core.IndexedSeq(this__2462.a,(this__2462.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2463 = this;
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
var G__2468 = null;
var G__2468__2469 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2468__2470 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2468 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2468__2469.call(this,array,f);
case  3 :
return G__2468__2470.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2468;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2472 = null;
var G__2472__2473 = (function (array,k){
return (array[k]);
});
var G__2472__2474 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2472 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2472__2473.call(this,array,k);
case  3 :
return G__2472__2474.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2472;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2476 = null;
var G__2476__2477 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2476__2478 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2476 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2476__2477.call(this,array,n);
case  3 :
return G__2476__2478.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2476;
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
var temp__3698__auto____2480 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2480))
{var s__2481 = temp__3698__auto____2480;

return cljs.core._first.call(null,s__2481);
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
var G__2482 = cljs.core.next.call(null,s);
s = G__2482;
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
var s__2483 = cljs.core.seq.call(null,x);
var n__2484 = 0;

while(true){
if(cljs.core.truth_(s__2483))
{{
var G__2485 = cljs.core.next.call(null,s__2483);
var G__2486 = (n__2484 + 1);
s__2483 = G__2485;
n__2484 = G__2486;
continue;
}
} else
{return n__2484;
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
var conj__2487 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2488 = (function() { 
var G__2490__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2491 = conj.call(null,coll,x);
var G__2492 = cljs.core.first.call(null,xs);
var G__2493 = cljs.core.next.call(null,xs);
coll = G__2491;
x = G__2492;
xs = G__2493;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2490 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2490__delegate.call(this, coll, x, xs);
};
G__2490.cljs$lang$maxFixedArity = 2;
G__2490.cljs$lang$applyTo = (function (arglist__2494){
var coll = cljs.core.first(arglist__2494);
var x = cljs.core.first(cljs.core.next(arglist__2494));
var xs = cljs.core.rest(cljs.core.next(arglist__2494));
return G__2490__delegate.call(this, coll, x, xs);
});
return G__2490;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2487.call(this,coll,x);
default:
return conj__2488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2488.cljs$lang$applyTo;
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
var nth__2495 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2496 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2495.call(this,coll,n);
case  3 :
return nth__2496.call(this,coll,n,not_found);
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
var get__2498 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2499 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2498.call(this,o,k);
case  3 :
return get__2499.call(this,o,k,not_found);
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
var assoc__2502 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2503 = (function() { 
var G__2505__delegate = function (coll,k,v,kvs){
while(true){
var ret__2501 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2506 = ret__2501;
var G__2507 = cljs.core.first.call(null,kvs);
var G__2508 = cljs.core.second.call(null,kvs);
var G__2509 = cljs.core.nnext.call(null,kvs);
coll = G__2506;
k = G__2507;
v = G__2508;
kvs = G__2509;
continue;
}
} else
{return ret__2501;
}
break;
}
};
var G__2505 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2505__delegate.call(this, coll, k, v, kvs);
};
G__2505.cljs$lang$maxFixedArity = 3;
G__2505.cljs$lang$applyTo = (function (arglist__2510){
var coll = cljs.core.first(arglist__2510);
var k = cljs.core.first(cljs.core.next(arglist__2510));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2510)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2510)));
return G__2505__delegate.call(this, coll, k, v, kvs);
});
return G__2505;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2502.call(this,coll,k,v);
default:
return assoc__2503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2503.cljs$lang$applyTo;
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
var dissoc__2512 = (function (coll){
return coll;
});
var dissoc__2513 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2514 = (function() { 
var G__2516__delegate = function (coll,k,ks){
while(true){
var ret__2511 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2517 = ret__2511;
var G__2518 = cljs.core.first.call(null,ks);
var G__2519 = cljs.core.next.call(null,ks);
coll = G__2517;
k = G__2518;
ks = G__2519;
continue;
}
} else
{return ret__2511;
}
break;
}
};
var G__2516 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2516__delegate.call(this, coll, k, ks);
};
G__2516.cljs$lang$maxFixedArity = 2;
G__2516.cljs$lang$applyTo = (function (arglist__2520){
var coll = cljs.core.first(arglist__2520);
var k = cljs.core.first(cljs.core.next(arglist__2520));
var ks = cljs.core.rest(cljs.core.next(arglist__2520));
return G__2516__delegate.call(this, coll, k, ks);
});
return G__2516;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2512.call(this,coll);
case  2 :
return dissoc__2513.call(this,coll,k);
default:
return dissoc__2514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2514.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__300__auto____2521 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2522 = x__300__auto____2521;

if(cljs.core.truth_(and__3546__auto____2522))
{var and__3546__auto____2523 = x__300__auto____2521.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2523))
{return cljs.core.not.call(null,x__300__auto____2521.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2523;
}
} else
{return and__3546__auto____2522;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__300__auto____2521);
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
var disj__2525 = (function (coll){
return coll;
});
var disj__2526 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2527 = (function() { 
var G__2529__delegate = function (coll,k,ks){
while(true){
var ret__2524 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2530 = ret__2524;
var G__2531 = cljs.core.first.call(null,ks);
var G__2532 = cljs.core.next.call(null,ks);
coll = G__2530;
k = G__2531;
ks = G__2532;
continue;
}
} else
{return ret__2524;
}
break;
}
};
var G__2529 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2529__delegate.call(this, coll, k, ks);
};
G__2529.cljs$lang$maxFixedArity = 2;
G__2529.cljs$lang$applyTo = (function (arglist__2533){
var coll = cljs.core.first(arglist__2533);
var k = cljs.core.first(cljs.core.next(arglist__2533));
var ks = cljs.core.rest(cljs.core.next(arglist__2533));
return G__2529__delegate.call(this, coll, k, ks);
});
return G__2529;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2525.call(this,coll);
case  2 :
return disj__2526.call(this,coll,k);
default:
return disj__2527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2527.cljs$lang$applyTo;
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
{var x__300__auto____2534 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2535 = x__300__auto____2534;

if(cljs.core.truth_(and__3546__auto____2535))
{var and__3546__auto____2536 = x__300__auto____2534.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2536))
{return cljs.core.not.call(null,x__300__auto____2534.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2536;
}
} else
{return and__3546__auto____2535;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__300__auto____2534);
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
{var x__300__auto____2537 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2538 = x__300__auto____2537;

if(cljs.core.truth_(and__3546__auto____2538))
{var and__3546__auto____2539 = x__300__auto____2537.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2539))
{return cljs.core.not.call(null,x__300__auto____2537.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2539;
}
} else
{return and__3546__auto____2538;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__300__auto____2537);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__300__auto____2540 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2541 = x__300__auto____2540;

if(cljs.core.truth_(and__3546__auto____2541))
{var and__3546__auto____2542 = x__300__auto____2540.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2542))
{return cljs.core.not.call(null,x__300__auto____2540.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2542;
}
} else
{return and__3546__auto____2541;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__300__auto____2540);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__300__auto____2543 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2544 = x__300__auto____2543;

if(cljs.core.truth_(and__3546__auto____2544))
{var and__3546__auto____2545 = x__300__auto____2543.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2545))
{return cljs.core.not.call(null,x__300__auto____2543.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2545;
}
} else
{return and__3546__auto____2544;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__300__auto____2543);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__300__auto____2546 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2547 = x__300__auto____2546;

if(cljs.core.truth_(and__3546__auto____2547))
{var and__3546__auto____2548 = x__300__auto____2546.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2548))
{return cljs.core.not.call(null,x__300__auto____2546.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2548;
}
} else
{return and__3546__auto____2547;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__300__auto____2546);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__300__auto____2549 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2550 = x__300__auto____2549;

if(cljs.core.truth_(and__3546__auto____2550))
{var and__3546__auto____2551 = x__300__auto____2549.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2551))
{return cljs.core.not.call(null,x__300__auto____2549.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2551;
}
} else
{return and__3546__auto____2550;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__300__auto____2549);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__300__auto____2552 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2553 = x__300__auto____2552;

if(cljs.core.truth_(and__3546__auto____2553))
{var and__3546__auto____2554 = x__300__auto____2552.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2554))
{return cljs.core.not.call(null,x__300__auto____2552.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2554;
}
} else
{return and__3546__auto____2553;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__300__auto____2552);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2555 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2555.push(key);
}));
return keys__2555;
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
{var x__300__auto____2556 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2557 = x__300__auto____2556;

if(cljs.core.truth_(and__3546__auto____2557))
{var and__3546__auto____2558 = x__300__auto____2556.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2558))
{return cljs.core.not.call(null,x__300__auto____2556.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2558;
}
} else
{return and__3546__auto____2557;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__300__auto____2556);
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
var and__3546__auto____2559 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2559))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2560 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2560))
{return or__3548__auto____2560;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2559;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2561 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2561))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2561;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2562 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2562))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2562;
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
var and__3546__auto____2563 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2563))
{return (n == n.toFixed());
} else
{return and__3546__auto____2563;
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
if(cljs.core.truth_((function (){var and__3546__auto____2564 = coll;

if(cljs.core.truth_(and__3546__auto____2564))
{var and__3546__auto____2565 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2565))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2565;
}
} else
{return and__3546__auto____2564;
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
var distinct_QMARK___2570 = (function (x){
return true;
});
var distinct_QMARK___2571 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2572 = (function() { 
var G__2574__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2566 = cljs.core.set([y,x]);
var xs__2567 = more;

while(true){
var x__2568 = cljs.core.first.call(null,xs__2567);
var etc__2569 = cljs.core.next.call(null,xs__2567);

if(cljs.core.truth_(xs__2567))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2566,x__2568)))
{return false;
} else
{{
var G__2575 = cljs.core.conj.call(null,s__2566,x__2568);
var G__2576 = etc__2569;
s__2566 = G__2575;
xs__2567 = G__2576;
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
var G__2574 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2574__delegate.call(this, x, y, more);
};
G__2574.cljs$lang$maxFixedArity = 2;
G__2574.cljs$lang$applyTo = (function (arglist__2577){
var x = cljs.core.first(arglist__2577);
var y = cljs.core.first(cljs.core.next(arglist__2577));
var more = cljs.core.rest(cljs.core.next(arglist__2577));
return G__2574__delegate.call(this, x, y, more);
});
return G__2574;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2570.call(this,x);
case  2 :
return distinct_QMARK___2571.call(this,x,y);
default:
return distinct_QMARK___2572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2572.cljs$lang$applyTo;
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
var r__2578 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2578)))
{return r__2578;
} else
{if(cljs.core.truth_(r__2578))
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
var sort__2580 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2581 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2579 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2579,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2579);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2580.call(this,comp);
case  2 :
return sort__2581.call(this,comp,coll);
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
var sort_by__2583 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2584 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2583.call(this,keyfn,comp);
case  3 :
return sort_by__2584.call(this,keyfn,comp,coll);
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
var reduce__2586 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2587 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2586.call(this,f,val);
case  3 :
return reduce__2587.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2593 = (function (f,coll){
var temp__3695__auto____2589 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2589))
{var s__2590 = temp__3695__auto____2589;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2590),cljs.core.next.call(null,s__2590));
} else
{return f.call(null);
}
});
var seq_reduce__2594 = (function (f,val,coll){
var val__2591 = val;
var coll__2592 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2592))
{{
var G__2596 = f.call(null,val__2591,cljs.core.first.call(null,coll__2592));
var G__2597 = cljs.core.next.call(null,coll__2592);
val__2591 = G__2596;
coll__2592 = G__2597;
continue;
}
} else
{return val__2591;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2593.call(this,f,val);
case  3 :
return seq_reduce__2594.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2598 = null;
var G__2598__2599 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2598__2600 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2598 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2598__2599.call(this,coll,f);
case  3 :
return G__2598__2600.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2598;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2602 = (function (){
return 0;
});
var _PLUS___2603 = (function (x){
return x;
});
var _PLUS___2604 = (function (x,y){
return (x + y);
});
var _PLUS___2605 = (function() { 
var G__2607__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2607 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2607__delegate.call(this, x, y, more);
};
G__2607.cljs$lang$maxFixedArity = 2;
G__2607.cljs$lang$applyTo = (function (arglist__2608){
var x = cljs.core.first(arglist__2608);
var y = cljs.core.first(cljs.core.next(arglist__2608));
var more = cljs.core.rest(cljs.core.next(arglist__2608));
return G__2607__delegate.call(this, x, y, more);
});
return G__2607;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2602.call(this);
case  1 :
return _PLUS___2603.call(this,x);
case  2 :
return _PLUS___2604.call(this,x,y);
default:
return _PLUS___2605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2605.cljs$lang$applyTo;
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
var ___2609 = (function (x){
return (- x);
});
var ___2610 = (function (x,y){
return (x - y);
});
var ___2611 = (function() { 
var G__2613__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2613 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2613__delegate.call(this, x, y, more);
};
G__2613.cljs$lang$maxFixedArity = 2;
G__2613.cljs$lang$applyTo = (function (arglist__2614){
var x = cljs.core.first(arglist__2614);
var y = cljs.core.first(cljs.core.next(arglist__2614));
var more = cljs.core.rest(cljs.core.next(arglist__2614));
return G__2613__delegate.call(this, x, y, more);
});
return G__2613;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2609.call(this,x);
case  2 :
return ___2610.call(this,x,y);
default:
return ___2611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2611.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2615 = (function (){
return 1;
});
var _STAR___2616 = (function (x){
return x;
});
var _STAR___2617 = (function (x,y){
return (x * y);
});
var _STAR___2618 = (function() { 
var G__2620__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2620 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2620__delegate.call(this, x, y, more);
};
G__2620.cljs$lang$maxFixedArity = 2;
G__2620.cljs$lang$applyTo = (function (arglist__2621){
var x = cljs.core.first(arglist__2621);
var y = cljs.core.first(cljs.core.next(arglist__2621));
var more = cljs.core.rest(cljs.core.next(arglist__2621));
return G__2620__delegate.call(this, x, y, more);
});
return G__2620;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2615.call(this);
case  1 :
return _STAR___2616.call(this,x);
case  2 :
return _STAR___2617.call(this,x,y);
default:
return _STAR___2618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2618.cljs$lang$applyTo;
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
var _SLASH___2622 = (function (x){
return (1 / x);
});
var _SLASH___2623 = (function (x,y){
return (x / y);
});
var _SLASH___2624 = (function() { 
var G__2626__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2626 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2626__delegate.call(this, x, y, more);
};
G__2626.cljs$lang$maxFixedArity = 2;
G__2626.cljs$lang$applyTo = (function (arglist__2627){
var x = cljs.core.first(arglist__2627);
var y = cljs.core.first(cljs.core.next(arglist__2627));
var more = cljs.core.rest(cljs.core.next(arglist__2627));
return G__2626__delegate.call(this, x, y, more);
});
return G__2626;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2622.call(this,x);
case  2 :
return _SLASH___2623.call(this,x,y);
default:
return _SLASH___2624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2624.cljs$lang$applyTo;
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
var _LT___2628 = (function (x){
return true;
});
var _LT___2629 = (function (x,y){
return (x < y);
});
var _LT___2630 = (function() { 
var G__2632__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2633 = y;
var G__2634 = cljs.core.first.call(null,more);
var G__2635 = cljs.core.next.call(null,more);
x = G__2633;
y = G__2634;
more = G__2635;
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
var G__2632 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2632__delegate.call(this, x, y, more);
};
G__2632.cljs$lang$maxFixedArity = 2;
G__2632.cljs$lang$applyTo = (function (arglist__2636){
var x = cljs.core.first(arglist__2636);
var y = cljs.core.first(cljs.core.next(arglist__2636));
var more = cljs.core.rest(cljs.core.next(arglist__2636));
return G__2632__delegate.call(this, x, y, more);
});
return G__2632;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2628.call(this,x);
case  2 :
return _LT___2629.call(this,x,y);
default:
return _LT___2630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2630.cljs$lang$applyTo;
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
var _LT__EQ___2637 = (function (x){
return true;
});
var _LT__EQ___2638 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2639 = (function() { 
var G__2641__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2642 = y;
var G__2643 = cljs.core.first.call(null,more);
var G__2644 = cljs.core.next.call(null,more);
x = G__2642;
y = G__2643;
more = G__2644;
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
var G__2641 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2641__delegate.call(this, x, y, more);
};
G__2641.cljs$lang$maxFixedArity = 2;
G__2641.cljs$lang$applyTo = (function (arglist__2645){
var x = cljs.core.first(arglist__2645);
var y = cljs.core.first(cljs.core.next(arglist__2645));
var more = cljs.core.rest(cljs.core.next(arglist__2645));
return G__2641__delegate.call(this, x, y, more);
});
return G__2641;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2637.call(this,x);
case  2 :
return _LT__EQ___2638.call(this,x,y);
default:
return _LT__EQ___2639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2639.cljs$lang$applyTo;
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
var _GT___2646 = (function (x){
return true;
});
var _GT___2647 = (function (x,y){
return (x > y);
});
var _GT___2648 = (function() { 
var G__2650__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2651 = y;
var G__2652 = cljs.core.first.call(null,more);
var G__2653 = cljs.core.next.call(null,more);
x = G__2651;
y = G__2652;
more = G__2653;
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
var G__2650 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2650__delegate.call(this, x, y, more);
};
G__2650.cljs$lang$maxFixedArity = 2;
G__2650.cljs$lang$applyTo = (function (arglist__2654){
var x = cljs.core.first(arglist__2654);
var y = cljs.core.first(cljs.core.next(arglist__2654));
var more = cljs.core.rest(cljs.core.next(arglist__2654));
return G__2650__delegate.call(this, x, y, more);
});
return G__2650;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2646.call(this,x);
case  2 :
return _GT___2647.call(this,x,y);
default:
return _GT___2648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2648.cljs$lang$applyTo;
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
var _GT__EQ___2655 = (function (x){
return true;
});
var _GT__EQ___2656 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2657 = (function() { 
var G__2659__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2660 = y;
var G__2661 = cljs.core.first.call(null,more);
var G__2662 = cljs.core.next.call(null,more);
x = G__2660;
y = G__2661;
more = G__2662;
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
var G__2659 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2659__delegate.call(this, x, y, more);
};
G__2659.cljs$lang$maxFixedArity = 2;
G__2659.cljs$lang$applyTo = (function (arglist__2663){
var x = cljs.core.first(arglist__2663);
var y = cljs.core.first(cljs.core.next(arglist__2663));
var more = cljs.core.rest(cljs.core.next(arglist__2663));
return G__2659__delegate.call(this, x, y, more);
});
return G__2659;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2655.call(this,x);
case  2 :
return _GT__EQ___2656.call(this,x,y);
default:
return _GT__EQ___2657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2657.cljs$lang$applyTo;
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
var max__2664 = (function (x){
return x;
});
var max__2665 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2666 = (function() { 
var G__2668__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2668 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2668__delegate.call(this, x, y, more);
};
G__2668.cljs$lang$maxFixedArity = 2;
G__2668.cljs$lang$applyTo = (function (arglist__2669){
var x = cljs.core.first(arglist__2669);
var y = cljs.core.first(cljs.core.next(arglist__2669));
var more = cljs.core.rest(cljs.core.next(arglist__2669));
return G__2668__delegate.call(this, x, y, more);
});
return G__2668;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2664.call(this,x);
case  2 :
return max__2665.call(this,x,y);
default:
return max__2666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2666.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2670 = (function (x){
return x;
});
var min__2671 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2672 = (function() { 
var G__2674__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2674 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2674__delegate.call(this, x, y, more);
};
G__2674.cljs$lang$maxFixedArity = 2;
G__2674.cljs$lang$applyTo = (function (arglist__2675){
var x = cljs.core.first(arglist__2675);
var y = cljs.core.first(cljs.core.next(arglist__2675));
var more = cljs.core.rest(cljs.core.next(arglist__2675));
return G__2674__delegate.call(this, x, y, more);
});
return G__2674;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2670.call(this,x);
case  2 :
return min__2671.call(this,x,y);
default:
return min__2672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2672.cljs$lang$applyTo;
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
var rem__2676 = (n % d);

return cljs.core.fix.call(null,((n - rem__2676) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2677 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2677));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2678 = (function (){
return Math.random.call(null);
});
var rand__2679 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2678.call(this);
case  1 :
return rand__2679.call(this,n);
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
var _EQ__EQ___2681 = (function (x){
return true;
});
var _EQ__EQ___2682 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2683 = (function() { 
var G__2685__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2686 = y;
var G__2687 = cljs.core.first.call(null,more);
var G__2688 = cljs.core.next.call(null,more);
x = G__2686;
y = G__2687;
more = G__2688;
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
var G__2685 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2685__delegate.call(this, x, y, more);
};
G__2685.cljs$lang$maxFixedArity = 2;
G__2685.cljs$lang$applyTo = (function (arglist__2689){
var x = cljs.core.first(arglist__2689);
var y = cljs.core.first(cljs.core.next(arglist__2689));
var more = cljs.core.rest(cljs.core.next(arglist__2689));
return G__2685__delegate.call(this, x, y, more);
});
return G__2685;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2681.call(this,x);
case  2 :
return _EQ__EQ___2682.call(this,x,y);
default:
return _EQ__EQ___2683.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2683.cljs$lang$applyTo;
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
var n__2690 = n;
var xs__2691 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2692 = xs__2691;

if(cljs.core.truth_(and__3546__auto____2692))
{return (n__2690 > 0);
} else
{return and__3546__auto____2692;
}
})()))
{{
var G__2693 = (n__2690 - 1);
var G__2694 = cljs.core.next.call(null,xs__2691);
n__2690 = G__2693;
xs__2691 = G__2694;
continue;
}
} else
{return xs__2691;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2699 = null;
var G__2699__2700 = (function (coll,n){
var temp__3695__auto____2695 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2695))
{var xs__2696 = temp__3695__auto____2695;

return cljs.core.first.call(null,xs__2696);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2699__2701 = (function (coll,n,not_found){
var temp__3695__auto____2697 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2697))
{var xs__2698 = temp__3695__auto____2697;

return cljs.core.first.call(null,xs__2698);
} else
{return not_found;
}
});
G__2699 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2699__2700.call(this,coll,n);
case  3 :
return G__2699__2701.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2699;
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
var str__2703 = (function (){
return "";
});
var str__2704 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2705 = (function() { 
var G__2707__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2708 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2709 = cljs.core.next.call(null,more);
sb = G__2708;
more = G__2709;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2707 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2707__delegate.call(this, x, ys);
};
G__2707.cljs$lang$maxFixedArity = 1;
G__2707.cljs$lang$applyTo = (function (arglist__2710){
var x = cljs.core.first(arglist__2710);
var ys = cljs.core.rest(arglist__2710);
return G__2707__delegate.call(this, x, ys);
});
return G__2707;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2703.call(this);
case  1 :
return str__2704.call(this,x);
default:
return str__2705.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2705.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2711 = (function (s,start){
return s.substring(start);
});
var subs__2712 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2711.call(this,s,start);
case  3 :
return subs__2712.call(this,s,start,end);
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
var symbol__2714 = (function (name){
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
var symbol__2715 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2714.call(this,ns);
case  2 :
return symbol__2715.call(this,ns,name);
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
var keyword__2717 = (function (name){
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
var keyword__2718 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2717.call(this,ns);
case  2 :
return keyword__2718.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2720 = cljs.core.seq.call(null,x);
var ys__2721 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2720)))
{return cljs.core.nil_QMARK_.call(null,ys__2721);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2721)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2720),cljs.core.first.call(null,ys__2721))))
{{
var G__2722 = cljs.core.next.call(null,xs__2720);
var G__2723 = cljs.core.next.call(null,ys__2721);
xs__2720 = G__2722;
ys__2721 = G__2723;
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
return cljs.core.reduce.call(null,(function (p1__2724_SHARP_,p2__2725_SHARP_){
return cljs.core.hash_combine.call(null,p1__2724_SHARP_,cljs.core.hash.call(null,p2__2725_SHARP_));
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
var this__2726 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2727 = this;
return (new cljs.core.List(this__2727.meta,o,coll,(this__2727.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2728 = this;
return this__2728.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2729 = this;
return this__2729.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2730 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2731 = this;
return this__2731.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2732 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2733 = this;
return (new cljs.core.List(meta,this__2733.first,this__2733.rest,this__2733.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2734 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2735 = this;
return this__2735.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2736 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2737 = this;
return this__2737.count;
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
var this__2738 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2739 = this;
return (new cljs.core.List(this__2739.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2740 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2741 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2742 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2743 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2744 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2745 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2746 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2747 = this;
return this__2747.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2748 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2749 = this;
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
list.cljs$lang$applyTo = (function (arglist__2750){
var items = cljs.core.seq( arglist__2750 );;
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
var this__2751 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2752 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2753 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2754 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2754.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2755 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2756 = this;
return this__2756.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2757 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2757.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2757.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2758 = this;
return this__2758.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2759 = this;
return (new cljs.core.Cons(meta,this__2759.first,this__2759.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2760 = null;
var G__2760__2761 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2760__2762 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2760 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2760__2761.call(this,string,f);
case  3 :
return G__2760__2762.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2760;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2764 = null;
var G__2764__2765 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2764__2766 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2764 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2764__2765.call(this,string,k);
case  3 :
return G__2764__2766.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2764;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2768 = null;
var G__2768__2769 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2768__2770 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2768 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2768__2769.call(this,string,n);
case  3 :
return G__2768__2770.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2768;
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
var G__2772 = null;
var G__2772__2773 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2772__2774 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2772 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2772__2773.call(this,_,coll);
case  3 :
return G__2772__2774.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2772;
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
var x__2776 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2776;
} else
{lazy_seq.x = x__2776.call(null);
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
var this__2777 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2778 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2779 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2780 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2780.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2781 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2782 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2783 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2784 = this;
return this__2784.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2785 = this;
return (new cljs.core.LazySeq(meta,this__2785.realized,this__2785.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2786 = cljs.core.array.call(null);

var s__2787 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2787)))
{ary__2786.push(cljs.core.first.call(null,s__2787));
{
var G__2788 = cljs.core.next.call(null,s__2787);
s__2787 = G__2788;
continue;
}
} else
{return ary__2786;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2789 = s;
var i__2790 = n;
var sum__2791 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2792 = (i__2790 > 0);

if(cljs.core.truth_(and__3546__auto____2792))
{return cljs.core.seq.call(null,s__2789);
} else
{return and__3546__auto____2792;
}
})()))
{{
var G__2793 = cljs.core.next.call(null,s__2789);
var G__2794 = (i__2790 - 1);
var G__2795 = (sum__2791 + 1);
s__2789 = G__2793;
i__2790 = G__2794;
sum__2791 = G__2795;
continue;
}
} else
{return sum__2791;
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
var concat__2799 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2800 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2801 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2796 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2796))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2796),concat.call(null,cljs.core.rest.call(null,s__2796),y));
} else
{return y;
}
})));
});
var concat__2802 = (function() { 
var G__2804__delegate = function (x,y,zs){
var cat__2798 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2797 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2797))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2797),cat.call(null,cljs.core.rest.call(null,xys__2797),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2798.call(null,concat.call(null,x,y),zs);
};
var G__2804 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2804__delegate.call(this, x, y, zs);
};
G__2804.cljs$lang$maxFixedArity = 2;
G__2804.cljs$lang$applyTo = (function (arglist__2805){
var x = cljs.core.first(arglist__2805);
var y = cljs.core.first(cljs.core.next(arglist__2805));
var zs = cljs.core.rest(cljs.core.next(arglist__2805));
return G__2804__delegate.call(this, x, y, zs);
});
return G__2804;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2799.call(this);
case  1 :
return concat__2800.call(this,x);
case  2 :
return concat__2801.call(this,x,y);
default:
return concat__2802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2802.cljs$lang$applyTo;
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
var list_STAR___2806 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2807 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2808 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2809 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2810 = (function() { 
var G__2812__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2812 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2812__delegate.call(this, a, b, c, d, more);
};
G__2812.cljs$lang$maxFixedArity = 4;
G__2812.cljs$lang$applyTo = (function (arglist__2813){
var a = cljs.core.first(arglist__2813);
var b = cljs.core.first(cljs.core.next(arglist__2813));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2813)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2813))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2813))));
return G__2812__delegate.call(this, a, b, c, d, more);
});
return G__2812;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2806.call(this,a);
case  2 :
return list_STAR___2807.call(this,a,b);
case  3 :
return list_STAR___2808.call(this,a,b,c);
case  4 :
return list_STAR___2809.call(this,a,b,c,d);
default:
return list_STAR___2810.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2810.cljs$lang$applyTo;
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
var apply__2823 = (function (f,args){
var fixed_arity__2814 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2814 + 1)) <= fixed_arity__2814)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2824 = (function (f,x,args){
var arglist__2815 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2816 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2815,fixed_arity__2816) <= fixed_arity__2816)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2815));
} else
{return f.cljs$lang$applyTo(arglist__2815);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2815));
}
});
var apply__2825 = (function (f,x,y,args){
var arglist__2817 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2818 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2817,fixed_arity__2818) <= fixed_arity__2818)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2817));
} else
{return f.cljs$lang$applyTo(arglist__2817);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2817));
}
});
var apply__2826 = (function (f,x,y,z,args){
var arglist__2819 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2820 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2819,fixed_arity__2820) <= fixed_arity__2820)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2819));
} else
{return f.cljs$lang$applyTo(arglist__2819);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2819));
}
});
var apply__2827 = (function() { 
var G__2829__delegate = function (f,a,b,c,d,args){
var arglist__2821 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2822 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2821,fixed_arity__2822) <= fixed_arity__2822)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2821));
} else
{return f.cljs$lang$applyTo(arglist__2821);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2821));
}
};
var G__2829 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2829__delegate.call(this, f, a, b, c, d, args);
};
G__2829.cljs$lang$maxFixedArity = 5;
G__2829.cljs$lang$applyTo = (function (arglist__2830){
var f = cljs.core.first(arglist__2830);
var a = cljs.core.first(cljs.core.next(arglist__2830));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2830)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2830))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2830)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2830)))));
return G__2829__delegate.call(this, f, a, b, c, d, args);
});
return G__2829;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2823.call(this,f,a);
case  3 :
return apply__2824.call(this,f,a,b);
case  4 :
return apply__2825.call(this,f,a,b,c);
case  5 :
return apply__2826.call(this,f,a,b,c,d);
default:
return apply__2827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2827.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__2831){
var obj = cljs.core.first(arglist__2831);
var f = cljs.core.first(cljs.core.next(arglist__2831));
var args = cljs.core.rest(cljs.core.next(arglist__2831));
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
var not_EQ___2832 = (function (x){
return false;
});
var not_EQ___2833 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2834 = (function() { 
var G__2836__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2836 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2836__delegate.call(this, x, y, more);
};
G__2836.cljs$lang$maxFixedArity = 2;
G__2836.cljs$lang$applyTo = (function (arglist__2837){
var x = cljs.core.first(arglist__2837);
var y = cljs.core.first(cljs.core.next(arglist__2837));
var more = cljs.core.rest(cljs.core.next(arglist__2837));
return G__2836__delegate.call(this, x, y, more);
});
return G__2836;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2832.call(this,x);
case  2 :
return not_EQ___2833.call(this,x,y);
default:
return not_EQ___2834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2834.cljs$lang$applyTo;
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
var G__2838 = pred;
var G__2839 = cljs.core.next.call(null,coll);
pred = G__2838;
coll = G__2839;
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
{var or__3548__auto____2840 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2840))
{return or__3548__auto____2840;
} else
{{
var G__2841 = pred;
var G__2842 = cljs.core.next.call(null,coll);
pred = G__2841;
coll = G__2842;
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
var G__2843 = null;
var G__2843__2844 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2843__2845 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2843__2846 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2843__2847 = (function() { 
var G__2849__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2849 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2849__delegate.call(this, x, y, zs);
};
G__2849.cljs$lang$maxFixedArity = 2;
G__2849.cljs$lang$applyTo = (function (arglist__2850){
var x = cljs.core.first(arglist__2850);
var y = cljs.core.first(cljs.core.next(arglist__2850));
var zs = cljs.core.rest(cljs.core.next(arglist__2850));
return G__2849__delegate.call(this, x, y, zs);
});
return G__2849;
})()
;
G__2843 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2843__2844.call(this);
case  1 :
return G__2843__2845.call(this,x);
case  2 :
return G__2843__2846.call(this,x,y);
default:
return G__2843__2847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2843.cljs$lang$maxFixedArity = 2;
G__2843.cljs$lang$applyTo = G__2843__2847.cljs$lang$applyTo;
return G__2843;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2851__delegate = function (args){
return x;
};
var G__2851 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2851__delegate.call(this, args);
};
G__2851.cljs$lang$maxFixedArity = 0;
G__2851.cljs$lang$applyTo = (function (arglist__2852){
var args = cljs.core.seq( arglist__2852 );;
return G__2851__delegate.call(this, args);
});
return G__2851;
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
var comp__2856 = (function (){
return cljs.core.identity;
});
var comp__2857 = (function (f){
return f;
});
var comp__2858 = (function (f,g){
return (function() {
var G__2862 = null;
var G__2862__2863 = (function (){
return f.call(null,g.call(null));
});
var G__2862__2864 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2862__2865 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2862__2866 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2862__2867 = (function() { 
var G__2869__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2869 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2869__delegate.call(this, x, y, z, args);
};
G__2869.cljs$lang$maxFixedArity = 3;
G__2869.cljs$lang$applyTo = (function (arglist__2870){
var x = cljs.core.first(arglist__2870);
var y = cljs.core.first(cljs.core.next(arglist__2870));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2870)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2870)));
return G__2869__delegate.call(this, x, y, z, args);
});
return G__2869;
})()
;
G__2862 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2862__2863.call(this);
case  1 :
return G__2862__2864.call(this,x);
case  2 :
return G__2862__2865.call(this,x,y);
case  3 :
return G__2862__2866.call(this,x,y,z);
default:
return G__2862__2867.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2862.cljs$lang$maxFixedArity = 3;
G__2862.cljs$lang$applyTo = G__2862__2867.cljs$lang$applyTo;
return G__2862;
})()
});
var comp__2859 = (function (f,g,h){
return (function() {
var G__2871 = null;
var G__2871__2872 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2871__2873 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2871__2874 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2871__2875 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2871__2876 = (function() { 
var G__2878__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2878 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2878__delegate.call(this, x, y, z, args);
};
G__2878.cljs$lang$maxFixedArity = 3;
G__2878.cljs$lang$applyTo = (function (arglist__2879){
var x = cljs.core.first(arglist__2879);
var y = cljs.core.first(cljs.core.next(arglist__2879));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2879)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2879)));
return G__2878__delegate.call(this, x, y, z, args);
});
return G__2878;
})()
;
G__2871 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2871__2872.call(this);
case  1 :
return G__2871__2873.call(this,x);
case  2 :
return G__2871__2874.call(this,x,y);
case  3 :
return G__2871__2875.call(this,x,y,z);
default:
return G__2871__2876.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2871.cljs$lang$maxFixedArity = 3;
G__2871.cljs$lang$applyTo = G__2871__2876.cljs$lang$applyTo;
return G__2871;
})()
});
var comp__2860 = (function() { 
var G__2880__delegate = function (f1,f2,f3,fs){
var fs__2853 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2881__delegate = function (args){
var ret__2854 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2853),args);
var fs__2855 = cljs.core.next.call(null,fs__2853);

while(true){
if(cljs.core.truth_(fs__2855))
{{
var G__2882 = cljs.core.first.call(null,fs__2855).call(null,ret__2854);
var G__2883 = cljs.core.next.call(null,fs__2855);
ret__2854 = G__2882;
fs__2855 = G__2883;
continue;
}
} else
{return ret__2854;
}
break;
}
};
var G__2881 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2881__delegate.call(this, args);
};
G__2881.cljs$lang$maxFixedArity = 0;
G__2881.cljs$lang$applyTo = (function (arglist__2884){
var args = cljs.core.seq( arglist__2884 );;
return G__2881__delegate.call(this, args);
});
return G__2881;
})()
;
};
var G__2880 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2880__delegate.call(this, f1, f2, f3, fs);
};
G__2880.cljs$lang$maxFixedArity = 3;
G__2880.cljs$lang$applyTo = (function (arglist__2885){
var f1 = cljs.core.first(arglist__2885);
var f2 = cljs.core.first(cljs.core.next(arglist__2885));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2885)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2885)));
return G__2880__delegate.call(this, f1, f2, f3, fs);
});
return G__2880;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2856.call(this);
case  1 :
return comp__2857.call(this,f1);
case  2 :
return comp__2858.call(this,f1,f2);
case  3 :
return comp__2859.call(this,f1,f2,f3);
default:
return comp__2860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2860.cljs$lang$applyTo;
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
var partial__2886 = (function (f,arg1){
return (function() { 
var G__2891__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2891 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2891__delegate.call(this, args);
};
G__2891.cljs$lang$maxFixedArity = 0;
G__2891.cljs$lang$applyTo = (function (arglist__2892){
var args = cljs.core.seq( arglist__2892 );;
return G__2891__delegate.call(this, args);
});
return G__2891;
})()
;
});
var partial__2887 = (function (f,arg1,arg2){
return (function() { 
var G__2893__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2893 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2893__delegate.call(this, args);
};
G__2893.cljs$lang$maxFixedArity = 0;
G__2893.cljs$lang$applyTo = (function (arglist__2894){
var args = cljs.core.seq( arglist__2894 );;
return G__2893__delegate.call(this, args);
});
return G__2893;
})()
;
});
var partial__2888 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2895__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2895 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2895__delegate.call(this, args);
};
G__2895.cljs$lang$maxFixedArity = 0;
G__2895.cljs$lang$applyTo = (function (arglist__2896){
var args = cljs.core.seq( arglist__2896 );;
return G__2895__delegate.call(this, args);
});
return G__2895;
})()
;
});
var partial__2889 = (function() { 
var G__2897__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2898__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2898 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2898__delegate.call(this, args);
};
G__2898.cljs$lang$maxFixedArity = 0;
G__2898.cljs$lang$applyTo = (function (arglist__2899){
var args = cljs.core.seq( arglist__2899 );;
return G__2898__delegate.call(this, args);
});
return G__2898;
})()
;
};
var G__2897 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2897__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2897.cljs$lang$maxFixedArity = 4;
G__2897.cljs$lang$applyTo = (function (arglist__2900){
var f = cljs.core.first(arglist__2900);
var arg1 = cljs.core.first(cljs.core.next(arglist__2900));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2900)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2900))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2900))));
return G__2897__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2897;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2886.call(this,f,arg1);
case  3 :
return partial__2887.call(this,f,arg1,arg2);
case  4 :
return partial__2888.call(this,f,arg1,arg2,arg3);
default:
return partial__2889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2889.cljs$lang$applyTo;
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
var fnil__2901 = (function (f,x){
return (function() {
var G__2905 = null;
var G__2905__2906 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2905__2907 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2905__2908 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2905__2909 = (function() { 
var G__2911__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2911 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2911__delegate.call(this, a, b, c, ds);
};
G__2911.cljs$lang$maxFixedArity = 3;
G__2911.cljs$lang$applyTo = (function (arglist__2912){
var a = cljs.core.first(arglist__2912);
var b = cljs.core.first(cljs.core.next(arglist__2912));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2912)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2912)));
return G__2911__delegate.call(this, a, b, c, ds);
});
return G__2911;
})()
;
G__2905 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2905__2906.call(this,a);
case  2 :
return G__2905__2907.call(this,a,b);
case  3 :
return G__2905__2908.call(this,a,b,c);
default:
return G__2905__2909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2905.cljs$lang$maxFixedArity = 3;
G__2905.cljs$lang$applyTo = G__2905__2909.cljs$lang$applyTo;
return G__2905;
})()
});
var fnil__2902 = (function (f,x,y){
return (function() {
var G__2913 = null;
var G__2913__2914 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2913__2915 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2913__2916 = (function() { 
var G__2918__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2918 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2918__delegate.call(this, a, b, c, ds);
};
G__2918.cljs$lang$maxFixedArity = 3;
G__2918.cljs$lang$applyTo = (function (arglist__2919){
var a = cljs.core.first(arglist__2919);
var b = cljs.core.first(cljs.core.next(arglist__2919));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2919)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2919)));
return G__2918__delegate.call(this, a, b, c, ds);
});
return G__2918;
})()
;
G__2913 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2913__2914.call(this,a,b);
case  3 :
return G__2913__2915.call(this,a,b,c);
default:
return G__2913__2916.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2913.cljs$lang$maxFixedArity = 3;
G__2913.cljs$lang$applyTo = G__2913__2916.cljs$lang$applyTo;
return G__2913;
})()
});
var fnil__2903 = (function (f,x,y,z){
return (function() {
var G__2920 = null;
var G__2920__2921 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2920__2922 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2920__2923 = (function() { 
var G__2925__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2925 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2925__delegate.call(this, a, b, c, ds);
};
G__2925.cljs$lang$maxFixedArity = 3;
G__2925.cljs$lang$applyTo = (function (arglist__2926){
var a = cljs.core.first(arglist__2926);
var b = cljs.core.first(cljs.core.next(arglist__2926));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2926)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2926)));
return G__2925__delegate.call(this, a, b, c, ds);
});
return G__2925;
})()
;
G__2920 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2920__2921.call(this,a,b);
case  3 :
return G__2920__2922.call(this,a,b,c);
default:
return G__2920__2923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2920.cljs$lang$maxFixedArity = 3;
G__2920.cljs$lang$applyTo = G__2920__2923.cljs$lang$applyTo;
return G__2920;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2901.call(this,f,x);
case  3 :
return fnil__2902.call(this,f,x,y);
case  4 :
return fnil__2903.call(this,f,x,y,z);
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
var mapi__2929 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2927 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2927))
{var s__2928 = temp__3698__auto____2927;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2928)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2928)));
} else
{return null;
}
})));
});

return mapi__2929.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2930 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2930))
{var s__2931 = temp__3698__auto____2930;

var x__2932 = f.call(null,cljs.core.first.call(null,s__2931));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2932)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2931));
} else
{return cljs.core.cons.call(null,x__2932,keep.call(null,f,cljs.core.rest.call(null,s__2931)));
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
var keepi__2942 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2939 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2939))
{var s__2940 = temp__3698__auto____2939;

var x__2941 = f.call(null,idx,cljs.core.first.call(null,s__2940));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2941)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2940));
} else
{return cljs.core.cons.call(null,x__2941,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2940)));
}
} else
{return null;
}
})));
});

return keepi__2942.call(null,0,coll);
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
var every_pred__2987 = (function (p){
return (function() {
var ep1 = null;
var ep1__2992 = (function (){
return true;
});
var ep1__2993 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2994 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2949 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2949))
{return p.call(null,y);
} else
{return and__3546__auto____2949;
}
})());
});
var ep1__2995 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2950 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2950))
{var and__3546__auto____2951 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____2951))
{return p.call(null,z);
} else
{return and__3546__auto____2951;
}
} else
{return and__3546__auto____2950;
}
})());
});
var ep1__2996 = (function() { 
var G__2998__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2952 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2952))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____2952;
}
})());
};
var G__2998 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2998__delegate.call(this, x, y, z, args);
};
G__2998.cljs$lang$maxFixedArity = 3;
G__2998.cljs$lang$applyTo = (function (arglist__2999){
var x = cljs.core.first(arglist__2999);
var y = cljs.core.first(cljs.core.next(arglist__2999));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2999)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2999)));
return G__2998__delegate.call(this, x, y, z, args);
});
return G__2998;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2992.call(this);
case  1 :
return ep1__2993.call(this,x);
case  2 :
return ep1__2994.call(this,x,y);
case  3 :
return ep1__2995.call(this,x,y,z);
default:
return ep1__2996.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2996.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2988 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3000 = (function (){
return true;
});
var ep2__3001 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2953 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2953))
{return p2.call(null,x);
} else
{return and__3546__auto____2953;
}
})());
});
var ep2__3002 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2954 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2954))
{var and__3546__auto____2955 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2955))
{var and__3546__auto____2956 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2956))
{return p2.call(null,y);
} else
{return and__3546__auto____2956;
}
} else
{return and__3546__auto____2955;
}
} else
{return and__3546__auto____2954;
}
})());
});
var ep2__3003 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2957 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2957))
{var and__3546__auto____2958 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2958))
{var and__3546__auto____2959 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2959))
{var and__3546__auto____2960 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2960))
{var and__3546__auto____2961 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2961))
{return p2.call(null,z);
} else
{return and__3546__auto____2961;
}
} else
{return and__3546__auto____2960;
}
} else
{return and__3546__auto____2959;
}
} else
{return and__3546__auto____2958;
}
} else
{return and__3546__auto____2957;
}
})());
});
var ep2__3004 = (function() { 
var G__3006__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2962 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2962))
{return cljs.core.every_QMARK_.call(null,(function (p1__2933_SHARP_){
var and__3546__auto____2963 = p1.call(null,p1__2933_SHARP_);

if(cljs.core.truth_(and__3546__auto____2963))
{return p2.call(null,p1__2933_SHARP_);
} else
{return and__3546__auto____2963;
}
}),args);
} else
{return and__3546__auto____2962;
}
})());
};
var G__3006 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3006__delegate.call(this, x, y, z, args);
};
G__3006.cljs$lang$maxFixedArity = 3;
G__3006.cljs$lang$applyTo = (function (arglist__3007){
var x = cljs.core.first(arglist__3007);
var y = cljs.core.first(cljs.core.next(arglist__3007));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3007)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3007)));
return G__3006__delegate.call(this, x, y, z, args);
});
return G__3006;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3000.call(this);
case  1 :
return ep2__3001.call(this,x);
case  2 :
return ep2__3002.call(this,x,y);
case  3 :
return ep2__3003.call(this,x,y,z);
default:
return ep2__3004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3004.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2989 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3008 = (function (){
return true;
});
var ep3__3009 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2964 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2964))
{var and__3546__auto____2965 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2965))
{return p3.call(null,x);
} else
{return and__3546__auto____2965;
}
} else
{return and__3546__auto____2964;
}
})());
});
var ep3__3010 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2966 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2966))
{var and__3546__auto____2967 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2967))
{var and__3546__auto____2968 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2968))
{var and__3546__auto____2969 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2969))
{var and__3546__auto____2970 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2970))
{return p3.call(null,y);
} else
{return and__3546__auto____2970;
}
} else
{return and__3546__auto____2969;
}
} else
{return and__3546__auto____2968;
}
} else
{return and__3546__auto____2967;
}
} else
{return and__3546__auto____2966;
}
})());
});
var ep3__3011 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2971 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2971))
{var and__3546__auto____2972 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2972))
{var and__3546__auto____2973 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2973))
{var and__3546__auto____2974 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2974))
{var and__3546__auto____2975 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2975))
{var and__3546__auto____2976 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____2976))
{var and__3546__auto____2977 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2977))
{var and__3546__auto____2978 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____2978))
{return p3.call(null,z);
} else
{return and__3546__auto____2978;
}
} else
{return and__3546__auto____2977;
}
} else
{return and__3546__auto____2976;
}
} else
{return and__3546__auto____2975;
}
} else
{return and__3546__auto____2974;
}
} else
{return and__3546__auto____2973;
}
} else
{return and__3546__auto____2972;
}
} else
{return and__3546__auto____2971;
}
})());
});
var ep3__3012 = (function() { 
var G__3014__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2979 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2979))
{return cljs.core.every_QMARK_.call(null,(function (p1__2934_SHARP_){
var and__3546__auto____2980 = p1.call(null,p1__2934_SHARP_);

if(cljs.core.truth_(and__3546__auto____2980))
{var and__3546__auto____2981 = p2.call(null,p1__2934_SHARP_);

if(cljs.core.truth_(and__3546__auto____2981))
{return p3.call(null,p1__2934_SHARP_);
} else
{return and__3546__auto____2981;
}
} else
{return and__3546__auto____2980;
}
}),args);
} else
{return and__3546__auto____2979;
}
})());
};
var G__3014 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3014__delegate.call(this, x, y, z, args);
};
G__3014.cljs$lang$maxFixedArity = 3;
G__3014.cljs$lang$applyTo = (function (arglist__3015){
var x = cljs.core.first(arglist__3015);
var y = cljs.core.first(cljs.core.next(arglist__3015));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3015)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3015)));
return G__3014__delegate.call(this, x, y, z, args);
});
return G__3014;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3008.call(this);
case  1 :
return ep3__3009.call(this,x);
case  2 :
return ep3__3010.call(this,x,y);
case  3 :
return ep3__3011.call(this,x,y,z);
default:
return ep3__3012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3012.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2990 = (function() { 
var G__3016__delegate = function (p1,p2,p3,ps){
var ps__2982 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3017 = (function (){
return true;
});
var epn__3018 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2935_SHARP_){
return p1__2935_SHARP_.call(null,x);
}),ps__2982);
});
var epn__3019 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2936_SHARP_){
var and__3546__auto____2983 = p1__2936_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____2983))
{return p1__2936_SHARP_.call(null,y);
} else
{return and__3546__auto____2983;
}
}),ps__2982);
});
var epn__3020 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2937_SHARP_){
var and__3546__auto____2984 = p1__2937_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____2984))
{var and__3546__auto____2985 = p1__2937_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____2985))
{return p1__2937_SHARP_.call(null,z);
} else
{return and__3546__auto____2985;
}
} else
{return and__3546__auto____2984;
}
}),ps__2982);
});
var epn__3021 = (function() { 
var G__3023__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2986 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2986))
{return cljs.core.every_QMARK_.call(null,(function (p1__2938_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2938_SHARP_,args);
}),ps__2982);
} else
{return and__3546__auto____2986;
}
})());
};
var G__3023 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3023__delegate.call(this, x, y, z, args);
};
G__3023.cljs$lang$maxFixedArity = 3;
G__3023.cljs$lang$applyTo = (function (arglist__3024){
var x = cljs.core.first(arglist__3024);
var y = cljs.core.first(cljs.core.next(arglist__3024));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3024)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3024)));
return G__3023__delegate.call(this, x, y, z, args);
});
return G__3023;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3017.call(this);
case  1 :
return epn__3018.call(this,x);
case  2 :
return epn__3019.call(this,x,y);
case  3 :
return epn__3020.call(this,x,y,z);
default:
return epn__3021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3021.cljs$lang$applyTo;
return epn;
})()
};
var G__3016 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3016__delegate.call(this, p1, p2, p3, ps);
};
G__3016.cljs$lang$maxFixedArity = 3;
G__3016.cljs$lang$applyTo = (function (arglist__3025){
var p1 = cljs.core.first(arglist__3025);
var p2 = cljs.core.first(cljs.core.next(arglist__3025));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3025)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3025)));
return G__3016__delegate.call(this, p1, p2, p3, ps);
});
return G__3016;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2987.call(this,p1);
case  2 :
return every_pred__2988.call(this,p1,p2);
case  3 :
return every_pred__2989.call(this,p1,p2,p3);
default:
return every_pred__2990.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2990.cljs$lang$applyTo;
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
var some_fn__3065 = (function (p){
return (function() {
var sp1 = null;
var sp1__3070 = (function (){
return null;
});
var sp1__3071 = (function (x){
return p.call(null,x);
});
var sp1__3072 = (function (x,y){
var or__3548__auto____3027 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3027))
{return or__3548__auto____3027;
} else
{return p.call(null,y);
}
});
var sp1__3073 = (function (x,y,z){
var or__3548__auto____3028 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3028))
{return or__3548__auto____3028;
} else
{var or__3548__auto____3029 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3029))
{return or__3548__auto____3029;
} else
{return p.call(null,z);
}
}
});
var sp1__3074 = (function() { 
var G__3076__delegate = function (x,y,z,args){
var or__3548__auto____3030 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3030))
{return or__3548__auto____3030;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3076 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3076__delegate.call(this, x, y, z, args);
};
G__3076.cljs$lang$maxFixedArity = 3;
G__3076.cljs$lang$applyTo = (function (arglist__3077){
var x = cljs.core.first(arglist__3077);
var y = cljs.core.first(cljs.core.next(arglist__3077));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3077)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3077)));
return G__3076__delegate.call(this, x, y, z, args);
});
return G__3076;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3070.call(this);
case  1 :
return sp1__3071.call(this,x);
case  2 :
return sp1__3072.call(this,x,y);
case  3 :
return sp1__3073.call(this,x,y,z);
default:
return sp1__3074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3074.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3066 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3078 = (function (){
return null;
});
var sp2__3079 = (function (x){
var or__3548__auto____3031 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3031))
{return or__3548__auto____3031;
} else
{return p2.call(null,x);
}
});
var sp2__3080 = (function (x,y){
var or__3548__auto____3032 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3032))
{return or__3548__auto____3032;
} else
{var or__3548__auto____3033 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3033))
{return or__3548__auto____3033;
} else
{var or__3548__auto____3034 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3034))
{return or__3548__auto____3034;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3081 = (function (x,y,z){
var or__3548__auto____3035 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3035))
{return or__3548__auto____3035;
} else
{var or__3548__auto____3036 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3036))
{return or__3548__auto____3036;
} else
{var or__3548__auto____3037 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3037))
{return or__3548__auto____3037;
} else
{var or__3548__auto____3038 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3038))
{return or__3548__auto____3038;
} else
{var or__3548__auto____3039 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3039))
{return or__3548__auto____3039;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3082 = (function() { 
var G__3084__delegate = function (x,y,z,args){
var or__3548__auto____3040 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3040))
{return or__3548__auto____3040;
} else
{return cljs.core.some.call(null,(function (p1__2943_SHARP_){
var or__3548__auto____3041 = p1.call(null,p1__2943_SHARP_);

if(cljs.core.truth_(or__3548__auto____3041))
{return or__3548__auto____3041;
} else
{return p2.call(null,p1__2943_SHARP_);
}
}),args);
}
};
var G__3084 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3084__delegate.call(this, x, y, z, args);
};
G__3084.cljs$lang$maxFixedArity = 3;
G__3084.cljs$lang$applyTo = (function (arglist__3085){
var x = cljs.core.first(arglist__3085);
var y = cljs.core.first(cljs.core.next(arglist__3085));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3085)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3085)));
return G__3084__delegate.call(this, x, y, z, args);
});
return G__3084;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3078.call(this);
case  1 :
return sp2__3079.call(this,x);
case  2 :
return sp2__3080.call(this,x,y);
case  3 :
return sp2__3081.call(this,x,y,z);
default:
return sp2__3082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3082.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3067 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3086 = (function (){
return null;
});
var sp3__3087 = (function (x){
var or__3548__auto____3042 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3042))
{return or__3548__auto____3042;
} else
{var or__3548__auto____3043 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3043))
{return or__3548__auto____3043;
} else
{return p3.call(null,x);
}
}
});
var sp3__3088 = (function (x,y){
var or__3548__auto____3044 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3044))
{return or__3548__auto____3044;
} else
{var or__3548__auto____3045 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3045))
{return or__3548__auto____3045;
} else
{var or__3548__auto____3046 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3046))
{return or__3548__auto____3046;
} else
{var or__3548__auto____3047 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3047))
{return or__3548__auto____3047;
} else
{var or__3548__auto____3048 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3048))
{return or__3548__auto____3048;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3089 = (function (x,y,z){
var or__3548__auto____3049 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3049))
{return or__3548__auto____3049;
} else
{var or__3548__auto____3050 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3050))
{return or__3548__auto____3050;
} else
{var or__3548__auto____3051 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3051))
{return or__3548__auto____3051;
} else
{var or__3548__auto____3052 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3052))
{return or__3548__auto____3052;
} else
{var or__3548__auto____3053 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3053))
{return or__3548__auto____3053;
} else
{var or__3548__auto____3054 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3054))
{return or__3548__auto____3054;
} else
{var or__3548__auto____3055 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3055))
{return or__3548__auto____3055;
} else
{var or__3548__auto____3056 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3056))
{return or__3548__auto____3056;
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
var sp3__3090 = (function() { 
var G__3092__delegate = function (x,y,z,args){
var or__3548__auto____3057 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3057))
{return or__3548__auto____3057;
} else
{return cljs.core.some.call(null,(function (p1__2944_SHARP_){
var or__3548__auto____3058 = p1.call(null,p1__2944_SHARP_);

if(cljs.core.truth_(or__3548__auto____3058))
{return or__3548__auto____3058;
} else
{var or__3548__auto____3059 = p2.call(null,p1__2944_SHARP_);

if(cljs.core.truth_(or__3548__auto____3059))
{return or__3548__auto____3059;
} else
{return p3.call(null,p1__2944_SHARP_);
}
}
}),args);
}
};
var G__3092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3092__delegate.call(this, x, y, z, args);
};
G__3092.cljs$lang$maxFixedArity = 3;
G__3092.cljs$lang$applyTo = (function (arglist__3093){
var x = cljs.core.first(arglist__3093);
var y = cljs.core.first(cljs.core.next(arglist__3093));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3093)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3093)));
return G__3092__delegate.call(this, x, y, z, args);
});
return G__3092;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3086.call(this);
case  1 :
return sp3__3087.call(this,x);
case  2 :
return sp3__3088.call(this,x,y);
case  3 :
return sp3__3089.call(this,x,y,z);
default:
return sp3__3090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3090.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3068 = (function() { 
var G__3094__delegate = function (p1,p2,p3,ps){
var ps__3060 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3095 = (function (){
return null;
});
var spn__3096 = (function (x){
return cljs.core.some.call(null,(function (p1__2945_SHARP_){
return p1__2945_SHARP_.call(null,x);
}),ps__3060);
});
var spn__3097 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2946_SHARP_){
var or__3548__auto____3061 = p1__2946_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3061))
{return or__3548__auto____3061;
} else
{return p1__2946_SHARP_.call(null,y);
}
}),ps__3060);
});
var spn__3098 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2947_SHARP_){
var or__3548__auto____3062 = p1__2947_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3062))
{return or__3548__auto____3062;
} else
{var or__3548__auto____3063 = p1__2947_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3063))
{return or__3548__auto____3063;
} else
{return p1__2947_SHARP_.call(null,z);
}
}
}),ps__3060);
});
var spn__3099 = (function() { 
var G__3101__delegate = function (x,y,z,args){
var or__3548__auto____3064 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3064))
{return or__3548__auto____3064;
} else
{return cljs.core.some.call(null,(function (p1__2948_SHARP_){
return cljs.core.some.call(null,p1__2948_SHARP_,args);
}),ps__3060);
}
};
var G__3101 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3101__delegate.call(this, x, y, z, args);
};
G__3101.cljs$lang$maxFixedArity = 3;
G__3101.cljs$lang$applyTo = (function (arglist__3102){
var x = cljs.core.first(arglist__3102);
var y = cljs.core.first(cljs.core.next(arglist__3102));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3102)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3102)));
return G__3101__delegate.call(this, x, y, z, args);
});
return G__3101;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3095.call(this);
case  1 :
return spn__3096.call(this,x);
case  2 :
return spn__3097.call(this,x,y);
case  3 :
return spn__3098.call(this,x,y,z);
default:
return spn__3099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3099.cljs$lang$applyTo;
return spn;
})()
};
var G__3094 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3094__delegate.call(this, p1, p2, p3, ps);
};
G__3094.cljs$lang$maxFixedArity = 3;
G__3094.cljs$lang$applyTo = (function (arglist__3103){
var p1 = cljs.core.first(arglist__3103);
var p2 = cljs.core.first(cljs.core.next(arglist__3103));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3103)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3103)));
return G__3094__delegate.call(this, p1, p2, p3, ps);
});
return G__3094;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3065.call(this,p1);
case  2 :
return some_fn__3066.call(this,p1,p2);
case  3 :
return some_fn__3067.call(this,p1,p2,p3);
default:
return some_fn__3068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3068.cljs$lang$applyTo;
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
var map__3116 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3104))
{var s__3105 = temp__3698__auto____3104;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3105)),map.call(null,f,cljs.core.rest.call(null,s__3105)));
} else
{return null;
}
})));
});
var map__3117 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3106 = cljs.core.seq.call(null,c1);
var s2__3107 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3108 = s1__3106;

if(cljs.core.truth_(and__3546__auto____3108))
{return s2__3107;
} else
{return and__3546__auto____3108;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3106),cljs.core.first.call(null,s2__3107)),map.call(null,f,cljs.core.rest.call(null,s1__3106),cljs.core.rest.call(null,s2__3107)));
} else
{return null;
}
})));
});
var map__3118 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3109 = cljs.core.seq.call(null,c1);
var s2__3110 = cljs.core.seq.call(null,c2);
var s3__3111 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3112 = s1__3109;

if(cljs.core.truth_(and__3546__auto____3112))
{var and__3546__auto____3113 = s2__3110;

if(cljs.core.truth_(and__3546__auto____3113))
{return s3__3111;
} else
{return and__3546__auto____3113;
}
} else
{return and__3546__auto____3112;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3109),cljs.core.first.call(null,s2__3110),cljs.core.first.call(null,s3__3111)),map.call(null,f,cljs.core.rest.call(null,s1__3109),cljs.core.rest.call(null,s2__3110),cljs.core.rest.call(null,s3__3111)));
} else
{return null;
}
})));
});
var map__3119 = (function() { 
var G__3121__delegate = function (f,c1,c2,c3,colls){
var step__3115 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3114 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3114)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3114),step.call(null,map.call(null,cljs.core.rest,ss__3114)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3026_SHARP_){
return cljs.core.apply.call(null,f,p1__3026_SHARP_);
}),step__3115.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3121 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3121__delegate.call(this, f, c1, c2, c3, colls);
};
G__3121.cljs$lang$maxFixedArity = 4;
G__3121.cljs$lang$applyTo = (function (arglist__3122){
var f = cljs.core.first(arglist__3122);
var c1 = cljs.core.first(cljs.core.next(arglist__3122));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3122)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3122))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3122))));
return G__3121__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3121;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3116.call(this,f,c1);
case  3 :
return map__3117.call(this,f,c1,c2);
case  4 :
return map__3118.call(this,f,c1,c2,c3);
default:
return map__3119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3119.cljs$lang$applyTo;
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
{var temp__3698__auto____3123 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3123))
{var s__3124 = temp__3698__auto____3123;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3124),take.call(null,(n - 1),cljs.core.rest.call(null,s__3124)));
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
var step__3127 = (function (n,coll){
while(true){
var s__3125 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3126 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3126))
{return s__3125;
} else
{return and__3546__auto____3126;
}
})()))
{{
var G__3128 = (n - 1);
var G__3129 = cljs.core.rest.call(null,s__3125);
n = G__3128;
coll = G__3129;
continue;
}
} else
{return s__3125;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3127.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3130 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3131 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3130.call(this,n);
case  2 :
return drop_last__3131.call(this,n,s);
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
var s__3133 = cljs.core.seq.call(null,coll);
var lead__3134 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3134))
{{
var G__3135 = cljs.core.next.call(null,s__3133);
var G__3136 = cljs.core.next.call(null,lead__3134);
s__3133 = G__3135;
lead__3134 = G__3136;
continue;
}
} else
{return s__3133;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3139 = (function (pred,coll){
while(true){
var s__3137 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3138 = s__3137;

if(cljs.core.truth_(and__3546__auto____3138))
{return pred.call(null,cljs.core.first.call(null,s__3137));
} else
{return and__3546__auto____3138;
}
})()))
{{
var G__3140 = pred;
var G__3141 = cljs.core.rest.call(null,s__3137);
pred = G__3140;
coll = G__3141;
continue;
}
} else
{return s__3137;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3139.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3142 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3142))
{var s__3143 = temp__3698__auto____3142;

return cljs.core.concat.call(null,s__3143,cycle.call(null,s__3143));
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
var repeat__3144 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3145 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3144.call(this,n);
case  2 :
return repeat__3145.call(this,n,x);
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
var repeatedly__3147 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3148 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3147.call(this,n);
case  2 :
return repeatedly__3148.call(this,n,f);
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
var interleave__3154 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3150 = cljs.core.seq.call(null,c1);
var s2__3151 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3152 = s1__3150;

if(cljs.core.truth_(and__3546__auto____3152))
{return s2__3151;
} else
{return and__3546__auto____3152;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3150),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3151),interleave.call(null,cljs.core.rest.call(null,s1__3150),cljs.core.rest.call(null,s2__3151))));
} else
{return null;
}
})));
});
var interleave__3155 = (function() { 
var G__3157__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3153 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3153)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3153),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3153)));
} else
{return null;
}
})));
};
var G__3157 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3157__delegate.call(this, c1, c2, colls);
};
G__3157.cljs$lang$maxFixedArity = 2;
G__3157.cljs$lang$applyTo = (function (arglist__3158){
var c1 = cljs.core.first(arglist__3158);
var c2 = cljs.core.first(cljs.core.next(arglist__3158));
var colls = cljs.core.rest(cljs.core.next(arglist__3158));
return G__3157__delegate.call(this, c1, c2, colls);
});
return G__3157;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3154.call(this,c1,c2);
default:
return interleave__3155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3155.cljs$lang$applyTo;
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
var cat__3161 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3159 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3159))
{var coll__3160 = temp__3695__auto____3159;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3160),cat.call(null,cljs.core.rest.call(null,coll__3160),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3161.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3162 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3163 = (function() { 
var G__3165__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3165 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3165__delegate.call(this, f, coll, colls);
};
G__3165.cljs$lang$maxFixedArity = 2;
G__3165.cljs$lang$applyTo = (function (arglist__3166){
var f = cljs.core.first(arglist__3166);
var coll = cljs.core.first(cljs.core.next(arglist__3166));
var colls = cljs.core.rest(cljs.core.next(arglist__3166));
return G__3165__delegate.call(this, f, coll, colls);
});
return G__3165;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3162.call(this,f,coll);
default:
return mapcat__3163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3163.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3167 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3167))
{var s__3168 = temp__3698__auto____3167;

var f__3169 = cljs.core.first.call(null,s__3168);
var r__3170 = cljs.core.rest.call(null,s__3168);

if(cljs.core.truth_(pred.call(null,f__3169)))
{return cljs.core.cons.call(null,f__3169,filter.call(null,pred,r__3170));
} else
{return filter.call(null,pred,r__3170);
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
var walk__3172 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3172.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3171_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3171_SHARP_));
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
var partition__3179 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3180 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3173 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3173))
{var s__3174 = temp__3698__auto____3173;

var p__3175 = cljs.core.take.call(null,n,s__3174);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3175))))
{return cljs.core.cons.call(null,p__3175,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3174)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3181 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3176 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3176))
{var s__3177 = temp__3698__auto____3176;

var p__3178 = cljs.core.take.call(null,n,s__3177);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3178))))
{return cljs.core.cons.call(null,p__3178,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3177)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3178,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3179.call(this,n,step);
case  3 :
return partition__3180.call(this,n,step,pad);
case  4 :
return partition__3181.call(this,n,step,pad,coll);
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
var get_in__3187 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3188 = (function (m,ks,not_found){
var sentinel__3183 = cljs.core.lookup_sentinel;
var m__3184 = m;
var ks__3185 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3185))
{var m__3186 = cljs.core.get.call(null,m__3184,cljs.core.first.call(null,ks__3185),sentinel__3183);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3183,m__3186)))
{return not_found;
} else
{{
var G__3190 = sentinel__3183;
var G__3191 = m__3186;
var G__3192 = cljs.core.next.call(null,ks__3185);
sentinel__3183 = G__3190;
m__3184 = G__3191;
ks__3185 = G__3192;
continue;
}
}
} else
{return m__3184;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3187.call(this,m,ks);
case  3 :
return get_in__3188.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3193,v){
var vec__3194__3195 = p__3193;
var k__3196 = cljs.core.nth.call(null,vec__3194__3195,0,null);
var ks__3197 = cljs.core.nthnext.call(null,vec__3194__3195,1);

if(cljs.core.truth_(ks__3197))
{return cljs.core.assoc.call(null,m,k__3196,assoc_in.call(null,cljs.core.get.call(null,m,k__3196),ks__3197,v));
} else
{return cljs.core.assoc.call(null,m,k__3196,v);
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
var update_in__delegate = function (m,p__3198,f,args){
var vec__3199__3200 = p__3198;
var k__3201 = cljs.core.nth.call(null,vec__3199__3200,0,null);
var ks__3202 = cljs.core.nthnext.call(null,vec__3199__3200,1);

if(cljs.core.truth_(ks__3202))
{return cljs.core.assoc.call(null,m,k__3201,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3201),ks__3202,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3201,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3201),args));
}
};
var update_in = function (m,p__3198,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3198, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3203){
var m = cljs.core.first(arglist__3203);
var p__3198 = cljs.core.first(cljs.core.next(arglist__3203));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3203)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3203)));
return update_in__delegate.call(this, m, p__3198, f, args);
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
var this__3204 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3205 = this;
var new_array__3206 = cljs.core.aclone.call(null,this__3205.array);

new_array__3206.push(o);
return (new cljs.core.Vector(this__3205.meta,new_array__3206));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3207 = this;
if(cljs.core.truth_((this__3207.array.length > 0)))
{var vector_seq__3208 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3207.array.length)))
{return cljs.core.cons.call(null,(this__3207.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3208.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3209 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3210 = this;
var count__3211 = this__3210.array.length;

if(cljs.core.truth_((count__3211 > 0)))
{return (this__3210.array[(count__3211 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3212 = this;
if(cljs.core.truth_((this__3212.array.length > 0)))
{var new_array__3213 = cljs.core.aclone.call(null,this__3212.array);

new_array__3213.pop();
return (new cljs.core.Vector(this__3212.meta,new_array__3213));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3214 = this;
return (new cljs.core.Vector(meta,this__3214.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3215 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3215.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3229 = null;
var G__3229__3230 = (function (coll,n){
var this__3216 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3217 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3217))
{return (n < this__3216.array.length);
} else
{return and__3546__auto____3217;
}
})()))
{return (this__3216.array[n]);
} else
{return null;
}
});
var G__3229__3231 = (function (coll,n,not_found){
var this__3218 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3219 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3219))
{return (n < this__3218.array.length);
} else
{return and__3546__auto____3219;
}
})()))
{return (this__3218.array[n]);
} else
{return not_found;
}
});
G__3229 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3229__3230.call(this,coll,n);
case  3 :
return G__3229__3231.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3229;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3220 = this;
return this__3220.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3233 = null;
var G__3233__3234 = (function (v,f){
var this__3221 = this;
return cljs.core.ci_reduce.call(null,this__3221.array,f);
});
var G__3233__3235 = (function (v,f,start){
var this__3222 = this;
return cljs.core.ci_reduce.call(null,this__3222.array,f,start);
});
G__3233 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3233__3234.call(this,v,f);
case  3 :
return G__3233__3235.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3233;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3223 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3224 = this;
return this__3224.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3225 = this;
var new_array__3226 = cljs.core.aclone.call(null,this__3225.array);

(new_array__3226[k] = v);
return (new cljs.core.Vector(this__3225.meta,new_array__3226));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3237 = null;
var G__3237__3238 = (function (coll,k){
var this__3227 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3237__3239 = (function (coll,k,not_found){
var this__3228 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3237 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3237__3238.call(this,coll,k);
case  3 :
return G__3237__3239.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3237;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3241 = null;
var G__3241__3242 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3241__3243 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3241 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3241__3242.call(this,_,k);
case  3 :
return G__3241__3243.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3241;
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
vector.cljs$lang$applyTo = (function (arglist__3245){
var args = cljs.core.seq( arglist__3245 );;
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
var this__3246 = this;
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
var len__3247 = array.length;

var i__3248 = 0;

while(true){
if(cljs.core.truth_((i__3248 < len__3247)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3248]))))
{return i__3248;
} else
{{
var G__3249 = (i__3248 + incr);
i__3248 = G__3249;
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
var obj_map_contains_key_QMARK___3251 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3252 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3250 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3250))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3250;
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
return obj_map_contains_key_QMARK___3251.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3252.call(this,k,strobj,true_val,false_val);
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
var this__3255 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3256 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3257 = this;
if(cljs.core.truth_((this__3257.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3254_SHARP_){
return cljs.core.vector.call(null,p1__3254_SHARP_,(this__3257.strobj[p1__3254_SHARP_]));
}),this__3257.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3258 = this;
return (new cljs.core.ObjMap(meta,this__3258.keys,this__3258.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3259 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3260 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3260))
{return this__3259.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3260;
}
})()))
{var new_keys__3261 = cljs.core.aclone.call(null,this__3259.keys);
var new_strobj__3262 = goog.object.clone.call(null,this__3259.strobj);

new_keys__3261.splice(cljs.core.scan_array.call(null,1,k,new_keys__3261),1);
cljs.core.js_delete.call(null,new_strobj__3262,k);
return (new cljs.core.ObjMap(this__3259.meta,new_keys__3261,new_strobj__3262));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3263 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3263.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3264 = this;
return this__3264.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3265 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3266 = this;
return this__3266.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3267 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3268 = goog.object.clone.call(null,this__3267.strobj);
var overwrite_QMARK___3269 = new_strobj__3268.hasOwnProperty(k);

(new_strobj__3268[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3269))
{return (new cljs.core.ObjMap(this__3267.meta,this__3267.keys,new_strobj__3268));
} else
{var new_keys__3270 = cljs.core.aclone.call(null,this__3267.keys);

new_keys__3270.push(k);
return (new cljs.core.ObjMap(this__3267.meta,new_keys__3270,new_strobj__3268));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3267.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3271 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3271.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3274 = null;
var G__3274__3275 = (function (coll,k){
var this__3272 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3274__3276 = (function (coll,k,not_found){
var this__3273 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3273.strobj,(this__3273.strobj[k]),not_found);
});
G__3274 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3274__3275.call(this,coll,k);
case  3 :
return G__3274__3276.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3274;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3279 = null;
var G__3279__3280 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3279__3281 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3279 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3279__3280.call(this,_,k);
case  3 :
return G__3279__3281.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3279;
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
var this__3283 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3284 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3285 = this;
if(cljs.core.truth_((this__3285.count > 0)))
{var hashes__3286 = cljs.core.js_keys.call(null,this__3285.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3278_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3285.hashobj[p1__3278_SHARP_])));
}),hashes__3286);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3287 = this;
return (new cljs.core.HashMap(meta,this__3287.count,this__3287.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3288 = this;
var h__3289 = cljs.core.hash.call(null,k);
var bucket__3290 = (this__3288.hashobj[h__3289]);
var i__3291 = (cljs.core.truth_(bucket__3290)?cljs.core.scan_array.call(null,2,k,bucket__3290):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3291)))
{return coll;
} else
{var new_hashobj__3292 = goog.object.clone.call(null,this__3288.hashobj);

if(cljs.core.truth_((3 > bucket__3290.length)))
{cljs.core.js_delete.call(null,new_hashobj__3292,h__3289);
} else
{var new_bucket__3293 = cljs.core.aclone.call(null,bucket__3290);

new_bucket__3293.splice(i__3291,2);
(new_hashobj__3292[h__3289] = new_bucket__3293);
}
return (new cljs.core.HashMap(this__3288.meta,(this__3288.count - 1),new_hashobj__3292));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3294 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3294.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3295 = this;
return this__3295.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3296 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3297 = this;
return this__3297.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3298 = this;
var h__3299 = cljs.core.hash.call(null,k);
var bucket__3300 = (this__3298.hashobj[h__3299]);

if(cljs.core.truth_(bucket__3300))
{var new_bucket__3301 = cljs.core.aclone.call(null,bucket__3300);
var new_hashobj__3302 = goog.object.clone.call(null,this__3298.hashobj);

(new_hashobj__3302[h__3299] = new_bucket__3301);
var temp__3695__auto____3303 = cljs.core.scan_array.call(null,2,k,new_bucket__3301);

if(cljs.core.truth_(temp__3695__auto____3303))
{var i__3304 = temp__3695__auto____3303;

(new_bucket__3301[(i__3304 + 1)] = v);
return (new cljs.core.HashMap(this__3298.meta,this__3298.count,new_hashobj__3302));
} else
{new_bucket__3301.push(k,v);
return (new cljs.core.HashMap(this__3298.meta,(this__3298.count + 1),new_hashobj__3302));
}
} else
{var new_hashobj__3305 = goog.object.clone.call(null,this__3298.hashobj);

(new_hashobj__3305[h__3299] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3298.meta,(this__3298.count + 1),new_hashobj__3305));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3306 = this;
var bucket__3307 = (this__3306.hashobj[cljs.core.hash.call(null,k)]);
var i__3308 = (cljs.core.truth_(bucket__3307)?cljs.core.scan_array.call(null,2,k,bucket__3307):null);

if(cljs.core.truth_(i__3308))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3313 = null;
var G__3313__3314 = (function (coll,k){
var this__3309 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3313__3315 = (function (coll,k,not_found){
var this__3310 = this;
var bucket__3311 = (this__3310.hashobj[cljs.core.hash.call(null,k)]);
var i__3312 = (cljs.core.truth_(bucket__3311)?cljs.core.scan_array.call(null,2,k,bucket__3311):null);

if(cljs.core.truth_(i__3312))
{return (bucket__3311[(i__3312 + 1)]);
} else
{return not_found;
}
});
G__3313 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3313__3314.call(this,coll,k);
case  3 :
return G__3313__3315.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3313;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3317 = ks.length;

var i__3318 = 0;
var out__3319 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3318 < len__3317)))
{{
var G__3320 = (i__3318 + 1);
var G__3321 = cljs.core.assoc.call(null,out__3319,(ks[i__3318]),(vs[i__3318]));
i__3318 = G__3320;
out__3319 = G__3321;
continue;
}
} else
{return out__3319;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3322 = null;
var G__3322__3323 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3322__3324 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3322 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3322__3323.call(this,_,k);
case  3 :
return G__3322__3324.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3322;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3326 = cljs.core.seq.call(null,keyvals);
var out__3327 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3326))
{{
var G__3328 = cljs.core.nnext.call(null,in$__3326);
var G__3329 = cljs.core.assoc.call(null,out__3327,cljs.core.first.call(null,in$__3326),cljs.core.second.call(null,in$__3326));
in$__3326 = G__3328;
out__3327 = G__3329;
continue;
}
} else
{return out__3327;
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
hash_map.cljs$lang$applyTo = (function (arglist__3330){
var keyvals = cljs.core.seq( arglist__3330 );;
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
{return cljs.core.reduce.call(null,(function (p1__3331_SHARP_,p2__3332_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3333 = p1__3331_SHARP_;

if(cljs.core.truth_(or__3548__auto____3333))
{return or__3548__auto____3333;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3332_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3334){
var maps = cljs.core.seq( arglist__3334 );;
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
{var merge_entry__3337 = (function (m,e){
var k__3335 = cljs.core.first.call(null,e);
var v__3336 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3335)))
{return cljs.core.assoc.call(null,m,k__3335,f.call(null,cljs.core.get.call(null,m,k__3335),v__3336));
} else
{return cljs.core.assoc.call(null,m,k__3335,v__3336);
}
});
var merge2__3339 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3337,(function (){var or__3548__auto____3338 = m1;

if(cljs.core.truth_(or__3548__auto____3338))
{return or__3548__auto____3338;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3339,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3340){
var f = cljs.core.first(arglist__3340);
var maps = cljs.core.rest(arglist__3340);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3342 = cljs.core.ObjMap.fromObject([],{});
var keys__3343 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3343))
{var key__3344 = cljs.core.first.call(null,keys__3343);
var entry__3345 = cljs.core.get.call(null,map,key__3344);

{
var G__3346 = (cljs.core.truth_(entry__3345)?cljs.core.assoc.call(null,ret__3342,key__3344,entry__3345):ret__3342);
var G__3347 = cljs.core.next.call(null,keys__3343);
ret__3342 = G__3346;
keys__3343 = G__3347;
continue;
}
} else
{return ret__3342;
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
var this__3348 = this;
return (new cljs.core.Set(this__3348.meta,cljs.core.dissoc.call(null,this__3348.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3349 = this;
var and__3546__auto____3350 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3350))
{var and__3546__auto____3351 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3351))
{return cljs.core.every_QMARK_.call(null,(function (p1__3341_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3341_SHARP_);
}),other);
} else
{return and__3546__auto____3351;
}
} else
{return and__3546__auto____3350;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3352 = this;
return (new cljs.core.Set(this__3352.meta,cljs.core.assoc.call(null,this__3352.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3353 = this;
return cljs.core.keys.call(null,this__3353.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3354 = this;
return (new cljs.core.Set(meta,this__3354.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3355 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3355.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3356 = this;
return this__3356.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3357 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3358 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3361 = null;
var G__3361__3362 = (function (coll,v){
var this__3359 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3361__3363 = (function (coll,v,not_found){
var this__3360 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3360.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3361 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3361__3362.call(this,coll,v);
case  3 :
return G__3361__3363.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3361;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3365 = null;
var G__3365__3366 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3365__3367 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3365 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3365__3366.call(this,_,k);
case  3 :
return G__3365__3367.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3365;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3370 = cljs.core.seq.call(null,coll);
var out__3371 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3370))))
{{
var G__3372 = cljs.core.rest.call(null,in$__3370);
var G__3373 = cljs.core.conj.call(null,out__3371,cljs.core.first.call(null,in$__3370));
in$__3370 = G__3372;
out__3371 = G__3373;
continue;
}
} else
{return out__3371;
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
{var n__3374 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3375 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3375))
{var e__3376 = temp__3695__auto____3375;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3376));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3374,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3369_SHARP_){
var temp__3695__auto____3377 = cljs.core.find.call(null,smap,p1__3369_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3377))
{var e__3378 = temp__3695__auto____3377;

return cljs.core.second.call(null,e__3378);
} else
{return p1__3369_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3386 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3379,seen){
while(true){
var vec__3380__3381 = p__3379;
var f__3382 = cljs.core.nth.call(null,vec__3380__3381,0,null);
var xs__3383 = vec__3380__3381;

var temp__3698__auto____3384 = cljs.core.seq.call(null,xs__3383);

if(cljs.core.truth_(temp__3698__auto____3384))
{var s__3385 = temp__3698__auto____3384;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3382)))
{{
var G__3387 = cljs.core.rest.call(null,s__3385);
var G__3388 = seen;
p__3379 = G__3387;
seen = G__3388;
continue;
}
} else
{return cljs.core.cons.call(null,f__3382,step.call(null,cljs.core.rest.call(null,s__3385),cljs.core.conj.call(null,seen,f__3382)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3386.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3389 = cljs.core.Vector.fromArray([]);
var s__3390 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3390)))
{{
var G__3391 = cljs.core.conj.call(null,ret__3389,cljs.core.first.call(null,s__3390));
var G__3392 = cljs.core.next.call(null,s__3390);
ret__3389 = G__3391;
s__3390 = G__3392;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3389);
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
{if(cljs.core.truth_((function (){var or__3548__auto____3393 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3393))
{return or__3548__auto____3393;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3394 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3394 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3394 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____3395 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3395))
{return or__3548__auto____3395;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3396 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3396 > -1)))
{return cljs.core.subs.call(null,x,2,i__3396);
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
var map__3399 = cljs.core.ObjMap.fromObject([],{});
var ks__3400 = cljs.core.seq.call(null,keys);
var vs__3401 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3402 = ks__3400;

if(cljs.core.truth_(and__3546__auto____3402))
{return vs__3401;
} else
{return and__3546__auto____3402;
}
})()))
{{
var G__3403 = cljs.core.assoc.call(null,map__3399,cljs.core.first.call(null,ks__3400),cljs.core.first.call(null,vs__3401));
var G__3404 = cljs.core.next.call(null,ks__3400);
var G__3405 = cljs.core.next.call(null,vs__3401);
map__3399 = G__3403;
ks__3400 = G__3404;
vs__3401 = G__3405;
continue;
}
} else
{return map__3399;
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
var max_key__3408 = (function (k,x){
return x;
});
var max_key__3409 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3410 = (function() { 
var G__3412__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3397_SHARP_,p2__3398_SHARP_){
return max_key.call(null,k,p1__3397_SHARP_,p2__3398_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3412 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3412__delegate.call(this, k, x, y, more);
};
G__3412.cljs$lang$maxFixedArity = 3;
G__3412.cljs$lang$applyTo = (function (arglist__3413){
var k = cljs.core.first(arglist__3413);
var x = cljs.core.first(cljs.core.next(arglist__3413));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3413)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3413)));
return G__3412__delegate.call(this, k, x, y, more);
});
return G__3412;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3408.call(this,k,x);
case  3 :
return max_key__3409.call(this,k,x,y);
default:
return max_key__3410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3410.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3414 = (function (k,x){
return x;
});
var min_key__3415 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3416 = (function() { 
var G__3418__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3406_SHARP_,p2__3407_SHARP_){
return min_key.call(null,k,p1__3406_SHARP_,p2__3407_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3418 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3418__delegate.call(this, k, x, y, more);
};
G__3418.cljs$lang$maxFixedArity = 3;
G__3418.cljs$lang$applyTo = (function (arglist__3419){
var k = cljs.core.first(arglist__3419);
var x = cljs.core.first(cljs.core.next(arglist__3419));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3419)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3419)));
return G__3418__delegate.call(this, k, x, y, more);
});
return G__3418;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3414.call(this,k,x);
case  3 :
return min_key__3415.call(this,k,x,y);
default:
return min_key__3416.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3416.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3422 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3423 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3420 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3420))
{var s__3421 = temp__3698__auto____3420;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3421),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3421)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3422.call(this,n,step);
case  3 :
return partition_all__3423.call(this,n,step,coll);
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
var temp__3698__auto____3425 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3425))
{var s__3426 = temp__3698__auto____3425;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3426))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3426),take_while.call(null,pred,cljs.core.rest.call(null,s__3426)));
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
var this__3427 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3428 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3429 = this;
return this__3429.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3430 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3430.meta,(this__3430.start + this__3430.step),this__3430.end,this__3430.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3431 = this;
var comp__3432 = (cljs.core.truth_((this__3431.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3432.call(null,this__3431.start,this__3431.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3433 = this;
return (new cljs.core.Range(meta,this__3433.start,this__3433.end,this__3433.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3434 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3434.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3444 = null;
var G__3444__3445 = (function (rng,n){
var this__3435 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3435.start + (n * this__3435.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3436 = (this__3435.start > this__3435.end);

if(cljs.core.truth_(and__3546__auto____3436))
{return cljs.core._EQ_.call(null,this__3435.step,0);
} else
{return and__3546__auto____3436;
}
})()))
{return this__3435.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3444__3446 = (function (rng,n,not_found){
var this__3437 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3437.start + (n * this__3437.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3438 = (this__3437.start > this__3437.end);

if(cljs.core.truth_(and__3546__auto____3438))
{return cljs.core._EQ_.call(null,this__3437.step,0);
} else
{return and__3546__auto____3438;
}
})()))
{return this__3437.start;
} else
{return not_found;
}
}
});
G__3444 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3444__3445.call(this,rng,n);
case  3 :
return G__3444__3446.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3444;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3439 = this;
return this__3439.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3448 = null;
var G__3448__3449 = (function (rng,f){
var this__3440 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3448__3450 = (function (rng,f,s){
var this__3441 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3448 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3448__3449.call(this,rng,f);
case  3 :
return G__3448__3450.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3448;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3442 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3443 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3443.end - this__3443.start) / this__3443.step));
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
var range__3452 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3453 = (function (end){
return range.call(null,0,end,1);
});
var range__3454 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3455 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3452.call(this);
case  1 :
return range__3453.call(this,start);
case  2 :
return range__3454.call(this,start,end);
case  3 :
return range__3455.call(this,start,end,step);
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
var temp__3698__auto____3457 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3457))
{var s__3458 = temp__3698__auto____3457;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3458),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3458)));
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
var temp__3698__auto____3460 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3460))
{var s__3461 = temp__3698__auto____3460;

var fst__3462 = cljs.core.first.call(null,s__3461);
var fv__3463 = f.call(null,fst__3462);
var run__3464 = cljs.core.cons.call(null,fst__3462,cljs.core.take_while.call(null,(function (p1__3459_SHARP_){
return cljs.core._EQ_.call(null,fv__3463,f.call(null,p1__3459_SHARP_));
}),cljs.core.next.call(null,s__3461)));

return cljs.core.cons.call(null,run__3464,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3464),s__3461))));
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
var reductions__3479 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3475 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3475))
{var s__3476 = temp__3695__auto____3475;

return reductions.call(null,f,cljs.core.first.call(null,s__3476),cljs.core.rest.call(null,s__3476));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3480 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3477 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3477))
{var s__3478 = temp__3698__auto____3477;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3478)),cljs.core.rest.call(null,s__3478));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3479.call(this,f,init);
case  3 :
return reductions__3480.call(this,f,init,coll);
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
var juxt__3483 = (function (f){
return (function() {
var G__3488 = null;
var G__3488__3489 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3488__3490 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3488__3491 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3488__3492 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3488__3493 = (function() { 
var G__3495__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3495 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3495__delegate.call(this, x, y, z, args);
};
G__3495.cljs$lang$maxFixedArity = 3;
G__3495.cljs$lang$applyTo = (function (arglist__3496){
var x = cljs.core.first(arglist__3496);
var y = cljs.core.first(cljs.core.next(arglist__3496));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3496)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3496)));
return G__3495__delegate.call(this, x, y, z, args);
});
return G__3495;
})()
;
G__3488 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3488__3489.call(this);
case  1 :
return G__3488__3490.call(this,x);
case  2 :
return G__3488__3491.call(this,x,y);
case  3 :
return G__3488__3492.call(this,x,y,z);
default:
return G__3488__3493.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3488.cljs$lang$maxFixedArity = 3;
G__3488.cljs$lang$applyTo = G__3488__3493.cljs$lang$applyTo;
return G__3488;
})()
});
var juxt__3484 = (function (f,g){
return (function() {
var G__3497 = null;
var G__3497__3498 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3497__3499 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3497__3500 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3497__3501 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3497__3502 = (function() { 
var G__3504__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3504 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3504__delegate.call(this, x, y, z, args);
};
G__3504.cljs$lang$maxFixedArity = 3;
G__3504.cljs$lang$applyTo = (function (arglist__3505){
var x = cljs.core.first(arglist__3505);
var y = cljs.core.first(cljs.core.next(arglist__3505));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3505)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3505)));
return G__3504__delegate.call(this, x, y, z, args);
});
return G__3504;
})()
;
G__3497 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3497__3498.call(this);
case  1 :
return G__3497__3499.call(this,x);
case  2 :
return G__3497__3500.call(this,x,y);
case  3 :
return G__3497__3501.call(this,x,y,z);
default:
return G__3497__3502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3497.cljs$lang$maxFixedArity = 3;
G__3497.cljs$lang$applyTo = G__3497__3502.cljs$lang$applyTo;
return G__3497;
})()
});
var juxt__3485 = (function (f,g,h){
return (function() {
var G__3506 = null;
var G__3506__3507 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3506__3508 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3506__3509 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3506__3510 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3506__3511 = (function() { 
var G__3513__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3513 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3513__delegate.call(this, x, y, z, args);
};
G__3513.cljs$lang$maxFixedArity = 3;
G__3513.cljs$lang$applyTo = (function (arglist__3514){
var x = cljs.core.first(arglist__3514);
var y = cljs.core.first(cljs.core.next(arglist__3514));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3514)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3514)));
return G__3513__delegate.call(this, x, y, z, args);
});
return G__3513;
})()
;
G__3506 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3506__3507.call(this);
case  1 :
return G__3506__3508.call(this,x);
case  2 :
return G__3506__3509.call(this,x,y);
case  3 :
return G__3506__3510.call(this,x,y,z);
default:
return G__3506__3511.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3506.cljs$lang$maxFixedArity = 3;
G__3506.cljs$lang$applyTo = G__3506__3511.cljs$lang$applyTo;
return G__3506;
})()
});
var juxt__3486 = (function() { 
var G__3515__delegate = function (f,g,h,fs){
var fs__3482 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3516 = null;
var G__3516__3517 = (function (){
return cljs.core.reduce.call(null,(function (p1__3465_SHARP_,p2__3466_SHARP_){
return cljs.core.conj.call(null,p1__3465_SHARP_,p2__3466_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3482);
});
var G__3516__3518 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3467_SHARP_,p2__3468_SHARP_){
return cljs.core.conj.call(null,p1__3467_SHARP_,p2__3468_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3482);
});
var G__3516__3519 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3469_SHARP_,p2__3470_SHARP_){
return cljs.core.conj.call(null,p1__3469_SHARP_,p2__3470_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3482);
});
var G__3516__3520 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3471_SHARP_,p2__3472_SHARP_){
return cljs.core.conj.call(null,p1__3471_SHARP_,p2__3472_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3482);
});
var G__3516__3521 = (function() { 
var G__3523__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3473_SHARP_,p2__3474_SHARP_){
return cljs.core.conj.call(null,p1__3473_SHARP_,cljs.core.apply.call(null,p2__3474_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3482);
};
var G__3523 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3523__delegate.call(this, x, y, z, args);
};
G__3523.cljs$lang$maxFixedArity = 3;
G__3523.cljs$lang$applyTo = (function (arglist__3524){
var x = cljs.core.first(arglist__3524);
var y = cljs.core.first(cljs.core.next(arglist__3524));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3524)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3524)));
return G__3523__delegate.call(this, x, y, z, args);
});
return G__3523;
})()
;
G__3516 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3516__3517.call(this);
case  1 :
return G__3516__3518.call(this,x);
case  2 :
return G__3516__3519.call(this,x,y);
case  3 :
return G__3516__3520.call(this,x,y,z);
default:
return G__3516__3521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3516.cljs$lang$maxFixedArity = 3;
G__3516.cljs$lang$applyTo = G__3516__3521.cljs$lang$applyTo;
return G__3516;
})()
};
var G__3515 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3515__delegate.call(this, f, g, h, fs);
};
G__3515.cljs$lang$maxFixedArity = 3;
G__3515.cljs$lang$applyTo = (function (arglist__3525){
var f = cljs.core.first(arglist__3525);
var g = cljs.core.first(cljs.core.next(arglist__3525));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3525)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3525)));
return G__3515__delegate.call(this, f, g, h, fs);
});
return G__3515;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3483.call(this,f);
case  2 :
return juxt__3484.call(this,f,g);
case  3 :
return juxt__3485.call(this,f,g,h);
default:
return juxt__3486.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3486.cljs$lang$applyTo;
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
var dorun__3527 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3530 = cljs.core.next.call(null,coll);
coll = G__3530;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3528 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3526))
{return (n > 0);
} else
{return and__3546__auto____3526;
}
})()))
{{
var G__3531 = (n - 1);
var G__3532 = cljs.core.next.call(null,coll);
n = G__3531;
coll = G__3532;
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
return dorun__3527.call(this,n);
case  2 :
return dorun__3528.call(this,n,coll);
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
var doall__3533 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3534 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3533.call(this,n);
case  2 :
return doall__3534.call(this,n,coll);
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
var matches__3536 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3536),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3536),1)))
{return cljs.core.first.call(null,matches__3536);
} else
{return cljs.core.vec.call(null,matches__3536);
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
var matches__3537 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3537)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3537),1)))
{return cljs.core.first.call(null,matches__3537);
} else
{return cljs.core.vec.call(null,matches__3537);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3538 = cljs.core.re_find.call(null,re,s);
var match_idx__3539 = s.search(re);
var match_str__3540 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3538))?cljs.core.first.call(null,match_data__3538):match_data__3538);
var post_match__3541 = cljs.core.subs.call(null,s,(match_idx__3539 + cljs.core.count.call(null,match_str__3540)));

if(cljs.core.truth_(match_data__3538))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3538,re_seq.call(null,re,post_match__3541));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3542_SHARP_){
return print_one.call(null,p1__3542_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3543 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3543))
{var and__3546__auto____3547 = (function (){var x__300__auto____3544 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3545 = x__300__auto____3544;

if(cljs.core.truth_(and__3546__auto____3545))
{var and__3546__auto____3546 = x__300__auto____3544.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3546))
{return cljs.core.not.call(null,x__300__auto____3544.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3546;
}
} else
{return and__3546__auto____3545;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__300__auto____3544);
}
})();

if(cljs.core.truth_(and__3546__auto____3547))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3547;
}
} else
{return and__3546__auto____3543;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__300__auto____3548 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3549 = x__300__auto____3548;

if(cljs.core.truth_(and__3546__auto____3549))
{var and__3546__auto____3550 = x__300__auto____3548.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3550))
{return cljs.core.not.call(null,x__300__auto____3548.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3550;
}
} else
{return and__3546__auto____3549;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__300__auto____3548);
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
var first_obj__3551 = cljs.core.first.call(null,objs);
var sb__3552 = (new goog.string.StringBuffer());

var G__3553__3554 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3553__3554))
{var obj__3555 = cljs.core.first.call(null,G__3553__3554);
var G__3553__3556 = G__3553__3554;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3555,first_obj__3551)))
{} else
{sb__3552.append(" ");
}
var G__3557__3558 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3555,opts));

if(cljs.core.truth_(G__3557__3558))
{var string__3559 = cljs.core.first.call(null,G__3557__3558);
var G__3557__3560 = G__3557__3558;

while(true){
sb__3552.append(string__3559);
var temp__3698__auto____3561 = cljs.core.next.call(null,G__3557__3560);

if(cljs.core.truth_(temp__3698__auto____3561))
{var G__3557__3562 = temp__3698__auto____3561;

{
var G__3565 = cljs.core.first.call(null,G__3557__3562);
var G__3566 = G__3557__3562;
string__3559 = G__3565;
G__3557__3560 = G__3566;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3563 = cljs.core.next.call(null,G__3553__3556);

if(cljs.core.truth_(temp__3698__auto____3563))
{var G__3553__3564 = temp__3698__auto____3563;

{
var G__3567 = cljs.core.first.call(null,G__3553__3564);
var G__3568 = G__3553__3564;
obj__3555 = G__3567;
G__3553__3556 = G__3568;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3552);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3569 = cljs.core.first.call(null,objs);

var G__3570__3571 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3570__3571))
{var obj__3572 = cljs.core.first.call(null,G__3570__3571);
var G__3570__3573 = G__3570__3571;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3572,first_obj__3569)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3574__3575 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3572,opts));

if(cljs.core.truth_(G__3574__3575))
{var string__3576 = cljs.core.first.call(null,G__3574__3575);
var G__3574__3577 = G__3574__3575;

while(true){
cljs.core.string_print.call(null,string__3576);
var temp__3698__auto____3578 = cljs.core.next.call(null,G__3574__3577);

if(cljs.core.truth_(temp__3698__auto____3578))
{var G__3574__3579 = temp__3698__auto____3578;

{
var G__3582 = cljs.core.first.call(null,G__3574__3579);
var G__3583 = G__3574__3579;
string__3576 = G__3582;
G__3574__3577 = G__3583;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3580 = cljs.core.next.call(null,G__3570__3573);

if(cljs.core.truth_(temp__3698__auto____3580))
{var G__3570__3581 = temp__3698__auto____3580;

{
var G__3584 = cljs.core.first.call(null,G__3570__3581);
var G__3585 = G__3570__3581;
obj__3572 = G__3584;
G__3570__3573 = G__3585;
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
pr_str.cljs$lang$applyTo = (function (arglist__3586){
var objs = cljs.core.seq( arglist__3586 );;
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
pr.cljs$lang$applyTo = (function (arglist__3587){
var objs = cljs.core.seq( arglist__3587 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__3588){
var objs = cljs.core.seq( arglist__3588 );;
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
println.cljs$lang$applyTo = (function (arglist__3589){
var objs = cljs.core.seq( arglist__3589 );;
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
prn.cljs$lang$applyTo = (function (arglist__3590){
var objs = cljs.core.seq( arglist__3590 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3591 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3591,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3592 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3592))
{var nspc__3593 = temp__3698__auto____3592;

return cljs.core.str.call(null,nspc__3593,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3594 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3594))
{var nspc__3595 = temp__3698__auto____3594;

return cljs.core.str.call(null,nspc__3595,"/");
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
var pr_pair__3596 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3596,"{",", ","}",opts,coll);
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
var this__3597 = this;
var G__3598__3599 = cljs.core.seq.call(null,this__3597.watches);

if(cljs.core.truth_(G__3598__3599))
{var G__3601__3603 = cljs.core.first.call(null,G__3598__3599);
var vec__3602__3604 = G__3601__3603;
var key__3605 = cljs.core.nth.call(null,vec__3602__3604,0,null);
var f__3606 = cljs.core.nth.call(null,vec__3602__3604,1,null);
var G__3598__3607 = G__3598__3599;

var G__3601__3608 = G__3601__3603;
var G__3598__3609 = G__3598__3607;

while(true){
var vec__3610__3611 = G__3601__3608;
var key__3612 = cljs.core.nth.call(null,vec__3610__3611,0,null);
var f__3613 = cljs.core.nth.call(null,vec__3610__3611,1,null);
var G__3598__3614 = G__3598__3609;

f__3613.call(null,key__3612,this$,oldval,newval);
var temp__3698__auto____3615 = cljs.core.next.call(null,G__3598__3614);

if(cljs.core.truth_(temp__3698__auto____3615))
{var G__3598__3616 = temp__3698__auto____3615;

{
var G__3623 = cljs.core.first.call(null,G__3598__3616);
var G__3624 = G__3598__3616;
G__3601__3608 = G__3623;
G__3598__3609 = G__3624;
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
var this__3617 = this;
return this$.watches = cljs.core.assoc.call(null,this__3617.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3618 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3618.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3619 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3619.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3620 = this;
return this__3620.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3621 = this;
return this__3621.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3622 = this;
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
var atom__3631 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3632 = (function() { 
var G__3634__delegate = function (x,p__3625){
var map__3626__3627 = p__3625;
var map__3626__3628 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3626__3627))?cljs.core.apply.call(null,cljs.core.hash_map,map__3626__3627):map__3626__3627);
var validator__3629 = cljs.core.get.call(null,map__3626__3628,"﷐'validator");
var meta__3630 = cljs.core.get.call(null,map__3626__3628,"﷐'meta");

return (new cljs.core.Atom(x,meta__3630,validator__3629,null));
};
var G__3634 = function (x,var_args){
var p__3625 = null;
if (goog.isDef(var_args)) {
  p__3625 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3634__delegate.call(this, x, p__3625);
};
G__3634.cljs$lang$maxFixedArity = 1;
G__3634.cljs$lang$applyTo = (function (arglist__3635){
var x = cljs.core.first(arglist__3635);
var p__3625 = cljs.core.rest(arglist__3635);
return G__3634__delegate.call(this, x, p__3625);
});
return G__3634;
})()
;
atom = function(x,var_args){
var p__3625 = var_args;
switch(arguments.length){
case  1 :
return atom__3631.call(this,x);
default:
return atom__3632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3632.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3636 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3636))
{var validate__3637 = temp__3698__auto____3636;

if(cljs.core.truth_(validate__3637.call(null,new_value)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")));
}
} else
{}
var old_value__3638 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3638,new_value);
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
var swap_BANG___3639 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3640 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3641 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3642 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3643 = (function() { 
var G__3645__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3645 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3645__delegate.call(this, a, f, x, y, z, more);
};
G__3645.cljs$lang$maxFixedArity = 5;
G__3645.cljs$lang$applyTo = (function (arglist__3646){
var a = cljs.core.first(arglist__3646);
var f = cljs.core.first(cljs.core.next(arglist__3646));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3646)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3646))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3646)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3646)))));
return G__3645__delegate.call(this, a, f, x, y, z, more);
});
return G__3645;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3639.call(this,a,f);
case  3 :
return swap_BANG___3640.call(this,a,f,x);
case  4 :
return swap_BANG___3641.call(this,a,f,x,y);
case  5 :
return swap_BANG___3642.call(this,a,f,x,y,z);
default:
return swap_BANG___3643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3643.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3647){
var iref = cljs.core.first(arglist__3647);
var f = cljs.core.first(cljs.core.next(arglist__3647));
var args = cljs.core.rest(cljs.core.next(arglist__3647));
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
var gensym__3648 = (function (){
return gensym.call(null,"G__");
});
var gensym__3649 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3648.call(this);
case  1 :
return gensym__3649.call(this,prefix_string);
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
var this__3651 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3651.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3652 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3652.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3652.state,this__3652.f);
}
return cljs.core.deref.call(null,this__3652.state);
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
delay.cljs$lang$applyTo = (function (arglist__3653){
var body = cljs.core.seq( arglist__3653 );;
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
var map__3654__3655 = options;
var map__3654__3656 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3654__3655))?cljs.core.apply.call(null,cljs.core.hash_map,map__3654__3655):map__3654__3655);
var keywordize_keys__3657 = cljs.core.get.call(null,map__3654__3656,"﷐'keywordize-keys");
var keyfn__3658 = (cljs.core.truth_(keywordize_keys__3657)?cljs.core.keyword:cljs.core.str);
var f__3664 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__354__auto____3663 = (function iter__3659(s__3660){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3660__3661 = s__3660;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3660__3661)))
{var k__3662 = cljs.core.first.call(null,s__3660__3661);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3658.call(null,k__3662),thisfn.call(null,(x[k__3662]))]),iter__3659.call(null,cljs.core.rest.call(null,s__3660__3661)));
} else
{return null;
}
break;
}
})));
});

return iter__354__auto____3663.call(null,cljs.core.js_keys.call(null,x));
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

return f__3664.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3665){
var x = cljs.core.first(arglist__3665);
var options = cljs.core.rest(arglist__3665);
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
var mem__3666 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3670__delegate = function (args){
var temp__3695__auto____3667 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3666),args);

if(cljs.core.truth_(temp__3695__auto____3667))
{var v__3668 = temp__3695__auto____3667;

return v__3668;
} else
{var ret__3669 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3666,cljs.core.assoc,args,ret__3669);
return ret__3669;
}
};
var G__3670 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3670__delegate.call(this, args);
};
G__3670.cljs$lang$maxFixedArity = 0;
G__3670.cljs$lang$applyTo = (function (arglist__3671){
var args = cljs.core.seq( arglist__3671 );;
return G__3670__delegate.call(this, args);
});
return G__3670;
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
var trampoline__3673 = (function (f){
while(true){
var ret__3672 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3672)))
{{
var G__3676 = ret__3672;
f = G__3676;
continue;
}
} else
{return ret__3672;
}
break;
}
});
var trampoline__3674 = (function() { 
var G__3677__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3677 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3677__delegate.call(this, f, args);
};
G__3677.cljs$lang$maxFixedArity = 1;
G__3677.cljs$lang$applyTo = (function (arglist__3678){
var f = cljs.core.first(arglist__3678);
var args = cljs.core.rest(arglist__3678);
return G__3677__delegate.call(this, f, args);
});
return G__3677;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3673.call(this,f);
default:
return trampoline__3674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3674.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3679 = (function (){
return rand.call(null,1);
});
var rand__3680 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3679.call(this);
case  1 :
return rand__3680.call(this,n);
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
var k__3682 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3682,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3682,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___3691 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3692 = (function (h,child,parent){
var or__3548__auto____3683 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3683))
{return or__3548__auto____3683;
} else
{var or__3548__auto____3684 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3684))
{return or__3548__auto____3684;
} else
{var and__3546__auto____3685 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3685))
{var and__3546__auto____3686 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3686))
{var and__3546__auto____3687 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3687))
{var ret__3688 = true;
var i__3689 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3690 = cljs.core.not.call(null,ret__3688);

if(cljs.core.truth_(or__3548__auto____3690))
{return or__3548__auto____3690;
} else
{return cljs.core._EQ_.call(null,i__3689,cljs.core.count.call(null,parent));
}
})()))
{return ret__3688;
} else
{{
var G__3694 = isa_QMARK_.call(null,h,child.call(null,i__3689),parent.call(null,i__3689));
var G__3695 = (i__3689 + 1);
ret__3688 = G__3694;
i__3689 = G__3695;
continue;
}
}
break;
}
} else
{return and__3546__auto____3687;
}
} else
{return and__3546__auto____3686;
}
} else
{return and__3546__auto____3685;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3691.call(this,h,child);
case  3 :
return isa_QMARK___3692.call(this,h,child,parent);
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
var parents__3696 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3697 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3696.call(this,h);
case  2 :
return parents__3697.call(this,h,tag);
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
var ancestors__3699 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3700 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3699.call(this,h);
case  2 :
return ancestors__3700.call(this,h,tag);
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
var descendants__3702 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3703 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3702.call(this,h);
case  2 :
return descendants__3703.call(this,h,tag);
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
var derive__3713 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3714 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3708 = "﷐'parents".call(null,h);
var td__3709 = "﷐'descendants".call(null,h);
var ta__3710 = "﷐'ancestors".call(null,h);
var tf__3711 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3712 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3708.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3710.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3710.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3708,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3711.call(null,"﷐'ancestors".call(null,h),tag,td__3709,parent,ta__3710),"﷐'descendants":tf__3711.call(null,"﷐'descendants".call(null,h),parent,ta__3710,tag,td__3709)});
})());

if(cljs.core.truth_(or__3548__auto____3712))
{return or__3548__auto____3712;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3713.call(this,h,tag);
case  3 :
return derive__3714.call(this,h,tag,parent);
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
var underive__3720 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3721 = (function (h,tag,parent){
var parentMap__3716 = "﷐'parents".call(null,h);
var childsParents__3717 = (cljs.core.truth_(parentMap__3716.call(null,tag))?cljs.core.disj.call(null,parentMap__3716.call(null,tag),parent):cljs.core.set([]));
var newParents__3718 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3717))?cljs.core.assoc.call(null,parentMap__3716,tag,childsParents__3717):cljs.core.dissoc.call(null,parentMap__3716,tag));
var deriv_seq__3719 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3705_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3705_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3705_SHARP_),cljs.core.second.call(null,p1__3705_SHARP_)));
}),cljs.core.seq.call(null,newParents__3718)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3716.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3706_SHARP_,p2__3707_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3706_SHARP_,p2__3707_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3719));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3720.call(this,h,tag);
case  3 :
return underive__3721.call(this,h,tag,parent);
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
var xprefs__3723 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3725 = (cljs.core.truth_((function (){var and__3546__auto____3724 = xprefs__3723;

if(cljs.core.truth_(and__3546__auto____3724))
{return xprefs__3723.call(null,y);
} else
{return and__3546__auto____3724;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3725))
{return or__3548__auto____3725;
} else
{var or__3548__auto____3727 = (function (){var ps__3726 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3726) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3726),prefer_table)))
{} else
{}
{
var G__3730 = cljs.core.rest.call(null,ps__3726);
ps__3726 = G__3730;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3727))
{return or__3548__auto____3727;
} else
{var or__3548__auto____3729 = (function (){var ps__3728 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3728) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3728),y,prefer_table)))
{} else
{}
{
var G__3731 = cljs.core.rest.call(null,ps__3728);
ps__3728 = G__3731;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3729))
{return or__3548__auto____3729;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3732 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3732))
{return or__3548__auto____3732;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3741 = cljs.core.reduce.call(null,(function (be,p__3733){
var vec__3734__3735 = p__3733;
var k__3736 = cljs.core.nth.call(null,vec__3734__3735,0,null);
var ___3737 = cljs.core.nth.call(null,vec__3734__3735,1,null);
var e__3738 = vec__3734__3735;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3736)))
{var be2__3740 = (cljs.core.truth_((function (){var or__3548__auto____3739 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3739))
{return or__3548__auto____3739;
} else
{return cljs.core.dominates.call(null,k__3736,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3738:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3740),k__3736,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3736," and ",cljs.core.first.call(null,be2__3740),", and neither is preferred")));
}
return be2__3740;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3741))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3741));
return cljs.core.second.call(null,best_entry__3741);
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
if(cljs.core.truth_((function (){var and__3546__auto____3742 = mf;

if(cljs.core.truth_(and__3546__auto____3742))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3742;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3743 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3743))
{return or__3548__auto____3743;
} else
{var or__3548__auto____3744 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3744))
{return or__3548__auto____3744;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3745 = mf;

if(cljs.core.truth_(and__3546__auto____3745))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3745;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3746 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3746))
{return or__3548__auto____3746;
} else
{var or__3548__auto____3747 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3747))
{return or__3548__auto____3747;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3748 = mf;

if(cljs.core.truth_(and__3546__auto____3748))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3748;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3749 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3749))
{return or__3548__auto____3749;
} else
{var or__3548__auto____3750 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3750))
{return or__3548__auto____3750;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3751 = mf;

if(cljs.core.truth_(and__3546__auto____3751))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3751;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3752 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3752))
{return or__3548__auto____3752;
} else
{var or__3548__auto____3753 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3753))
{return or__3548__auto____3753;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3754 = mf;

if(cljs.core.truth_(and__3546__auto____3754))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3754;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3755 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3755))
{return or__3548__auto____3755;
} else
{var or__3548__auto____3756 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3756))
{return or__3548__auto____3756;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3757 = mf;

if(cljs.core.truth_(and__3546__auto____3757))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3757;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3758 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3758))
{return or__3548__auto____3758;
} else
{var or__3548__auto____3759 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3759))
{return or__3548__auto____3759;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3760 = mf;

if(cljs.core.truth_(and__3546__auto____3760))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3760;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3761 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3761))
{return or__3548__auto____3761;
} else
{var or__3548__auto____3762 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3762))
{return or__3548__auto____3762;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3763 = mf;

if(cljs.core.truth_(and__3546__auto____3763))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3763;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3764 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3764))
{return or__3548__auto____3764;
} else
{var or__3548__auto____3765 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3765))
{return or__3548__auto____3765;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3766 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3767 = cljs.core._get_method.call(null,mf,dispatch_val__3766);

if(cljs.core.truth_(target_fn__3767))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3766)));
}
return cljs.core.apply.call(null,target_fn__3767,args);
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
var this__3768 = this;
cljs.core.swap_BANG_.call(null,this__3768.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3768.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3768.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3768.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3769 = this;
cljs.core.swap_BANG_.call(null,this__3769.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3769.method_cache,this__3769.method_table,this__3769.cached_hierarchy,this__3769.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3770 = this;
cljs.core.swap_BANG_.call(null,this__3770.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3770.method_cache,this__3770.method_table,this__3770.cached_hierarchy,this__3770.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3771 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3771.cached_hierarchy),cljs.core.deref.call(null,this__3771.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3771.method_cache,this__3771.method_table,this__3771.cached_hierarchy,this__3771.hierarchy);
}
var temp__3695__auto____3772 = cljs.core.deref.call(null,this__3771.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3772))
{var target_fn__3773 = temp__3695__auto____3772;

return target_fn__3773;
} else
{var temp__3695__auto____3774 = cljs.core.find_and_cache_best_method.call(null,this__3771.name,dispatch_val,this__3771.hierarchy,this__3771.method_table,this__3771.prefer_table,this__3771.method_cache,this__3771.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3774))
{var target_fn__3775 = temp__3695__auto____3774;

return target_fn__3775;
} else
{return cljs.core.deref.call(null,this__3771.method_table).call(null,this__3771.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3776 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3776.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3776.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3776.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3776.method_cache,this__3776.method_table,this__3776.cached_hierarchy,this__3776.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3777 = this;
return cljs.core.deref.call(null,this__3777.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3778 = this;
return cljs.core.deref.call(null,this__3778.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3779 = this;
return cljs.core.do_invoke.call(null,mf,this__3779.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3780__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3780 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3780__delegate.call(this, _, args);
};
G__3780.cljs$lang$maxFixedArity = 1;
G__3780.cljs$lang$applyTo = (function (arglist__3781){
var _ = cljs.core.first(arglist__3781);
var args = cljs.core.rest(arglist__3781);
return G__3780__delegate.call(this, _, args);
});
return G__3780;
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
