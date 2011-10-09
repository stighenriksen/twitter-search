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
var or__3548__auto____2351 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2351))
{return or__3548__auto____2351;
} else
{var or__3548__auto____2352 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2352))
{return or__3548__auto____2352;
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
if(cljs.core.truth_((function (){var and__3546__auto____2353 = coll;

if(cljs.core.truth_(and__3546__auto____2353))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2353;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2354 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2354))
{return or__3548__auto____2354;
} else
{var or__3548__auto____2355 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2355))
{return or__3548__auto____2355;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2356 = coll;

if(cljs.core.truth_(and__3546__auto____2356))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2356;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2357 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2357))
{return or__3548__auto____2357;
} else
{var or__3548__auto____2358 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2358))
{return or__3548__auto____2358;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2359 = coll;

if(cljs.core.truth_(and__3546__auto____2359))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2359;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2360 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2360))
{return or__3548__auto____2360;
} else
{var or__3548__auto____2361 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2361))
{return or__3548__auto____2361;
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
var _nth__2368 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2362 = coll;

if(cljs.core.truth_(and__3546__auto____2362))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2362;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2363 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2363))
{return or__3548__auto____2363;
} else
{var or__3548__auto____2364 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2364))
{return or__3548__auto____2364;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2369 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2365 = coll;

if(cljs.core.truth_(and__3546__auto____2365))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2365;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2366 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2366))
{return or__3548__auto____2366;
} else
{var or__3548__auto____2367 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2367))
{return or__3548__auto____2367;
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
return _nth__2368.call(this,coll,n);
case  3 :
return _nth__2369.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2371 = coll;

if(cljs.core.truth_(and__3546__auto____2371))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2371;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2372 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2372))
{return or__3548__auto____2372;
} else
{var or__3548__auto____2373 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2373))
{return or__3548__auto____2373;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2374 = coll;

if(cljs.core.truth_(and__3546__auto____2374))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2374;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2375 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2375))
{return or__3548__auto____2375;
} else
{var or__3548__auto____2376 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2376))
{return or__3548__auto____2376;
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
var _lookup__2383 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2377 = o;

if(cljs.core.truth_(and__3546__auto____2377))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2377;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2378 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2378))
{return or__3548__auto____2378;
} else
{var or__3548__auto____2379 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2379))
{return or__3548__auto____2379;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2384 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2380 = o;

if(cljs.core.truth_(and__3546__auto____2380))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2380;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2381 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2381))
{return or__3548__auto____2381;
} else
{var or__3548__auto____2382 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2382))
{return or__3548__auto____2382;
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
return _lookup__2383.call(this,o,k);
case  3 :
return _lookup__2384.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2386 = coll;

if(cljs.core.truth_(and__3546__auto____2386))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2386;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2387 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2387))
{return or__3548__auto____2387;
} else
{var or__3548__auto____2388 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2388))
{return or__3548__auto____2388;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2389 = coll;

if(cljs.core.truth_(and__3546__auto____2389))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2389;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2390 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2390))
{return or__3548__auto____2390;
} else
{var or__3548__auto____2391 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2391))
{return or__3548__auto____2391;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2392 = coll;

if(cljs.core.truth_(and__3546__auto____2392))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2392;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2393 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2393))
{return or__3548__auto____2393;
} else
{var or__3548__auto____2394 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2394))
{return or__3548__auto____2394;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2395 = coll;

if(cljs.core.truth_(and__3546__auto____2395))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2395;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2396 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2396))
{return or__3548__auto____2396;
} else
{var or__3548__auto____2397 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2397))
{return or__3548__auto____2397;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2398 = coll;

if(cljs.core.truth_(and__3546__auto____2398))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2398;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2399 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2399))
{return or__3548__auto____2399;
} else
{var or__3548__auto____2400 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2400))
{return or__3548__auto____2400;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2401 = coll;

if(cljs.core.truth_(and__3546__auto____2401))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2401;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2402 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2402))
{return or__3548__auto____2402;
} else
{var or__3548__auto____2403 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2403))
{return or__3548__auto____2403;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2404 = coll;

if(cljs.core.truth_(and__3546__auto____2404))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2404;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2405 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2405))
{return or__3548__auto____2405;
} else
{var or__3548__auto____2406 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2406))
{return or__3548__auto____2406;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2407 = o;

if(cljs.core.truth_(and__3546__auto____2407))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2407;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2408 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2408))
{return or__3548__auto____2408;
} else
{var or__3548__auto____2409 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2409))
{return or__3548__auto____2409;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2410 = o;

if(cljs.core.truth_(and__3546__auto____2410))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2410;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2411 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2411))
{return or__3548__auto____2411;
} else
{var or__3548__auto____2412 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2412))
{return or__3548__auto____2412;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2413 = o;

if(cljs.core.truth_(and__3546__auto____2413))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2413;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2414 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2414))
{return or__3548__auto____2414;
} else
{var or__3548__auto____2415 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2415))
{return or__3548__auto____2415;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2416 = o;

if(cljs.core.truth_(and__3546__auto____2416))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2416;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2417 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2417))
{return or__3548__auto____2417;
} else
{var or__3548__auto____2418 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2418))
{return or__3548__auto____2418;
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
var _reduce__2425 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2419 = coll;

if(cljs.core.truth_(and__3546__auto____2419))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2419;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2420 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2420))
{return or__3548__auto____2420;
} else
{var or__3548__auto____2421 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2421))
{return or__3548__auto____2421;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2426 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2422 = coll;

if(cljs.core.truth_(and__3546__auto____2422))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2422;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2423 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2423))
{return or__3548__auto____2423;
} else
{var or__3548__auto____2424 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2424))
{return or__3548__auto____2424;
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
return _reduce__2425.call(this,coll,f);
case  3 :
return _reduce__2426.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2428 = o;

if(cljs.core.truth_(and__3546__auto____2428))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2428;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2429 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2429))
{return or__3548__auto____2429;
} else
{var or__3548__auto____2430 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2430))
{return or__3548__auto____2430;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2431 = o;

if(cljs.core.truth_(and__3546__auto____2431))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2431;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2432 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2432))
{return or__3548__auto____2432;
} else
{var or__3548__auto____2433 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2433))
{return or__3548__auto____2433;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2434 = o;

if(cljs.core.truth_(and__3546__auto____2434))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2434;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2435 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{var or__3548__auto____2436 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2436))
{return or__3548__auto____2436;
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
if(cljs.core.truth_((function (){var and__3546__auto____2437 = o;

if(cljs.core.truth_(and__3546__auto____2437))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2437;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2438 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2438))
{return or__3548__auto____2438;
} else
{var or__3548__auto____2439 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2439))
{return or__3548__auto____2439;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2440 = d;

if(cljs.core.truth_(and__3546__auto____2440))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2440;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2441 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2441))
{return or__3548__auto____2441;
} else
{var or__3548__auto____2442 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2442))
{return or__3548__auto____2442;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2443 = this$;

if(cljs.core.truth_(and__3546__auto____2443))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2443;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2444 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2444))
{return or__3548__auto____2444;
} else
{var or__3548__auto____2445 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2445))
{return or__3548__auto____2445;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2446 = this$;

if(cljs.core.truth_(and__3546__auto____2446))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2446;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2447 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2447))
{return or__3548__auto____2447;
} else
{var or__3548__auto____2448 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2448))
{return or__3548__auto____2448;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2449 = this$;

if(cljs.core.truth_(and__3546__auto____2449))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2449;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2450 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2450))
{return or__3548__auto____2450;
} else
{var or__3548__auto____2451 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2451))
{return or__3548__auto____2451;
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
var G__2452 = null;
var G__2452__2453 = (function (_,n){
return null;
});
var G__2452__2454 = (function (_,n,not_found){
return not_found;
});
G__2452 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2452__2453.call(this,_,n);
case  3 :
return G__2452__2454.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2452;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2456 = null;
var G__2456__2457 = (function (_,f){
return f.call(null);
});
var G__2456__2458 = (function (_,f,start){
return start;
});
G__2456 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2456__2457.call(this,_,f);
case  3 :
return G__2456__2458.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2456;
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
var G__2460 = null;
var G__2460__2461 = (function (o,k){
return null;
});
var G__2460__2462 = (function (o,k,not_found){
return not_found;
});
G__2460 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2460__2461.call(this,o,k);
case  3 :
return G__2460__2462.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2460;
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
var ci_reduce__2470 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2464 = cljs.core._nth.call(null,cicoll,0);
var n__2465 = 1;

while(true){
if(cljs.core.truth_((n__2465 < cljs.core._count.call(null,cicoll))))
{{
var G__2474 = f.call(null,val__2464,cljs.core._nth.call(null,cicoll,n__2465));
var G__2475 = (n__2465 + 1);
val__2464 = G__2474;
n__2465 = G__2475;
continue;
}
} else
{return val__2464;
}
break;
}
}
});
var ci_reduce__2471 = (function (cicoll,f,val){
var val__2466 = val;
var n__2467 = 0;

while(true){
if(cljs.core.truth_((n__2467 < cljs.core._count.call(null,cicoll))))
{{
var G__2476 = f.call(null,val__2466,cljs.core._nth.call(null,cicoll,n__2467));
var G__2477 = (n__2467 + 1);
val__2466 = G__2476;
n__2467 = G__2477;
continue;
}
} else
{return val__2466;
}
break;
}
});
var ci_reduce__2472 = (function (cicoll,f,val,idx){
var val__2468 = val;
var n__2469 = idx;

while(true){
if(cljs.core.truth_((n__2469 < cljs.core._count.call(null,cicoll))))
{{
var G__2478 = f.call(null,val__2468,cljs.core._nth.call(null,cicoll,n__2469));
var G__2479 = (n__2469 + 1);
val__2468 = G__2478;
n__2469 = G__2479;
continue;
}
} else
{return val__2468;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2470.call(this,cicoll,f);
case  3 :
return ci_reduce__2471.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2472.call(this,cicoll,f,val,idx);
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
var this__2480 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2488 = null;
var G__2488__2489 = (function (coll,f){
var this__2481 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2481.a[this__2481.i]),(this__2481.i + 1));
});
var G__2488__2490 = (function (coll,f,start){
var this__2482 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2482.i);
});
G__2488 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2488__2489.call(this,coll,f);
case  3 :
return G__2488__2490.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2488;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2483 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2484 = this;
return this__2484.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2485 = this;
return (this__2485.a[this__2485.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2486 = this;
if(cljs.core.truth_(((this__2486.i + 1) < this__2486.a.length)))
{return (new cljs.core.IndexedSeq(this__2486.a,(this__2486.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2487 = this;
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
var G__2492 = null;
var G__2492__2493 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2492__2494 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2492 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2492__2493.call(this,array,f);
case  3 :
return G__2492__2494.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2492;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2496 = null;
var G__2496__2497 = (function (array,k){
return (array[k]);
});
var G__2496__2498 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2496 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2496__2497.call(this,array,k);
case  3 :
return G__2496__2498.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2496;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2500 = null;
var G__2500__2501 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2500__2502 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2500 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2500__2501.call(this,array,n);
case  3 :
return G__2500__2502.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2500;
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
var temp__3698__auto____2504 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2504))
{var s__2505 = temp__3698__auto____2504;

return cljs.core._first.call(null,s__2505);
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
var G__2506 = cljs.core.next.call(null,s);
s = G__2506;
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
var s__2507 = cljs.core.seq.call(null,x);
var n__2508 = 0;

while(true){
if(cljs.core.truth_(s__2507))
{{
var G__2509 = cljs.core.next.call(null,s__2507);
var G__2510 = (n__2508 + 1);
s__2507 = G__2509;
n__2508 = G__2510;
continue;
}
} else
{return n__2508;
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
var conj__2511 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2512 = (function() { 
var G__2514__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2515 = conj.call(null,coll,x);
var G__2516 = cljs.core.first.call(null,xs);
var G__2517 = cljs.core.next.call(null,xs);
coll = G__2515;
x = G__2516;
xs = G__2517;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2514 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2514__delegate.call(this, coll, x, xs);
};
G__2514.cljs$lang$maxFixedArity = 2;
G__2514.cljs$lang$applyTo = (function (arglist__2518){
var coll = cljs.core.first(arglist__2518);
var x = cljs.core.first(cljs.core.next(arglist__2518));
var xs = cljs.core.rest(cljs.core.next(arglist__2518));
return G__2514__delegate.call(this, coll, x, xs);
});
return G__2514;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2511.call(this,coll,x);
default:
return conj__2512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2512.cljs$lang$applyTo;
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
var nth__2519 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2520 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2519.call(this,coll,n);
case  3 :
return nth__2520.call(this,coll,n,not_found);
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
var get__2522 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2523 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2522.call(this,o,k);
case  3 :
return get__2523.call(this,o,k,not_found);
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
var assoc__2526 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2527 = (function() { 
var G__2529__delegate = function (coll,k,v,kvs){
while(true){
var ret__2525 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2530 = ret__2525;
var G__2531 = cljs.core.first.call(null,kvs);
var G__2532 = cljs.core.second.call(null,kvs);
var G__2533 = cljs.core.nnext.call(null,kvs);
coll = G__2530;
k = G__2531;
v = G__2532;
kvs = G__2533;
continue;
}
} else
{return ret__2525;
}
break;
}
};
var G__2529 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2529__delegate.call(this, coll, k, v, kvs);
};
G__2529.cljs$lang$maxFixedArity = 3;
G__2529.cljs$lang$applyTo = (function (arglist__2534){
var coll = cljs.core.first(arglist__2534);
var k = cljs.core.first(cljs.core.next(arglist__2534));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2534)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2534)));
return G__2529__delegate.call(this, coll, k, v, kvs);
});
return G__2529;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2526.call(this,coll,k,v);
default:
return assoc__2527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2527.cljs$lang$applyTo;
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
var dissoc__2536 = (function (coll){
return coll;
});
var dissoc__2537 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2538 = (function() { 
var G__2540__delegate = function (coll,k,ks){
while(true){
var ret__2535 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2541 = ret__2535;
var G__2542 = cljs.core.first.call(null,ks);
var G__2543 = cljs.core.next.call(null,ks);
coll = G__2541;
k = G__2542;
ks = G__2543;
continue;
}
} else
{return ret__2535;
}
break;
}
};
var G__2540 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2540__delegate.call(this, coll, k, ks);
};
G__2540.cljs$lang$maxFixedArity = 2;
G__2540.cljs$lang$applyTo = (function (arglist__2544){
var coll = cljs.core.first(arglist__2544);
var k = cljs.core.first(cljs.core.next(arglist__2544));
var ks = cljs.core.rest(cljs.core.next(arglist__2544));
return G__2540__delegate.call(this, coll, k, ks);
});
return G__2540;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2536.call(this,coll);
case  2 :
return dissoc__2537.call(this,coll,k);
default:
return dissoc__2538.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2538.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__302__auto____2545 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2546 = x__302__auto____2545;

if(cljs.core.truth_(and__3546__auto____2546))
{var and__3546__auto____2547 = x__302__auto____2545.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2547))
{return cljs.core.not.call(null,x__302__auto____2545.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2547;
}
} else
{return and__3546__auto____2546;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__302__auto____2545);
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
var disj__2549 = (function (coll){
return coll;
});
var disj__2550 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2551 = (function() { 
var G__2553__delegate = function (coll,k,ks){
while(true){
var ret__2548 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2554 = ret__2548;
var G__2555 = cljs.core.first.call(null,ks);
var G__2556 = cljs.core.next.call(null,ks);
coll = G__2554;
k = G__2555;
ks = G__2556;
continue;
}
} else
{return ret__2548;
}
break;
}
};
var G__2553 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2553__delegate.call(this, coll, k, ks);
};
G__2553.cljs$lang$maxFixedArity = 2;
G__2553.cljs$lang$applyTo = (function (arglist__2557){
var coll = cljs.core.first(arglist__2557);
var k = cljs.core.first(cljs.core.next(arglist__2557));
var ks = cljs.core.rest(cljs.core.next(arglist__2557));
return G__2553__delegate.call(this, coll, k, ks);
});
return G__2553;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2549.call(this,coll);
case  2 :
return disj__2550.call(this,coll,k);
default:
return disj__2551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2551.cljs$lang$applyTo;
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
{var x__302__auto____2558 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2559 = x__302__auto____2558;

if(cljs.core.truth_(and__3546__auto____2559))
{var and__3546__auto____2560 = x__302__auto____2558.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2560))
{return cljs.core.not.call(null,x__302__auto____2558.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2560;
}
} else
{return and__3546__auto____2559;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__302__auto____2558);
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
{var x__302__auto____2561 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2562 = x__302__auto____2561;

if(cljs.core.truth_(and__3546__auto____2562))
{var and__3546__auto____2563 = x__302__auto____2561.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2563))
{return cljs.core.not.call(null,x__302__auto____2561.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2563;
}
} else
{return and__3546__auto____2562;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__302__auto____2561);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__302__auto____2564 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2565 = x__302__auto____2564;

if(cljs.core.truth_(and__3546__auto____2565))
{var and__3546__auto____2566 = x__302__auto____2564.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2566))
{return cljs.core.not.call(null,x__302__auto____2564.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2566;
}
} else
{return and__3546__auto____2565;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__302__auto____2564);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__302__auto____2567 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2568 = x__302__auto____2567;

if(cljs.core.truth_(and__3546__auto____2568))
{var and__3546__auto____2569 = x__302__auto____2567.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2569))
{return cljs.core.not.call(null,x__302__auto____2567.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2569;
}
} else
{return and__3546__auto____2568;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__302__auto____2567);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__302__auto____2570 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2571 = x__302__auto____2570;

if(cljs.core.truth_(and__3546__auto____2571))
{var and__3546__auto____2572 = x__302__auto____2570.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2572))
{return cljs.core.not.call(null,x__302__auto____2570.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2572;
}
} else
{return and__3546__auto____2571;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__302__auto____2570);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__302__auto____2573 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2574 = x__302__auto____2573;

if(cljs.core.truth_(and__3546__auto____2574))
{var and__3546__auto____2575 = x__302__auto____2573.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2575))
{return cljs.core.not.call(null,x__302__auto____2573.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2575;
}
} else
{return and__3546__auto____2574;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__302__auto____2573);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__302__auto____2576 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2577 = x__302__auto____2576;

if(cljs.core.truth_(and__3546__auto____2577))
{var and__3546__auto____2578 = x__302__auto____2576.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2578))
{return cljs.core.not.call(null,x__302__auto____2576.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2578;
}
} else
{return and__3546__auto____2577;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__302__auto____2576);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2579 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2579.push(key);
}));
return keys__2579;
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
{var x__302__auto____2580 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2581 = x__302__auto____2580;

if(cljs.core.truth_(and__3546__auto____2581))
{var and__3546__auto____2582 = x__302__auto____2580.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2582))
{return cljs.core.not.call(null,x__302__auto____2580.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2582;
}
} else
{return and__3546__auto____2581;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__302__auto____2580);
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
var and__3546__auto____2583 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2583))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2584 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2584))
{return or__3548__auto____2584;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2583;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2585 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2585))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2585;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2586 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2586))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2586;
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
var and__3546__auto____2587 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2587))
{return (n == n.toFixed());
} else
{return and__3546__auto____2587;
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
if(cljs.core.truth_((function (){var and__3546__auto____2588 = coll;

if(cljs.core.truth_(and__3546__auto____2588))
{var and__3546__auto____2589 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2589))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2589;
}
} else
{return and__3546__auto____2588;
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
var distinct_QMARK___2594 = (function (x){
return true;
});
var distinct_QMARK___2595 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2596 = (function() { 
var G__2598__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2590 = cljs.core.set([y,x]);
var xs__2591 = more;

while(true){
var x__2592 = cljs.core.first.call(null,xs__2591);
var etc__2593 = cljs.core.next.call(null,xs__2591);

if(cljs.core.truth_(xs__2591))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2590,x__2592)))
{return false;
} else
{{
var G__2599 = cljs.core.conj.call(null,s__2590,x__2592);
var G__2600 = etc__2593;
s__2590 = G__2599;
xs__2591 = G__2600;
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
var G__2598 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2598__delegate.call(this, x, y, more);
};
G__2598.cljs$lang$maxFixedArity = 2;
G__2598.cljs$lang$applyTo = (function (arglist__2601){
var x = cljs.core.first(arglist__2601);
var y = cljs.core.first(cljs.core.next(arglist__2601));
var more = cljs.core.rest(cljs.core.next(arglist__2601));
return G__2598__delegate.call(this, x, y, more);
});
return G__2598;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2594.call(this,x);
case  2 :
return distinct_QMARK___2595.call(this,x,y);
default:
return distinct_QMARK___2596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2596.cljs$lang$applyTo;
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
var r__2602 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2602)))
{return r__2602;
} else
{if(cljs.core.truth_(r__2602))
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
var sort__2604 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2605 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2603 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2603,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2603);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2604.call(this,comp);
case  2 :
return sort__2605.call(this,comp,coll);
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
var sort_by__2607 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2608 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2607.call(this,keyfn,comp);
case  3 :
return sort_by__2608.call(this,keyfn,comp,coll);
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
var reduce__2610 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2611 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2610.call(this,f,val);
case  3 :
return reduce__2611.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2617 = (function (f,coll){
var temp__3695__auto____2613 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2613))
{var s__2614 = temp__3695__auto____2613;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2614),cljs.core.next.call(null,s__2614));
} else
{return f.call(null);
}
});
var seq_reduce__2618 = (function (f,val,coll){
var val__2615 = val;
var coll__2616 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2616))
{{
var G__2620 = f.call(null,val__2615,cljs.core.first.call(null,coll__2616));
var G__2621 = cljs.core.next.call(null,coll__2616);
val__2615 = G__2620;
coll__2616 = G__2621;
continue;
}
} else
{return val__2615;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2617.call(this,f,val);
case  3 :
return seq_reduce__2618.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2622 = null;
var G__2622__2623 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2622__2624 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2622 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2622__2623.call(this,coll,f);
case  3 :
return G__2622__2624.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2622;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2626 = (function (){
return 0;
});
var _PLUS___2627 = (function (x){
return x;
});
var _PLUS___2628 = (function (x,y){
return (x + y);
});
var _PLUS___2629 = (function() { 
var G__2631__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2631 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2631__delegate.call(this, x, y, more);
};
G__2631.cljs$lang$maxFixedArity = 2;
G__2631.cljs$lang$applyTo = (function (arglist__2632){
var x = cljs.core.first(arglist__2632);
var y = cljs.core.first(cljs.core.next(arglist__2632));
var more = cljs.core.rest(cljs.core.next(arglist__2632));
return G__2631__delegate.call(this, x, y, more);
});
return G__2631;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2626.call(this);
case  1 :
return _PLUS___2627.call(this,x);
case  2 :
return _PLUS___2628.call(this,x,y);
default:
return _PLUS___2629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2629.cljs$lang$applyTo;
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
var ___2633 = (function (x){
return (- x);
});
var ___2634 = (function (x,y){
return (x - y);
});
var ___2635 = (function() { 
var G__2637__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2637 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2637__delegate.call(this, x, y, more);
};
G__2637.cljs$lang$maxFixedArity = 2;
G__2637.cljs$lang$applyTo = (function (arglist__2638){
var x = cljs.core.first(arglist__2638);
var y = cljs.core.first(cljs.core.next(arglist__2638));
var more = cljs.core.rest(cljs.core.next(arglist__2638));
return G__2637__delegate.call(this, x, y, more);
});
return G__2637;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2633.call(this,x);
case  2 :
return ___2634.call(this,x,y);
default:
return ___2635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2635.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2639 = (function (){
return 1;
});
var _STAR___2640 = (function (x){
return x;
});
var _STAR___2641 = (function (x,y){
return (x * y);
});
var _STAR___2642 = (function() { 
var G__2644__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2644 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2644__delegate.call(this, x, y, more);
};
G__2644.cljs$lang$maxFixedArity = 2;
G__2644.cljs$lang$applyTo = (function (arglist__2645){
var x = cljs.core.first(arglist__2645);
var y = cljs.core.first(cljs.core.next(arglist__2645));
var more = cljs.core.rest(cljs.core.next(arglist__2645));
return G__2644__delegate.call(this, x, y, more);
});
return G__2644;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2639.call(this);
case  1 :
return _STAR___2640.call(this,x);
case  2 :
return _STAR___2641.call(this,x,y);
default:
return _STAR___2642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2642.cljs$lang$applyTo;
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
var _SLASH___2646 = (function (x){
return (1 / x);
});
var _SLASH___2647 = (function (x,y){
return (x / y);
});
var _SLASH___2648 = (function() { 
var G__2650__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2650 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2650__delegate.call(this, x, y, more);
};
G__2650.cljs$lang$maxFixedArity = 2;
G__2650.cljs$lang$applyTo = (function (arglist__2651){
var x = cljs.core.first(arglist__2651);
var y = cljs.core.first(cljs.core.next(arglist__2651));
var more = cljs.core.rest(cljs.core.next(arglist__2651));
return G__2650__delegate.call(this, x, y, more);
});
return G__2650;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2646.call(this,x);
case  2 :
return _SLASH___2647.call(this,x,y);
default:
return _SLASH___2648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2648.cljs$lang$applyTo;
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
var _LT___2652 = (function (x){
return true;
});
var _LT___2653 = (function (x,y){
return (x < y);
});
var _LT___2654 = (function() { 
var G__2656__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2657 = y;
var G__2658 = cljs.core.first.call(null,more);
var G__2659 = cljs.core.next.call(null,more);
x = G__2657;
y = G__2658;
more = G__2659;
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
var G__2656 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2656__delegate.call(this, x, y, more);
};
G__2656.cljs$lang$maxFixedArity = 2;
G__2656.cljs$lang$applyTo = (function (arglist__2660){
var x = cljs.core.first(arglist__2660);
var y = cljs.core.first(cljs.core.next(arglist__2660));
var more = cljs.core.rest(cljs.core.next(arglist__2660));
return G__2656__delegate.call(this, x, y, more);
});
return G__2656;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2652.call(this,x);
case  2 :
return _LT___2653.call(this,x,y);
default:
return _LT___2654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2654.cljs$lang$applyTo;
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
var _LT__EQ___2661 = (function (x){
return true;
});
var _LT__EQ___2662 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2663 = (function() { 
var G__2665__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2666 = y;
var G__2667 = cljs.core.first.call(null,more);
var G__2668 = cljs.core.next.call(null,more);
x = G__2666;
y = G__2667;
more = G__2668;
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
var G__2665 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2665__delegate.call(this, x, y, more);
};
G__2665.cljs$lang$maxFixedArity = 2;
G__2665.cljs$lang$applyTo = (function (arglist__2669){
var x = cljs.core.first(arglist__2669);
var y = cljs.core.first(cljs.core.next(arglist__2669));
var more = cljs.core.rest(cljs.core.next(arglist__2669));
return G__2665__delegate.call(this, x, y, more);
});
return G__2665;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2661.call(this,x);
case  2 :
return _LT__EQ___2662.call(this,x,y);
default:
return _LT__EQ___2663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2663.cljs$lang$applyTo;
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
var _GT___2670 = (function (x){
return true;
});
var _GT___2671 = (function (x,y){
return (x > y);
});
var _GT___2672 = (function() { 
var G__2674__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2675 = y;
var G__2676 = cljs.core.first.call(null,more);
var G__2677 = cljs.core.next.call(null,more);
x = G__2675;
y = G__2676;
more = G__2677;
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
var G__2674 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2674__delegate.call(this, x, y, more);
};
G__2674.cljs$lang$maxFixedArity = 2;
G__2674.cljs$lang$applyTo = (function (arglist__2678){
var x = cljs.core.first(arglist__2678);
var y = cljs.core.first(cljs.core.next(arglist__2678));
var more = cljs.core.rest(cljs.core.next(arglist__2678));
return G__2674__delegate.call(this, x, y, more);
});
return G__2674;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2670.call(this,x);
case  2 :
return _GT___2671.call(this,x,y);
default:
return _GT___2672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2672.cljs$lang$applyTo;
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
var _GT__EQ___2679 = (function (x){
return true;
});
var _GT__EQ___2680 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2681 = (function() { 
var G__2683__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2684 = y;
var G__2685 = cljs.core.first.call(null,more);
var G__2686 = cljs.core.next.call(null,more);
x = G__2684;
y = G__2685;
more = G__2686;
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
var G__2683 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2683__delegate.call(this, x, y, more);
};
G__2683.cljs$lang$maxFixedArity = 2;
G__2683.cljs$lang$applyTo = (function (arglist__2687){
var x = cljs.core.first(arglist__2687);
var y = cljs.core.first(cljs.core.next(arglist__2687));
var more = cljs.core.rest(cljs.core.next(arglist__2687));
return G__2683__delegate.call(this, x, y, more);
});
return G__2683;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2679.call(this,x);
case  2 :
return _GT__EQ___2680.call(this,x,y);
default:
return _GT__EQ___2681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2681.cljs$lang$applyTo;
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
var max__2688 = (function (x){
return x;
});
var max__2689 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2690 = (function() { 
var G__2692__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2692 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2692__delegate.call(this, x, y, more);
};
G__2692.cljs$lang$maxFixedArity = 2;
G__2692.cljs$lang$applyTo = (function (arglist__2693){
var x = cljs.core.first(arglist__2693);
var y = cljs.core.first(cljs.core.next(arglist__2693));
var more = cljs.core.rest(cljs.core.next(arglist__2693));
return G__2692__delegate.call(this, x, y, more);
});
return G__2692;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2688.call(this,x);
case  2 :
return max__2689.call(this,x,y);
default:
return max__2690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2690.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2694 = (function (x){
return x;
});
var min__2695 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2696 = (function() { 
var G__2698__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2698 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2698__delegate.call(this, x, y, more);
};
G__2698.cljs$lang$maxFixedArity = 2;
G__2698.cljs$lang$applyTo = (function (arglist__2699){
var x = cljs.core.first(arglist__2699);
var y = cljs.core.first(cljs.core.next(arglist__2699));
var more = cljs.core.rest(cljs.core.next(arglist__2699));
return G__2698__delegate.call(this, x, y, more);
});
return G__2698;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2694.call(this,x);
case  2 :
return min__2695.call(this,x,y);
default:
return min__2696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2696.cljs$lang$applyTo;
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
var rem__2700 = (n % d);

return cljs.core.fix.call(null,((n - rem__2700) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2701 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2701));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2702 = (function (){
return Math.random.call(null);
});
var rand__2703 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2702.call(this);
case  1 :
return rand__2703.call(this,n);
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
var _EQ__EQ___2705 = (function (x){
return true;
});
var _EQ__EQ___2706 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2707 = (function() { 
var G__2709__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2710 = y;
var G__2711 = cljs.core.first.call(null,more);
var G__2712 = cljs.core.next.call(null,more);
x = G__2710;
y = G__2711;
more = G__2712;
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
var G__2709 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2709__delegate.call(this, x, y, more);
};
G__2709.cljs$lang$maxFixedArity = 2;
G__2709.cljs$lang$applyTo = (function (arglist__2713){
var x = cljs.core.first(arglist__2713);
var y = cljs.core.first(cljs.core.next(arglist__2713));
var more = cljs.core.rest(cljs.core.next(arglist__2713));
return G__2709__delegate.call(this, x, y, more);
});
return G__2709;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2705.call(this,x);
case  2 :
return _EQ__EQ___2706.call(this,x,y);
default:
return _EQ__EQ___2707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2707.cljs$lang$applyTo;
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
var n__2714 = n;
var xs__2715 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2716 = xs__2715;

if(cljs.core.truth_(and__3546__auto____2716))
{return (n__2714 > 0);
} else
{return and__3546__auto____2716;
}
})()))
{{
var G__2717 = (n__2714 - 1);
var G__2718 = cljs.core.next.call(null,xs__2715);
n__2714 = G__2717;
xs__2715 = G__2718;
continue;
}
} else
{return xs__2715;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2723 = null;
var G__2723__2724 = (function (coll,n){
var temp__3695__auto____2719 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2719))
{var xs__2720 = temp__3695__auto____2719;

return cljs.core.first.call(null,xs__2720);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2723__2725 = (function (coll,n,not_found){
var temp__3695__auto____2721 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2721))
{var xs__2722 = temp__3695__auto____2721;

return cljs.core.first.call(null,xs__2722);
} else
{return not_found;
}
});
G__2723 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2723__2724.call(this,coll,n);
case  3 :
return G__2723__2725.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2723;
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
var str__2727 = (function (){
return "";
});
var str__2728 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2729 = (function() { 
var G__2731__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2732 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2733 = cljs.core.next.call(null,more);
sb = G__2732;
more = G__2733;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2731 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2731__delegate.call(this, x, ys);
};
G__2731.cljs$lang$maxFixedArity = 1;
G__2731.cljs$lang$applyTo = (function (arglist__2734){
var x = cljs.core.first(arglist__2734);
var ys = cljs.core.rest(arglist__2734);
return G__2731__delegate.call(this, x, ys);
});
return G__2731;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2727.call(this);
case  1 :
return str__2728.call(this,x);
default:
return str__2729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2729.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2735 = (function (s,start){
return s.substring(start);
});
var subs__2736 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2735.call(this,s,start);
case  3 :
return subs__2736.call(this,s,start,end);
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
var symbol__2738 = (function (name){
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
var symbol__2739 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2738.call(this,ns);
case  2 :
return symbol__2739.call(this,ns,name);
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
var keyword__2741 = (function (name){
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
var keyword__2742 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2741.call(this,ns);
case  2 :
return keyword__2742.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2744 = cljs.core.seq.call(null,x);
var ys__2745 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2744)))
{return cljs.core.nil_QMARK_.call(null,ys__2745);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2745)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2744),cljs.core.first.call(null,ys__2745))))
{{
var G__2746 = cljs.core.next.call(null,xs__2744);
var G__2747 = cljs.core.next.call(null,ys__2745);
xs__2744 = G__2746;
ys__2745 = G__2747;
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
return cljs.core.reduce.call(null,(function (p1__2748_SHARP_,p2__2749_SHARP_){
return cljs.core.hash_combine.call(null,p1__2748_SHARP_,cljs.core.hash.call(null,p2__2749_SHARP_));
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
var this__2750 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2751 = this;
return (new cljs.core.List(this__2751.meta,o,coll,(this__2751.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2752 = this;
return this__2752.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2753 = this;
return this__2753.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2754 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2755 = this;
return this__2755.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2756 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2757 = this;
return (new cljs.core.List(meta,this__2757.first,this__2757.rest,this__2757.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2758 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2759 = this;
return this__2759.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2760 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2761 = this;
return this__2761.count;
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
var this__2762 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2763 = this;
return (new cljs.core.List(this__2763.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2764 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2765 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2766 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2767 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2768 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2769 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2770 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2771 = this;
return this__2771.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2772 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2773 = this;
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
list.cljs$lang$applyTo = (function (arglist__2774){
var items = cljs.core.seq( arglist__2774 );;
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
var this__2775 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2776 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2777 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2778 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2778.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2779 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2780 = this;
return this__2780.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2781 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2781.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2781.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2782 = this;
return this__2782.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2783 = this;
return (new cljs.core.Cons(meta,this__2783.first,this__2783.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2784 = null;
var G__2784__2785 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2784__2786 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2784 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2784__2785.call(this,string,f);
case  3 :
return G__2784__2786.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2784;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2788 = null;
var G__2788__2789 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2788__2790 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2788 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2788__2789.call(this,string,k);
case  3 :
return G__2788__2790.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2788;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2792 = null;
var G__2792__2793 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2792__2794 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2792 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2792__2793.call(this,string,n);
case  3 :
return G__2792__2794.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2792;
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
var G__2796 = null;
var G__2796__2797 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2796__2798 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2796 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2796__2797.call(this,_,coll);
case  3 :
return G__2796__2798.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2796;
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
var x__2800 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2800;
} else
{lazy_seq.x = x__2800.call(null);
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
var this__2801 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2802 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2803 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2804 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2804.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2805 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2806 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2807 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2808 = this;
return this__2808.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2809 = this;
return (new cljs.core.LazySeq(meta,this__2809.realized,this__2809.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2810 = cljs.core.array.call(null);

var s__2811 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2811)))
{ary__2810.push(cljs.core.first.call(null,s__2811));
{
var G__2812 = cljs.core.next.call(null,s__2811);
s__2811 = G__2812;
continue;
}
} else
{return ary__2810;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2813 = s;
var i__2814 = n;
var sum__2815 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2816 = (i__2814 > 0);

if(cljs.core.truth_(and__3546__auto____2816))
{return cljs.core.seq.call(null,s__2813);
} else
{return and__3546__auto____2816;
}
})()))
{{
var G__2817 = cljs.core.next.call(null,s__2813);
var G__2818 = (i__2814 - 1);
var G__2819 = (sum__2815 + 1);
s__2813 = G__2817;
i__2814 = G__2818;
sum__2815 = G__2819;
continue;
}
} else
{return sum__2815;
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
var concat__2823 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2824 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2825 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2820 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2820))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2820),concat.call(null,cljs.core.rest.call(null,s__2820),y));
} else
{return y;
}
})));
});
var concat__2826 = (function() { 
var G__2828__delegate = function (x,y,zs){
var cat__2822 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2821 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2821))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2821),cat.call(null,cljs.core.rest.call(null,xys__2821),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2822.call(null,concat.call(null,x,y),zs);
};
var G__2828 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2828__delegate.call(this, x, y, zs);
};
G__2828.cljs$lang$maxFixedArity = 2;
G__2828.cljs$lang$applyTo = (function (arglist__2829){
var x = cljs.core.first(arglist__2829);
var y = cljs.core.first(cljs.core.next(arglist__2829));
var zs = cljs.core.rest(cljs.core.next(arglist__2829));
return G__2828__delegate.call(this, x, y, zs);
});
return G__2828;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2823.call(this);
case  1 :
return concat__2824.call(this,x);
case  2 :
return concat__2825.call(this,x,y);
default:
return concat__2826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2826.cljs$lang$applyTo;
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
var list_STAR___2830 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2831 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2832 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2833 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2834 = (function() { 
var G__2836__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2836 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2836__delegate.call(this, a, b, c, d, more);
};
G__2836.cljs$lang$maxFixedArity = 4;
G__2836.cljs$lang$applyTo = (function (arglist__2837){
var a = cljs.core.first(arglist__2837);
var b = cljs.core.first(cljs.core.next(arglist__2837));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2837)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2837))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2837))));
return G__2836__delegate.call(this, a, b, c, d, more);
});
return G__2836;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2830.call(this,a);
case  2 :
return list_STAR___2831.call(this,a,b);
case  3 :
return list_STAR___2832.call(this,a,b,c);
case  4 :
return list_STAR___2833.call(this,a,b,c,d);
default:
return list_STAR___2834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2834.cljs$lang$applyTo;
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
var apply__2847 = (function (f,args){
var fixed_arity__2838 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2838 + 1)) <= fixed_arity__2838)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2848 = (function (f,x,args){
var arglist__2839 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2840 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2839,fixed_arity__2840) <= fixed_arity__2840)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2839));
} else
{return f.cljs$lang$applyTo(arglist__2839);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2839));
}
});
var apply__2849 = (function (f,x,y,args){
var arglist__2841 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2842 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2841,fixed_arity__2842) <= fixed_arity__2842)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2841));
} else
{return f.cljs$lang$applyTo(arglist__2841);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2841));
}
});
var apply__2850 = (function (f,x,y,z,args){
var arglist__2843 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2844 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2843,fixed_arity__2844) <= fixed_arity__2844)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2843));
} else
{return f.cljs$lang$applyTo(arglist__2843);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2843));
}
});
var apply__2851 = (function() { 
var G__2853__delegate = function (f,a,b,c,d,args){
var arglist__2845 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2846 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2845,fixed_arity__2846) <= fixed_arity__2846)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2845));
} else
{return f.cljs$lang$applyTo(arglist__2845);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2845));
}
};
var G__2853 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2853__delegate.call(this, f, a, b, c, d, args);
};
G__2853.cljs$lang$maxFixedArity = 5;
G__2853.cljs$lang$applyTo = (function (arglist__2854){
var f = cljs.core.first(arglist__2854);
var a = cljs.core.first(cljs.core.next(arglist__2854));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2854)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2854))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2854)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2854)))));
return G__2853__delegate.call(this, f, a, b, c, d, args);
});
return G__2853;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2847.call(this,f,a);
case  3 :
return apply__2848.call(this,f,a,b);
case  4 :
return apply__2849.call(this,f,a,b,c);
case  5 :
return apply__2850.call(this,f,a,b,c,d);
default:
return apply__2851.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2851.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__2855){
var obj = cljs.core.first(arglist__2855);
var f = cljs.core.first(cljs.core.next(arglist__2855));
var args = cljs.core.rest(cljs.core.next(arglist__2855));
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
var not_EQ___2856 = (function (x){
return false;
});
var not_EQ___2857 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2858 = (function() { 
var G__2860__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2860 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2860__delegate.call(this, x, y, more);
};
G__2860.cljs$lang$maxFixedArity = 2;
G__2860.cljs$lang$applyTo = (function (arglist__2861){
var x = cljs.core.first(arglist__2861);
var y = cljs.core.first(cljs.core.next(arglist__2861));
var more = cljs.core.rest(cljs.core.next(arglist__2861));
return G__2860__delegate.call(this, x, y, more);
});
return G__2860;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2856.call(this,x);
case  2 :
return not_EQ___2857.call(this,x,y);
default:
return not_EQ___2858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2858.cljs$lang$applyTo;
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
var G__2862 = pred;
var G__2863 = cljs.core.next.call(null,coll);
pred = G__2862;
coll = G__2863;
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
{var or__3548__auto____2864 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2864))
{return or__3548__auto____2864;
} else
{{
var G__2865 = pred;
var G__2866 = cljs.core.next.call(null,coll);
pred = G__2865;
coll = G__2866;
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
var G__2867 = null;
var G__2867__2868 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2867__2869 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2867__2870 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2867__2871 = (function() { 
var G__2873__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2873 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2873__delegate.call(this, x, y, zs);
};
G__2873.cljs$lang$maxFixedArity = 2;
G__2873.cljs$lang$applyTo = (function (arglist__2874){
var x = cljs.core.first(arglist__2874);
var y = cljs.core.first(cljs.core.next(arglist__2874));
var zs = cljs.core.rest(cljs.core.next(arglist__2874));
return G__2873__delegate.call(this, x, y, zs);
});
return G__2873;
})()
;
G__2867 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2867__2868.call(this);
case  1 :
return G__2867__2869.call(this,x);
case  2 :
return G__2867__2870.call(this,x,y);
default:
return G__2867__2871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2867.cljs$lang$maxFixedArity = 2;
G__2867.cljs$lang$applyTo = G__2867__2871.cljs$lang$applyTo;
return G__2867;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2875__delegate = function (args){
return x;
};
var G__2875 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2875__delegate.call(this, args);
};
G__2875.cljs$lang$maxFixedArity = 0;
G__2875.cljs$lang$applyTo = (function (arglist__2876){
var args = cljs.core.seq( arglist__2876 );;
return G__2875__delegate.call(this, args);
});
return G__2875;
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
var comp__2880 = (function (){
return cljs.core.identity;
});
var comp__2881 = (function (f){
return f;
});
var comp__2882 = (function (f,g){
return (function() {
var G__2886 = null;
var G__2886__2887 = (function (){
return f.call(null,g.call(null));
});
var G__2886__2888 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2886__2889 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2886__2890 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2886__2891 = (function() { 
var G__2893__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2893 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2893__delegate.call(this, x, y, z, args);
};
G__2893.cljs$lang$maxFixedArity = 3;
G__2893.cljs$lang$applyTo = (function (arglist__2894){
var x = cljs.core.first(arglist__2894);
var y = cljs.core.first(cljs.core.next(arglist__2894));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2894)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2894)));
return G__2893__delegate.call(this, x, y, z, args);
});
return G__2893;
})()
;
G__2886 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2886__2887.call(this);
case  1 :
return G__2886__2888.call(this,x);
case  2 :
return G__2886__2889.call(this,x,y);
case  3 :
return G__2886__2890.call(this,x,y,z);
default:
return G__2886__2891.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2886.cljs$lang$maxFixedArity = 3;
G__2886.cljs$lang$applyTo = G__2886__2891.cljs$lang$applyTo;
return G__2886;
})()
});
var comp__2883 = (function (f,g,h){
return (function() {
var G__2895 = null;
var G__2895__2896 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2895__2897 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2895__2898 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2895__2899 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2895__2900 = (function() { 
var G__2902__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2902 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2902__delegate.call(this, x, y, z, args);
};
G__2902.cljs$lang$maxFixedArity = 3;
G__2902.cljs$lang$applyTo = (function (arglist__2903){
var x = cljs.core.first(arglist__2903);
var y = cljs.core.first(cljs.core.next(arglist__2903));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2903)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2903)));
return G__2902__delegate.call(this, x, y, z, args);
});
return G__2902;
})()
;
G__2895 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2895__2896.call(this);
case  1 :
return G__2895__2897.call(this,x);
case  2 :
return G__2895__2898.call(this,x,y);
case  3 :
return G__2895__2899.call(this,x,y,z);
default:
return G__2895__2900.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2895.cljs$lang$maxFixedArity = 3;
G__2895.cljs$lang$applyTo = G__2895__2900.cljs$lang$applyTo;
return G__2895;
})()
});
var comp__2884 = (function() { 
var G__2904__delegate = function (f1,f2,f3,fs){
var fs__2877 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2905__delegate = function (args){
var ret__2878 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2877),args);
var fs__2879 = cljs.core.next.call(null,fs__2877);

while(true){
if(cljs.core.truth_(fs__2879))
{{
var G__2906 = cljs.core.first.call(null,fs__2879).call(null,ret__2878);
var G__2907 = cljs.core.next.call(null,fs__2879);
ret__2878 = G__2906;
fs__2879 = G__2907;
continue;
}
} else
{return ret__2878;
}
break;
}
};
var G__2905 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2905__delegate.call(this, args);
};
G__2905.cljs$lang$maxFixedArity = 0;
G__2905.cljs$lang$applyTo = (function (arglist__2908){
var args = cljs.core.seq( arglist__2908 );;
return G__2905__delegate.call(this, args);
});
return G__2905;
})()
;
};
var G__2904 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2904__delegate.call(this, f1, f2, f3, fs);
};
G__2904.cljs$lang$maxFixedArity = 3;
G__2904.cljs$lang$applyTo = (function (arglist__2909){
var f1 = cljs.core.first(arglist__2909);
var f2 = cljs.core.first(cljs.core.next(arglist__2909));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2909)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2909)));
return G__2904__delegate.call(this, f1, f2, f3, fs);
});
return G__2904;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2880.call(this);
case  1 :
return comp__2881.call(this,f1);
case  2 :
return comp__2882.call(this,f1,f2);
case  3 :
return comp__2883.call(this,f1,f2,f3);
default:
return comp__2884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2884.cljs$lang$applyTo;
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
var partial__2910 = (function (f,arg1){
return (function() { 
var G__2915__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2915 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2915__delegate.call(this, args);
};
G__2915.cljs$lang$maxFixedArity = 0;
G__2915.cljs$lang$applyTo = (function (arglist__2916){
var args = cljs.core.seq( arglist__2916 );;
return G__2915__delegate.call(this, args);
});
return G__2915;
})()
;
});
var partial__2911 = (function (f,arg1,arg2){
return (function() { 
var G__2917__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2917 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2917__delegate.call(this, args);
};
G__2917.cljs$lang$maxFixedArity = 0;
G__2917.cljs$lang$applyTo = (function (arglist__2918){
var args = cljs.core.seq( arglist__2918 );;
return G__2917__delegate.call(this, args);
});
return G__2917;
})()
;
});
var partial__2912 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2919__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2919 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2919__delegate.call(this, args);
};
G__2919.cljs$lang$maxFixedArity = 0;
G__2919.cljs$lang$applyTo = (function (arglist__2920){
var args = cljs.core.seq( arglist__2920 );;
return G__2919__delegate.call(this, args);
});
return G__2919;
})()
;
});
var partial__2913 = (function() { 
var G__2921__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2922__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2922 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2922__delegate.call(this, args);
};
G__2922.cljs$lang$maxFixedArity = 0;
G__2922.cljs$lang$applyTo = (function (arglist__2923){
var args = cljs.core.seq( arglist__2923 );;
return G__2922__delegate.call(this, args);
});
return G__2922;
})()
;
};
var G__2921 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2921__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2921.cljs$lang$maxFixedArity = 4;
G__2921.cljs$lang$applyTo = (function (arglist__2924){
var f = cljs.core.first(arglist__2924);
var arg1 = cljs.core.first(cljs.core.next(arglist__2924));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2924)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2924))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2924))));
return G__2921__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2921;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2910.call(this,f,arg1);
case  3 :
return partial__2911.call(this,f,arg1,arg2);
case  4 :
return partial__2912.call(this,f,arg1,arg2,arg3);
default:
return partial__2913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2913.cljs$lang$applyTo;
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
var fnil__2925 = (function (f,x){
return (function() {
var G__2929 = null;
var G__2929__2930 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2929__2931 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2929__2932 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2929__2933 = (function() { 
var G__2935__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2935 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2935__delegate.call(this, a, b, c, ds);
};
G__2935.cljs$lang$maxFixedArity = 3;
G__2935.cljs$lang$applyTo = (function (arglist__2936){
var a = cljs.core.first(arglist__2936);
var b = cljs.core.first(cljs.core.next(arglist__2936));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2936)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2936)));
return G__2935__delegate.call(this, a, b, c, ds);
});
return G__2935;
})()
;
G__2929 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2929__2930.call(this,a);
case  2 :
return G__2929__2931.call(this,a,b);
case  3 :
return G__2929__2932.call(this,a,b,c);
default:
return G__2929__2933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2929.cljs$lang$maxFixedArity = 3;
G__2929.cljs$lang$applyTo = G__2929__2933.cljs$lang$applyTo;
return G__2929;
})()
});
var fnil__2926 = (function (f,x,y){
return (function() {
var G__2937 = null;
var G__2937__2938 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2937__2939 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2937__2940 = (function() { 
var G__2942__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2942 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2942__delegate.call(this, a, b, c, ds);
};
G__2942.cljs$lang$maxFixedArity = 3;
G__2942.cljs$lang$applyTo = (function (arglist__2943){
var a = cljs.core.first(arglist__2943);
var b = cljs.core.first(cljs.core.next(arglist__2943));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2943)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2943)));
return G__2942__delegate.call(this, a, b, c, ds);
});
return G__2942;
})()
;
G__2937 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2937__2938.call(this,a,b);
case  3 :
return G__2937__2939.call(this,a,b,c);
default:
return G__2937__2940.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2937.cljs$lang$maxFixedArity = 3;
G__2937.cljs$lang$applyTo = G__2937__2940.cljs$lang$applyTo;
return G__2937;
})()
});
var fnil__2927 = (function (f,x,y,z){
return (function() {
var G__2944 = null;
var G__2944__2945 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2944__2946 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2944__2947 = (function() { 
var G__2949__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2949 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2949__delegate.call(this, a, b, c, ds);
};
G__2949.cljs$lang$maxFixedArity = 3;
G__2949.cljs$lang$applyTo = (function (arglist__2950){
var a = cljs.core.first(arglist__2950);
var b = cljs.core.first(cljs.core.next(arglist__2950));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2950)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2950)));
return G__2949__delegate.call(this, a, b, c, ds);
});
return G__2949;
})()
;
G__2944 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2944__2945.call(this,a,b);
case  3 :
return G__2944__2946.call(this,a,b,c);
default:
return G__2944__2947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2944.cljs$lang$maxFixedArity = 3;
G__2944.cljs$lang$applyTo = G__2944__2947.cljs$lang$applyTo;
return G__2944;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2925.call(this,f,x);
case  3 :
return fnil__2926.call(this,f,x,y);
case  4 :
return fnil__2927.call(this,f,x,y,z);
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
var mapi__2953 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2951 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2951))
{var s__2952 = temp__3698__auto____2951;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2952)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2952)));
} else
{return null;
}
})));
});

return mapi__2953.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2954))
{var s__2955 = temp__3698__auto____2954;

var x__2956 = f.call(null,cljs.core.first.call(null,s__2955));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2956)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2955));
} else
{return cljs.core.cons.call(null,x__2956,keep.call(null,f,cljs.core.rest.call(null,s__2955)));
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
var keepi__2966 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2963 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2963))
{var s__2964 = temp__3698__auto____2963;

var x__2965 = f.call(null,idx,cljs.core.first.call(null,s__2964));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2965)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2964));
} else
{return cljs.core.cons.call(null,x__2965,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2964)));
}
} else
{return null;
}
})));
});

return keepi__2966.call(null,0,coll);
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
var every_pred__3011 = (function (p){
return (function() {
var ep1 = null;
var ep1__3016 = (function (){
return true;
});
var ep1__3017 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3018 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2973 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2973))
{return p.call(null,y);
} else
{return and__3546__auto____2973;
}
})());
});
var ep1__3019 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2974 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2974))
{var and__3546__auto____2975 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____2975))
{return p.call(null,z);
} else
{return and__3546__auto____2975;
}
} else
{return and__3546__auto____2974;
}
})());
});
var ep1__3020 = (function() { 
var G__3022__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2976 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2976))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____2976;
}
})());
};
var G__3022 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3022__delegate.call(this, x, y, z, args);
};
G__3022.cljs$lang$maxFixedArity = 3;
G__3022.cljs$lang$applyTo = (function (arglist__3023){
var x = cljs.core.first(arglist__3023);
var y = cljs.core.first(cljs.core.next(arglist__3023));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3023)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3023)));
return G__3022__delegate.call(this, x, y, z, args);
});
return G__3022;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3016.call(this);
case  1 :
return ep1__3017.call(this,x);
case  2 :
return ep1__3018.call(this,x,y);
case  3 :
return ep1__3019.call(this,x,y,z);
default:
return ep1__3020.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3020.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3012 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3024 = (function (){
return true;
});
var ep2__3025 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2977 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2977))
{return p2.call(null,x);
} else
{return and__3546__auto____2977;
}
})());
});
var ep2__3026 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2978 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2978))
{var and__3546__auto____2979 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2979))
{var and__3546__auto____2980 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2980))
{return p2.call(null,y);
} else
{return and__3546__auto____2980;
}
} else
{return and__3546__auto____2979;
}
} else
{return and__3546__auto____2978;
}
})());
});
var ep2__3027 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2981 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2981))
{var and__3546__auto____2982 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2982))
{var and__3546__auto____2983 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2983))
{var and__3546__auto____2984 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2984))
{var and__3546__auto____2985 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2985))
{return p2.call(null,z);
} else
{return and__3546__auto____2985;
}
} else
{return and__3546__auto____2984;
}
} else
{return and__3546__auto____2983;
}
} else
{return and__3546__auto____2982;
}
} else
{return and__3546__auto____2981;
}
})());
});
var ep2__3028 = (function() { 
var G__3030__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2986 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2986))
{return cljs.core.every_QMARK_.call(null,(function (p1__2957_SHARP_){
var and__3546__auto____2987 = p1.call(null,p1__2957_SHARP_);

if(cljs.core.truth_(and__3546__auto____2987))
{return p2.call(null,p1__2957_SHARP_);
} else
{return and__3546__auto____2987;
}
}),args);
} else
{return and__3546__auto____2986;
}
})());
};
var G__3030 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3030__delegate.call(this, x, y, z, args);
};
G__3030.cljs$lang$maxFixedArity = 3;
G__3030.cljs$lang$applyTo = (function (arglist__3031){
var x = cljs.core.first(arglist__3031);
var y = cljs.core.first(cljs.core.next(arglist__3031));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3031)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3031)));
return G__3030__delegate.call(this, x, y, z, args);
});
return G__3030;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3024.call(this);
case  1 :
return ep2__3025.call(this,x);
case  2 :
return ep2__3026.call(this,x,y);
case  3 :
return ep2__3027.call(this,x,y,z);
default:
return ep2__3028.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3028.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3013 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3032 = (function (){
return true;
});
var ep3__3033 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2988 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2988))
{var and__3546__auto____2989 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2989))
{return p3.call(null,x);
} else
{return and__3546__auto____2989;
}
} else
{return and__3546__auto____2988;
}
})());
});
var ep3__3034 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2990 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2990))
{var and__3546__auto____2991 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2991))
{var and__3546__auto____2992 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2992))
{var and__3546__auto____2993 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2993))
{var and__3546__auto____2994 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2994))
{return p3.call(null,y);
} else
{return and__3546__auto____2994;
}
} else
{return and__3546__auto____2993;
}
} else
{return and__3546__auto____2992;
}
} else
{return and__3546__auto____2991;
}
} else
{return and__3546__auto____2990;
}
})());
});
var ep3__3035 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2995 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2995))
{var and__3546__auto____2996 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2996))
{var and__3546__auto____2997 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2997))
{var and__3546__auto____2998 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2998))
{var and__3546__auto____2999 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2999))
{var and__3546__auto____3000 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3000))
{var and__3546__auto____3001 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3001))
{var and__3546__auto____3002 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3002))
{return p3.call(null,z);
} else
{return and__3546__auto____3002;
}
} else
{return and__3546__auto____3001;
}
} else
{return and__3546__auto____3000;
}
} else
{return and__3546__auto____2999;
}
} else
{return and__3546__auto____2998;
}
} else
{return and__3546__auto____2997;
}
} else
{return and__3546__auto____2996;
}
} else
{return and__3546__auto____2995;
}
})());
});
var ep3__3036 = (function() { 
var G__3038__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3003 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3003))
{return cljs.core.every_QMARK_.call(null,(function (p1__2958_SHARP_){
var and__3546__auto____3004 = p1.call(null,p1__2958_SHARP_);

if(cljs.core.truth_(and__3546__auto____3004))
{var and__3546__auto____3005 = p2.call(null,p1__2958_SHARP_);

if(cljs.core.truth_(and__3546__auto____3005))
{return p3.call(null,p1__2958_SHARP_);
} else
{return and__3546__auto____3005;
}
} else
{return and__3546__auto____3004;
}
}),args);
} else
{return and__3546__auto____3003;
}
})());
};
var G__3038 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3038__delegate.call(this, x, y, z, args);
};
G__3038.cljs$lang$maxFixedArity = 3;
G__3038.cljs$lang$applyTo = (function (arglist__3039){
var x = cljs.core.first(arglist__3039);
var y = cljs.core.first(cljs.core.next(arglist__3039));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3039)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3039)));
return G__3038__delegate.call(this, x, y, z, args);
});
return G__3038;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3032.call(this);
case  1 :
return ep3__3033.call(this,x);
case  2 :
return ep3__3034.call(this,x,y);
case  3 :
return ep3__3035.call(this,x,y,z);
default:
return ep3__3036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3036.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3014 = (function() { 
var G__3040__delegate = function (p1,p2,p3,ps){
var ps__3006 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3041 = (function (){
return true;
});
var epn__3042 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2959_SHARP_){
return p1__2959_SHARP_.call(null,x);
}),ps__3006);
});
var epn__3043 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2960_SHARP_){
var and__3546__auto____3007 = p1__2960_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3007))
{return p1__2960_SHARP_.call(null,y);
} else
{return and__3546__auto____3007;
}
}),ps__3006);
});
var epn__3044 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2961_SHARP_){
var and__3546__auto____3008 = p1__2961_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3008))
{var and__3546__auto____3009 = p1__2961_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3009))
{return p1__2961_SHARP_.call(null,z);
} else
{return and__3546__auto____3009;
}
} else
{return and__3546__auto____3008;
}
}),ps__3006);
});
var epn__3045 = (function() { 
var G__3047__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3010 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3010))
{return cljs.core.every_QMARK_.call(null,(function (p1__2962_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2962_SHARP_,args);
}),ps__3006);
} else
{return and__3546__auto____3010;
}
})());
};
var G__3047 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3047__delegate.call(this, x, y, z, args);
};
G__3047.cljs$lang$maxFixedArity = 3;
G__3047.cljs$lang$applyTo = (function (arglist__3048){
var x = cljs.core.first(arglist__3048);
var y = cljs.core.first(cljs.core.next(arglist__3048));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3048)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3048)));
return G__3047__delegate.call(this, x, y, z, args);
});
return G__3047;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3041.call(this);
case  1 :
return epn__3042.call(this,x);
case  2 :
return epn__3043.call(this,x,y);
case  3 :
return epn__3044.call(this,x,y,z);
default:
return epn__3045.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3045.cljs$lang$applyTo;
return epn;
})()
};
var G__3040 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3040__delegate.call(this, p1, p2, p3, ps);
};
G__3040.cljs$lang$maxFixedArity = 3;
G__3040.cljs$lang$applyTo = (function (arglist__3049){
var p1 = cljs.core.first(arglist__3049);
var p2 = cljs.core.first(cljs.core.next(arglist__3049));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3049)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3049)));
return G__3040__delegate.call(this, p1, p2, p3, ps);
});
return G__3040;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3011.call(this,p1);
case  2 :
return every_pred__3012.call(this,p1,p2);
case  3 :
return every_pred__3013.call(this,p1,p2,p3);
default:
return every_pred__3014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3014.cljs$lang$applyTo;
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
var some_fn__3089 = (function (p){
return (function() {
var sp1 = null;
var sp1__3094 = (function (){
return null;
});
var sp1__3095 = (function (x){
return p.call(null,x);
});
var sp1__3096 = (function (x,y){
var or__3548__auto____3051 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3051))
{return or__3548__auto____3051;
} else
{return p.call(null,y);
}
});
var sp1__3097 = (function (x,y,z){
var or__3548__auto____3052 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3052))
{return or__3548__auto____3052;
} else
{var or__3548__auto____3053 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3053))
{return or__3548__auto____3053;
} else
{return p.call(null,z);
}
}
});
var sp1__3098 = (function() { 
var G__3100__delegate = function (x,y,z,args){
var or__3548__auto____3054 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3054))
{return or__3548__auto____3054;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3100 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3100__delegate.call(this, x, y, z, args);
};
G__3100.cljs$lang$maxFixedArity = 3;
G__3100.cljs$lang$applyTo = (function (arglist__3101){
var x = cljs.core.first(arglist__3101);
var y = cljs.core.first(cljs.core.next(arglist__3101));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3101)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3101)));
return G__3100__delegate.call(this, x, y, z, args);
});
return G__3100;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3094.call(this);
case  1 :
return sp1__3095.call(this,x);
case  2 :
return sp1__3096.call(this,x,y);
case  3 :
return sp1__3097.call(this,x,y,z);
default:
return sp1__3098.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3098.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3090 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3102 = (function (){
return null;
});
var sp2__3103 = (function (x){
var or__3548__auto____3055 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3055))
{return or__3548__auto____3055;
} else
{return p2.call(null,x);
}
});
var sp2__3104 = (function (x,y){
var or__3548__auto____3056 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3056))
{return or__3548__auto____3056;
} else
{var or__3548__auto____3057 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3057))
{return or__3548__auto____3057;
} else
{var or__3548__auto____3058 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3058))
{return or__3548__auto____3058;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3105 = (function (x,y,z){
var or__3548__auto____3059 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3059))
{return or__3548__auto____3059;
} else
{var or__3548__auto____3060 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3060))
{return or__3548__auto____3060;
} else
{var or__3548__auto____3061 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3061))
{return or__3548__auto____3061;
} else
{var or__3548__auto____3062 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3062))
{return or__3548__auto____3062;
} else
{var or__3548__auto____3063 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3063))
{return or__3548__auto____3063;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3106 = (function() { 
var G__3108__delegate = function (x,y,z,args){
var or__3548__auto____3064 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3064))
{return or__3548__auto____3064;
} else
{return cljs.core.some.call(null,(function (p1__2967_SHARP_){
var or__3548__auto____3065 = p1.call(null,p1__2967_SHARP_);

if(cljs.core.truth_(or__3548__auto____3065))
{return or__3548__auto____3065;
} else
{return p2.call(null,p1__2967_SHARP_);
}
}),args);
}
};
var G__3108 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3108__delegate.call(this, x, y, z, args);
};
G__3108.cljs$lang$maxFixedArity = 3;
G__3108.cljs$lang$applyTo = (function (arglist__3109){
var x = cljs.core.first(arglist__3109);
var y = cljs.core.first(cljs.core.next(arglist__3109));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3109)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3109)));
return G__3108__delegate.call(this, x, y, z, args);
});
return G__3108;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3102.call(this);
case  1 :
return sp2__3103.call(this,x);
case  2 :
return sp2__3104.call(this,x,y);
case  3 :
return sp2__3105.call(this,x,y,z);
default:
return sp2__3106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3106.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3091 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3110 = (function (){
return null;
});
var sp3__3111 = (function (x){
var or__3548__auto____3066 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3066))
{return or__3548__auto____3066;
} else
{var or__3548__auto____3067 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3067))
{return or__3548__auto____3067;
} else
{return p3.call(null,x);
}
}
});
var sp3__3112 = (function (x,y){
var or__3548__auto____3068 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3068))
{return or__3548__auto____3068;
} else
{var or__3548__auto____3069 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3069))
{return or__3548__auto____3069;
} else
{var or__3548__auto____3070 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3070))
{return or__3548__auto____3070;
} else
{var or__3548__auto____3071 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3071))
{return or__3548__auto____3071;
} else
{var or__3548__auto____3072 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3072))
{return or__3548__auto____3072;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3113 = (function (x,y,z){
var or__3548__auto____3073 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3073))
{return or__3548__auto____3073;
} else
{var or__3548__auto____3074 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3074))
{return or__3548__auto____3074;
} else
{var or__3548__auto____3075 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3075))
{return or__3548__auto____3075;
} else
{var or__3548__auto____3076 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3076))
{return or__3548__auto____3076;
} else
{var or__3548__auto____3077 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3077))
{return or__3548__auto____3077;
} else
{var or__3548__auto____3078 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3078))
{return or__3548__auto____3078;
} else
{var or__3548__auto____3079 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3079))
{return or__3548__auto____3079;
} else
{var or__3548__auto____3080 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3080))
{return or__3548__auto____3080;
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
var sp3__3114 = (function() { 
var G__3116__delegate = function (x,y,z,args){
var or__3548__auto____3081 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3081))
{return or__3548__auto____3081;
} else
{return cljs.core.some.call(null,(function (p1__2968_SHARP_){
var or__3548__auto____3082 = p1.call(null,p1__2968_SHARP_);

if(cljs.core.truth_(or__3548__auto____3082))
{return or__3548__auto____3082;
} else
{var or__3548__auto____3083 = p2.call(null,p1__2968_SHARP_);

if(cljs.core.truth_(or__3548__auto____3083))
{return or__3548__auto____3083;
} else
{return p3.call(null,p1__2968_SHARP_);
}
}
}),args);
}
};
var G__3116 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3116__delegate.call(this, x, y, z, args);
};
G__3116.cljs$lang$maxFixedArity = 3;
G__3116.cljs$lang$applyTo = (function (arglist__3117){
var x = cljs.core.first(arglist__3117);
var y = cljs.core.first(cljs.core.next(arglist__3117));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3117)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3117)));
return G__3116__delegate.call(this, x, y, z, args);
});
return G__3116;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3110.call(this);
case  1 :
return sp3__3111.call(this,x);
case  2 :
return sp3__3112.call(this,x,y);
case  3 :
return sp3__3113.call(this,x,y,z);
default:
return sp3__3114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3114.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3092 = (function() { 
var G__3118__delegate = function (p1,p2,p3,ps){
var ps__3084 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3119 = (function (){
return null;
});
var spn__3120 = (function (x){
return cljs.core.some.call(null,(function (p1__2969_SHARP_){
return p1__2969_SHARP_.call(null,x);
}),ps__3084);
});
var spn__3121 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2970_SHARP_){
var or__3548__auto____3085 = p1__2970_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3085))
{return or__3548__auto____3085;
} else
{return p1__2970_SHARP_.call(null,y);
}
}),ps__3084);
});
var spn__3122 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2971_SHARP_){
var or__3548__auto____3086 = p1__2971_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3086))
{return or__3548__auto____3086;
} else
{var or__3548__auto____3087 = p1__2971_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3087))
{return or__3548__auto____3087;
} else
{return p1__2971_SHARP_.call(null,z);
}
}
}),ps__3084);
});
var spn__3123 = (function() { 
var G__3125__delegate = function (x,y,z,args){
var or__3548__auto____3088 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3088))
{return or__3548__auto____3088;
} else
{return cljs.core.some.call(null,(function (p1__2972_SHARP_){
return cljs.core.some.call(null,p1__2972_SHARP_,args);
}),ps__3084);
}
};
var G__3125 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3125__delegate.call(this, x, y, z, args);
};
G__3125.cljs$lang$maxFixedArity = 3;
G__3125.cljs$lang$applyTo = (function (arglist__3126){
var x = cljs.core.first(arglist__3126);
var y = cljs.core.first(cljs.core.next(arglist__3126));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3126)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3126)));
return G__3125__delegate.call(this, x, y, z, args);
});
return G__3125;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3119.call(this);
case  1 :
return spn__3120.call(this,x);
case  2 :
return spn__3121.call(this,x,y);
case  3 :
return spn__3122.call(this,x,y,z);
default:
return spn__3123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3123.cljs$lang$applyTo;
return spn;
})()
};
var G__3118 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3118__delegate.call(this, p1, p2, p3, ps);
};
G__3118.cljs$lang$maxFixedArity = 3;
G__3118.cljs$lang$applyTo = (function (arglist__3127){
var p1 = cljs.core.first(arglist__3127);
var p2 = cljs.core.first(cljs.core.next(arglist__3127));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3127)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3127)));
return G__3118__delegate.call(this, p1, p2, p3, ps);
});
return G__3118;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3089.call(this,p1);
case  2 :
return some_fn__3090.call(this,p1,p2);
case  3 :
return some_fn__3091.call(this,p1,p2,p3);
default:
return some_fn__3092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3092.cljs$lang$applyTo;
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
var map__3140 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3128 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3128))
{var s__3129 = temp__3698__auto____3128;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3129)),map.call(null,f,cljs.core.rest.call(null,s__3129)));
} else
{return null;
}
})));
});
var map__3141 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3130 = cljs.core.seq.call(null,c1);
var s2__3131 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3132 = s1__3130;

if(cljs.core.truth_(and__3546__auto____3132))
{return s2__3131;
} else
{return and__3546__auto____3132;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3130),cljs.core.first.call(null,s2__3131)),map.call(null,f,cljs.core.rest.call(null,s1__3130),cljs.core.rest.call(null,s2__3131)));
} else
{return null;
}
})));
});
var map__3142 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3133 = cljs.core.seq.call(null,c1);
var s2__3134 = cljs.core.seq.call(null,c2);
var s3__3135 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3136 = s1__3133;

if(cljs.core.truth_(and__3546__auto____3136))
{var and__3546__auto____3137 = s2__3134;

if(cljs.core.truth_(and__3546__auto____3137))
{return s3__3135;
} else
{return and__3546__auto____3137;
}
} else
{return and__3546__auto____3136;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3133),cljs.core.first.call(null,s2__3134),cljs.core.first.call(null,s3__3135)),map.call(null,f,cljs.core.rest.call(null,s1__3133),cljs.core.rest.call(null,s2__3134),cljs.core.rest.call(null,s3__3135)));
} else
{return null;
}
})));
});
var map__3143 = (function() { 
var G__3145__delegate = function (f,c1,c2,c3,colls){
var step__3139 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3138 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3138)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3138),step.call(null,map.call(null,cljs.core.rest,ss__3138)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3050_SHARP_){
return cljs.core.apply.call(null,f,p1__3050_SHARP_);
}),step__3139.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3145 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3145__delegate.call(this, f, c1, c2, c3, colls);
};
G__3145.cljs$lang$maxFixedArity = 4;
G__3145.cljs$lang$applyTo = (function (arglist__3146){
var f = cljs.core.first(arglist__3146);
var c1 = cljs.core.first(cljs.core.next(arglist__3146));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3146)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3146))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3146))));
return G__3145__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3145;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3140.call(this,f,c1);
case  3 :
return map__3141.call(this,f,c1,c2);
case  4 :
return map__3142.call(this,f,c1,c2,c3);
default:
return map__3143.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3143.cljs$lang$applyTo;
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
{var temp__3698__auto____3147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3147))
{var s__3148 = temp__3698__auto____3147;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3148),take.call(null,(n - 1),cljs.core.rest.call(null,s__3148)));
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
var step__3151 = (function (n,coll){
while(true){
var s__3149 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3150 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3150))
{return s__3149;
} else
{return and__3546__auto____3150;
}
})()))
{{
var G__3152 = (n - 1);
var G__3153 = cljs.core.rest.call(null,s__3149);
n = G__3152;
coll = G__3153;
continue;
}
} else
{return s__3149;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3151.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3154 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3155 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3154.call(this,n);
case  2 :
return drop_last__3155.call(this,n,s);
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
var s__3157 = cljs.core.seq.call(null,coll);
var lead__3158 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3158))
{{
var G__3159 = cljs.core.next.call(null,s__3157);
var G__3160 = cljs.core.next.call(null,lead__3158);
s__3157 = G__3159;
lead__3158 = G__3160;
continue;
}
} else
{return s__3157;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3163 = (function (pred,coll){
while(true){
var s__3161 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3162 = s__3161;

if(cljs.core.truth_(and__3546__auto____3162))
{return pred.call(null,cljs.core.first.call(null,s__3161));
} else
{return and__3546__auto____3162;
}
})()))
{{
var G__3164 = pred;
var G__3165 = cljs.core.rest.call(null,s__3161);
pred = G__3164;
coll = G__3165;
continue;
}
} else
{return s__3161;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3163.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3166 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3166))
{var s__3167 = temp__3698__auto____3166;

return cljs.core.concat.call(null,s__3167,cycle.call(null,s__3167));
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
var repeat__3168 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3169 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3168.call(this,n);
case  2 :
return repeat__3169.call(this,n,x);
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
var repeatedly__3171 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3172 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3171.call(this,n);
case  2 :
return repeatedly__3172.call(this,n,f);
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
var interleave__3178 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3174 = cljs.core.seq.call(null,c1);
var s2__3175 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3176 = s1__3174;

if(cljs.core.truth_(and__3546__auto____3176))
{return s2__3175;
} else
{return and__3546__auto____3176;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3174),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3175),interleave.call(null,cljs.core.rest.call(null,s1__3174),cljs.core.rest.call(null,s2__3175))));
} else
{return null;
}
})));
});
var interleave__3179 = (function() { 
var G__3181__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3177 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3177)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3177),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3177)));
} else
{return null;
}
})));
};
var G__3181 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3181__delegate.call(this, c1, c2, colls);
};
G__3181.cljs$lang$maxFixedArity = 2;
G__3181.cljs$lang$applyTo = (function (arglist__3182){
var c1 = cljs.core.first(arglist__3182);
var c2 = cljs.core.first(cljs.core.next(arglist__3182));
var colls = cljs.core.rest(cljs.core.next(arglist__3182));
return G__3181__delegate.call(this, c1, c2, colls);
});
return G__3181;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3178.call(this,c1,c2);
default:
return interleave__3179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3179.cljs$lang$applyTo;
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
var cat__3185 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3183 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3183))
{var coll__3184 = temp__3695__auto____3183;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3184),cat.call(null,cljs.core.rest.call(null,coll__3184),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3185.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3186 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3187 = (function() { 
var G__3189__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3189 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3189__delegate.call(this, f, coll, colls);
};
G__3189.cljs$lang$maxFixedArity = 2;
G__3189.cljs$lang$applyTo = (function (arglist__3190){
var f = cljs.core.first(arglist__3190);
var coll = cljs.core.first(cljs.core.next(arglist__3190));
var colls = cljs.core.rest(cljs.core.next(arglist__3190));
return G__3189__delegate.call(this, f, coll, colls);
});
return G__3189;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3186.call(this,f,coll);
default:
return mapcat__3187.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3187.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3191 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3191))
{var s__3192 = temp__3698__auto____3191;

var f__3193 = cljs.core.first.call(null,s__3192);
var r__3194 = cljs.core.rest.call(null,s__3192);

if(cljs.core.truth_(pred.call(null,f__3193)))
{return cljs.core.cons.call(null,f__3193,filter.call(null,pred,r__3194));
} else
{return filter.call(null,pred,r__3194);
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
var walk__3196 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3196.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3195_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3195_SHARP_));
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
var partition__3203 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3204 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3197 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3197))
{var s__3198 = temp__3698__auto____3197;

var p__3199 = cljs.core.take.call(null,n,s__3198);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3199))))
{return cljs.core.cons.call(null,p__3199,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3198)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3205 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3200 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3200))
{var s__3201 = temp__3698__auto____3200;

var p__3202 = cljs.core.take.call(null,n,s__3201);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3202))))
{return cljs.core.cons.call(null,p__3202,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3201)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3202,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3203.call(this,n,step);
case  3 :
return partition__3204.call(this,n,step,pad);
case  4 :
return partition__3205.call(this,n,step,pad,coll);
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
var get_in__3211 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3212 = (function (m,ks,not_found){
var sentinel__3207 = cljs.core.lookup_sentinel;
var m__3208 = m;
var ks__3209 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3209))
{var m__3210 = cljs.core.get.call(null,m__3208,cljs.core.first.call(null,ks__3209),sentinel__3207);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3207,m__3210)))
{return not_found;
} else
{{
var G__3214 = sentinel__3207;
var G__3215 = m__3210;
var G__3216 = cljs.core.next.call(null,ks__3209);
sentinel__3207 = G__3214;
m__3208 = G__3215;
ks__3209 = G__3216;
continue;
}
}
} else
{return m__3208;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3211.call(this,m,ks);
case  3 :
return get_in__3212.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3217,v){
var vec__3218__3219 = p__3217;
var k__3220 = cljs.core.nth.call(null,vec__3218__3219,0,null);
var ks__3221 = cljs.core.nthnext.call(null,vec__3218__3219,1);

if(cljs.core.truth_(ks__3221))
{return cljs.core.assoc.call(null,m,k__3220,assoc_in.call(null,cljs.core.get.call(null,m,k__3220),ks__3221,v));
} else
{return cljs.core.assoc.call(null,m,k__3220,v);
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
var update_in__delegate = function (m,p__3222,f,args){
var vec__3223__3224 = p__3222;
var k__3225 = cljs.core.nth.call(null,vec__3223__3224,0,null);
var ks__3226 = cljs.core.nthnext.call(null,vec__3223__3224,1);

if(cljs.core.truth_(ks__3226))
{return cljs.core.assoc.call(null,m,k__3225,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3225),ks__3226,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3225,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3225),args));
}
};
var update_in = function (m,p__3222,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3222, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3227){
var m = cljs.core.first(arglist__3227);
var p__3222 = cljs.core.first(cljs.core.next(arglist__3227));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3227)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3227)));
return update_in__delegate.call(this, m, p__3222, f, args);
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
var this__3228 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3229 = this;
var new_array__3230 = cljs.core.aclone.call(null,this__3229.array);

new_array__3230.push(o);
return (new cljs.core.Vector(this__3229.meta,new_array__3230));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3231 = this;
if(cljs.core.truth_((this__3231.array.length > 0)))
{var vector_seq__3232 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3231.array.length)))
{return cljs.core.cons.call(null,(this__3231.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3232.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3233 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3234 = this;
var count__3235 = this__3234.array.length;

if(cljs.core.truth_((count__3235 > 0)))
{return (this__3234.array[(count__3235 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3236 = this;
if(cljs.core.truth_((this__3236.array.length > 0)))
{var new_array__3237 = cljs.core.aclone.call(null,this__3236.array);

new_array__3237.pop();
return (new cljs.core.Vector(this__3236.meta,new_array__3237));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3238 = this;
return (new cljs.core.Vector(meta,this__3238.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3239 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3239.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3253 = null;
var G__3253__3254 = (function (coll,n){
var this__3240 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3241 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3241))
{return (n < this__3240.array.length);
} else
{return and__3546__auto____3241;
}
})()))
{return (this__3240.array[n]);
} else
{return null;
}
});
var G__3253__3255 = (function (coll,n,not_found){
var this__3242 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3243 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3243))
{return (n < this__3242.array.length);
} else
{return and__3546__auto____3243;
}
})()))
{return (this__3242.array[n]);
} else
{return not_found;
}
});
G__3253 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3253__3254.call(this,coll,n);
case  3 :
return G__3253__3255.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3253;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3244 = this;
return this__3244.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3257 = null;
var G__3257__3258 = (function (v,f){
var this__3245 = this;
return cljs.core.ci_reduce.call(null,this__3245.array,f);
});
var G__3257__3259 = (function (v,f,start){
var this__3246 = this;
return cljs.core.ci_reduce.call(null,this__3246.array,f,start);
});
G__3257 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3257__3258.call(this,v,f);
case  3 :
return G__3257__3259.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3257;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3247 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3248 = this;
return this__3248.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3249 = this;
var new_array__3250 = cljs.core.aclone.call(null,this__3249.array);

(new_array__3250[k] = v);
return (new cljs.core.Vector(this__3249.meta,new_array__3250));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3261 = null;
var G__3261__3262 = (function (coll,k){
var this__3251 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3261__3263 = (function (coll,k,not_found){
var this__3252 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3261 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3261__3262.call(this,coll,k);
case  3 :
return G__3261__3263.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3261;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3265 = null;
var G__3265__3266 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3265__3267 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3265 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3265__3266.call(this,_,k);
case  3 :
return G__3265__3267.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3265;
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
vector.cljs$lang$applyTo = (function (arglist__3269){
var args = cljs.core.seq( arglist__3269 );;
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
var this__3270 = this;
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
var len__3271 = array.length;

var i__3272 = 0;

while(true){
if(cljs.core.truth_((i__3272 < len__3271)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3272]))))
{return i__3272;
} else
{{
var G__3273 = (i__3272 + incr);
i__3272 = G__3273;
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
var obj_map_contains_key_QMARK___3275 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3276 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3274 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3274))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3274;
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
return obj_map_contains_key_QMARK___3275.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3276.call(this,k,strobj,true_val,false_val);
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
var this__3279 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3280 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3281 = this;
if(cljs.core.truth_((this__3281.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3278_SHARP_){
return cljs.core.vector.call(null,p1__3278_SHARP_,(this__3281.strobj[p1__3278_SHARP_]));
}),this__3281.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3282 = this;
return (new cljs.core.ObjMap(meta,this__3282.keys,this__3282.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3283 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3284 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3284))
{return this__3283.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3284;
}
})()))
{var new_keys__3285 = cljs.core.aclone.call(null,this__3283.keys);
var new_strobj__3286 = goog.object.clone.call(null,this__3283.strobj);

new_keys__3285.splice(cljs.core.scan_array.call(null,1,k,new_keys__3285),1);
cljs.core.js_delete.call(null,new_strobj__3286,k);
return (new cljs.core.ObjMap(this__3283.meta,new_keys__3285,new_strobj__3286));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3287 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3287.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3288 = this;
return this__3288.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3289 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3290 = this;
return this__3290.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3291 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3292 = goog.object.clone.call(null,this__3291.strobj);
var overwrite_QMARK___3293 = new_strobj__3292.hasOwnProperty(k);

(new_strobj__3292[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3293))
{return (new cljs.core.ObjMap(this__3291.meta,this__3291.keys,new_strobj__3292));
} else
{var new_keys__3294 = cljs.core.aclone.call(null,this__3291.keys);

new_keys__3294.push(k);
return (new cljs.core.ObjMap(this__3291.meta,new_keys__3294,new_strobj__3292));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3291.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3295 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3295.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3298 = null;
var G__3298__3299 = (function (coll,k){
var this__3296 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3298__3300 = (function (coll,k,not_found){
var this__3297 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3297.strobj,(this__3297.strobj[k]),not_found);
});
G__3298 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3298__3299.call(this,coll,k);
case  3 :
return G__3298__3300.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3298;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3303 = null;
var G__3303__3304 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3303__3305 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3303 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3303__3304.call(this,_,k);
case  3 :
return G__3303__3305.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3303;
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
var this__3307 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3308 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3309 = this;
if(cljs.core.truth_((this__3309.count > 0)))
{var hashes__3310 = cljs.core.js_keys.call(null,this__3309.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3302_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3309.hashobj[p1__3302_SHARP_])));
}),hashes__3310);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3311 = this;
return (new cljs.core.HashMap(meta,this__3311.count,this__3311.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3312 = this;
var h__3313 = cljs.core.hash.call(null,k);
var bucket__3314 = (this__3312.hashobj[h__3313]);
var i__3315 = (cljs.core.truth_(bucket__3314)?cljs.core.scan_array.call(null,2,k,bucket__3314):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3315)))
{return coll;
} else
{var new_hashobj__3316 = goog.object.clone.call(null,this__3312.hashobj);

if(cljs.core.truth_((3 > bucket__3314.length)))
{cljs.core.js_delete.call(null,new_hashobj__3316,h__3313);
} else
{var new_bucket__3317 = cljs.core.aclone.call(null,bucket__3314);

new_bucket__3317.splice(i__3315,2);
(new_hashobj__3316[h__3313] = new_bucket__3317);
}
return (new cljs.core.HashMap(this__3312.meta,(this__3312.count - 1),new_hashobj__3316));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3318 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3318.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3319 = this;
return this__3319.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3320 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3321 = this;
return this__3321.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3322 = this;
var h__3323 = cljs.core.hash.call(null,k);
var bucket__3324 = (this__3322.hashobj[h__3323]);

if(cljs.core.truth_(bucket__3324))
{var new_bucket__3325 = cljs.core.aclone.call(null,bucket__3324);
var new_hashobj__3326 = goog.object.clone.call(null,this__3322.hashobj);

(new_hashobj__3326[h__3323] = new_bucket__3325);
var temp__3695__auto____3327 = cljs.core.scan_array.call(null,2,k,new_bucket__3325);

if(cljs.core.truth_(temp__3695__auto____3327))
{var i__3328 = temp__3695__auto____3327;

(new_bucket__3325[(i__3328 + 1)] = v);
return (new cljs.core.HashMap(this__3322.meta,this__3322.count,new_hashobj__3326));
} else
{new_bucket__3325.push(k,v);
return (new cljs.core.HashMap(this__3322.meta,(this__3322.count + 1),new_hashobj__3326));
}
} else
{var new_hashobj__3329 = goog.object.clone.call(null,this__3322.hashobj);

(new_hashobj__3329[h__3323] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3322.meta,(this__3322.count + 1),new_hashobj__3329));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3330 = this;
var bucket__3331 = (this__3330.hashobj[cljs.core.hash.call(null,k)]);
var i__3332 = (cljs.core.truth_(bucket__3331)?cljs.core.scan_array.call(null,2,k,bucket__3331):null);

if(cljs.core.truth_(i__3332))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3337 = null;
var G__3337__3338 = (function (coll,k){
var this__3333 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3337__3339 = (function (coll,k,not_found){
var this__3334 = this;
var bucket__3335 = (this__3334.hashobj[cljs.core.hash.call(null,k)]);
var i__3336 = (cljs.core.truth_(bucket__3335)?cljs.core.scan_array.call(null,2,k,bucket__3335):null);

if(cljs.core.truth_(i__3336))
{return (bucket__3335[(i__3336 + 1)]);
} else
{return not_found;
}
});
G__3337 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3337__3338.call(this,coll,k);
case  3 :
return G__3337__3339.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3337;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3341 = ks.length;

var i__3342 = 0;
var out__3343 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3342 < len__3341)))
{{
var G__3344 = (i__3342 + 1);
var G__3345 = cljs.core.assoc.call(null,out__3343,(ks[i__3342]),(vs[i__3342]));
i__3342 = G__3344;
out__3343 = G__3345;
continue;
}
} else
{return out__3343;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3346 = null;
var G__3346__3347 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3346__3348 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3346 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3346__3347.call(this,_,k);
case  3 :
return G__3346__3348.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3346;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3350 = cljs.core.seq.call(null,keyvals);
var out__3351 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3350))
{{
var G__3352 = cljs.core.nnext.call(null,in$__3350);
var G__3353 = cljs.core.assoc.call(null,out__3351,cljs.core.first.call(null,in$__3350),cljs.core.second.call(null,in$__3350));
in$__3350 = G__3352;
out__3351 = G__3353;
continue;
}
} else
{return out__3351;
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
hash_map.cljs$lang$applyTo = (function (arglist__3354){
var keyvals = cljs.core.seq( arglist__3354 );;
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
{return cljs.core.reduce.call(null,(function (p1__3355_SHARP_,p2__3356_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3357 = p1__3355_SHARP_;

if(cljs.core.truth_(or__3548__auto____3357))
{return or__3548__auto____3357;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3356_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3358){
var maps = cljs.core.seq( arglist__3358 );;
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
{var merge_entry__3361 = (function (m,e){
var k__3359 = cljs.core.first.call(null,e);
var v__3360 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3359)))
{return cljs.core.assoc.call(null,m,k__3359,f.call(null,cljs.core.get.call(null,m,k__3359),v__3360));
} else
{return cljs.core.assoc.call(null,m,k__3359,v__3360);
}
});
var merge2__3363 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3361,(function (){var or__3548__auto____3362 = m1;

if(cljs.core.truth_(or__3548__auto____3362))
{return or__3548__auto____3362;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3363,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3364){
var f = cljs.core.first(arglist__3364);
var maps = cljs.core.rest(arglist__3364);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3366 = cljs.core.ObjMap.fromObject([],{});
var keys__3367 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3367))
{var key__3368 = cljs.core.first.call(null,keys__3367);
var entry__3369 = cljs.core.get.call(null,map,key__3368);

{
var G__3370 = (cljs.core.truth_(entry__3369)?cljs.core.assoc.call(null,ret__3366,key__3368,entry__3369):ret__3366);
var G__3371 = cljs.core.next.call(null,keys__3367);
ret__3366 = G__3370;
keys__3367 = G__3371;
continue;
}
} else
{return ret__3366;
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
var this__3372 = this;
return (new cljs.core.Set(this__3372.meta,cljs.core.dissoc.call(null,this__3372.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3373 = this;
var and__3546__auto____3374 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3374))
{var and__3546__auto____3375 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3375))
{return cljs.core.every_QMARK_.call(null,(function (p1__3365_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3365_SHARP_);
}),other);
} else
{return and__3546__auto____3375;
}
} else
{return and__3546__auto____3374;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3376 = this;
return (new cljs.core.Set(this__3376.meta,cljs.core.assoc.call(null,this__3376.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3377 = this;
return cljs.core.keys.call(null,this__3377.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3378 = this;
return (new cljs.core.Set(meta,this__3378.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3379 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3379.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3380 = this;
return this__3380.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3381 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3382 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3385 = null;
var G__3385__3386 = (function (coll,v){
var this__3383 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3385__3387 = (function (coll,v,not_found){
var this__3384 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3384.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3385 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3385__3386.call(this,coll,v);
case  3 :
return G__3385__3387.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3385;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3389 = null;
var G__3389__3390 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3389__3391 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3389 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3389__3390.call(this,_,k);
case  3 :
return G__3389__3391.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3389;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3394 = cljs.core.seq.call(null,coll);
var out__3395 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3394))))
{{
var G__3396 = cljs.core.rest.call(null,in$__3394);
var G__3397 = cljs.core.conj.call(null,out__3395,cljs.core.first.call(null,in$__3394));
in$__3394 = G__3396;
out__3395 = G__3397;
continue;
}
} else
{return out__3395;
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
{var n__3398 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3399 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3399))
{var e__3400 = temp__3695__auto____3399;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3400));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3398,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3393_SHARP_){
var temp__3695__auto____3401 = cljs.core.find.call(null,smap,p1__3393_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3401))
{var e__3402 = temp__3695__auto____3401;

return cljs.core.second.call(null,e__3402);
} else
{return p1__3393_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3410 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3403,seen){
while(true){
var vec__3404__3405 = p__3403;
var f__3406 = cljs.core.nth.call(null,vec__3404__3405,0,null);
var xs__3407 = vec__3404__3405;

var temp__3698__auto____3408 = cljs.core.seq.call(null,xs__3407);

if(cljs.core.truth_(temp__3698__auto____3408))
{var s__3409 = temp__3698__auto____3408;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3406)))
{{
var G__3411 = cljs.core.rest.call(null,s__3409);
var G__3412 = seen;
p__3403 = G__3411;
seen = G__3412;
continue;
}
} else
{return cljs.core.cons.call(null,f__3406,step.call(null,cljs.core.rest.call(null,s__3409),cljs.core.conj.call(null,seen,f__3406)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3410.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3413 = cljs.core.Vector.fromArray([]);
var s__3414 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3414)))
{{
var G__3415 = cljs.core.conj.call(null,ret__3413,cljs.core.first.call(null,s__3414));
var G__3416 = cljs.core.next.call(null,s__3414);
ret__3413 = G__3415;
s__3414 = G__3416;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3413);
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
{if(cljs.core.truth_((function (){var or__3548__auto____3417 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3417))
{return or__3548__auto____3417;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3418 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3418 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3418 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____3419 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3419))
{return or__3548__auto____3419;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3420 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3420 > -1)))
{return cljs.core.subs.call(null,x,2,i__3420);
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
var map__3423 = cljs.core.ObjMap.fromObject([],{});
var ks__3424 = cljs.core.seq.call(null,keys);
var vs__3425 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3426 = ks__3424;

if(cljs.core.truth_(and__3546__auto____3426))
{return vs__3425;
} else
{return and__3546__auto____3426;
}
})()))
{{
var G__3427 = cljs.core.assoc.call(null,map__3423,cljs.core.first.call(null,ks__3424),cljs.core.first.call(null,vs__3425));
var G__3428 = cljs.core.next.call(null,ks__3424);
var G__3429 = cljs.core.next.call(null,vs__3425);
map__3423 = G__3427;
ks__3424 = G__3428;
vs__3425 = G__3429;
continue;
}
} else
{return map__3423;
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
var max_key__3432 = (function (k,x){
return x;
});
var max_key__3433 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3434 = (function() { 
var G__3436__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3421_SHARP_,p2__3422_SHARP_){
return max_key.call(null,k,p1__3421_SHARP_,p2__3422_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3436 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3436__delegate.call(this, k, x, y, more);
};
G__3436.cljs$lang$maxFixedArity = 3;
G__3436.cljs$lang$applyTo = (function (arglist__3437){
var k = cljs.core.first(arglist__3437);
var x = cljs.core.first(cljs.core.next(arglist__3437));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3437)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3437)));
return G__3436__delegate.call(this, k, x, y, more);
});
return G__3436;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3432.call(this,k,x);
case  3 :
return max_key__3433.call(this,k,x,y);
default:
return max_key__3434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3434.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3438 = (function (k,x){
return x;
});
var min_key__3439 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3440 = (function() { 
var G__3442__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3430_SHARP_,p2__3431_SHARP_){
return min_key.call(null,k,p1__3430_SHARP_,p2__3431_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3442 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3442__delegate.call(this, k, x, y, more);
};
G__3442.cljs$lang$maxFixedArity = 3;
G__3442.cljs$lang$applyTo = (function (arglist__3443){
var k = cljs.core.first(arglist__3443);
var x = cljs.core.first(cljs.core.next(arglist__3443));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3443)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3443)));
return G__3442__delegate.call(this, k, x, y, more);
});
return G__3442;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3438.call(this,k,x);
case  3 :
return min_key__3439.call(this,k,x,y);
default:
return min_key__3440.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3440.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3446 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3447 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3444 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3444))
{var s__3445 = temp__3698__auto____3444;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3445),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3445)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3446.call(this,n,step);
case  3 :
return partition_all__3447.call(this,n,step,coll);
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
var temp__3698__auto____3449 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3449))
{var s__3450 = temp__3698__auto____3449;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3450))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3450),take_while.call(null,pred,cljs.core.rest.call(null,s__3450)));
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
var this__3451 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3452 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3453 = this;
return this__3453.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3454 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3454.meta,(this__3454.start + this__3454.step),this__3454.end,this__3454.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3455 = this;
var comp__3456 = (cljs.core.truth_((this__3455.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3456.call(null,this__3455.start,this__3455.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3457 = this;
return (new cljs.core.Range(meta,this__3457.start,this__3457.end,this__3457.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3458 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3458.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3468 = null;
var G__3468__3469 = (function (rng,n){
var this__3459 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3459.start + (n * this__3459.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3460 = (this__3459.start > this__3459.end);

if(cljs.core.truth_(and__3546__auto____3460))
{return cljs.core._EQ_.call(null,this__3459.step,0);
} else
{return and__3546__auto____3460;
}
})()))
{return this__3459.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3468__3470 = (function (rng,n,not_found){
var this__3461 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3461.start + (n * this__3461.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3462 = (this__3461.start > this__3461.end);

if(cljs.core.truth_(and__3546__auto____3462))
{return cljs.core._EQ_.call(null,this__3461.step,0);
} else
{return and__3546__auto____3462;
}
})()))
{return this__3461.start;
} else
{return not_found;
}
}
});
G__3468 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3468__3469.call(this,rng,n);
case  3 :
return G__3468__3470.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3468;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3463 = this;
return this__3463.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3472 = null;
var G__3472__3473 = (function (rng,f){
var this__3464 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3472__3474 = (function (rng,f,s){
var this__3465 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3472 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3472__3473.call(this,rng,f);
case  3 :
return G__3472__3474.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3472;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3466 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3467 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3467.end - this__3467.start) / this__3467.step));
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
var range__3476 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3477 = (function (end){
return range.call(null,0,end,1);
});
var range__3478 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3479 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3476.call(this);
case  1 :
return range__3477.call(this,start);
case  2 :
return range__3478.call(this,start,end);
case  3 :
return range__3479.call(this,start,end,step);
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
var temp__3698__auto____3481 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3481))
{var s__3482 = temp__3698__auto____3481;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3482),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3482)));
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
var temp__3698__auto____3484 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3484))
{var s__3485 = temp__3698__auto____3484;

var fst__3486 = cljs.core.first.call(null,s__3485);
var fv__3487 = f.call(null,fst__3486);
var run__3488 = cljs.core.cons.call(null,fst__3486,cljs.core.take_while.call(null,(function (p1__3483_SHARP_){
return cljs.core._EQ_.call(null,fv__3487,f.call(null,p1__3483_SHARP_));
}),cljs.core.next.call(null,s__3485)));

return cljs.core.cons.call(null,run__3488,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3488),s__3485))));
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
var reductions__3503 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3499 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3499))
{var s__3500 = temp__3695__auto____3499;

return reductions.call(null,f,cljs.core.first.call(null,s__3500),cljs.core.rest.call(null,s__3500));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3504 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3501 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3501))
{var s__3502 = temp__3698__auto____3501;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3502)),cljs.core.rest.call(null,s__3502));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3503.call(this,f,init);
case  3 :
return reductions__3504.call(this,f,init,coll);
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
var juxt__3507 = (function (f){
return (function() {
var G__3512 = null;
var G__3512__3513 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3512__3514 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3512__3515 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3512__3516 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3512__3517 = (function() { 
var G__3519__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3519 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3519__delegate.call(this, x, y, z, args);
};
G__3519.cljs$lang$maxFixedArity = 3;
G__3519.cljs$lang$applyTo = (function (arglist__3520){
var x = cljs.core.first(arglist__3520);
var y = cljs.core.first(cljs.core.next(arglist__3520));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3520)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3520)));
return G__3519__delegate.call(this, x, y, z, args);
});
return G__3519;
})()
;
G__3512 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3512__3513.call(this);
case  1 :
return G__3512__3514.call(this,x);
case  2 :
return G__3512__3515.call(this,x,y);
case  3 :
return G__3512__3516.call(this,x,y,z);
default:
return G__3512__3517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3512.cljs$lang$maxFixedArity = 3;
G__3512.cljs$lang$applyTo = G__3512__3517.cljs$lang$applyTo;
return G__3512;
})()
});
var juxt__3508 = (function (f,g){
return (function() {
var G__3521 = null;
var G__3521__3522 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3521__3523 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3521__3524 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3521__3525 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3521__3526 = (function() { 
var G__3528__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3528 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3528__delegate.call(this, x, y, z, args);
};
G__3528.cljs$lang$maxFixedArity = 3;
G__3528.cljs$lang$applyTo = (function (arglist__3529){
var x = cljs.core.first(arglist__3529);
var y = cljs.core.first(cljs.core.next(arglist__3529));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3529)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3529)));
return G__3528__delegate.call(this, x, y, z, args);
});
return G__3528;
})()
;
G__3521 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3521__3522.call(this);
case  1 :
return G__3521__3523.call(this,x);
case  2 :
return G__3521__3524.call(this,x,y);
case  3 :
return G__3521__3525.call(this,x,y,z);
default:
return G__3521__3526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3521.cljs$lang$maxFixedArity = 3;
G__3521.cljs$lang$applyTo = G__3521__3526.cljs$lang$applyTo;
return G__3521;
})()
});
var juxt__3509 = (function (f,g,h){
return (function() {
var G__3530 = null;
var G__3530__3531 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3530__3532 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3530__3533 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3530__3534 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3530__3535 = (function() { 
var G__3537__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3537 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3537__delegate.call(this, x, y, z, args);
};
G__3537.cljs$lang$maxFixedArity = 3;
G__3537.cljs$lang$applyTo = (function (arglist__3538){
var x = cljs.core.first(arglist__3538);
var y = cljs.core.first(cljs.core.next(arglist__3538));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3538)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3538)));
return G__3537__delegate.call(this, x, y, z, args);
});
return G__3537;
})()
;
G__3530 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3530__3531.call(this);
case  1 :
return G__3530__3532.call(this,x);
case  2 :
return G__3530__3533.call(this,x,y);
case  3 :
return G__3530__3534.call(this,x,y,z);
default:
return G__3530__3535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3530.cljs$lang$maxFixedArity = 3;
G__3530.cljs$lang$applyTo = G__3530__3535.cljs$lang$applyTo;
return G__3530;
})()
});
var juxt__3510 = (function() { 
var G__3539__delegate = function (f,g,h,fs){
var fs__3506 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3540 = null;
var G__3540__3541 = (function (){
return cljs.core.reduce.call(null,(function (p1__3489_SHARP_,p2__3490_SHARP_){
return cljs.core.conj.call(null,p1__3489_SHARP_,p2__3490_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3506);
});
var G__3540__3542 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3491_SHARP_,p2__3492_SHARP_){
return cljs.core.conj.call(null,p1__3491_SHARP_,p2__3492_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3506);
});
var G__3540__3543 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3493_SHARP_,p2__3494_SHARP_){
return cljs.core.conj.call(null,p1__3493_SHARP_,p2__3494_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3506);
});
var G__3540__3544 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3495_SHARP_,p2__3496_SHARP_){
return cljs.core.conj.call(null,p1__3495_SHARP_,p2__3496_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3506);
});
var G__3540__3545 = (function() { 
var G__3547__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3497_SHARP_,p2__3498_SHARP_){
return cljs.core.conj.call(null,p1__3497_SHARP_,cljs.core.apply.call(null,p2__3498_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3506);
};
var G__3547 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3547__delegate.call(this, x, y, z, args);
};
G__3547.cljs$lang$maxFixedArity = 3;
G__3547.cljs$lang$applyTo = (function (arglist__3548){
var x = cljs.core.first(arglist__3548);
var y = cljs.core.first(cljs.core.next(arglist__3548));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3548)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3548)));
return G__3547__delegate.call(this, x, y, z, args);
});
return G__3547;
})()
;
G__3540 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3540__3541.call(this);
case  1 :
return G__3540__3542.call(this,x);
case  2 :
return G__3540__3543.call(this,x,y);
case  3 :
return G__3540__3544.call(this,x,y,z);
default:
return G__3540__3545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3540.cljs$lang$maxFixedArity = 3;
G__3540.cljs$lang$applyTo = G__3540__3545.cljs$lang$applyTo;
return G__3540;
})()
};
var G__3539 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3539__delegate.call(this, f, g, h, fs);
};
G__3539.cljs$lang$maxFixedArity = 3;
G__3539.cljs$lang$applyTo = (function (arglist__3549){
var f = cljs.core.first(arglist__3549);
var g = cljs.core.first(cljs.core.next(arglist__3549));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3549)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3549)));
return G__3539__delegate.call(this, f, g, h, fs);
});
return G__3539;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3507.call(this,f);
case  2 :
return juxt__3508.call(this,f,g);
case  3 :
return juxt__3509.call(this,f,g,h);
default:
return juxt__3510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3510.cljs$lang$applyTo;
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
var dorun__3551 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3554 = cljs.core.next.call(null,coll);
coll = G__3554;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3552 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3550 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3550))
{return (n > 0);
} else
{return and__3546__auto____3550;
}
})()))
{{
var G__3555 = (n - 1);
var G__3556 = cljs.core.next.call(null,coll);
n = G__3555;
coll = G__3556;
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
return dorun__3551.call(this,n);
case  2 :
return dorun__3552.call(this,n,coll);
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
var doall__3557 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3558 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3557.call(this,n);
case  2 :
return doall__3558.call(this,n,coll);
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
var matches__3560 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3560),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3560),1)))
{return cljs.core.first.call(null,matches__3560);
} else
{return cljs.core.vec.call(null,matches__3560);
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
var matches__3561 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3561)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3561),1)))
{return cljs.core.first.call(null,matches__3561);
} else
{return cljs.core.vec.call(null,matches__3561);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3562 = cljs.core.re_find.call(null,re,s);
var match_idx__3563 = s.search(re);
var match_str__3564 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3562))?cljs.core.first.call(null,match_data__3562):match_data__3562);
var post_match__3565 = cljs.core.subs.call(null,s,(match_idx__3563 + cljs.core.count.call(null,match_str__3564)));

if(cljs.core.truth_(match_data__3562))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3562,re_seq.call(null,re,post_match__3565));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3566_SHARP_){
return print_one.call(null,p1__3566_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3567 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3567))
{var and__3546__auto____3571 = (function (){var x__302__auto____3568 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3569 = x__302__auto____3568;

if(cljs.core.truth_(and__3546__auto____3569))
{var and__3546__auto____3570 = x__302__auto____3568.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3570))
{return cljs.core.not.call(null,x__302__auto____3568.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3570;
}
} else
{return and__3546__auto____3569;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__302__auto____3568);
}
})();

if(cljs.core.truth_(and__3546__auto____3571))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3571;
}
} else
{return and__3546__auto____3567;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__302__auto____3572 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3573 = x__302__auto____3572;

if(cljs.core.truth_(and__3546__auto____3573))
{var and__3546__auto____3574 = x__302__auto____3572.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3574))
{return cljs.core.not.call(null,x__302__auto____3572.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3574;
}
} else
{return and__3546__auto____3573;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__302__auto____3572);
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
var first_obj__3575 = cljs.core.first.call(null,objs);
var sb__3576 = (new goog.string.StringBuffer());

var G__3577__3578 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3577__3578))
{var obj__3579 = cljs.core.first.call(null,G__3577__3578);
var G__3577__3580 = G__3577__3578;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3579,first_obj__3575)))
{} else
{sb__3576.append(" ");
}
var G__3581__3582 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3579,opts));

if(cljs.core.truth_(G__3581__3582))
{var string__3583 = cljs.core.first.call(null,G__3581__3582);
var G__3581__3584 = G__3581__3582;

while(true){
sb__3576.append(string__3583);
var temp__3698__auto____3585 = cljs.core.next.call(null,G__3581__3584);

if(cljs.core.truth_(temp__3698__auto____3585))
{var G__3581__3586 = temp__3698__auto____3585;

{
var G__3589 = cljs.core.first.call(null,G__3581__3586);
var G__3590 = G__3581__3586;
string__3583 = G__3589;
G__3581__3584 = G__3590;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3587 = cljs.core.next.call(null,G__3577__3580);

if(cljs.core.truth_(temp__3698__auto____3587))
{var G__3577__3588 = temp__3698__auto____3587;

{
var G__3591 = cljs.core.first.call(null,G__3577__3588);
var G__3592 = G__3577__3588;
obj__3579 = G__3591;
G__3577__3580 = G__3592;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3576);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3593 = cljs.core.first.call(null,objs);

var G__3594__3595 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3594__3595))
{var obj__3596 = cljs.core.first.call(null,G__3594__3595);
var G__3594__3597 = G__3594__3595;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3596,first_obj__3593)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3598__3599 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3596,opts));

if(cljs.core.truth_(G__3598__3599))
{var string__3600 = cljs.core.first.call(null,G__3598__3599);
var G__3598__3601 = G__3598__3599;

while(true){
cljs.core.string_print.call(null,string__3600);
var temp__3698__auto____3602 = cljs.core.next.call(null,G__3598__3601);

if(cljs.core.truth_(temp__3698__auto____3602))
{var G__3598__3603 = temp__3698__auto____3602;

{
var G__3606 = cljs.core.first.call(null,G__3598__3603);
var G__3607 = G__3598__3603;
string__3600 = G__3606;
G__3598__3601 = G__3607;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3604 = cljs.core.next.call(null,G__3594__3597);

if(cljs.core.truth_(temp__3698__auto____3604))
{var G__3594__3605 = temp__3698__auto____3604;

{
var G__3608 = cljs.core.first.call(null,G__3594__3605);
var G__3609 = G__3594__3605;
obj__3596 = G__3608;
G__3594__3597 = G__3609;
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
pr_str.cljs$lang$applyTo = (function (arglist__3610){
var objs = cljs.core.seq( arglist__3610 );;
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
pr.cljs$lang$applyTo = (function (arglist__3611){
var objs = cljs.core.seq( arglist__3611 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__3612){
var objs = cljs.core.seq( arglist__3612 );;
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
println.cljs$lang$applyTo = (function (arglist__3613){
var objs = cljs.core.seq( arglist__3613 );;
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
prn.cljs$lang$applyTo = (function (arglist__3614){
var objs = cljs.core.seq( arglist__3614 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3615 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3615,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3616 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3616))
{var nspc__3617 = temp__3698__auto____3616;

return cljs.core.str.call(null,nspc__3617,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3618 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3618))
{var nspc__3619 = temp__3698__auto____3618;

return cljs.core.str.call(null,nspc__3619,"/");
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
var pr_pair__3620 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3620,"{",", ","}",opts,coll);
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
var this__3621 = this;
var G__3622__3623 = cljs.core.seq.call(null,this__3621.watches);

if(cljs.core.truth_(G__3622__3623))
{var G__3625__3627 = cljs.core.first.call(null,G__3622__3623);
var vec__3626__3628 = G__3625__3627;
var key__3629 = cljs.core.nth.call(null,vec__3626__3628,0,null);
var f__3630 = cljs.core.nth.call(null,vec__3626__3628,1,null);
var G__3622__3631 = G__3622__3623;

var G__3625__3632 = G__3625__3627;
var G__3622__3633 = G__3622__3631;

while(true){
var vec__3634__3635 = G__3625__3632;
var key__3636 = cljs.core.nth.call(null,vec__3634__3635,0,null);
var f__3637 = cljs.core.nth.call(null,vec__3634__3635,1,null);
var G__3622__3638 = G__3622__3633;

f__3637.call(null,key__3636,this$,oldval,newval);
var temp__3698__auto____3639 = cljs.core.next.call(null,G__3622__3638);

if(cljs.core.truth_(temp__3698__auto____3639))
{var G__3622__3640 = temp__3698__auto____3639;

{
var G__3647 = cljs.core.first.call(null,G__3622__3640);
var G__3648 = G__3622__3640;
G__3625__3632 = G__3647;
G__3622__3633 = G__3648;
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
var this__3641 = this;
return this$.watches = cljs.core.assoc.call(null,this__3641.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3642 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3642.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3643 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3643.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3644 = this;
return this__3644.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3645 = this;
return this__3645.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3646 = this;
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
var atom__3655 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3656 = (function() { 
var G__3658__delegate = function (x,p__3649){
var map__3650__3651 = p__3649;
var map__3650__3652 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3650__3651))?cljs.core.apply.call(null,cljs.core.hash_map,map__3650__3651):map__3650__3651);
var validator__3653 = cljs.core.get.call(null,map__3650__3652,"﷐'validator");
var meta__3654 = cljs.core.get.call(null,map__3650__3652,"﷐'meta");

return (new cljs.core.Atom(x,meta__3654,validator__3653,null));
};
var G__3658 = function (x,var_args){
var p__3649 = null;
if (goog.isDef(var_args)) {
  p__3649 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3658__delegate.call(this, x, p__3649);
};
G__3658.cljs$lang$maxFixedArity = 1;
G__3658.cljs$lang$applyTo = (function (arglist__3659){
var x = cljs.core.first(arglist__3659);
var p__3649 = cljs.core.rest(arglist__3659);
return G__3658__delegate.call(this, x, p__3649);
});
return G__3658;
})()
;
atom = function(x,var_args){
var p__3649 = var_args;
switch(arguments.length){
case  1 :
return atom__3655.call(this,x);
default:
return atom__3656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3656.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3660 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3660))
{var validate__3661 = temp__3698__auto____3660;

if(cljs.core.truth_(validate__3661.call(null,new_value)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")));
}
} else
{}
var old_value__3662 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3662,new_value);
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
var swap_BANG___3663 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3664 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3665 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3666 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3667 = (function() { 
var G__3669__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3669 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3669__delegate.call(this, a, f, x, y, z, more);
};
G__3669.cljs$lang$maxFixedArity = 5;
G__3669.cljs$lang$applyTo = (function (arglist__3670){
var a = cljs.core.first(arglist__3670);
var f = cljs.core.first(cljs.core.next(arglist__3670));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3670)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3670))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3670)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3670)))));
return G__3669__delegate.call(this, a, f, x, y, z, more);
});
return G__3669;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3663.call(this,a,f);
case  3 :
return swap_BANG___3664.call(this,a,f,x);
case  4 :
return swap_BANG___3665.call(this,a,f,x,y);
case  5 :
return swap_BANG___3666.call(this,a,f,x,y,z);
default:
return swap_BANG___3667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3667.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3671){
var iref = cljs.core.first(arglist__3671);
var f = cljs.core.first(cljs.core.next(arglist__3671));
var args = cljs.core.rest(cljs.core.next(arglist__3671));
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
var gensym__3672 = (function (){
return gensym.call(null,"G__");
});
var gensym__3673 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3672.call(this);
case  1 :
return gensym__3673.call(this,prefix_string);
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
var this__3675 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3675.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3676 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3676.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3676.state,this__3676.f);
}
return cljs.core.deref.call(null,this__3676.state);
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
delay.cljs$lang$applyTo = (function (arglist__3677){
var body = cljs.core.seq( arglist__3677 );;
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
var map__3678__3679 = options;
var map__3678__3680 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3678__3679))?cljs.core.apply.call(null,cljs.core.hash_map,map__3678__3679):map__3678__3679);
var keywordize_keys__3681 = cljs.core.get.call(null,map__3678__3680,"﷐'keywordize-keys");
var keyfn__3682 = (cljs.core.truth_(keywordize_keys__3681)?cljs.core.keyword:cljs.core.str);
var f__3688 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__356__auto____3687 = (function iter__3683(s__3684){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3684__3685 = s__3684;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3684__3685)))
{var k__3686 = cljs.core.first.call(null,s__3684__3685);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3682.call(null,k__3686),thisfn.call(null,(x[k__3686]))]),iter__3683.call(null,cljs.core.rest.call(null,s__3684__3685)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____3687.call(null,cljs.core.js_keys.call(null,x));
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

return f__3688.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3689){
var x = cljs.core.first(arglist__3689);
var options = cljs.core.rest(arglist__3689);
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
var mem__3690 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3694__delegate = function (args){
var temp__3695__auto____3691 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3690),args);

if(cljs.core.truth_(temp__3695__auto____3691))
{var v__3692 = temp__3695__auto____3691;

return v__3692;
} else
{var ret__3693 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3690,cljs.core.assoc,args,ret__3693);
return ret__3693;
}
};
var G__3694 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3694__delegate.call(this, args);
};
G__3694.cljs$lang$maxFixedArity = 0;
G__3694.cljs$lang$applyTo = (function (arglist__3695){
var args = cljs.core.seq( arglist__3695 );;
return G__3694__delegate.call(this, args);
});
return G__3694;
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
var trampoline__3697 = (function (f){
while(true){
var ret__3696 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3696)))
{{
var G__3700 = ret__3696;
f = G__3700;
continue;
}
} else
{return ret__3696;
}
break;
}
});
var trampoline__3698 = (function() { 
var G__3701__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3701 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3701__delegate.call(this, f, args);
};
G__3701.cljs$lang$maxFixedArity = 1;
G__3701.cljs$lang$applyTo = (function (arglist__3702){
var f = cljs.core.first(arglist__3702);
var args = cljs.core.rest(arglist__3702);
return G__3701__delegate.call(this, f, args);
});
return G__3701;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3697.call(this,f);
default:
return trampoline__3698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3698.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3703 = (function (){
return rand.call(null,1);
});
var rand__3704 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3703.call(this);
case  1 :
return rand__3704.call(this,n);
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
var k__3706 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3706,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3706,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___3715 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3716 = (function (h,child,parent){
var or__3548__auto____3707 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3707))
{return or__3548__auto____3707;
} else
{var or__3548__auto____3708 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3708))
{return or__3548__auto____3708;
} else
{var and__3546__auto____3709 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3709))
{var and__3546__auto____3710 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3710))
{var and__3546__auto____3711 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3711))
{var ret__3712 = true;
var i__3713 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3714 = cljs.core.not.call(null,ret__3712);

if(cljs.core.truth_(or__3548__auto____3714))
{return or__3548__auto____3714;
} else
{return cljs.core._EQ_.call(null,i__3713,cljs.core.count.call(null,parent));
}
})()))
{return ret__3712;
} else
{{
var G__3718 = isa_QMARK_.call(null,h,child.call(null,i__3713),parent.call(null,i__3713));
var G__3719 = (i__3713 + 1);
ret__3712 = G__3718;
i__3713 = G__3719;
continue;
}
}
break;
}
} else
{return and__3546__auto____3711;
}
} else
{return and__3546__auto____3710;
}
} else
{return and__3546__auto____3709;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3715.call(this,h,child);
case  3 :
return isa_QMARK___3716.call(this,h,child,parent);
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
var parents__3720 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3721 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3720.call(this,h);
case  2 :
return parents__3721.call(this,h,tag);
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
var ancestors__3723 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3724 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3723.call(this,h);
case  2 :
return ancestors__3724.call(this,h,tag);
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
var descendants__3726 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3727 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3726.call(this,h);
case  2 :
return descendants__3727.call(this,h,tag);
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
var derive__3737 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3738 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3732 = "﷐'parents".call(null,h);
var td__3733 = "﷐'descendants".call(null,h);
var ta__3734 = "﷐'ancestors".call(null,h);
var tf__3735 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3736 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3732.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3734.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3734.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3732,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3735.call(null,"﷐'ancestors".call(null,h),tag,td__3733,parent,ta__3734),"﷐'descendants":tf__3735.call(null,"﷐'descendants".call(null,h),parent,ta__3734,tag,td__3733)});
})());

if(cljs.core.truth_(or__3548__auto____3736))
{return or__3548__auto____3736;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3737.call(this,h,tag);
case  3 :
return derive__3738.call(this,h,tag,parent);
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
var underive__3744 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3745 = (function (h,tag,parent){
var parentMap__3740 = "﷐'parents".call(null,h);
var childsParents__3741 = (cljs.core.truth_(parentMap__3740.call(null,tag))?cljs.core.disj.call(null,parentMap__3740.call(null,tag),parent):cljs.core.set([]));
var newParents__3742 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3741))?cljs.core.assoc.call(null,parentMap__3740,tag,childsParents__3741):cljs.core.dissoc.call(null,parentMap__3740,tag));
var deriv_seq__3743 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3729_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3729_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3729_SHARP_),cljs.core.second.call(null,p1__3729_SHARP_)));
}),cljs.core.seq.call(null,newParents__3742)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3740.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3730_SHARP_,p2__3731_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3730_SHARP_,p2__3731_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3743));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3744.call(this,h,tag);
case  3 :
return underive__3745.call(this,h,tag,parent);
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
var xprefs__3747 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3749 = (cljs.core.truth_((function (){var and__3546__auto____3748 = xprefs__3747;

if(cljs.core.truth_(and__3546__auto____3748))
{return xprefs__3747.call(null,y);
} else
{return and__3546__auto____3748;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3749))
{return or__3548__auto____3749;
} else
{var or__3548__auto____3751 = (function (){var ps__3750 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3750) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3750),prefer_table)))
{} else
{}
{
var G__3754 = cljs.core.rest.call(null,ps__3750);
ps__3750 = G__3754;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3751))
{return or__3548__auto____3751;
} else
{var or__3548__auto____3753 = (function (){var ps__3752 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3752) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3752),y,prefer_table)))
{} else
{}
{
var G__3755 = cljs.core.rest.call(null,ps__3752);
ps__3752 = G__3755;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3753))
{return or__3548__auto____3753;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3756 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3756))
{return or__3548__auto____3756;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3765 = cljs.core.reduce.call(null,(function (be,p__3757){
var vec__3758__3759 = p__3757;
var k__3760 = cljs.core.nth.call(null,vec__3758__3759,0,null);
var ___3761 = cljs.core.nth.call(null,vec__3758__3759,1,null);
var e__3762 = vec__3758__3759;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3760)))
{var be2__3764 = (cljs.core.truth_((function (){var or__3548__auto____3763 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3763))
{return or__3548__auto____3763;
} else
{return cljs.core.dominates.call(null,k__3760,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3762:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3764),k__3760,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3760," and ",cljs.core.first.call(null,be2__3764),", and neither is preferred")));
}
return be2__3764;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3765))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3765));
return cljs.core.second.call(null,best_entry__3765);
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
if(cljs.core.truth_((function (){var and__3546__auto____3766 = mf;

if(cljs.core.truth_(and__3546__auto____3766))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3766;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3767 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3767))
{return or__3548__auto____3767;
} else
{var or__3548__auto____3768 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3768))
{return or__3548__auto____3768;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3769 = mf;

if(cljs.core.truth_(and__3546__auto____3769))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3769;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3770 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3770))
{return or__3548__auto____3770;
} else
{var or__3548__auto____3771 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3771))
{return or__3548__auto____3771;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3772 = mf;

if(cljs.core.truth_(and__3546__auto____3772))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3772;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3773 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3773))
{return or__3548__auto____3773;
} else
{var or__3548__auto____3774 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3774))
{return or__3548__auto____3774;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3775 = mf;

if(cljs.core.truth_(and__3546__auto____3775))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3775;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3776 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3776))
{return or__3548__auto____3776;
} else
{var or__3548__auto____3777 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3777))
{return or__3548__auto____3777;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3778 = mf;

if(cljs.core.truth_(and__3546__auto____3778))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3778;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3779 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3779))
{return or__3548__auto____3779;
} else
{var or__3548__auto____3780 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3780))
{return or__3548__auto____3780;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3781 = mf;

if(cljs.core.truth_(and__3546__auto____3781))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3781;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3782 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3782))
{return or__3548__auto____3782;
} else
{var or__3548__auto____3783 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3783))
{return or__3548__auto____3783;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3784 = mf;

if(cljs.core.truth_(and__3546__auto____3784))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3784;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3785 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3785))
{return or__3548__auto____3785;
} else
{var or__3548__auto____3786 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3786))
{return or__3548__auto____3786;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3787 = mf;

if(cljs.core.truth_(and__3546__auto____3787))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3787;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3788 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3788))
{return or__3548__auto____3788;
} else
{var or__3548__auto____3789 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3789))
{return or__3548__auto____3789;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3790 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3791 = cljs.core._get_method.call(null,mf,dispatch_val__3790);

if(cljs.core.truth_(target_fn__3791))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3790)));
}
return cljs.core.apply.call(null,target_fn__3791,args);
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
var this__3792 = this;
cljs.core.swap_BANG_.call(null,this__3792.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3792.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3792.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3792.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3793 = this;
cljs.core.swap_BANG_.call(null,this__3793.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3793.method_cache,this__3793.method_table,this__3793.cached_hierarchy,this__3793.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3794 = this;
cljs.core.swap_BANG_.call(null,this__3794.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3794.method_cache,this__3794.method_table,this__3794.cached_hierarchy,this__3794.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3795 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3795.cached_hierarchy),cljs.core.deref.call(null,this__3795.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3795.method_cache,this__3795.method_table,this__3795.cached_hierarchy,this__3795.hierarchy);
}
var temp__3695__auto____3796 = cljs.core.deref.call(null,this__3795.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3796))
{var target_fn__3797 = temp__3695__auto____3796;

return target_fn__3797;
} else
{var temp__3695__auto____3798 = cljs.core.find_and_cache_best_method.call(null,this__3795.name,dispatch_val,this__3795.hierarchy,this__3795.method_table,this__3795.prefer_table,this__3795.method_cache,this__3795.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3798))
{var target_fn__3799 = temp__3695__auto____3798;

return target_fn__3799;
} else
{return cljs.core.deref.call(null,this__3795.method_table).call(null,this__3795.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3800 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3800.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3800.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3800.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3800.method_cache,this__3800.method_table,this__3800.cached_hierarchy,this__3800.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3801 = this;
return cljs.core.deref.call(null,this__3801.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3802 = this;
return cljs.core.deref.call(null,this__3802.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3803 = this;
return cljs.core.do_invoke.call(null,mf,this__3803.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3804__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3804 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3804__delegate.call(this, _, args);
};
G__3804.cljs$lang$maxFixedArity = 1;
G__3804.cljs$lang$applyTo = (function (arglist__3805){
var _ = cljs.core.first(arglist__3805);
var args = cljs.core.rest(arglist__3805);
return G__3804__delegate.call(this, _, args);
});
return G__3804;
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
