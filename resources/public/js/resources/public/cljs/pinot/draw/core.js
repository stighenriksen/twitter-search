goog.provide('pinot.draw.core');
goog.require('cljs.core');
pinot.draw.core.animation_frame = (function (){var or__3548__auto____2697 = window.requestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____2697))
{return or__3548__auto____2697;
} else
{var or__3548__auto____2698 = window.webkitRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____2698))
{return or__3548__auto____2698;
} else
{var or__3548__auto____2699 = window.mozRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____2699))
{return or__3548__auto____2699;
} else
{var or__3548__auto____2700 = window.oRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____2700))
{return or__3548__auto____2700;
} else
{var or__3548__auto____2701 = window.msRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____2701))
{return or__3548__auto____2701;
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
