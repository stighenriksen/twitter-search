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
var or__3548__auto____2534 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2534))
{return or__3548__auto____2534;
} else
{var or__3548__auto____2535 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2535))
{return or__3548__auto____2535;
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
if(cljs.core.truth_((function (){var and__3546__auto____2536 = coll;

if(cljs.core.truth_(and__3546__auto____2536))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2536;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2537 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2537))
{return or__3548__auto____2537;
} else
{var or__3548__auto____2538 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2538))
{return or__3548__auto____2538;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2539 = coll;

if(cljs.core.truth_(and__3546__auto____2539))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2539;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2540 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2540))
{return or__3548__auto____2540;
} else
{var or__3548__auto____2541 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2541))
{return or__3548__auto____2541;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2542 = coll;

if(cljs.core.truth_(and__3546__auto____2542))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2542;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2543 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2543))
{return or__3548__auto____2543;
} else
{var or__3548__auto____2544 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2544))
{return or__3548__auto____2544;
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
var _nth__2551 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2545 = coll;

if(cljs.core.truth_(and__3546__auto____2545))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2545;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2546 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2546))
{return or__3548__auto____2546;
} else
{var or__3548__auto____2547 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2547))
{return or__3548__auto____2547;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2552 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2548 = coll;

if(cljs.core.truth_(and__3546__auto____2548))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2548;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2549 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2549))
{return or__3548__auto____2549;
} else
{var or__3548__auto____2550 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2550))
{return or__3548__auto____2550;
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
return _nth__2551.call(this,coll,n);
case  3 :
return _nth__2552.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2554 = coll;

if(cljs.core.truth_(and__3546__auto____2554))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2554;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2555 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2555))
{return or__3548__auto____2555;
} else
{var or__3548__auto____2556 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2556))
{return or__3548__auto____2556;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2557 = coll;

if(cljs.core.truth_(and__3546__auto____2557))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2557;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2558 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2558))
{return or__3548__auto____2558;
} else
{var or__3548__auto____2559 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2559))
{return or__3548__auto____2559;
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
var _lookup__2566 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2560 = o;

if(cljs.core.truth_(and__3546__auto____2560))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2560;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2561 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2561))
{return or__3548__auto____2561;
} else
{var or__3548__auto____2562 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2562))
{return or__3548__auto____2562;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2567 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2563 = o;

if(cljs.core.truth_(and__3546__auto____2563))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2563;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2564 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2564))
{return or__3548__auto____2564;
} else
{var or__3548__auto____2565 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2565))
{return or__3548__auto____2565;
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
return _lookup__2566.call(this,o,k);
case  3 :
return _lookup__2567.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2569 = coll;

if(cljs.core.truth_(and__3546__auto____2569))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2569;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2570 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2570))
{return or__3548__auto____2570;
} else
{var or__3548__auto____2571 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2571))
{return or__3548__auto____2571;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2572 = coll;

if(cljs.core.truth_(and__3546__auto____2572))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2572;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2573 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2573))
{return or__3548__auto____2573;
} else
{var or__3548__auto____2574 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2574))
{return or__3548__auto____2574;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2575 = coll;

if(cljs.core.truth_(and__3546__auto____2575))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2575;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2576 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2576))
{return or__3548__auto____2576;
} else
{var or__3548__auto____2577 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2577))
{return or__3548__auto____2577;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2578 = coll;

if(cljs.core.truth_(and__3546__auto____2578))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2578;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2579 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2579))
{return or__3548__auto____2579;
} else
{var or__3548__auto____2580 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2580))
{return or__3548__auto____2580;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2581 = coll;

if(cljs.core.truth_(and__3546__auto____2581))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2581;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2582 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2582))
{return or__3548__auto____2582;
} else
{var or__3548__auto____2583 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2583))
{return or__3548__auto____2583;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2584 = coll;

if(cljs.core.truth_(and__3546__auto____2584))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2584;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2585 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2585))
{return or__3548__auto____2585;
} else
{var or__3548__auto____2586 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2586))
{return or__3548__auto____2586;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2587 = coll;

if(cljs.core.truth_(and__3546__auto____2587))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2587;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2588 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2588))
{return or__3548__auto____2588;
} else
{var or__3548__auto____2589 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2589))
{return or__3548__auto____2589;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2590 = o;

if(cljs.core.truth_(and__3546__auto____2590))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2590;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2591 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2591))
{return or__3548__auto____2591;
} else
{var or__3548__auto____2592 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2592))
{return or__3548__auto____2592;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2593 = o;

if(cljs.core.truth_(and__3546__auto____2593))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2593;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2594 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2594))
{return or__3548__auto____2594;
} else
{var or__3548__auto____2595 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2595))
{return or__3548__auto____2595;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2596 = o;

if(cljs.core.truth_(and__3546__auto____2596))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2596;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2597 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2597))
{return or__3548__auto____2597;
} else
{var or__3548__auto____2598 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2598))
{return or__3548__auto____2598;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2599 = o;

if(cljs.core.truth_(and__3546__auto____2599))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2599;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2600 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2600))
{return or__3548__auto____2600;
} else
{var or__3548__auto____2601 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2601))
{return or__3548__auto____2601;
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
var _reduce__2608 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2602 = coll;

if(cljs.core.truth_(and__3546__auto____2602))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2602;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2603 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2603))
{return or__3548__auto____2603;
} else
{var or__3548__auto____2604 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2604))
{return or__3548__auto____2604;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2609 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2605 = coll;

if(cljs.core.truth_(and__3546__auto____2605))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2605;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2606 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2606))
{return or__3548__auto____2606;
} else
{var or__3548__auto____2607 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2607))
{return or__3548__auto____2607;
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
return _reduce__2608.call(this,coll,f);
case  3 :
return _reduce__2609.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2611 = o;

if(cljs.core.truth_(and__3546__auto____2611))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2611;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2612 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2612))
{return or__3548__auto____2612;
} else
{var or__3548__auto____2613 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2613))
{return or__3548__auto____2613;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2614 = o;

if(cljs.core.truth_(and__3546__auto____2614))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2614;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2615 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2615))
{return or__3548__auto____2615;
} else
{var or__3548__auto____2616 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2616))
{return or__3548__auto____2616;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2617 = o;

if(cljs.core.truth_(and__3546__auto____2617))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2617;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2618 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2618))
{return or__3548__auto____2618;
} else
{var or__3548__auto____2619 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2619))
{return or__3548__auto____2619;
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
if(cljs.core.truth_((function (){var and__3546__auto____2620 = o;

if(cljs.core.truth_(and__3546__auto____2620))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2620;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2621 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2621))
{return or__3548__auto____2621;
} else
{var or__3548__auto____2622 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2622))
{return or__3548__auto____2622;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2623 = d;

if(cljs.core.truth_(and__3546__auto____2623))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2623;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2624 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2624))
{return or__3548__auto____2624;
} else
{var or__3548__auto____2625 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2625))
{return or__3548__auto____2625;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2626 = this$;

if(cljs.core.truth_(and__3546__auto____2626))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2626;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2627 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2627))
{return or__3548__auto____2627;
} else
{var or__3548__auto____2628 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2628))
{return or__3548__auto____2628;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2629 = this$;

if(cljs.core.truth_(and__3546__auto____2629))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2629;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2630 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2630))
{return or__3548__auto____2630;
} else
{var or__3548__auto____2631 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2631))
{return or__3548__auto____2631;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2632 = this$;

if(cljs.core.truth_(and__3546__auto____2632))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2632;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2633 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2633))
{return or__3548__auto____2633;
} else
{var or__3548__auto____2634 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2634))
{return or__3548__auto____2634;
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
var G__2635 = null;
var G__2635__2636 = (function (_,n){
return null;
});
var G__2635__2637 = (function (_,n,not_found){
return not_found;
});
G__2635 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2635__2636.call(this,_,n);
case  3 :
return G__2635__2637.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2635;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2639 = null;
var G__2639__2640 = (function (_,f){
return f.call(null);
});
var G__2639__2641 = (function (_,f,start){
return start;
});
G__2639 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2639__2640.call(this,_,f);
case  3 :
return G__2639__2641.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2639;
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
var G__2643 = null;
var G__2643__2644 = (function (o,k){
return null;
});
var G__2643__2645 = (function (o,k,not_found){
return not_found;
});
G__2643 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2643__2644.call(this,o,k);
case  3 :
return G__2643__2645.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2643;
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
var ci_reduce__2653 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2647 = cljs.core._nth.call(null,cicoll,0);
var n__2648 = 1;

while(true){
if(cljs.core.truth_((n__2648 < cljs.core._count.call(null,cicoll))))
{{
var G__2657 = f.call(null,val__2647,cljs.core._nth.call(null,cicoll,n__2648));
var G__2658 = (n__2648 + 1);
val__2647 = G__2657;
n__2648 = G__2658;
continue;
}
} else
{return val__2647;
}
break;
}
}
});
var ci_reduce__2654 = (function (cicoll,f,val){
var val__2649 = val;
var n__2650 = 0;

while(true){
if(cljs.core.truth_((n__2650 < cljs.core._count.call(null,cicoll))))
{{
var G__2659 = f.call(null,val__2649,cljs.core._nth.call(null,cicoll,n__2650));
var G__2660 = (n__2650 + 1);
val__2649 = G__2659;
n__2650 = G__2660;
continue;
}
} else
{return val__2649;
}
break;
}
});
var ci_reduce__2655 = (function (cicoll,f,val,idx){
var val__2651 = val;
var n__2652 = idx;

while(true){
if(cljs.core.truth_((n__2652 < cljs.core._count.call(null,cicoll))))
{{
var G__2661 = f.call(null,val__2651,cljs.core._nth.call(null,cicoll,n__2652));
var G__2662 = (n__2652 + 1);
val__2651 = G__2661;
n__2652 = G__2662;
continue;
}
} else
{return val__2651;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2653.call(this,cicoll,f);
case  3 :
return ci_reduce__2654.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2655.call(this,cicoll,f,val,idx);
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
var this__2663 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2671 = null;
var G__2671__2672 = (function (coll,f){
var this__2664 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2664.a[this__2664.i]),(this__2664.i + 1));
});
var G__2671__2673 = (function (coll,f,start){
var this__2665 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2665.i);
});
G__2671 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2671__2672.call(this,coll,f);
case  3 :
return G__2671__2673.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2671;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2666 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2667 = this;
return this__2667.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2668 = this;
return (this__2668.a[this__2668.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2669 = this;
if(cljs.core.truth_(((this__2669.i + 1) < this__2669.a.length)))
{return (new cljs.core.IndexedSeq(this__2669.a,(this__2669.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2670 = this;
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
var G__2675 = null;
var G__2675__2676 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2675__2677 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2675 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2675__2676.call(this,array,f);
case  3 :
return G__2675__2677.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2675;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2679 = null;
var G__2679__2680 = (function (array,k){
return (array[k]);
});
var G__2679__2681 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2679 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2679__2680.call(this,array,k);
case  3 :
return G__2679__2681.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2679;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2683 = null;
var G__2683__2684 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2683__2685 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2683 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2683__2684.call(this,array,n);
case  3 :
return G__2683__2685.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2683;
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
var temp__3698__auto____2687 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2687))
{var s__2688 = temp__3698__auto____2687;

return cljs.core._first.call(null,s__2688);
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
var G__2689 = cljs.core.next.call(null,s);
s = G__2689;
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
var s__2690 = cljs.core.seq.call(null,x);
var n__2691 = 0;

while(true){
if(cljs.core.truth_(s__2690))
{{
var G__2692 = cljs.core.next.call(null,s__2690);
var G__2693 = (n__2691 + 1);
s__2690 = G__2692;
n__2691 = G__2693;
continue;
}
} else
{return n__2691;
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
var conj__2694 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2695 = (function() { 
var G__2697__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2698 = conj.call(null,coll,x);
var G__2699 = cljs.core.first.call(null,xs);
var G__2700 = cljs.core.next.call(null,xs);
coll = G__2698;
x = G__2699;
xs = G__2700;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2697 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2697__delegate.call(this, coll, x, xs);
};
G__2697.cljs$lang$maxFixedArity = 2;
G__2697.cljs$lang$applyTo = (function (arglist__2701){
var coll = cljs.core.first(arglist__2701);
var x = cljs.core.first(cljs.core.next(arglist__2701));
var xs = cljs.core.rest(cljs.core.next(arglist__2701));
return G__2697__delegate.call(this, coll, x, xs);
});
return G__2697;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2694.call(this,coll,x);
default:
return conj__2695.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2695.cljs$lang$applyTo;
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
var nth__2702 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2703 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2702.call(this,coll,n);
case  3 :
return nth__2703.call(this,coll,n,not_found);
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
var get__2705 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2706 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2705.call(this,o,k);
case  3 :
return get__2706.call(this,o,k,not_found);
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
var assoc__2709 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2710 = (function() { 
var G__2712__delegate = function (coll,k,v,kvs){
while(true){
var ret__2708 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2713 = ret__2708;
var G__2714 = cljs.core.first.call(null,kvs);
var G__2715 = cljs.core.second.call(null,kvs);
var G__2716 = cljs.core.nnext.call(null,kvs);
coll = G__2713;
k = G__2714;
v = G__2715;
kvs = G__2716;
continue;
}
} else
{return ret__2708;
}
break;
}
};
var G__2712 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2712__delegate.call(this, coll, k, v, kvs);
};
G__2712.cljs$lang$maxFixedArity = 3;
G__2712.cljs$lang$applyTo = (function (arglist__2717){
var coll = cljs.core.first(arglist__2717);
var k = cljs.core.first(cljs.core.next(arglist__2717));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2717)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2717)));
return G__2712__delegate.call(this, coll, k, v, kvs);
});
return G__2712;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2709.call(this,coll,k,v);
default:
return assoc__2710.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2710.cljs$lang$applyTo;
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
var dissoc__2719 = (function (coll){
return coll;
});
var dissoc__2720 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2721 = (function() { 
var G__2723__delegate = function (coll,k,ks){
while(true){
var ret__2718 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2724 = ret__2718;
var G__2725 = cljs.core.first.call(null,ks);
var G__2726 = cljs.core.next.call(null,ks);
coll = G__2724;
k = G__2725;
ks = G__2726;
continue;
}
} else
{return ret__2718;
}
break;
}
};
var G__2723 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2723__delegate.call(this, coll, k, ks);
};
G__2723.cljs$lang$maxFixedArity = 2;
G__2723.cljs$lang$applyTo = (function (arglist__2727){
var coll = cljs.core.first(arglist__2727);
var k = cljs.core.first(cljs.core.next(arglist__2727));
var ks = cljs.core.rest(cljs.core.next(arglist__2727));
return G__2723__delegate.call(this, coll, k, ks);
});
return G__2723;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2719.call(this,coll);
case  2 :
return dissoc__2720.call(this,coll,k);
default:
return dissoc__2721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2721.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__302__auto____2728 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2729 = x__302__auto____2728;

if(cljs.core.truth_(and__3546__auto____2729))
{var and__3546__auto____2730 = x__302__auto____2728.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2730))
{return cljs.core.not.call(null,x__302__auto____2728.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2730;
}
} else
{return and__3546__auto____2729;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__302__auto____2728);
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
var disj__2732 = (function (coll){
return coll;
});
var disj__2733 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2734 = (function() { 
var G__2736__delegate = function (coll,k,ks){
while(true){
var ret__2731 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2737 = ret__2731;
var G__2738 = cljs.core.first.call(null,ks);
var G__2739 = cljs.core.next.call(null,ks);
coll = G__2737;
k = G__2738;
ks = G__2739;
continue;
}
} else
{return ret__2731;
}
break;
}
};
var G__2736 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2736__delegate.call(this, coll, k, ks);
};
G__2736.cljs$lang$maxFixedArity = 2;
G__2736.cljs$lang$applyTo = (function (arglist__2740){
var coll = cljs.core.first(arglist__2740);
var k = cljs.core.first(cljs.core.next(arglist__2740));
var ks = cljs.core.rest(cljs.core.next(arglist__2740));
return G__2736__delegate.call(this, coll, k, ks);
});
return G__2736;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2732.call(this,coll);
case  2 :
return disj__2733.call(this,coll,k);
default:
return disj__2734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2734.cljs$lang$applyTo;
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
{var x__302__auto____2741 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2742 = x__302__auto____2741;

if(cljs.core.truth_(and__3546__auto____2742))
{var and__3546__auto____2743 = x__302__auto____2741.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2743))
{return cljs.core.not.call(null,x__302__auto____2741.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2743;
}
} else
{return and__3546__auto____2742;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__302__auto____2741);
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
{var x__302__auto____2744 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2745 = x__302__auto____2744;

if(cljs.core.truth_(and__3546__auto____2745))
{var and__3546__auto____2746 = x__302__auto____2744.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2746))
{return cljs.core.not.call(null,x__302__auto____2744.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2746;
}
} else
{return and__3546__auto____2745;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__302__auto____2744);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__302__auto____2747 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2748 = x__302__auto____2747;

if(cljs.core.truth_(and__3546__auto____2748))
{var and__3546__auto____2749 = x__302__auto____2747.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2749))
{return cljs.core.not.call(null,x__302__auto____2747.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2749;
}
} else
{return and__3546__auto____2748;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__302__auto____2747);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__302__auto____2750 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2751 = x__302__auto____2750;

if(cljs.core.truth_(and__3546__auto____2751))
{var and__3546__auto____2752 = x__302__auto____2750.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2752))
{return cljs.core.not.call(null,x__302__auto____2750.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2752;
}
} else
{return and__3546__auto____2751;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__302__auto____2750);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__302__auto____2753 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2754 = x__302__auto____2753;

if(cljs.core.truth_(and__3546__auto____2754))
{var and__3546__auto____2755 = x__302__auto____2753.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2755))
{return cljs.core.not.call(null,x__302__auto____2753.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2755;
}
} else
{return and__3546__auto____2754;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__302__auto____2753);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__302__auto____2756 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2757 = x__302__auto____2756;

if(cljs.core.truth_(and__3546__auto____2757))
{var and__3546__auto____2758 = x__302__auto____2756.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2758))
{return cljs.core.not.call(null,x__302__auto____2756.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2758;
}
} else
{return and__3546__auto____2757;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__302__auto____2756);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__302__auto____2759 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2760 = x__302__auto____2759;

if(cljs.core.truth_(and__3546__auto____2760))
{var and__3546__auto____2761 = x__302__auto____2759.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2761))
{return cljs.core.not.call(null,x__302__auto____2759.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2761;
}
} else
{return and__3546__auto____2760;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__302__auto____2759);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2762 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2762.push(key);
}));
return keys__2762;
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
{var x__302__auto____2763 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2764 = x__302__auto____2763;

if(cljs.core.truth_(and__3546__auto____2764))
{var and__3546__auto____2765 = x__302__auto____2763.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2765))
{return cljs.core.not.call(null,x__302__auto____2763.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2765;
}
} else
{return and__3546__auto____2764;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__302__auto____2763);
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
var and__3546__auto____2766 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2766))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2767 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2767))
{return or__3548__auto____2767;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2766;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2768 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2768))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2768;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2769 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2769))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2769;
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
var and__3546__auto____2770 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2770))
{return (n == n.toFixed());
} else
{return and__3546__auto____2770;
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
if(cljs.core.truth_((function (){var and__3546__auto____2771 = coll;

if(cljs.core.truth_(and__3546__auto____2771))
{var and__3546__auto____2772 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2772))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2772;
}
} else
{return and__3546__auto____2771;
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
var distinct_QMARK___2777 = (function (x){
return true;
});
var distinct_QMARK___2778 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2779 = (function() { 
var G__2781__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2773 = cljs.core.set([y,x]);
var xs__2774 = more;

while(true){
var x__2775 = cljs.core.first.call(null,xs__2774);
var etc__2776 = cljs.core.next.call(null,xs__2774);

if(cljs.core.truth_(xs__2774))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2773,x__2775)))
{return false;
} else
{{
var G__2782 = cljs.core.conj.call(null,s__2773,x__2775);
var G__2783 = etc__2776;
s__2773 = G__2782;
xs__2774 = G__2783;
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
var G__2781 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2781__delegate.call(this, x, y, more);
};
G__2781.cljs$lang$maxFixedArity = 2;
G__2781.cljs$lang$applyTo = (function (arglist__2784){
var x = cljs.core.first(arglist__2784);
var y = cljs.core.first(cljs.core.next(arglist__2784));
var more = cljs.core.rest(cljs.core.next(arglist__2784));
return G__2781__delegate.call(this, x, y, more);
});
return G__2781;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2777.call(this,x);
case  2 :
return distinct_QMARK___2778.call(this,x,y);
default:
return distinct_QMARK___2779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2779.cljs$lang$applyTo;
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
var r__2785 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2785)))
{return r__2785;
} else
{if(cljs.core.truth_(r__2785))
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
var sort__2787 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2788 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2786 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2786,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2786);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2787.call(this,comp);
case  2 :
return sort__2788.call(this,comp,coll);
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
var sort_by__2790 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2791 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2790.call(this,keyfn,comp);
case  3 :
return sort_by__2791.call(this,keyfn,comp,coll);
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
var reduce__2793 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2794 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2793.call(this,f,val);
case  3 :
return reduce__2794.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2800 = (function (f,coll){
var temp__3695__auto____2796 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2796))
{var s__2797 = temp__3695__auto____2796;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2797),cljs.core.next.call(null,s__2797));
} else
{return f.call(null);
}
});
var seq_reduce__2801 = (function (f,val,coll){
var val__2798 = val;
var coll__2799 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2799))
{{
var G__2803 = f.call(null,val__2798,cljs.core.first.call(null,coll__2799));
var G__2804 = cljs.core.next.call(null,coll__2799);
val__2798 = G__2803;
coll__2799 = G__2804;
continue;
}
} else
{return val__2798;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2800.call(this,f,val);
case  3 :
return seq_reduce__2801.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2805 = null;
var G__2805__2806 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2805__2807 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2805 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2805__2806.call(this,coll,f);
case  3 :
return G__2805__2807.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2805;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2809 = (function (){
return 0;
});
var _PLUS___2810 = (function (x){
return x;
});
var _PLUS___2811 = (function (x,y){
return (x + y);
});
var _PLUS___2812 = (function() { 
var G__2814__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2814 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2814__delegate.call(this, x, y, more);
};
G__2814.cljs$lang$maxFixedArity = 2;
G__2814.cljs$lang$applyTo = (function (arglist__2815){
var x = cljs.core.first(arglist__2815);
var y = cljs.core.first(cljs.core.next(arglist__2815));
var more = cljs.core.rest(cljs.core.next(arglist__2815));
return G__2814__delegate.call(this, x, y, more);
});
return G__2814;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2809.call(this);
case  1 :
return _PLUS___2810.call(this,x);
case  2 :
return _PLUS___2811.call(this,x,y);
default:
return _PLUS___2812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2812.cljs$lang$applyTo;
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
var ___2816 = (function (x){
return (- x);
});
var ___2817 = (function (x,y){
return (x - y);
});
var ___2818 = (function() { 
var G__2820__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2820 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2820__delegate.call(this, x, y, more);
};
G__2820.cljs$lang$maxFixedArity = 2;
G__2820.cljs$lang$applyTo = (function (arglist__2821){
var x = cljs.core.first(arglist__2821);
var y = cljs.core.first(cljs.core.next(arglist__2821));
var more = cljs.core.rest(cljs.core.next(arglist__2821));
return G__2820__delegate.call(this, x, y, more);
});
return G__2820;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2816.call(this,x);
case  2 :
return ___2817.call(this,x,y);
default:
return ___2818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2818.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2822 = (function (){
return 1;
});
var _STAR___2823 = (function (x){
return x;
});
var _STAR___2824 = (function (x,y){
return (x * y);
});
var _STAR___2825 = (function() { 
var G__2827__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2827 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2827__delegate.call(this, x, y, more);
};
G__2827.cljs$lang$maxFixedArity = 2;
G__2827.cljs$lang$applyTo = (function (arglist__2828){
var x = cljs.core.first(arglist__2828);
var y = cljs.core.first(cljs.core.next(arglist__2828));
var more = cljs.core.rest(cljs.core.next(arglist__2828));
return G__2827__delegate.call(this, x, y, more);
});
return G__2827;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2822.call(this);
case  1 :
return _STAR___2823.call(this,x);
case  2 :
return _STAR___2824.call(this,x,y);
default:
return _STAR___2825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2825.cljs$lang$applyTo;
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
var _SLASH___2829 = (function (x){
return (1 / x);
});
var _SLASH___2830 = (function (x,y){
return (x / y);
});
var _SLASH___2831 = (function() { 
var G__2833__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2833 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2833__delegate.call(this, x, y, more);
};
G__2833.cljs$lang$maxFixedArity = 2;
G__2833.cljs$lang$applyTo = (function (arglist__2834){
var x = cljs.core.first(arglist__2834);
var y = cljs.core.first(cljs.core.next(arglist__2834));
var more = cljs.core.rest(cljs.core.next(arglist__2834));
return G__2833__delegate.call(this, x, y, more);
});
return G__2833;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2829.call(this,x);
case  2 :
return _SLASH___2830.call(this,x,y);
default:
return _SLASH___2831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2831.cljs$lang$applyTo;
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
var _LT___2835 = (function (x){
return true;
});
var _LT___2836 = (function (x,y){
return (x < y);
});
var _LT___2837 = (function() { 
var G__2839__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2840 = y;
var G__2841 = cljs.core.first.call(null,more);
var G__2842 = cljs.core.next.call(null,more);
x = G__2840;
y = G__2841;
more = G__2842;
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
var G__2839 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2839__delegate.call(this, x, y, more);
};
G__2839.cljs$lang$maxFixedArity = 2;
G__2839.cljs$lang$applyTo = (function (arglist__2843){
var x = cljs.core.first(arglist__2843);
var y = cljs.core.first(cljs.core.next(arglist__2843));
var more = cljs.core.rest(cljs.core.next(arglist__2843));
return G__2839__delegate.call(this, x, y, more);
});
return G__2839;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2835.call(this,x);
case  2 :
return _LT___2836.call(this,x,y);
default:
return _LT___2837.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2837.cljs$lang$applyTo;
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
var _LT__EQ___2844 = (function (x){
return true;
});
var _LT__EQ___2845 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2846 = (function() { 
var G__2848__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2849 = y;
var G__2850 = cljs.core.first.call(null,more);
var G__2851 = cljs.core.next.call(null,more);
x = G__2849;
y = G__2850;
more = G__2851;
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
var G__2848 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2848__delegate.call(this, x, y, more);
};
G__2848.cljs$lang$maxFixedArity = 2;
G__2848.cljs$lang$applyTo = (function (arglist__2852){
var x = cljs.core.first(arglist__2852);
var y = cljs.core.first(cljs.core.next(arglist__2852));
var more = cljs.core.rest(cljs.core.next(arglist__2852));
return G__2848__delegate.call(this, x, y, more);
});
return G__2848;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2844.call(this,x);
case  2 :
return _LT__EQ___2845.call(this,x,y);
default:
return _LT__EQ___2846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2846.cljs$lang$applyTo;
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
var _GT___2853 = (function (x){
return true;
});
var _GT___2854 = (function (x,y){
return (x > y);
});
var _GT___2855 = (function() { 
var G__2857__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2858 = y;
var G__2859 = cljs.core.first.call(null,more);
var G__2860 = cljs.core.next.call(null,more);
x = G__2858;
y = G__2859;
more = G__2860;
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
var G__2857 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2857__delegate.call(this, x, y, more);
};
G__2857.cljs$lang$maxFixedArity = 2;
G__2857.cljs$lang$applyTo = (function (arglist__2861){
var x = cljs.core.first(arglist__2861);
var y = cljs.core.first(cljs.core.next(arglist__2861));
var more = cljs.core.rest(cljs.core.next(arglist__2861));
return G__2857__delegate.call(this, x, y, more);
});
return G__2857;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2853.call(this,x);
case  2 :
return _GT___2854.call(this,x,y);
default:
return _GT___2855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2855.cljs$lang$applyTo;
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
var _GT__EQ___2862 = (function (x){
return true;
});
var _GT__EQ___2863 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2864 = (function() { 
var G__2866__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2867 = y;
var G__2868 = cljs.core.first.call(null,more);
var G__2869 = cljs.core.next.call(null,more);
x = G__2867;
y = G__2868;
more = G__2869;
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
var G__2866 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2866__delegate.call(this, x, y, more);
};
G__2866.cljs$lang$maxFixedArity = 2;
G__2866.cljs$lang$applyTo = (function (arglist__2870){
var x = cljs.core.first(arglist__2870);
var y = cljs.core.first(cljs.core.next(arglist__2870));
var more = cljs.core.rest(cljs.core.next(arglist__2870));
return G__2866__delegate.call(this, x, y, more);
});
return G__2866;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2862.call(this,x);
case  2 :
return _GT__EQ___2863.call(this,x,y);
default:
return _GT__EQ___2864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2864.cljs$lang$applyTo;
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
var max__2871 = (function (x){
return x;
});
var max__2872 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2873 = (function() { 
var G__2875__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2875 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2875__delegate.call(this, x, y, more);
};
G__2875.cljs$lang$maxFixedArity = 2;
G__2875.cljs$lang$applyTo = (function (arglist__2876){
var x = cljs.core.first(arglist__2876);
var y = cljs.core.first(cljs.core.next(arglist__2876));
var more = cljs.core.rest(cljs.core.next(arglist__2876));
return G__2875__delegate.call(this, x, y, more);
});
return G__2875;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2871.call(this,x);
case  2 :
return max__2872.call(this,x,y);
default:
return max__2873.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2873.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2877 = (function (x){
return x;
});
var min__2878 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2879 = (function() { 
var G__2881__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2881 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2881__delegate.call(this, x, y, more);
};
G__2881.cljs$lang$maxFixedArity = 2;
G__2881.cljs$lang$applyTo = (function (arglist__2882){
var x = cljs.core.first(arglist__2882);
var y = cljs.core.first(cljs.core.next(arglist__2882));
var more = cljs.core.rest(cljs.core.next(arglist__2882));
return G__2881__delegate.call(this, x, y, more);
});
return G__2881;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2877.call(this,x);
case  2 :
return min__2878.call(this,x,y);
default:
return min__2879.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2879.cljs$lang$applyTo;
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
var rem__2883 = (n % d);

return cljs.core.fix.call(null,((n - rem__2883) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2884 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2884));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2885 = (function (){
return Math.random.call(null);
});
var rand__2886 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2885.call(this);
case  1 :
return rand__2886.call(this,n);
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
var _EQ__EQ___2888 = (function (x){
return true;
});
var _EQ__EQ___2889 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2890 = (function() { 
var G__2892__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2893 = y;
var G__2894 = cljs.core.first.call(null,more);
var G__2895 = cljs.core.next.call(null,more);
x = G__2893;
y = G__2894;
more = G__2895;
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
var G__2892 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2892__delegate.call(this, x, y, more);
};
G__2892.cljs$lang$maxFixedArity = 2;
G__2892.cljs$lang$applyTo = (function (arglist__2896){
var x = cljs.core.first(arglist__2896);
var y = cljs.core.first(cljs.core.next(arglist__2896));
var more = cljs.core.rest(cljs.core.next(arglist__2896));
return G__2892__delegate.call(this, x, y, more);
});
return G__2892;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2888.call(this,x);
case  2 :
return _EQ__EQ___2889.call(this,x,y);
default:
return _EQ__EQ___2890.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2890.cljs$lang$applyTo;
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
var n__2897 = n;
var xs__2898 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2899 = xs__2898;

if(cljs.core.truth_(and__3546__auto____2899))
{return (n__2897 > 0);
} else
{return and__3546__auto____2899;
}
})()))
{{
var G__2900 = (n__2897 - 1);
var G__2901 = cljs.core.next.call(null,xs__2898);
n__2897 = G__2900;
xs__2898 = G__2901;
continue;
}
} else
{return xs__2898;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2906 = null;
var G__2906__2907 = (function (coll,n){
var temp__3695__auto____2902 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2902))
{var xs__2903 = temp__3695__auto____2902;

return cljs.core.first.call(null,xs__2903);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2906__2908 = (function (coll,n,not_found){
var temp__3695__auto____2904 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2904))
{var xs__2905 = temp__3695__auto____2904;

return cljs.core.first.call(null,xs__2905);
} else
{return not_found;
}
});
G__2906 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2906__2907.call(this,coll,n);
case  3 :
return G__2906__2908.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2906;
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
var str__2910 = (function (){
return "";
});
var str__2911 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2912 = (function() { 
var G__2914__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2915 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2916 = cljs.core.next.call(null,more);
sb = G__2915;
more = G__2916;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2914 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2914__delegate.call(this, x, ys);
};
G__2914.cljs$lang$maxFixedArity = 1;
G__2914.cljs$lang$applyTo = (function (arglist__2917){
var x = cljs.core.first(arglist__2917);
var ys = cljs.core.rest(arglist__2917);
return G__2914__delegate.call(this, x, ys);
});
return G__2914;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2910.call(this);
case  1 :
return str__2911.call(this,x);
default:
return str__2912.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2912.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2918 = (function (s,start){
return s.substring(start);
});
var subs__2919 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2918.call(this,s,start);
case  3 :
return subs__2919.call(this,s,start,end);
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
var symbol__2921 = (function (name){
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
var symbol__2922 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2921.call(this,ns);
case  2 :
return symbol__2922.call(this,ns,name);
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
var keyword__2924 = (function (name){
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
var keyword__2925 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2924.call(this,ns);
case  2 :
return keyword__2925.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2927 = cljs.core.seq.call(null,x);
var ys__2928 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2927)))
{return cljs.core.nil_QMARK_.call(null,ys__2928);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2928)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2927),cljs.core.first.call(null,ys__2928))))
{{
var G__2929 = cljs.core.next.call(null,xs__2927);
var G__2930 = cljs.core.next.call(null,ys__2928);
xs__2927 = G__2929;
ys__2928 = G__2930;
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
return cljs.core.reduce.call(null,(function (p1__2931_SHARP_,p2__2932_SHARP_){
return cljs.core.hash_combine.call(null,p1__2931_SHARP_,cljs.core.hash.call(null,p2__2932_SHARP_));
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
var this__2933 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2934 = this;
return (new cljs.core.List(this__2934.meta,o,coll,(this__2934.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2935 = this;
return this__2935.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2936 = this;
return this__2936.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2937 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2938 = this;
return this__2938.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2939 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2940 = this;
return (new cljs.core.List(meta,this__2940.first,this__2940.rest,this__2940.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2941 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2942 = this;
return this__2942.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2943 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2944 = this;
return this__2944.count;
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
var this__2945 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2946 = this;
return (new cljs.core.List(this__2946.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2947 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2948 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2949 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2950 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2951 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2952 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2953 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2954 = this;
return this__2954.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2955 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2956 = this;
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
list.cljs$lang$applyTo = (function (arglist__2957){
var items = cljs.core.seq( arglist__2957 );;
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
var this__2958 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2959 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2960 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2961 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2961.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2962 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2963 = this;
return this__2963.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2964 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2964.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2964.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2965 = this;
return this__2965.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2966 = this;
return (new cljs.core.Cons(meta,this__2966.first,this__2966.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2967 = null;
var G__2967__2968 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2967__2969 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2967 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2967__2968.call(this,string,f);
case  3 :
return G__2967__2969.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2967;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2971 = null;
var G__2971__2972 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2971__2973 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2971 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2971__2972.call(this,string,k);
case  3 :
return G__2971__2973.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2971;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2975 = null;
var G__2975__2976 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2975__2977 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2975 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2975__2976.call(this,string,n);
case  3 :
return G__2975__2977.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2975;
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
var G__2979 = null;
var G__2979__2980 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2979__2981 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2979 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2979__2980.call(this,_,coll);
case  3 :
return G__2979__2981.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2979;
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
var x__2983 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2983;
} else
{lazy_seq.x = x__2983.call(null);
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
var this__2984 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2985 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2986 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2987 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2987.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2988 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2989 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2990 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2991 = this;
return this__2991.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2992 = this;
return (new cljs.core.LazySeq(meta,this__2992.realized,this__2992.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2993 = cljs.core.array.call(null);

var s__2994 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2994)))
{ary__2993.push(cljs.core.first.call(null,s__2994));
{
var G__2995 = cljs.core.next.call(null,s__2994);
s__2994 = G__2995;
continue;
}
} else
{return ary__2993;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2996 = s;
var i__2997 = n;
var sum__2998 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2999 = (i__2997 > 0);

if(cljs.core.truth_(and__3546__auto____2999))
{return cljs.core.seq.call(null,s__2996);
} else
{return and__3546__auto____2999;
}
})()))
{{
var G__3000 = cljs.core.next.call(null,s__2996);
var G__3001 = (i__2997 - 1);
var G__3002 = (sum__2998 + 1);
s__2996 = G__3000;
i__2997 = G__3001;
sum__2998 = G__3002;
continue;
}
} else
{return sum__2998;
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
var concat__3006 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3007 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3008 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3003 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3003))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3003),concat.call(null,cljs.core.rest.call(null,s__3003),y));
} else
{return y;
}
})));
});
var concat__3009 = (function() { 
var G__3011__delegate = function (x,y,zs){
var cat__3005 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3004 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3004))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3004),cat.call(null,cljs.core.rest.call(null,xys__3004),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3005.call(null,concat.call(null,x,y),zs);
};
var G__3011 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3011__delegate.call(this, x, y, zs);
};
G__3011.cljs$lang$maxFixedArity = 2;
G__3011.cljs$lang$applyTo = (function (arglist__3012){
var x = cljs.core.first(arglist__3012);
var y = cljs.core.first(cljs.core.next(arglist__3012));
var zs = cljs.core.rest(cljs.core.next(arglist__3012));
return G__3011__delegate.call(this, x, y, zs);
});
return G__3011;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3006.call(this);
case  1 :
return concat__3007.call(this,x);
case  2 :
return concat__3008.call(this,x,y);
default:
return concat__3009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3009.cljs$lang$applyTo;
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
var list_STAR___3013 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3014 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3015 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3016 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3017 = (function() { 
var G__3019__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3019 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3019__delegate.call(this, a, b, c, d, more);
};
G__3019.cljs$lang$maxFixedArity = 4;
G__3019.cljs$lang$applyTo = (function (arglist__3020){
var a = cljs.core.first(arglist__3020);
var b = cljs.core.first(cljs.core.next(arglist__3020));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3020)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3020))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3020))));
return G__3019__delegate.call(this, a, b, c, d, more);
});
return G__3019;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3013.call(this,a);
case  2 :
return list_STAR___3014.call(this,a,b);
case  3 :
return list_STAR___3015.call(this,a,b,c);
case  4 :
return list_STAR___3016.call(this,a,b,c,d);
default:
return list_STAR___3017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3017.cljs$lang$applyTo;
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
var apply__3030 = (function (f,args){
var fixed_arity__3021 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3021 + 1)) <= fixed_arity__3021)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3031 = (function (f,x,args){
var arglist__3022 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3023 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3022,fixed_arity__3023) <= fixed_arity__3023)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3022));
} else
{return f.cljs$lang$applyTo(arglist__3022);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3022));
}
});
var apply__3032 = (function (f,x,y,args){
var arglist__3024 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3025 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3024,fixed_arity__3025) <= fixed_arity__3025)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3024));
} else
{return f.cljs$lang$applyTo(arglist__3024);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3024));
}
});
var apply__3033 = (function (f,x,y,z,args){
var arglist__3026 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3027 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3026,fixed_arity__3027) <= fixed_arity__3027)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3026));
} else
{return f.cljs$lang$applyTo(arglist__3026);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3026));
}
});
var apply__3034 = (function() { 
var G__3036__delegate = function (f,a,b,c,d,args){
var arglist__3028 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3029 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3028,fixed_arity__3029) <= fixed_arity__3029)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3028));
} else
{return f.cljs$lang$applyTo(arglist__3028);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3028));
}
};
var G__3036 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3036__delegate.call(this, f, a, b, c, d, args);
};
G__3036.cljs$lang$maxFixedArity = 5;
G__3036.cljs$lang$applyTo = (function (arglist__3037){
var f = cljs.core.first(arglist__3037);
var a = cljs.core.first(cljs.core.next(arglist__3037));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3037)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3037))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3037)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3037)))));
return G__3036__delegate.call(this, f, a, b, c, d, args);
});
return G__3036;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3030.call(this,f,a);
case  3 :
return apply__3031.call(this,f,a,b);
case  4 :
return apply__3032.call(this,f,a,b,c);
case  5 :
return apply__3033.call(this,f,a,b,c,d);
default:
return apply__3034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3034.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3038){
var obj = cljs.core.first(arglist__3038);
var f = cljs.core.first(cljs.core.next(arglist__3038));
var args = cljs.core.rest(cljs.core.next(arglist__3038));
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
var not_EQ___3039 = (function (x){
return false;
});
var not_EQ___3040 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3041 = (function() { 
var G__3043__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3043 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3043__delegate.call(this, x, y, more);
};
G__3043.cljs$lang$maxFixedArity = 2;
G__3043.cljs$lang$applyTo = (function (arglist__3044){
var x = cljs.core.first(arglist__3044);
var y = cljs.core.first(cljs.core.next(arglist__3044));
var more = cljs.core.rest(cljs.core.next(arglist__3044));
return G__3043__delegate.call(this, x, y, more);
});
return G__3043;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3039.call(this,x);
case  2 :
return not_EQ___3040.call(this,x,y);
default:
return not_EQ___3041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3041.cljs$lang$applyTo;
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
var G__3045 = pred;
var G__3046 = cljs.core.next.call(null,coll);
pred = G__3045;
coll = G__3046;
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
{var or__3548__auto____3047 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3047))
{return or__3548__auto____3047;
} else
{{
var G__3048 = pred;
var G__3049 = cljs.core.next.call(null,coll);
pred = G__3048;
coll = G__3049;
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
var G__3050 = null;
var G__3050__3051 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3050__3052 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3050__3053 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3050__3054 = (function() { 
var G__3056__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3056 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3056__delegate.call(this, x, y, zs);
};
G__3056.cljs$lang$maxFixedArity = 2;
G__3056.cljs$lang$applyTo = (function (arglist__3057){
var x = cljs.core.first(arglist__3057);
var y = cljs.core.first(cljs.core.next(arglist__3057));
var zs = cljs.core.rest(cljs.core.next(arglist__3057));
return G__3056__delegate.call(this, x, y, zs);
});
return G__3056;
})()
;
G__3050 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3050__3051.call(this);
case  1 :
return G__3050__3052.call(this,x);
case  2 :
return G__3050__3053.call(this,x,y);
default:
return G__3050__3054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3050.cljs$lang$maxFixedArity = 2;
G__3050.cljs$lang$applyTo = G__3050__3054.cljs$lang$applyTo;
return G__3050;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3058__delegate = function (args){
return x;
};
var G__3058 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3058__delegate.call(this, args);
};
G__3058.cljs$lang$maxFixedArity = 0;
G__3058.cljs$lang$applyTo = (function (arglist__3059){
var args = cljs.core.seq( arglist__3059 );;
return G__3058__delegate.call(this, args);
});
return G__3058;
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
var comp__3063 = (function (){
return cljs.core.identity;
});
var comp__3064 = (function (f){
return f;
});
var comp__3065 = (function (f,g){
return (function() {
var G__3069 = null;
var G__3069__3070 = (function (){
return f.call(null,g.call(null));
});
var G__3069__3071 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3069__3072 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3069__3073 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3069__3074 = (function() { 
var G__3076__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
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
G__3069 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3069__3070.call(this);
case  1 :
return G__3069__3071.call(this,x);
case  2 :
return G__3069__3072.call(this,x,y);
case  3 :
return G__3069__3073.call(this,x,y,z);
default:
return G__3069__3074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3069.cljs$lang$maxFixedArity = 3;
G__3069.cljs$lang$applyTo = G__3069__3074.cljs$lang$applyTo;
return G__3069;
})()
});
var comp__3066 = (function (f,g,h){
return (function() {
var G__3078 = null;
var G__3078__3079 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3078__3080 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3078__3081 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3078__3082 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3078__3083 = (function() { 
var G__3085__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3085 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3085__delegate.call(this, x, y, z, args);
};
G__3085.cljs$lang$maxFixedArity = 3;
G__3085.cljs$lang$applyTo = (function (arglist__3086){
var x = cljs.core.first(arglist__3086);
var y = cljs.core.first(cljs.core.next(arglist__3086));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3086)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3086)));
return G__3085__delegate.call(this, x, y, z, args);
});
return G__3085;
})()
;
G__3078 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3078__3079.call(this);
case  1 :
return G__3078__3080.call(this,x);
case  2 :
return G__3078__3081.call(this,x,y);
case  3 :
return G__3078__3082.call(this,x,y,z);
default:
return G__3078__3083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3078.cljs$lang$maxFixedArity = 3;
G__3078.cljs$lang$applyTo = G__3078__3083.cljs$lang$applyTo;
return G__3078;
})()
});
var comp__3067 = (function() { 
var G__3087__delegate = function (f1,f2,f3,fs){
var fs__3060 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3088__delegate = function (args){
var ret__3061 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3060),args);
var fs__3062 = cljs.core.next.call(null,fs__3060);

while(true){
if(cljs.core.truth_(fs__3062))
{{
var G__3089 = cljs.core.first.call(null,fs__3062).call(null,ret__3061);
var G__3090 = cljs.core.next.call(null,fs__3062);
ret__3061 = G__3089;
fs__3062 = G__3090;
continue;
}
} else
{return ret__3061;
}
break;
}
};
var G__3088 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3088__delegate.call(this, args);
};
G__3088.cljs$lang$maxFixedArity = 0;
G__3088.cljs$lang$applyTo = (function (arglist__3091){
var args = cljs.core.seq( arglist__3091 );;
return G__3088__delegate.call(this, args);
});
return G__3088;
})()
;
};
var G__3087 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3087__delegate.call(this, f1, f2, f3, fs);
};
G__3087.cljs$lang$maxFixedArity = 3;
G__3087.cljs$lang$applyTo = (function (arglist__3092){
var f1 = cljs.core.first(arglist__3092);
var f2 = cljs.core.first(cljs.core.next(arglist__3092));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3092)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3092)));
return G__3087__delegate.call(this, f1, f2, f3, fs);
});
return G__3087;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3063.call(this);
case  1 :
return comp__3064.call(this,f1);
case  2 :
return comp__3065.call(this,f1,f2);
case  3 :
return comp__3066.call(this,f1,f2,f3);
default:
return comp__3067.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3067.cljs$lang$applyTo;
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
var partial__3093 = (function (f,arg1){
return (function() { 
var G__3098__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3098 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3098__delegate.call(this, args);
};
G__3098.cljs$lang$maxFixedArity = 0;
G__3098.cljs$lang$applyTo = (function (arglist__3099){
var args = cljs.core.seq( arglist__3099 );;
return G__3098__delegate.call(this, args);
});
return G__3098;
})()
;
});
var partial__3094 = (function (f,arg1,arg2){
return (function() { 
var G__3100__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3100 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3100__delegate.call(this, args);
};
G__3100.cljs$lang$maxFixedArity = 0;
G__3100.cljs$lang$applyTo = (function (arglist__3101){
var args = cljs.core.seq( arglist__3101 );;
return G__3100__delegate.call(this, args);
});
return G__3100;
})()
;
});
var partial__3095 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3102__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3102 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3102__delegate.call(this, args);
};
G__3102.cljs$lang$maxFixedArity = 0;
G__3102.cljs$lang$applyTo = (function (arglist__3103){
var args = cljs.core.seq( arglist__3103 );;
return G__3102__delegate.call(this, args);
});
return G__3102;
})()
;
});
var partial__3096 = (function() { 
var G__3104__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3105__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3105 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3105__delegate.call(this, args);
};
G__3105.cljs$lang$maxFixedArity = 0;
G__3105.cljs$lang$applyTo = (function (arglist__3106){
var args = cljs.core.seq( arglist__3106 );;
return G__3105__delegate.call(this, args);
});
return G__3105;
})()
;
};
var G__3104 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3104__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3104.cljs$lang$maxFixedArity = 4;
G__3104.cljs$lang$applyTo = (function (arglist__3107){
var f = cljs.core.first(arglist__3107);
var arg1 = cljs.core.first(cljs.core.next(arglist__3107));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3107)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3107))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3107))));
return G__3104__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3104;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3093.call(this,f,arg1);
case  3 :
return partial__3094.call(this,f,arg1,arg2);
case  4 :
return partial__3095.call(this,f,arg1,arg2,arg3);
default:
return partial__3096.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3096.cljs$lang$applyTo;
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
var fnil__3108 = (function (f,x){
return (function() {
var G__3112 = null;
var G__3112__3113 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3112__3114 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3112__3115 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3112__3116 = (function() { 
var G__3118__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3118 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3118__delegate.call(this, a, b, c, ds);
};
G__3118.cljs$lang$maxFixedArity = 3;
G__3118.cljs$lang$applyTo = (function (arglist__3119){
var a = cljs.core.first(arglist__3119);
var b = cljs.core.first(cljs.core.next(arglist__3119));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3119)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3119)));
return G__3118__delegate.call(this, a, b, c, ds);
});
return G__3118;
})()
;
G__3112 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3112__3113.call(this,a);
case  2 :
return G__3112__3114.call(this,a,b);
case  3 :
return G__3112__3115.call(this,a,b,c);
default:
return G__3112__3116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3112.cljs$lang$maxFixedArity = 3;
G__3112.cljs$lang$applyTo = G__3112__3116.cljs$lang$applyTo;
return G__3112;
})()
});
var fnil__3109 = (function (f,x,y){
return (function() {
var G__3120 = null;
var G__3120__3121 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3120__3122 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3120__3123 = (function() { 
var G__3125__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3125 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3125__delegate.call(this, a, b, c, ds);
};
G__3125.cljs$lang$maxFixedArity = 3;
G__3125.cljs$lang$applyTo = (function (arglist__3126){
var a = cljs.core.first(arglist__3126);
var b = cljs.core.first(cljs.core.next(arglist__3126));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3126)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3126)));
return G__3125__delegate.call(this, a, b, c, ds);
});
return G__3125;
})()
;
G__3120 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3120__3121.call(this,a,b);
case  3 :
return G__3120__3122.call(this,a,b,c);
default:
return G__3120__3123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3120.cljs$lang$maxFixedArity = 3;
G__3120.cljs$lang$applyTo = G__3120__3123.cljs$lang$applyTo;
return G__3120;
})()
});
var fnil__3110 = (function (f,x,y,z){
return (function() {
var G__3127 = null;
var G__3127__3128 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3127__3129 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3127__3130 = (function() { 
var G__3132__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3132 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3132__delegate.call(this, a, b, c, ds);
};
G__3132.cljs$lang$maxFixedArity = 3;
G__3132.cljs$lang$applyTo = (function (arglist__3133){
var a = cljs.core.first(arglist__3133);
var b = cljs.core.first(cljs.core.next(arglist__3133));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3133)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3133)));
return G__3132__delegate.call(this, a, b, c, ds);
});
return G__3132;
})()
;
G__3127 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3127__3128.call(this,a,b);
case  3 :
return G__3127__3129.call(this,a,b,c);
default:
return G__3127__3130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3127.cljs$lang$maxFixedArity = 3;
G__3127.cljs$lang$applyTo = G__3127__3130.cljs$lang$applyTo;
return G__3127;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3108.call(this,f,x);
case  3 :
return fnil__3109.call(this,f,x,y);
case  4 :
return fnil__3110.call(this,f,x,y,z);
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
var mapi__3136 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3134 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3134))
{var s__3135 = temp__3698__auto____3134;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3135)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3135)));
} else
{return null;
}
})));
});

return mapi__3136.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3137 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3137))
{var s__3138 = temp__3698__auto____3137;

var x__3139 = f.call(null,cljs.core.first.call(null,s__3138));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3139)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3138));
} else
{return cljs.core.cons.call(null,x__3139,keep.call(null,f,cljs.core.rest.call(null,s__3138)));
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
var keepi__3149 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3146 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3146))
{var s__3147 = temp__3698__auto____3146;

var x__3148 = f.call(null,idx,cljs.core.first.call(null,s__3147));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3148)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3147));
} else
{return cljs.core.cons.call(null,x__3148,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3147)));
}
} else
{return null;
}
})));
});

return keepi__3149.call(null,0,coll);
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
var every_pred__3194 = (function (p){
return (function() {
var ep1 = null;
var ep1__3199 = (function (){
return true;
});
var ep1__3200 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3201 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3156 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3156))
{return p.call(null,y);
} else
{return and__3546__auto____3156;
}
})());
});
var ep1__3202 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3157 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3157))
{var and__3546__auto____3158 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3158))
{return p.call(null,z);
} else
{return and__3546__auto____3158;
}
} else
{return and__3546__auto____3157;
}
})());
});
var ep1__3203 = (function() { 
var G__3205__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3159 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3159))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3159;
}
})());
};
var G__3205 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3205__delegate.call(this, x, y, z, args);
};
G__3205.cljs$lang$maxFixedArity = 3;
G__3205.cljs$lang$applyTo = (function (arglist__3206){
var x = cljs.core.first(arglist__3206);
var y = cljs.core.first(cljs.core.next(arglist__3206));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3206)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3206)));
return G__3205__delegate.call(this, x, y, z, args);
});
return G__3205;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3199.call(this);
case  1 :
return ep1__3200.call(this,x);
case  2 :
return ep1__3201.call(this,x,y);
case  3 :
return ep1__3202.call(this,x,y,z);
default:
return ep1__3203.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3203.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3195 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3207 = (function (){
return true;
});
var ep2__3208 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3160 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3160))
{return p2.call(null,x);
} else
{return and__3546__auto____3160;
}
})());
});
var ep2__3209 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3161 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3161))
{var and__3546__auto____3162 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3162))
{var and__3546__auto____3163 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3163))
{return p2.call(null,y);
} else
{return and__3546__auto____3163;
}
} else
{return and__3546__auto____3162;
}
} else
{return and__3546__auto____3161;
}
})());
});
var ep2__3210 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3164 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3164))
{var and__3546__auto____3165 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3165))
{var and__3546__auto____3166 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3166))
{var and__3546__auto____3167 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3167))
{var and__3546__auto____3168 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3168))
{return p2.call(null,z);
} else
{return and__3546__auto____3168;
}
} else
{return and__3546__auto____3167;
}
} else
{return and__3546__auto____3166;
}
} else
{return and__3546__auto____3165;
}
} else
{return and__3546__auto____3164;
}
})());
});
var ep2__3211 = (function() { 
var G__3213__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3169 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3169))
{return cljs.core.every_QMARK_.call(null,(function (p1__3140_SHARP_){
var and__3546__auto____3170 = p1.call(null,p1__3140_SHARP_);

if(cljs.core.truth_(and__3546__auto____3170))
{return p2.call(null,p1__3140_SHARP_);
} else
{return and__3546__auto____3170;
}
}),args);
} else
{return and__3546__auto____3169;
}
})());
};
var G__3213 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3213__delegate.call(this, x, y, z, args);
};
G__3213.cljs$lang$maxFixedArity = 3;
G__3213.cljs$lang$applyTo = (function (arglist__3214){
var x = cljs.core.first(arglist__3214);
var y = cljs.core.first(cljs.core.next(arglist__3214));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3214)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3214)));
return G__3213__delegate.call(this, x, y, z, args);
});
return G__3213;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3207.call(this);
case  1 :
return ep2__3208.call(this,x);
case  2 :
return ep2__3209.call(this,x,y);
case  3 :
return ep2__3210.call(this,x,y,z);
default:
return ep2__3211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3211.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3196 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3215 = (function (){
return true;
});
var ep3__3216 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3171 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3171))
{var and__3546__auto____3172 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3172))
{return p3.call(null,x);
} else
{return and__3546__auto____3172;
}
} else
{return and__3546__auto____3171;
}
})());
});
var ep3__3217 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3173 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3173))
{var and__3546__auto____3174 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3174))
{var and__3546__auto____3175 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3175))
{var and__3546__auto____3176 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3176))
{var and__3546__auto____3177 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3177))
{return p3.call(null,y);
} else
{return and__3546__auto____3177;
}
} else
{return and__3546__auto____3176;
}
} else
{return and__3546__auto____3175;
}
} else
{return and__3546__auto____3174;
}
} else
{return and__3546__auto____3173;
}
})());
});
var ep3__3218 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3178 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3178))
{var and__3546__auto____3179 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3179))
{var and__3546__auto____3180 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3180))
{var and__3546__auto____3181 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3181))
{var and__3546__auto____3182 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3182))
{var and__3546__auto____3183 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3183))
{var and__3546__auto____3184 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3184))
{var and__3546__auto____3185 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3185))
{return p3.call(null,z);
} else
{return and__3546__auto____3185;
}
} else
{return and__3546__auto____3184;
}
} else
{return and__3546__auto____3183;
}
} else
{return and__3546__auto____3182;
}
} else
{return and__3546__auto____3181;
}
} else
{return and__3546__auto____3180;
}
} else
{return and__3546__auto____3179;
}
} else
{return and__3546__auto____3178;
}
})());
});
var ep3__3219 = (function() { 
var G__3221__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3186 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3186))
{return cljs.core.every_QMARK_.call(null,(function (p1__3141_SHARP_){
var and__3546__auto____3187 = p1.call(null,p1__3141_SHARP_);

if(cljs.core.truth_(and__3546__auto____3187))
{var and__3546__auto____3188 = p2.call(null,p1__3141_SHARP_);

if(cljs.core.truth_(and__3546__auto____3188))
{return p3.call(null,p1__3141_SHARP_);
} else
{return and__3546__auto____3188;
}
} else
{return and__3546__auto____3187;
}
}),args);
} else
{return and__3546__auto____3186;
}
})());
};
var G__3221 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3221__delegate.call(this, x, y, z, args);
};
G__3221.cljs$lang$maxFixedArity = 3;
G__3221.cljs$lang$applyTo = (function (arglist__3222){
var x = cljs.core.first(arglist__3222);
var y = cljs.core.first(cljs.core.next(arglist__3222));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3222)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3222)));
return G__3221__delegate.call(this, x, y, z, args);
});
return G__3221;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3215.call(this);
case  1 :
return ep3__3216.call(this,x);
case  2 :
return ep3__3217.call(this,x,y);
case  3 :
return ep3__3218.call(this,x,y,z);
default:
return ep3__3219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3219.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3197 = (function() { 
var G__3223__delegate = function (p1,p2,p3,ps){
var ps__3189 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3224 = (function (){
return true;
});
var epn__3225 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3142_SHARP_){
return p1__3142_SHARP_.call(null,x);
}),ps__3189);
});
var epn__3226 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3143_SHARP_){
var and__3546__auto____3190 = p1__3143_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3190))
{return p1__3143_SHARP_.call(null,y);
} else
{return and__3546__auto____3190;
}
}),ps__3189);
});
var epn__3227 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3144_SHARP_){
var and__3546__auto____3191 = p1__3144_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3191))
{var and__3546__auto____3192 = p1__3144_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3192))
{return p1__3144_SHARP_.call(null,z);
} else
{return and__3546__auto____3192;
}
} else
{return and__3546__auto____3191;
}
}),ps__3189);
});
var epn__3228 = (function() { 
var G__3230__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3193 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3193))
{return cljs.core.every_QMARK_.call(null,(function (p1__3145_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3145_SHARP_,args);
}),ps__3189);
} else
{return and__3546__auto____3193;
}
})());
};
var G__3230 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3230__delegate.call(this, x, y, z, args);
};
G__3230.cljs$lang$maxFixedArity = 3;
G__3230.cljs$lang$applyTo = (function (arglist__3231){
var x = cljs.core.first(arglist__3231);
var y = cljs.core.first(cljs.core.next(arglist__3231));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3231)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3231)));
return G__3230__delegate.call(this, x, y, z, args);
});
return G__3230;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3224.call(this);
case  1 :
return epn__3225.call(this,x);
case  2 :
return epn__3226.call(this,x,y);
case  3 :
return epn__3227.call(this,x,y,z);
default:
return epn__3228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3228.cljs$lang$applyTo;
return epn;
})()
};
var G__3223 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3223__delegate.call(this, p1, p2, p3, ps);
};
G__3223.cljs$lang$maxFixedArity = 3;
G__3223.cljs$lang$applyTo = (function (arglist__3232){
var p1 = cljs.core.first(arglist__3232);
var p2 = cljs.core.first(cljs.core.next(arglist__3232));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3232)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3232)));
return G__3223__delegate.call(this, p1, p2, p3, ps);
});
return G__3223;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3194.call(this,p1);
case  2 :
return every_pred__3195.call(this,p1,p2);
case  3 :
return every_pred__3196.call(this,p1,p2,p3);
default:
return every_pred__3197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3197.cljs$lang$applyTo;
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
var some_fn__3272 = (function (p){
return (function() {
var sp1 = null;
var sp1__3277 = (function (){
return null;
});
var sp1__3278 = (function (x){
return p.call(null,x);
});
var sp1__3279 = (function (x,y){
var or__3548__auto____3234 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3234))
{return or__3548__auto____3234;
} else
{return p.call(null,y);
}
});
var sp1__3280 = (function (x,y,z){
var or__3548__auto____3235 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3235))
{return or__3548__auto____3235;
} else
{var or__3548__auto____3236 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3236))
{return or__3548__auto____3236;
} else
{return p.call(null,z);
}
}
});
var sp1__3281 = (function() { 
var G__3283__delegate = function (x,y,z,args){
var or__3548__auto____3237 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3237))
{return or__3548__auto____3237;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3283 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3283__delegate.call(this, x, y, z, args);
};
G__3283.cljs$lang$maxFixedArity = 3;
G__3283.cljs$lang$applyTo = (function (arglist__3284){
var x = cljs.core.first(arglist__3284);
var y = cljs.core.first(cljs.core.next(arglist__3284));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3284)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3284)));
return G__3283__delegate.call(this, x, y, z, args);
});
return G__3283;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3277.call(this);
case  1 :
return sp1__3278.call(this,x);
case  2 :
return sp1__3279.call(this,x,y);
case  3 :
return sp1__3280.call(this,x,y,z);
default:
return sp1__3281.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3281.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3273 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3285 = (function (){
return null;
});
var sp2__3286 = (function (x){
var or__3548__auto____3238 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3238))
{return or__3548__auto____3238;
} else
{return p2.call(null,x);
}
});
var sp2__3287 = (function (x,y){
var or__3548__auto____3239 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3239))
{return or__3548__auto____3239;
} else
{var or__3548__auto____3240 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3240))
{return or__3548__auto____3240;
} else
{var or__3548__auto____3241 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3241))
{return or__3548__auto____3241;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3288 = (function (x,y,z){
var or__3548__auto____3242 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3242))
{return or__3548__auto____3242;
} else
{var or__3548__auto____3243 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3243))
{return or__3548__auto____3243;
} else
{var or__3548__auto____3244 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3244))
{return or__3548__auto____3244;
} else
{var or__3548__auto____3245 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3245))
{return or__3548__auto____3245;
} else
{var or__3548__auto____3246 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3246))
{return or__3548__auto____3246;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3289 = (function() { 
var G__3291__delegate = function (x,y,z,args){
var or__3548__auto____3247 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3247))
{return or__3548__auto____3247;
} else
{return cljs.core.some.call(null,(function (p1__3150_SHARP_){
var or__3548__auto____3248 = p1.call(null,p1__3150_SHARP_);

if(cljs.core.truth_(or__3548__auto____3248))
{return or__3548__auto____3248;
} else
{return p2.call(null,p1__3150_SHARP_);
}
}),args);
}
};
var G__3291 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3291__delegate.call(this, x, y, z, args);
};
G__3291.cljs$lang$maxFixedArity = 3;
G__3291.cljs$lang$applyTo = (function (arglist__3292){
var x = cljs.core.first(arglist__3292);
var y = cljs.core.first(cljs.core.next(arglist__3292));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3292)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3292)));
return G__3291__delegate.call(this, x, y, z, args);
});
return G__3291;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3285.call(this);
case  1 :
return sp2__3286.call(this,x);
case  2 :
return sp2__3287.call(this,x,y);
case  3 :
return sp2__3288.call(this,x,y,z);
default:
return sp2__3289.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3289.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3274 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3293 = (function (){
return null;
});
var sp3__3294 = (function (x){
var or__3548__auto____3249 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3249))
{return or__3548__auto____3249;
} else
{var or__3548__auto____3250 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3250))
{return or__3548__auto____3250;
} else
{return p3.call(null,x);
}
}
});
var sp3__3295 = (function (x,y){
var or__3548__auto____3251 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3251))
{return or__3548__auto____3251;
} else
{var or__3548__auto____3252 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3252))
{return or__3548__auto____3252;
} else
{var or__3548__auto____3253 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3253))
{return or__3548__auto____3253;
} else
{var or__3548__auto____3254 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3254))
{return or__3548__auto____3254;
} else
{var or__3548__auto____3255 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3255))
{return or__3548__auto____3255;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3296 = (function (x,y,z){
var or__3548__auto____3256 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3256))
{return or__3548__auto____3256;
} else
{var or__3548__auto____3257 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3257))
{return or__3548__auto____3257;
} else
{var or__3548__auto____3258 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3258))
{return or__3548__auto____3258;
} else
{var or__3548__auto____3259 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3259))
{return or__3548__auto____3259;
} else
{var or__3548__auto____3260 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3260))
{return or__3548__auto____3260;
} else
{var or__3548__auto____3261 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3261))
{return or__3548__auto____3261;
} else
{var or__3548__auto____3262 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3262))
{return or__3548__auto____3262;
} else
{var or__3548__auto____3263 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3263))
{return or__3548__auto____3263;
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
var sp3__3297 = (function() { 
var G__3299__delegate = function (x,y,z,args){
var or__3548__auto____3264 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3264))
{return or__3548__auto____3264;
} else
{return cljs.core.some.call(null,(function (p1__3151_SHARP_){
var or__3548__auto____3265 = p1.call(null,p1__3151_SHARP_);

if(cljs.core.truth_(or__3548__auto____3265))
{return or__3548__auto____3265;
} else
{var or__3548__auto____3266 = p2.call(null,p1__3151_SHARP_);

if(cljs.core.truth_(or__3548__auto____3266))
{return or__3548__auto____3266;
} else
{return p3.call(null,p1__3151_SHARP_);
}
}
}),args);
}
};
var G__3299 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3299__delegate.call(this, x, y, z, args);
};
G__3299.cljs$lang$maxFixedArity = 3;
G__3299.cljs$lang$applyTo = (function (arglist__3300){
var x = cljs.core.first(arglist__3300);
var y = cljs.core.first(cljs.core.next(arglist__3300));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3300)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3300)));
return G__3299__delegate.call(this, x, y, z, args);
});
return G__3299;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3293.call(this);
case  1 :
return sp3__3294.call(this,x);
case  2 :
return sp3__3295.call(this,x,y);
case  3 :
return sp3__3296.call(this,x,y,z);
default:
return sp3__3297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3297.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3275 = (function() { 
var G__3301__delegate = function (p1,p2,p3,ps){
var ps__3267 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3302 = (function (){
return null;
});
var spn__3303 = (function (x){
return cljs.core.some.call(null,(function (p1__3152_SHARP_){
return p1__3152_SHARP_.call(null,x);
}),ps__3267);
});
var spn__3304 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3153_SHARP_){
var or__3548__auto____3268 = p1__3153_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3268))
{return or__3548__auto____3268;
} else
{return p1__3153_SHARP_.call(null,y);
}
}),ps__3267);
});
var spn__3305 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3154_SHARP_){
var or__3548__auto____3269 = p1__3154_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3269))
{return or__3548__auto____3269;
} else
{var or__3548__auto____3270 = p1__3154_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3270))
{return or__3548__auto____3270;
} else
{return p1__3154_SHARP_.call(null,z);
}
}
}),ps__3267);
});
var spn__3306 = (function() { 
var G__3308__delegate = function (x,y,z,args){
var or__3548__auto____3271 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3271))
{return or__3548__auto____3271;
} else
{return cljs.core.some.call(null,(function (p1__3155_SHARP_){
return cljs.core.some.call(null,p1__3155_SHARP_,args);
}),ps__3267);
}
};
var G__3308 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3308__delegate.call(this, x, y, z, args);
};
G__3308.cljs$lang$maxFixedArity = 3;
G__3308.cljs$lang$applyTo = (function (arglist__3309){
var x = cljs.core.first(arglist__3309);
var y = cljs.core.first(cljs.core.next(arglist__3309));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3309)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3309)));
return G__3308__delegate.call(this, x, y, z, args);
});
return G__3308;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3302.call(this);
case  1 :
return spn__3303.call(this,x);
case  2 :
return spn__3304.call(this,x,y);
case  3 :
return spn__3305.call(this,x,y,z);
default:
return spn__3306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3306.cljs$lang$applyTo;
return spn;
})()
};
var G__3301 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3301__delegate.call(this, p1, p2, p3, ps);
};
G__3301.cljs$lang$maxFixedArity = 3;
G__3301.cljs$lang$applyTo = (function (arglist__3310){
var p1 = cljs.core.first(arglist__3310);
var p2 = cljs.core.first(cljs.core.next(arglist__3310));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3310)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3310)));
return G__3301__delegate.call(this, p1, p2, p3, ps);
});
return G__3301;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3272.call(this,p1);
case  2 :
return some_fn__3273.call(this,p1,p2);
case  3 :
return some_fn__3274.call(this,p1,p2,p3);
default:
return some_fn__3275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3275.cljs$lang$applyTo;
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
var map__3323 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3311 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3311))
{var s__3312 = temp__3698__auto____3311;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3312)),map.call(null,f,cljs.core.rest.call(null,s__3312)));
} else
{return null;
}
})));
});
var map__3324 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3313 = cljs.core.seq.call(null,c1);
var s2__3314 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3315 = s1__3313;

if(cljs.core.truth_(and__3546__auto____3315))
{return s2__3314;
} else
{return and__3546__auto____3315;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3313),cljs.core.first.call(null,s2__3314)),map.call(null,f,cljs.core.rest.call(null,s1__3313),cljs.core.rest.call(null,s2__3314)));
} else
{return null;
}
})));
});
var map__3325 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3316 = cljs.core.seq.call(null,c1);
var s2__3317 = cljs.core.seq.call(null,c2);
var s3__3318 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3319 = s1__3316;

if(cljs.core.truth_(and__3546__auto____3319))
{var and__3546__auto____3320 = s2__3317;

if(cljs.core.truth_(and__3546__auto____3320))
{return s3__3318;
} else
{return and__3546__auto____3320;
}
} else
{return and__3546__auto____3319;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3316),cljs.core.first.call(null,s2__3317),cljs.core.first.call(null,s3__3318)),map.call(null,f,cljs.core.rest.call(null,s1__3316),cljs.core.rest.call(null,s2__3317),cljs.core.rest.call(null,s3__3318)));
} else
{return null;
}
})));
});
var map__3326 = (function() { 
var G__3328__delegate = function (f,c1,c2,c3,colls){
var step__3322 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3321 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3321)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3321),step.call(null,map.call(null,cljs.core.rest,ss__3321)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3233_SHARP_){
return cljs.core.apply.call(null,f,p1__3233_SHARP_);
}),step__3322.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3328 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3328__delegate.call(this, f, c1, c2, c3, colls);
};
G__3328.cljs$lang$maxFixedArity = 4;
G__3328.cljs$lang$applyTo = (function (arglist__3329){
var f = cljs.core.first(arglist__3329);
var c1 = cljs.core.first(cljs.core.next(arglist__3329));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3329)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3329))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3329))));
return G__3328__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3328;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3323.call(this,f,c1);
case  3 :
return map__3324.call(this,f,c1,c2);
case  4 :
return map__3325.call(this,f,c1,c2,c3);
default:
return map__3326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3326.cljs$lang$applyTo;
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
{var temp__3698__auto____3330 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3330))
{var s__3331 = temp__3698__auto____3330;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3331),take.call(null,(n - 1),cljs.core.rest.call(null,s__3331)));
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
var step__3334 = (function (n,coll){
while(true){
var s__3332 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3333 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3333))
{return s__3332;
} else
{return and__3546__auto____3333;
}
})()))
{{
var G__3335 = (n - 1);
var G__3336 = cljs.core.rest.call(null,s__3332);
n = G__3335;
coll = G__3336;
continue;
}
} else
{return s__3332;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3334.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3337 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3338 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3337.call(this,n);
case  2 :
return drop_last__3338.call(this,n,s);
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
var s__3340 = cljs.core.seq.call(null,coll);
var lead__3341 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3341))
{{
var G__3342 = cljs.core.next.call(null,s__3340);
var G__3343 = cljs.core.next.call(null,lead__3341);
s__3340 = G__3342;
lead__3341 = G__3343;
continue;
}
} else
{return s__3340;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3346 = (function (pred,coll){
while(true){
var s__3344 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3345 = s__3344;

if(cljs.core.truth_(and__3546__auto____3345))
{return pred.call(null,cljs.core.first.call(null,s__3344));
} else
{return and__3546__auto____3345;
}
})()))
{{
var G__3347 = pred;
var G__3348 = cljs.core.rest.call(null,s__3344);
pred = G__3347;
coll = G__3348;
continue;
}
} else
{return s__3344;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3346.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3349 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3349))
{var s__3350 = temp__3698__auto____3349;

return cljs.core.concat.call(null,s__3350,cycle.call(null,s__3350));
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
var repeat__3351 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3352 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3351.call(this,n);
case  2 :
return repeat__3352.call(this,n,x);
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
var repeatedly__3354 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3355 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3354.call(this,n);
case  2 :
return repeatedly__3355.call(this,n,f);
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
var interleave__3361 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3357 = cljs.core.seq.call(null,c1);
var s2__3358 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3359 = s1__3357;

if(cljs.core.truth_(and__3546__auto____3359))
{return s2__3358;
} else
{return and__3546__auto____3359;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3357),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3358),interleave.call(null,cljs.core.rest.call(null,s1__3357),cljs.core.rest.call(null,s2__3358))));
} else
{return null;
}
})));
});
var interleave__3362 = (function() { 
var G__3364__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3360 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3360)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3360),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3360)));
} else
{return null;
}
})));
};
var G__3364 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3364__delegate.call(this, c1, c2, colls);
};
G__3364.cljs$lang$maxFixedArity = 2;
G__3364.cljs$lang$applyTo = (function (arglist__3365){
var c1 = cljs.core.first(arglist__3365);
var c2 = cljs.core.first(cljs.core.next(arglist__3365));
var colls = cljs.core.rest(cljs.core.next(arglist__3365));
return G__3364__delegate.call(this, c1, c2, colls);
});
return G__3364;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3361.call(this,c1,c2);
default:
return interleave__3362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3362.cljs$lang$applyTo;
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
var cat__3368 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3366 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3366))
{var coll__3367 = temp__3695__auto____3366;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3367),cat.call(null,cljs.core.rest.call(null,coll__3367),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3368.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3369 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3370 = (function() { 
var G__3372__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3372 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3372__delegate.call(this, f, coll, colls);
};
G__3372.cljs$lang$maxFixedArity = 2;
G__3372.cljs$lang$applyTo = (function (arglist__3373){
var f = cljs.core.first(arglist__3373);
var coll = cljs.core.first(cljs.core.next(arglist__3373));
var colls = cljs.core.rest(cljs.core.next(arglist__3373));
return G__3372__delegate.call(this, f, coll, colls);
});
return G__3372;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3369.call(this,f,coll);
default:
return mapcat__3370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3370.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3374 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3374))
{var s__3375 = temp__3698__auto____3374;

var f__3376 = cljs.core.first.call(null,s__3375);
var r__3377 = cljs.core.rest.call(null,s__3375);

if(cljs.core.truth_(pred.call(null,f__3376)))
{return cljs.core.cons.call(null,f__3376,filter.call(null,pred,r__3377));
} else
{return filter.call(null,pred,r__3377);
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
var walk__3379 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3379.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3378_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3378_SHARP_));
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
var partition__3386 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3387 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3380 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3380))
{var s__3381 = temp__3698__auto____3380;

var p__3382 = cljs.core.take.call(null,n,s__3381);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3382))))
{return cljs.core.cons.call(null,p__3382,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3381)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3388 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3383 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3383))
{var s__3384 = temp__3698__auto____3383;

var p__3385 = cljs.core.take.call(null,n,s__3384);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3385))))
{return cljs.core.cons.call(null,p__3385,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3384)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3385,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3386.call(this,n,step);
case  3 :
return partition__3387.call(this,n,step,pad);
case  4 :
return partition__3388.call(this,n,step,pad,coll);
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
var get_in__3394 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3395 = (function (m,ks,not_found){
var sentinel__3390 = cljs.core.lookup_sentinel;
var m__3391 = m;
var ks__3392 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3392))
{var m__3393 = cljs.core.get.call(null,m__3391,cljs.core.first.call(null,ks__3392),sentinel__3390);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3390,m__3393)))
{return not_found;
} else
{{
var G__3397 = sentinel__3390;
var G__3398 = m__3393;
var G__3399 = cljs.core.next.call(null,ks__3392);
sentinel__3390 = G__3397;
m__3391 = G__3398;
ks__3392 = G__3399;
continue;
}
}
} else
{return m__3391;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3394.call(this,m,ks);
case  3 :
return get_in__3395.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3400,v){
var vec__3401__3402 = p__3400;
var k__3403 = cljs.core.nth.call(null,vec__3401__3402,0,null);
var ks__3404 = cljs.core.nthnext.call(null,vec__3401__3402,1);

if(cljs.core.truth_(ks__3404))
{return cljs.core.assoc.call(null,m,k__3403,assoc_in.call(null,cljs.core.get.call(null,m,k__3403),ks__3404,v));
} else
{return cljs.core.assoc.call(null,m,k__3403,v);
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
var update_in__delegate = function (m,p__3405,f,args){
var vec__3406__3407 = p__3405;
var k__3408 = cljs.core.nth.call(null,vec__3406__3407,0,null);
var ks__3409 = cljs.core.nthnext.call(null,vec__3406__3407,1);

if(cljs.core.truth_(ks__3409))
{return cljs.core.assoc.call(null,m,k__3408,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3408),ks__3409,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3408,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3408),args));
}
};
var update_in = function (m,p__3405,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3405, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3410){
var m = cljs.core.first(arglist__3410);
var p__3405 = cljs.core.first(cljs.core.next(arglist__3410));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3410)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3410)));
return update_in__delegate.call(this, m, p__3405, f, args);
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
var this__3411 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3412 = this;
var new_array__3413 = cljs.core.aclone.call(null,this__3412.array);

new_array__3413.push(o);
return (new cljs.core.Vector(this__3412.meta,new_array__3413));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3414 = this;
if(cljs.core.truth_((this__3414.array.length > 0)))
{var vector_seq__3415 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3414.array.length)))
{return cljs.core.cons.call(null,(this__3414.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3415.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3416 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3417 = this;
var count__3418 = this__3417.array.length;

if(cljs.core.truth_((count__3418 > 0)))
{return (this__3417.array[(count__3418 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3419 = this;
if(cljs.core.truth_((this__3419.array.length > 0)))
{var new_array__3420 = cljs.core.aclone.call(null,this__3419.array);

new_array__3420.pop();
return (new cljs.core.Vector(this__3419.meta,new_array__3420));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3421 = this;
return (new cljs.core.Vector(meta,this__3421.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3422 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3422.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3436 = null;
var G__3436__3437 = (function (coll,n){
var this__3423 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3424 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3424))
{return (n < this__3423.array.length);
} else
{return and__3546__auto____3424;
}
})()))
{return (this__3423.array[n]);
} else
{return null;
}
});
var G__3436__3438 = (function (coll,n,not_found){
var this__3425 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3426 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3426))
{return (n < this__3425.array.length);
} else
{return and__3546__auto____3426;
}
})()))
{return (this__3425.array[n]);
} else
{return not_found;
}
});
G__3436 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3436__3437.call(this,coll,n);
case  3 :
return G__3436__3438.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3436;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3427 = this;
return this__3427.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3440 = null;
var G__3440__3441 = (function (v,f){
var this__3428 = this;
return cljs.core.ci_reduce.call(null,this__3428.array,f);
});
var G__3440__3442 = (function (v,f,start){
var this__3429 = this;
return cljs.core.ci_reduce.call(null,this__3429.array,f,start);
});
G__3440 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3440__3441.call(this,v,f);
case  3 :
return G__3440__3442.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3440;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3430 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3431 = this;
return this__3431.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3432 = this;
var new_array__3433 = cljs.core.aclone.call(null,this__3432.array);

(new_array__3433[k] = v);
return (new cljs.core.Vector(this__3432.meta,new_array__3433));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3444 = null;
var G__3444__3445 = (function (coll,k){
var this__3434 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3444__3446 = (function (coll,k,not_found){
var this__3435 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3444 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3444__3445.call(this,coll,k);
case  3 :
return G__3444__3446.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3444;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3448 = null;
var G__3448__3449 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3448__3450 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3448 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3448__3449.call(this,_,k);
case  3 :
return G__3448__3450.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3448;
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
vector.cljs$lang$applyTo = (function (arglist__3452){
var args = cljs.core.seq( arglist__3452 );;
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
var this__3453 = this;
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
var len__3454 = array.length;

var i__3455 = 0;

while(true){
if(cljs.core.truth_((i__3455 < len__3454)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3455]))))
{return i__3455;
} else
{{
var G__3456 = (i__3455 + incr);
i__3455 = G__3456;
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
var obj_map_contains_key_QMARK___3458 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3459 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3457 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3457))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3457;
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
return obj_map_contains_key_QMARK___3458.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3459.call(this,k,strobj,true_val,false_val);
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
var this__3462 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3463 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3464 = this;
if(cljs.core.truth_((this__3464.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3461_SHARP_){
return cljs.core.vector.call(null,p1__3461_SHARP_,(this__3464.strobj[p1__3461_SHARP_]));
}),this__3464.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3465 = this;
return (new cljs.core.ObjMap(meta,this__3465.keys,this__3465.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3466 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3467 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3467))
{return this__3466.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3467;
}
})()))
{var new_keys__3468 = cljs.core.aclone.call(null,this__3466.keys);
var new_strobj__3469 = goog.object.clone.call(null,this__3466.strobj);

new_keys__3468.splice(cljs.core.scan_array.call(null,1,k,new_keys__3468),1);
cljs.core.js_delete.call(null,new_strobj__3469,k);
return (new cljs.core.ObjMap(this__3466.meta,new_keys__3468,new_strobj__3469));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3470 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3470.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3471 = this;
return this__3471.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3472 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3473 = this;
return this__3473.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3474 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3475 = goog.object.clone.call(null,this__3474.strobj);
var overwrite_QMARK___3476 = new_strobj__3475.hasOwnProperty(k);

(new_strobj__3475[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3476))
{return (new cljs.core.ObjMap(this__3474.meta,this__3474.keys,new_strobj__3475));
} else
{var new_keys__3477 = cljs.core.aclone.call(null,this__3474.keys);

new_keys__3477.push(k);
return (new cljs.core.ObjMap(this__3474.meta,new_keys__3477,new_strobj__3475));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3474.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3478 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3478.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3481 = null;
var G__3481__3482 = (function (coll,k){
var this__3479 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3481__3483 = (function (coll,k,not_found){
var this__3480 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3480.strobj,(this__3480.strobj[k]),not_found);
});
G__3481 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3481__3482.call(this,coll,k);
case  3 :
return G__3481__3483.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3481;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3486 = null;
var G__3486__3487 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3486__3488 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3486 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3486__3487.call(this,_,k);
case  3 :
return G__3486__3488.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3486;
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
var this__3490 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3491 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3492 = this;
if(cljs.core.truth_((this__3492.count > 0)))
{var hashes__3493 = cljs.core.js_keys.call(null,this__3492.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3485_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3492.hashobj[p1__3485_SHARP_])));
}),hashes__3493);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3494 = this;
return (new cljs.core.HashMap(meta,this__3494.count,this__3494.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3495 = this;
var h__3496 = cljs.core.hash.call(null,k);
var bucket__3497 = (this__3495.hashobj[h__3496]);
var i__3498 = (cljs.core.truth_(bucket__3497)?cljs.core.scan_array.call(null,2,k,bucket__3497):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3498)))
{return coll;
} else
{var new_hashobj__3499 = goog.object.clone.call(null,this__3495.hashobj);

if(cljs.core.truth_((3 > bucket__3497.length)))
{cljs.core.js_delete.call(null,new_hashobj__3499,h__3496);
} else
{var new_bucket__3500 = cljs.core.aclone.call(null,bucket__3497);

new_bucket__3500.splice(i__3498,2);
(new_hashobj__3499[h__3496] = new_bucket__3500);
}
return (new cljs.core.HashMap(this__3495.meta,(this__3495.count - 1),new_hashobj__3499));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3501 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3501.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3502 = this;
return this__3502.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3503 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3504 = this;
return this__3504.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3505 = this;
var h__3506 = cljs.core.hash.call(null,k);
var bucket__3507 = (this__3505.hashobj[h__3506]);

if(cljs.core.truth_(bucket__3507))
{var new_bucket__3508 = cljs.core.aclone.call(null,bucket__3507);
var new_hashobj__3509 = goog.object.clone.call(null,this__3505.hashobj);

(new_hashobj__3509[h__3506] = new_bucket__3508);
var temp__3695__auto____3510 = cljs.core.scan_array.call(null,2,k,new_bucket__3508);

if(cljs.core.truth_(temp__3695__auto____3510))
{var i__3511 = temp__3695__auto____3510;

(new_bucket__3508[(i__3511 + 1)] = v);
return (new cljs.core.HashMap(this__3505.meta,this__3505.count,new_hashobj__3509));
} else
{new_bucket__3508.push(k,v);
return (new cljs.core.HashMap(this__3505.meta,(this__3505.count + 1),new_hashobj__3509));
}
} else
{var new_hashobj__3512 = goog.object.clone.call(null,this__3505.hashobj);

(new_hashobj__3512[h__3506] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3505.meta,(this__3505.count + 1),new_hashobj__3512));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3513 = this;
var bucket__3514 = (this__3513.hashobj[cljs.core.hash.call(null,k)]);
var i__3515 = (cljs.core.truth_(bucket__3514)?cljs.core.scan_array.call(null,2,k,bucket__3514):null);

if(cljs.core.truth_(i__3515))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3520 = null;
var G__3520__3521 = (function (coll,k){
var this__3516 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3520__3522 = (function (coll,k,not_found){
var this__3517 = this;
var bucket__3518 = (this__3517.hashobj[cljs.core.hash.call(null,k)]);
var i__3519 = (cljs.core.truth_(bucket__3518)?cljs.core.scan_array.call(null,2,k,bucket__3518):null);

if(cljs.core.truth_(i__3519))
{return (bucket__3518[(i__3519 + 1)]);
} else
{return not_found;
}
});
G__3520 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3520__3521.call(this,coll,k);
case  3 :
return G__3520__3522.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3520;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3524 = ks.length;

var i__3525 = 0;
var out__3526 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3525 < len__3524)))
{{
var G__3527 = (i__3525 + 1);
var G__3528 = cljs.core.assoc.call(null,out__3526,(ks[i__3525]),(vs[i__3525]));
i__3525 = G__3527;
out__3526 = G__3528;
continue;
}
} else
{return out__3526;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3529 = null;
var G__3529__3530 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3529__3531 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3529 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3529__3530.call(this,_,k);
case  3 :
return G__3529__3531.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3529;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3533 = cljs.core.seq.call(null,keyvals);
var out__3534 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3533))
{{
var G__3535 = cljs.core.nnext.call(null,in$__3533);
var G__3536 = cljs.core.assoc.call(null,out__3534,cljs.core.first.call(null,in$__3533),cljs.core.second.call(null,in$__3533));
in$__3533 = G__3535;
out__3534 = G__3536;
continue;
}
} else
{return out__3534;
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
hash_map.cljs$lang$applyTo = (function (arglist__3537){
var keyvals = cljs.core.seq( arglist__3537 );;
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
{return cljs.core.reduce.call(null,(function (p1__3538_SHARP_,p2__3539_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3540 = p1__3538_SHARP_;

if(cljs.core.truth_(or__3548__auto____3540))
{return or__3548__auto____3540;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3539_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3541){
var maps = cljs.core.seq( arglist__3541 );;
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
{var merge_entry__3544 = (function (m,e){
var k__3542 = cljs.core.first.call(null,e);
var v__3543 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3542)))
{return cljs.core.assoc.call(null,m,k__3542,f.call(null,cljs.core.get.call(null,m,k__3542),v__3543));
} else
{return cljs.core.assoc.call(null,m,k__3542,v__3543);
}
});
var merge2__3546 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3544,(function (){var or__3548__auto____3545 = m1;

if(cljs.core.truth_(or__3548__auto____3545))
{return or__3548__auto____3545;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3546,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3547){
var f = cljs.core.first(arglist__3547);
var maps = cljs.core.rest(arglist__3547);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3549 = cljs.core.ObjMap.fromObject([],{});
var keys__3550 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3550))
{var key__3551 = cljs.core.first.call(null,keys__3550);
var entry__3552 = cljs.core.get.call(null,map,key__3551);

{
var G__3553 = (cljs.core.truth_(entry__3552)?cljs.core.assoc.call(null,ret__3549,key__3551,entry__3552):ret__3549);
var G__3554 = cljs.core.next.call(null,keys__3550);
ret__3549 = G__3553;
keys__3550 = G__3554;
continue;
}
} else
{return ret__3549;
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
var this__3555 = this;
return (new cljs.core.Set(this__3555.meta,cljs.core.dissoc.call(null,this__3555.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3556 = this;
var and__3546__auto____3557 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3557))
{var and__3546__auto____3558 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3558))
{return cljs.core.every_QMARK_.call(null,(function (p1__3548_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3548_SHARP_);
}),other);
} else
{return and__3546__auto____3558;
}
} else
{return and__3546__auto____3557;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3559 = this;
return (new cljs.core.Set(this__3559.meta,cljs.core.assoc.call(null,this__3559.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3560 = this;
return cljs.core.keys.call(null,this__3560.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3561 = this;
return (new cljs.core.Set(meta,this__3561.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3562 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3562.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3563 = this;
return this__3563.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3564 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3565 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3568 = null;
var G__3568__3569 = (function (coll,v){
var this__3566 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3568__3570 = (function (coll,v,not_found){
var this__3567 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3567.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3568 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3568__3569.call(this,coll,v);
case  3 :
return G__3568__3570.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3568;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3572 = null;
var G__3572__3573 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3572__3574 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3572 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3572__3573.call(this,_,k);
case  3 :
return G__3572__3574.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3572;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3577 = cljs.core.seq.call(null,coll);
var out__3578 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3577))))
{{
var G__3579 = cljs.core.rest.call(null,in$__3577);
var G__3580 = cljs.core.conj.call(null,out__3578,cljs.core.first.call(null,in$__3577));
in$__3577 = G__3579;
out__3578 = G__3580;
continue;
}
} else
{return out__3578;
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
{var n__3581 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3582 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3582))
{var e__3583 = temp__3695__auto____3582;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3583));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3581,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3576_SHARP_){
var temp__3695__auto____3584 = cljs.core.find.call(null,smap,p1__3576_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3584))
{var e__3585 = temp__3695__auto____3584;

return cljs.core.second.call(null,e__3585);
} else
{return p1__3576_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3593 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3586,seen){
while(true){
var vec__3587__3588 = p__3586;
var f__3589 = cljs.core.nth.call(null,vec__3587__3588,0,null);
var xs__3590 = vec__3587__3588;

var temp__3698__auto____3591 = cljs.core.seq.call(null,xs__3590);

if(cljs.core.truth_(temp__3698__auto____3591))
{var s__3592 = temp__3698__auto____3591;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3589)))
{{
var G__3594 = cljs.core.rest.call(null,s__3592);
var G__3595 = seen;
p__3586 = G__3594;
seen = G__3595;
continue;
}
} else
{return cljs.core.cons.call(null,f__3589,step.call(null,cljs.core.rest.call(null,s__3592),cljs.core.conj.call(null,seen,f__3589)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3593.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3596 = cljs.core.Vector.fromArray([]);
var s__3597 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3597)))
{{
var G__3598 = cljs.core.conj.call(null,ret__3596,cljs.core.first.call(null,s__3597));
var G__3599 = cljs.core.next.call(null,s__3597);
ret__3596 = G__3598;
s__3597 = G__3599;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3596);
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
{if(cljs.core.truth_((function (){var or__3548__auto____3600 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3600))
{return or__3548__auto____3600;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3601 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3601 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3601 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____3602 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3602))
{return or__3548__auto____3602;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3603 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3603 > -1)))
{return cljs.core.subs.call(null,x,2,i__3603);
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
var map__3606 = cljs.core.ObjMap.fromObject([],{});
var ks__3607 = cljs.core.seq.call(null,keys);
var vs__3608 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3609 = ks__3607;

if(cljs.core.truth_(and__3546__auto____3609))
{return vs__3608;
} else
{return and__3546__auto____3609;
}
})()))
{{
var G__3610 = cljs.core.assoc.call(null,map__3606,cljs.core.first.call(null,ks__3607),cljs.core.first.call(null,vs__3608));
var G__3611 = cljs.core.next.call(null,ks__3607);
var G__3612 = cljs.core.next.call(null,vs__3608);
map__3606 = G__3610;
ks__3607 = G__3611;
vs__3608 = G__3612;
continue;
}
} else
{return map__3606;
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
var max_key__3615 = (function (k,x){
return x;
});
var max_key__3616 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3617 = (function() { 
var G__3619__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3604_SHARP_,p2__3605_SHARP_){
return max_key.call(null,k,p1__3604_SHARP_,p2__3605_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3619 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3619__delegate.call(this, k, x, y, more);
};
G__3619.cljs$lang$maxFixedArity = 3;
G__3619.cljs$lang$applyTo = (function (arglist__3620){
var k = cljs.core.first(arglist__3620);
var x = cljs.core.first(cljs.core.next(arglist__3620));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3620)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3620)));
return G__3619__delegate.call(this, k, x, y, more);
});
return G__3619;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3615.call(this,k,x);
case  3 :
return max_key__3616.call(this,k,x,y);
default:
return max_key__3617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3617.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3621 = (function (k,x){
return x;
});
var min_key__3622 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3623 = (function() { 
var G__3625__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3613_SHARP_,p2__3614_SHARP_){
return min_key.call(null,k,p1__3613_SHARP_,p2__3614_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3625 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3625__delegate.call(this, k, x, y, more);
};
G__3625.cljs$lang$maxFixedArity = 3;
G__3625.cljs$lang$applyTo = (function (arglist__3626){
var k = cljs.core.first(arglist__3626);
var x = cljs.core.first(cljs.core.next(arglist__3626));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3626)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3626)));
return G__3625__delegate.call(this, k, x, y, more);
});
return G__3625;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3621.call(this,k,x);
case  3 :
return min_key__3622.call(this,k,x,y);
default:
return min_key__3623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3623.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3629 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3630 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3627 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3627))
{var s__3628 = temp__3698__auto____3627;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3628),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3628)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3629.call(this,n,step);
case  3 :
return partition_all__3630.call(this,n,step,coll);
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
var temp__3698__auto____3632 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3632))
{var s__3633 = temp__3698__auto____3632;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3633))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3633),take_while.call(null,pred,cljs.core.rest.call(null,s__3633)));
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
var this__3634 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3635 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3636 = this;
return this__3636.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3637 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3637.meta,(this__3637.start + this__3637.step),this__3637.end,this__3637.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3638 = this;
var comp__3639 = (cljs.core.truth_((this__3638.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3639.call(null,this__3638.start,this__3638.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3640 = this;
return (new cljs.core.Range(meta,this__3640.start,this__3640.end,this__3640.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3641 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3641.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3651 = null;
var G__3651__3652 = (function (rng,n){
var this__3642 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3642.start + (n * this__3642.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3643 = (this__3642.start > this__3642.end);

if(cljs.core.truth_(and__3546__auto____3643))
{return cljs.core._EQ_.call(null,this__3642.step,0);
} else
{return and__3546__auto____3643;
}
})()))
{return this__3642.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3651__3653 = (function (rng,n,not_found){
var this__3644 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3644.start + (n * this__3644.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3645 = (this__3644.start > this__3644.end);

if(cljs.core.truth_(and__3546__auto____3645))
{return cljs.core._EQ_.call(null,this__3644.step,0);
} else
{return and__3546__auto____3645;
}
})()))
{return this__3644.start;
} else
{return not_found;
}
}
});
G__3651 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3651__3652.call(this,rng,n);
case  3 :
return G__3651__3653.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3651;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3646 = this;
return this__3646.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3655 = null;
var G__3655__3656 = (function (rng,f){
var this__3647 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3655__3657 = (function (rng,f,s){
var this__3648 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3655 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3655__3656.call(this,rng,f);
case  3 :
return G__3655__3657.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3655;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3649 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3650 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3650.end - this__3650.start) / this__3650.step));
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
var range__3659 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3660 = (function (end){
return range.call(null,0,end,1);
});
var range__3661 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3662 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3659.call(this);
case  1 :
return range__3660.call(this,start);
case  2 :
return range__3661.call(this,start,end);
case  3 :
return range__3662.call(this,start,end,step);
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
var temp__3698__auto____3664 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3664))
{var s__3665 = temp__3698__auto____3664;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3665),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3665)));
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
var temp__3698__auto____3667 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3667))
{var s__3668 = temp__3698__auto____3667;

var fst__3669 = cljs.core.first.call(null,s__3668);
var fv__3670 = f.call(null,fst__3669);
var run__3671 = cljs.core.cons.call(null,fst__3669,cljs.core.take_while.call(null,(function (p1__3666_SHARP_){
return cljs.core._EQ_.call(null,fv__3670,f.call(null,p1__3666_SHARP_));
}),cljs.core.next.call(null,s__3668)));

return cljs.core.cons.call(null,run__3671,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3671),s__3668))));
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
var reductions__3686 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3682 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3682))
{var s__3683 = temp__3695__auto____3682;

return reductions.call(null,f,cljs.core.first.call(null,s__3683),cljs.core.rest.call(null,s__3683));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3687 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3684 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3684))
{var s__3685 = temp__3698__auto____3684;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3685)),cljs.core.rest.call(null,s__3685));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3686.call(this,f,init);
case  3 :
return reductions__3687.call(this,f,init,coll);
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
var juxt__3690 = (function (f){
return (function() {
var G__3695 = null;
var G__3695__3696 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3695__3697 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3695__3698 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3695__3699 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3695__3700 = (function() { 
var G__3702__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3702 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3702__delegate.call(this, x, y, z, args);
};
G__3702.cljs$lang$maxFixedArity = 3;
G__3702.cljs$lang$applyTo = (function (arglist__3703){
var x = cljs.core.first(arglist__3703);
var y = cljs.core.first(cljs.core.next(arglist__3703));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3703)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3703)));
return G__3702__delegate.call(this, x, y, z, args);
});
return G__3702;
})()
;
G__3695 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3695__3696.call(this);
case  1 :
return G__3695__3697.call(this,x);
case  2 :
return G__3695__3698.call(this,x,y);
case  3 :
return G__3695__3699.call(this,x,y,z);
default:
return G__3695__3700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3695.cljs$lang$maxFixedArity = 3;
G__3695.cljs$lang$applyTo = G__3695__3700.cljs$lang$applyTo;
return G__3695;
})()
});
var juxt__3691 = (function (f,g){
return (function() {
var G__3704 = null;
var G__3704__3705 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3704__3706 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3704__3707 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3704__3708 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3704__3709 = (function() { 
var G__3711__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3711 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3711__delegate.call(this, x, y, z, args);
};
G__3711.cljs$lang$maxFixedArity = 3;
G__3711.cljs$lang$applyTo = (function (arglist__3712){
var x = cljs.core.first(arglist__3712);
var y = cljs.core.first(cljs.core.next(arglist__3712));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3712)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3712)));
return G__3711__delegate.call(this, x, y, z, args);
});
return G__3711;
})()
;
G__3704 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3704__3705.call(this);
case  1 :
return G__3704__3706.call(this,x);
case  2 :
return G__3704__3707.call(this,x,y);
case  3 :
return G__3704__3708.call(this,x,y,z);
default:
return G__3704__3709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3704.cljs$lang$maxFixedArity = 3;
G__3704.cljs$lang$applyTo = G__3704__3709.cljs$lang$applyTo;
return G__3704;
})()
});
var juxt__3692 = (function (f,g,h){
return (function() {
var G__3713 = null;
var G__3713__3714 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3713__3715 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3713__3716 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3713__3717 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3713__3718 = (function() { 
var G__3720__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3720 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3720__delegate.call(this, x, y, z, args);
};
G__3720.cljs$lang$maxFixedArity = 3;
G__3720.cljs$lang$applyTo = (function (arglist__3721){
var x = cljs.core.first(arglist__3721);
var y = cljs.core.first(cljs.core.next(arglist__3721));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3721)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3721)));
return G__3720__delegate.call(this, x, y, z, args);
});
return G__3720;
})()
;
G__3713 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3713__3714.call(this);
case  1 :
return G__3713__3715.call(this,x);
case  2 :
return G__3713__3716.call(this,x,y);
case  3 :
return G__3713__3717.call(this,x,y,z);
default:
return G__3713__3718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3713.cljs$lang$maxFixedArity = 3;
G__3713.cljs$lang$applyTo = G__3713__3718.cljs$lang$applyTo;
return G__3713;
})()
});
var juxt__3693 = (function() { 
var G__3722__delegate = function (f,g,h,fs){
var fs__3689 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3723 = null;
var G__3723__3724 = (function (){
return cljs.core.reduce.call(null,(function (p1__3672_SHARP_,p2__3673_SHARP_){
return cljs.core.conj.call(null,p1__3672_SHARP_,p2__3673_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3689);
});
var G__3723__3725 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3674_SHARP_,p2__3675_SHARP_){
return cljs.core.conj.call(null,p1__3674_SHARP_,p2__3675_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3689);
});
var G__3723__3726 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3676_SHARP_,p2__3677_SHARP_){
return cljs.core.conj.call(null,p1__3676_SHARP_,p2__3677_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3689);
});
var G__3723__3727 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3678_SHARP_,p2__3679_SHARP_){
return cljs.core.conj.call(null,p1__3678_SHARP_,p2__3679_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3689);
});
var G__3723__3728 = (function() { 
var G__3730__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3680_SHARP_,p2__3681_SHARP_){
return cljs.core.conj.call(null,p1__3680_SHARP_,cljs.core.apply.call(null,p2__3681_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3689);
};
var G__3730 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3730__delegate.call(this, x, y, z, args);
};
G__3730.cljs$lang$maxFixedArity = 3;
G__3730.cljs$lang$applyTo = (function (arglist__3731){
var x = cljs.core.first(arglist__3731);
var y = cljs.core.first(cljs.core.next(arglist__3731));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3731)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3731)));
return G__3730__delegate.call(this, x, y, z, args);
});
return G__3730;
})()
;
G__3723 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3723__3724.call(this);
case  1 :
return G__3723__3725.call(this,x);
case  2 :
return G__3723__3726.call(this,x,y);
case  3 :
return G__3723__3727.call(this,x,y,z);
default:
return G__3723__3728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3723.cljs$lang$maxFixedArity = 3;
G__3723.cljs$lang$applyTo = G__3723__3728.cljs$lang$applyTo;
return G__3723;
})()
};
var G__3722 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3722__delegate.call(this, f, g, h, fs);
};
G__3722.cljs$lang$maxFixedArity = 3;
G__3722.cljs$lang$applyTo = (function (arglist__3732){
var f = cljs.core.first(arglist__3732);
var g = cljs.core.first(cljs.core.next(arglist__3732));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3732)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3732)));
return G__3722__delegate.call(this, f, g, h, fs);
});
return G__3722;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3690.call(this,f);
case  2 :
return juxt__3691.call(this,f,g);
case  3 :
return juxt__3692.call(this,f,g,h);
default:
return juxt__3693.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3693.cljs$lang$applyTo;
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
var dorun__3734 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3737 = cljs.core.next.call(null,coll);
coll = G__3737;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3735 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3733 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3733))
{return (n > 0);
} else
{return and__3546__auto____3733;
}
})()))
{{
var G__3738 = (n - 1);
var G__3739 = cljs.core.next.call(null,coll);
n = G__3738;
coll = G__3739;
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
return dorun__3734.call(this,n);
case  2 :
return dorun__3735.call(this,n,coll);
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
var doall__3740 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3741 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3740.call(this,n);
case  2 :
return doall__3741.call(this,n,coll);
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
var matches__3743 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3743),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3743),1)))
{return cljs.core.first.call(null,matches__3743);
} else
{return cljs.core.vec.call(null,matches__3743);
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
var matches__3744 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3744)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3744),1)))
{return cljs.core.first.call(null,matches__3744);
} else
{return cljs.core.vec.call(null,matches__3744);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3745 = cljs.core.re_find.call(null,re,s);
var match_idx__3746 = s.search(re);
var match_str__3747 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3745))?cljs.core.first.call(null,match_data__3745):match_data__3745);
var post_match__3748 = cljs.core.subs.call(null,s,(match_idx__3746 + cljs.core.count.call(null,match_str__3747)));

if(cljs.core.truth_(match_data__3745))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3745,re_seq.call(null,re,post_match__3748));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3749_SHARP_){
return print_one.call(null,p1__3749_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3750 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3750))
{var and__3546__auto____3754 = (function (){var x__302__auto____3751 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3752 = x__302__auto____3751;

if(cljs.core.truth_(and__3546__auto____3752))
{var and__3546__auto____3753 = x__302__auto____3751.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3753))
{return cljs.core.not.call(null,x__302__auto____3751.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3753;
}
} else
{return and__3546__auto____3752;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__302__auto____3751);
}
})();

if(cljs.core.truth_(and__3546__auto____3754))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3754;
}
} else
{return and__3546__auto____3750;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__302__auto____3755 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3756 = x__302__auto____3755;

if(cljs.core.truth_(and__3546__auto____3756))
{var and__3546__auto____3757 = x__302__auto____3755.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3757))
{return cljs.core.not.call(null,x__302__auto____3755.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3757;
}
} else
{return and__3546__auto____3756;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__302__auto____3755);
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
var first_obj__3758 = cljs.core.first.call(null,objs);
var sb__3759 = (new goog.string.StringBuffer());

var G__3760__3761 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3760__3761))
{var obj__3762 = cljs.core.first.call(null,G__3760__3761);
var G__3760__3763 = G__3760__3761;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3762,first_obj__3758)))
{} else
{sb__3759.append(" ");
}
var G__3764__3765 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3762,opts));

if(cljs.core.truth_(G__3764__3765))
{var string__3766 = cljs.core.first.call(null,G__3764__3765);
var G__3764__3767 = G__3764__3765;

while(true){
sb__3759.append(string__3766);
var temp__3698__auto____3768 = cljs.core.next.call(null,G__3764__3767);

if(cljs.core.truth_(temp__3698__auto____3768))
{var G__3764__3769 = temp__3698__auto____3768;

{
var G__3772 = cljs.core.first.call(null,G__3764__3769);
var G__3773 = G__3764__3769;
string__3766 = G__3772;
G__3764__3767 = G__3773;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3770 = cljs.core.next.call(null,G__3760__3763);

if(cljs.core.truth_(temp__3698__auto____3770))
{var G__3760__3771 = temp__3698__auto____3770;

{
var G__3774 = cljs.core.first.call(null,G__3760__3771);
var G__3775 = G__3760__3771;
obj__3762 = G__3774;
G__3760__3763 = G__3775;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3759);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3776 = cljs.core.first.call(null,objs);

var G__3777__3778 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3777__3778))
{var obj__3779 = cljs.core.first.call(null,G__3777__3778);
var G__3777__3780 = G__3777__3778;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3779,first_obj__3776)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3781__3782 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3779,opts));

if(cljs.core.truth_(G__3781__3782))
{var string__3783 = cljs.core.first.call(null,G__3781__3782);
var G__3781__3784 = G__3781__3782;

while(true){
cljs.core.string_print.call(null,string__3783);
var temp__3698__auto____3785 = cljs.core.next.call(null,G__3781__3784);

if(cljs.core.truth_(temp__3698__auto____3785))
{var G__3781__3786 = temp__3698__auto____3785;

{
var G__3789 = cljs.core.first.call(null,G__3781__3786);
var G__3790 = G__3781__3786;
string__3783 = G__3789;
G__3781__3784 = G__3790;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3787 = cljs.core.next.call(null,G__3777__3780);

if(cljs.core.truth_(temp__3698__auto____3787))
{var G__3777__3788 = temp__3698__auto____3787;

{
var G__3791 = cljs.core.first.call(null,G__3777__3788);
var G__3792 = G__3777__3788;
obj__3779 = G__3791;
G__3777__3780 = G__3792;
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
pr_str.cljs$lang$applyTo = (function (arglist__3793){
var objs = cljs.core.seq( arglist__3793 );;
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
pr.cljs$lang$applyTo = (function (arglist__3794){
var objs = cljs.core.seq( arglist__3794 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__3795){
var objs = cljs.core.seq( arglist__3795 );;
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
println.cljs$lang$applyTo = (function (arglist__3796){
var objs = cljs.core.seq( arglist__3796 );;
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
prn.cljs$lang$applyTo = (function (arglist__3797){
var objs = cljs.core.seq( arglist__3797 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3798 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3798,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3799 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3799))
{var nspc__3800 = temp__3698__auto____3799;

return cljs.core.str.call(null,nspc__3800,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3801 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3801))
{var nspc__3802 = temp__3698__auto____3801;

return cljs.core.str.call(null,nspc__3802,"/");
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
var pr_pair__3803 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3803,"{",", ","}",opts,coll);
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
var this__3804 = this;
var G__3805__3806 = cljs.core.seq.call(null,this__3804.watches);

if(cljs.core.truth_(G__3805__3806))
{var G__3808__3810 = cljs.core.first.call(null,G__3805__3806);
var vec__3809__3811 = G__3808__3810;
var key__3812 = cljs.core.nth.call(null,vec__3809__3811,0,null);
var f__3813 = cljs.core.nth.call(null,vec__3809__3811,1,null);
var G__3805__3814 = G__3805__3806;

var G__3808__3815 = G__3808__3810;
var G__3805__3816 = G__3805__3814;

while(true){
var vec__3817__3818 = G__3808__3815;
var key__3819 = cljs.core.nth.call(null,vec__3817__3818,0,null);
var f__3820 = cljs.core.nth.call(null,vec__3817__3818,1,null);
var G__3805__3821 = G__3805__3816;

f__3820.call(null,key__3819,this$,oldval,newval);
var temp__3698__auto____3822 = cljs.core.next.call(null,G__3805__3821);

if(cljs.core.truth_(temp__3698__auto____3822))
{var G__3805__3823 = temp__3698__auto____3822;

{
var G__3830 = cljs.core.first.call(null,G__3805__3823);
var G__3831 = G__3805__3823;
G__3808__3815 = G__3830;
G__3805__3816 = G__3831;
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
var this__3824 = this;
return this$.watches = cljs.core.assoc.call(null,this__3824.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3825 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3825.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3826 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3826.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3827 = this;
return this__3827.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3828 = this;
return this__3828.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3829 = this;
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
var atom__3838 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3839 = (function() { 
var G__3841__delegate = function (x,p__3832){
var map__3833__3834 = p__3832;
var map__3833__3835 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3833__3834))?cljs.core.apply.call(null,cljs.core.hash_map,map__3833__3834):map__3833__3834);
var validator__3836 = cljs.core.get.call(null,map__3833__3835,"﷐'validator");
var meta__3837 = cljs.core.get.call(null,map__3833__3835,"﷐'meta");

return (new cljs.core.Atom(x,meta__3837,validator__3836,null));
};
var G__3841 = function (x,var_args){
var p__3832 = null;
if (goog.isDef(var_args)) {
  p__3832 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3841__delegate.call(this, x, p__3832);
};
G__3841.cljs$lang$maxFixedArity = 1;
G__3841.cljs$lang$applyTo = (function (arglist__3842){
var x = cljs.core.first(arglist__3842);
var p__3832 = cljs.core.rest(arglist__3842);
return G__3841__delegate.call(this, x, p__3832);
});
return G__3841;
})()
;
atom = function(x,var_args){
var p__3832 = var_args;
switch(arguments.length){
case  1 :
return atom__3838.call(this,x);
default:
return atom__3839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3839.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3843 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3843))
{var validate__3844 = temp__3698__auto____3843;

if(cljs.core.truth_(validate__3844.call(null,new_value)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")));
}
} else
{}
var old_value__3845 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3845,new_value);
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
var swap_BANG___3846 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3847 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3848 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3849 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3850 = (function() { 
var G__3852__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3852 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3852__delegate.call(this, a, f, x, y, z, more);
};
G__3852.cljs$lang$maxFixedArity = 5;
G__3852.cljs$lang$applyTo = (function (arglist__3853){
var a = cljs.core.first(arglist__3853);
var f = cljs.core.first(cljs.core.next(arglist__3853));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3853)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3853))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3853)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3853)))));
return G__3852__delegate.call(this, a, f, x, y, z, more);
});
return G__3852;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3846.call(this,a,f);
case  3 :
return swap_BANG___3847.call(this,a,f,x);
case  4 :
return swap_BANG___3848.call(this,a,f,x,y);
case  5 :
return swap_BANG___3849.call(this,a,f,x,y,z);
default:
return swap_BANG___3850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3850.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3854){
var iref = cljs.core.first(arglist__3854);
var f = cljs.core.first(cljs.core.next(arglist__3854));
var args = cljs.core.rest(cljs.core.next(arglist__3854));
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
var gensym__3855 = (function (){
return gensym.call(null,"G__");
});
var gensym__3856 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3855.call(this);
case  1 :
return gensym__3856.call(this,prefix_string);
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
var this__3858 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3858.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3859 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3859.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3859.state,this__3859.f);
}
return cljs.core.deref.call(null,this__3859.state);
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
delay.cljs$lang$applyTo = (function (arglist__3860){
var body = cljs.core.seq( arglist__3860 );;
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
var map__3861__3862 = options;
var map__3861__3863 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3861__3862))?cljs.core.apply.call(null,cljs.core.hash_map,map__3861__3862):map__3861__3862);
var keywordize_keys__3864 = cljs.core.get.call(null,map__3861__3863,"﷐'keywordize-keys");
var keyfn__3865 = (cljs.core.truth_(keywordize_keys__3864)?cljs.core.keyword:cljs.core.str);
var f__3871 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__356__auto____3870 = (function iter__3866(s__3867){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3867__3868 = s__3867;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3867__3868)))
{var k__3869 = cljs.core.first.call(null,s__3867__3868);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3865.call(null,k__3869),thisfn.call(null,(x[k__3869]))]),iter__3866.call(null,cljs.core.rest.call(null,s__3867__3868)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____3870.call(null,cljs.core.js_keys.call(null,x));
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

return f__3871.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3872){
var x = cljs.core.first(arglist__3872);
var options = cljs.core.rest(arglist__3872);
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
var mem__3873 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3877__delegate = function (args){
var temp__3695__auto____3874 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3873),args);

if(cljs.core.truth_(temp__3695__auto____3874))
{var v__3875 = temp__3695__auto____3874;

return v__3875;
} else
{var ret__3876 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3873,cljs.core.assoc,args,ret__3876);
return ret__3876;
}
};
var G__3877 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3877__delegate.call(this, args);
};
G__3877.cljs$lang$maxFixedArity = 0;
G__3877.cljs$lang$applyTo = (function (arglist__3878){
var args = cljs.core.seq( arglist__3878 );;
return G__3877__delegate.call(this, args);
});
return G__3877;
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
var trampoline__3880 = (function (f){
while(true){
var ret__3879 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3879)))
{{
var G__3883 = ret__3879;
f = G__3883;
continue;
}
} else
{return ret__3879;
}
break;
}
});
var trampoline__3881 = (function() { 
var G__3884__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3884 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3884__delegate.call(this, f, args);
};
G__3884.cljs$lang$maxFixedArity = 1;
G__3884.cljs$lang$applyTo = (function (arglist__3885){
var f = cljs.core.first(arglist__3885);
var args = cljs.core.rest(arglist__3885);
return G__3884__delegate.call(this, f, args);
});
return G__3884;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3880.call(this,f);
default:
return trampoline__3881.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3881.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3886 = (function (){
return rand.call(null,1);
});
var rand__3887 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3886.call(this);
case  1 :
return rand__3887.call(this,n);
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
var k__3889 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3889,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3889,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___3898 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3899 = (function (h,child,parent){
var or__3548__auto____3890 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3890))
{return or__3548__auto____3890;
} else
{var or__3548__auto____3891 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3891))
{return or__3548__auto____3891;
} else
{var and__3546__auto____3892 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3892))
{var and__3546__auto____3893 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3893))
{var and__3546__auto____3894 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3894))
{var ret__3895 = true;
var i__3896 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3897 = cljs.core.not.call(null,ret__3895);

if(cljs.core.truth_(or__3548__auto____3897))
{return or__3548__auto____3897;
} else
{return cljs.core._EQ_.call(null,i__3896,cljs.core.count.call(null,parent));
}
})()))
{return ret__3895;
} else
{{
var G__3901 = isa_QMARK_.call(null,h,child.call(null,i__3896),parent.call(null,i__3896));
var G__3902 = (i__3896 + 1);
ret__3895 = G__3901;
i__3896 = G__3902;
continue;
}
}
break;
}
} else
{return and__3546__auto____3894;
}
} else
{return and__3546__auto____3893;
}
} else
{return and__3546__auto____3892;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3898.call(this,h,child);
case  3 :
return isa_QMARK___3899.call(this,h,child,parent);
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
var parents__3903 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3904 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3903.call(this,h);
case  2 :
return parents__3904.call(this,h,tag);
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
var ancestors__3906 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3907 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3906.call(this,h);
case  2 :
return ancestors__3907.call(this,h,tag);
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
var descendants__3909 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3910 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3909.call(this,h);
case  2 :
return descendants__3910.call(this,h,tag);
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
var derive__3920 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3921 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3915 = "﷐'parents".call(null,h);
var td__3916 = "﷐'descendants".call(null,h);
var ta__3917 = "﷐'ancestors".call(null,h);
var tf__3918 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3919 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3915.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3917.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3917.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3915,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3918.call(null,"﷐'ancestors".call(null,h),tag,td__3916,parent,ta__3917),"﷐'descendants":tf__3918.call(null,"﷐'descendants".call(null,h),parent,ta__3917,tag,td__3916)});
})());

if(cljs.core.truth_(or__3548__auto____3919))
{return or__3548__auto____3919;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3920.call(this,h,tag);
case  3 :
return derive__3921.call(this,h,tag,parent);
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
var underive__3927 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3928 = (function (h,tag,parent){
var parentMap__3923 = "﷐'parents".call(null,h);
var childsParents__3924 = (cljs.core.truth_(parentMap__3923.call(null,tag))?cljs.core.disj.call(null,parentMap__3923.call(null,tag),parent):cljs.core.set([]));
var newParents__3925 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3924))?cljs.core.assoc.call(null,parentMap__3923,tag,childsParents__3924):cljs.core.dissoc.call(null,parentMap__3923,tag));
var deriv_seq__3926 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3912_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3912_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3912_SHARP_),cljs.core.second.call(null,p1__3912_SHARP_)));
}),cljs.core.seq.call(null,newParents__3925)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3923.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3913_SHARP_,p2__3914_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3913_SHARP_,p2__3914_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3926));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3927.call(this,h,tag);
case  3 :
return underive__3928.call(this,h,tag,parent);
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
var xprefs__3930 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3932 = (cljs.core.truth_((function (){var and__3546__auto____3931 = xprefs__3930;

if(cljs.core.truth_(and__3546__auto____3931))
{return xprefs__3930.call(null,y);
} else
{return and__3546__auto____3931;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3932))
{return or__3548__auto____3932;
} else
{var or__3548__auto____3934 = (function (){var ps__3933 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3933) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3933),prefer_table)))
{} else
{}
{
var G__3937 = cljs.core.rest.call(null,ps__3933);
ps__3933 = G__3937;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3934))
{return or__3548__auto____3934;
} else
{var or__3548__auto____3936 = (function (){var ps__3935 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3935) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3935),y,prefer_table)))
{} else
{}
{
var G__3938 = cljs.core.rest.call(null,ps__3935);
ps__3935 = G__3938;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3936))
{return or__3548__auto____3936;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3939 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3939))
{return or__3548__auto____3939;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3948 = cljs.core.reduce.call(null,(function (be,p__3940){
var vec__3941__3942 = p__3940;
var k__3943 = cljs.core.nth.call(null,vec__3941__3942,0,null);
var ___3944 = cljs.core.nth.call(null,vec__3941__3942,1,null);
var e__3945 = vec__3941__3942;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3943)))
{var be2__3947 = (cljs.core.truth_((function (){var or__3548__auto____3946 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3946))
{return or__3548__auto____3946;
} else
{return cljs.core.dominates.call(null,k__3943,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3945:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3947),k__3943,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3943," and ",cljs.core.first.call(null,be2__3947),", and neither is preferred")));
}
return be2__3947;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3948))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3948));
return cljs.core.second.call(null,best_entry__3948);
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
if(cljs.core.truth_((function (){var and__3546__auto____3949 = mf;

if(cljs.core.truth_(and__3546__auto____3949))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3949;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3950 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3950))
{return or__3548__auto____3950;
} else
{var or__3548__auto____3951 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3951))
{return or__3548__auto____3951;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3952 = mf;

if(cljs.core.truth_(and__3546__auto____3952))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3952;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3953 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3953))
{return or__3548__auto____3953;
} else
{var or__3548__auto____3954 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3954))
{return or__3548__auto____3954;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3955 = mf;

if(cljs.core.truth_(and__3546__auto____3955))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3955;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3956 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3956))
{return or__3548__auto____3956;
} else
{var or__3548__auto____3957 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3957))
{return or__3548__auto____3957;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3958 = mf;

if(cljs.core.truth_(and__3546__auto____3958))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3958;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3959 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3959))
{return or__3548__auto____3959;
} else
{var or__3548__auto____3960 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3960))
{return or__3548__auto____3960;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3961 = mf;

if(cljs.core.truth_(and__3546__auto____3961))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3961;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3962 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3962))
{return or__3548__auto____3962;
} else
{var or__3548__auto____3963 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3963))
{return or__3548__auto____3963;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3964 = mf;

if(cljs.core.truth_(and__3546__auto____3964))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3964;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3965 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3965))
{return or__3548__auto____3965;
} else
{var or__3548__auto____3966 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3966))
{return or__3548__auto____3966;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3967 = mf;

if(cljs.core.truth_(and__3546__auto____3967))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3967;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3968 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3968))
{return or__3548__auto____3968;
} else
{var or__3548__auto____3969 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3969))
{return or__3548__auto____3969;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3970 = mf;

if(cljs.core.truth_(and__3546__auto____3970))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3970;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3971 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3971))
{return or__3548__auto____3971;
} else
{var or__3548__auto____3972 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3972))
{return or__3548__auto____3972;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3973 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3974 = cljs.core._get_method.call(null,mf,dispatch_val__3973);

if(cljs.core.truth_(target_fn__3974))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3973)));
}
return cljs.core.apply.call(null,target_fn__3974,args);
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
var this__3975 = this;
cljs.core.swap_BANG_.call(null,this__3975.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3975.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3975.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3975.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3976 = this;
cljs.core.swap_BANG_.call(null,this__3976.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3976.method_cache,this__3976.method_table,this__3976.cached_hierarchy,this__3976.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3977 = this;
cljs.core.swap_BANG_.call(null,this__3977.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3977.method_cache,this__3977.method_table,this__3977.cached_hierarchy,this__3977.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3978 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3978.cached_hierarchy),cljs.core.deref.call(null,this__3978.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3978.method_cache,this__3978.method_table,this__3978.cached_hierarchy,this__3978.hierarchy);
}
var temp__3695__auto____3979 = cljs.core.deref.call(null,this__3978.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3979))
{var target_fn__3980 = temp__3695__auto____3979;

return target_fn__3980;
} else
{var temp__3695__auto____3981 = cljs.core.find_and_cache_best_method.call(null,this__3978.name,dispatch_val,this__3978.hierarchy,this__3978.method_table,this__3978.prefer_table,this__3978.method_cache,this__3978.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3981))
{var target_fn__3982 = temp__3695__auto____3981;

return target_fn__3982;
} else
{return cljs.core.deref.call(null,this__3978.method_table).call(null,this__3978.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3983 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3983.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3983.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3983.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3983.method_cache,this__3983.method_table,this__3983.cached_hierarchy,this__3983.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3984 = this;
return cljs.core.deref.call(null,this__3984.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3985 = this;
return cljs.core.deref.call(null,this__3985.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3986 = this;
return cljs.core.do_invoke.call(null,mf,this__3986.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3987__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3987 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3987__delegate.call(this, _, args);
};
G__3987.cljs$lang$maxFixedArity = 1;
G__3987.cljs$lang$applyTo = (function (arglist__3988){
var _ = cljs.core.first(arglist__3988);
var args = cljs.core.rest(arglist__3988);
return G__3987__delegate.call(this, _, args);
});
return G__3987;
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
