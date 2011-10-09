goog.provide('pinot.draw.core');
goog.require('cljs.core');
pinot.draw.core.animation_frame = (function (){var or__3548__auto____2727 = window.requestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____2727))
{return or__3548__auto____2727;
} else
{var or__3548__auto____2728 = window.webkitRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____2728))
{return or__3548__auto____2728;
} else
{var or__3548__auto____2729 = window.mozRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____2729))
{return or__3548__auto____2729;
} else
{var or__3548__auto____2730 = window.oRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____2730))
{return or__3548__auto____2730;
} else
{var or__3548__auto____2731 = window.msRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____2731))
{return or__3548__auto____2731;
} else
{return (function (callback){
return setTimeout.call(null,callback,17);
});
}
}
}
}
}
})();
