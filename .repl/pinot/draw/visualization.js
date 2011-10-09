goog.provide('pinot.draw.visualization');
goog.require('cljs.core');
goog.require('pinot.html');
goog.require('pinot.dom');
goog.require('pinot.draw.core');
goog.require('pinot.util.js');
pinot.draw.visualization.visual = (function visual(data){
return cljs.core.ObjMap.fromObject(["﷐'data","﷐'attr"],{"﷐'data":data,"﷐'attr":cljs.core.ObjMap.fromObject([],{})});
});
pinot.draw.visualization.attr = (function attr(vis,k,v){
return cljs.core.assoc_in.call(null,vis,cljs.core.Vector.fromArray(["﷐'attr",k]),v);
});
pinot.draw.visualization.elem = (function elem(vis,el){
return cljs.core.assoc.call(null,vis,"﷐'elem",el);
});
pinot.draw.visualization.apply_attr = (function apply_attr(elem,attr,d,idx){
var G__2589__2590 = cljs.core.seq.call(null,attr);

if(cljs.core.truth_(G__2589__2590))
{var G__2592__2594 = cljs.core.first.call(null,G__2589__2590);
var vec__2593__2595 = G__2592__2594;
var k__2596 = cljs.core.nth.call(null,vec__2593__2595,0,null);
var v__2597 = cljs.core.nth.call(null,vec__2593__2595,1,null);
var G__2589__2598 = G__2589__2590;

var G__2592__2599 = G__2592__2594;
var G__2589__2600 = G__2589__2598;

while(true){
var vec__2601__2602 = G__2592__2599;
var k__2603 = cljs.core.nth.call(null,vec__2601__2602,0,null);
var v__2604 = cljs.core.nth.call(null,vec__2601__2602,1,null);
var G__2589__2605 = G__2589__2600;

var v__2606 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,v__2604))?v__2604.call(null,d,idx):v__2604);

pinot.dom.attr.call(null,elem,k__2603,v__2606);
var temp__3698__auto____2607 = cljs.core.next.call(null,G__2589__2605);

if(cljs.core.truth_(temp__3698__auto____2607))
{var G__2589__2608 = temp__3698__auto____2607;

{
var G__2609 = cljs.core.first.call(null,G__2589__2608);
var G__2610 = G__2589__2608;
G__2592__2599 = G__2609;
G__2589__2600 = G__2610;
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
pinot.draw.visualization.create_elem = (function create_elem(elem,d,idx){
if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,elem)))
{return elem.call(null,d,idx);
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,elem)))
{return pinot.html.html.call(null,elem);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,elem)))
{return pinot.html.html.call(null,cljs.core.Vector.fromArray([elem]));
} else
{if(cljs.core.truth_("﷐'else"))
{return elem;
} else
{return null;
}
}
}
}
});
pinot.draw.visualization.enter = (function enter(p__2611,method){
var map__2612__2613 = p__2611;
var map__2612__2614 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2612__2613))?cljs.core.apply.call(null,cljs.core.hash_map,map__2612__2613):map__2612__2613);
var elem__2615 = cljs.core.get.call(null,map__2612__2614,"﷐'elem");
var attr__2616 = cljs.core.get.call(null,map__2612__2614,"﷐'attr");
var data__2617 = cljs.core.get.call(null,map__2612__2614,"﷐'data");

var G__2618__2619 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,data__2617));

if(cljs.core.truth_(G__2618__2619))
{var G__2621__2623 = cljs.core.first.call(null,G__2618__2619);
var vec__2622__2624 = G__2621__2623;
var idx__2625 = cljs.core.nth.call(null,vec__2622__2624,0,null);
var d__2626 = cljs.core.nth.call(null,vec__2622__2624,1,null);
var G__2618__2627 = G__2618__2619;

var G__2621__2628 = G__2621__2623;
var G__2618__2629 = G__2618__2627;

while(true){
var vec__2630__2631 = G__2621__2628;
var idx__2632 = cljs.core.nth.call(null,vec__2630__2631,0,null);
var d__2633 = cljs.core.nth.call(null,vec__2630__2631,1,null);
var G__2618__2634 = G__2618__2629;

var cur__2635 = pinot.draw.visualization.create_elem.call(null,elem__2615,d__2633,idx__2632);

pinot.draw.visualization.apply_attr.call(null,cur__2635,attr__2616,d__2633,idx__2632);
method.call(null,cur__2635);
var temp__3698__auto____2636 = cljs.core.next.call(null,G__2618__2634);

if(cljs.core.truth_(temp__3698__auto____2636))
{var G__2618__2637 = temp__3698__auto____2636;

{
var G__2638 = cljs.core.first.call(null,G__2618__2637);
var G__2639 = G__2618__2637;
G__2621__2628 = G__2638;
G__2618__2629 = G__2639;
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
pinot.draw.visualization.select = (function select(query){
return pinot.dom.query.call(null,query);
});
pinot.draw.visualization.data = (function data(vis,d){
return cljs.core.assoc.call(null,vis,"﷐'data",d);
});
pinot.draw.visualization.transition = (function transition(elems,dur){
return cljs.core.ObjMap.fromObject(["﷐'elems","﷐'dur"],{"﷐'elems":elems,"﷐'dur":dur});
});
pinot.draw.visualization.do_animation = (function do_animation(p__2640){
var anim__2641 = p__2640;
var anim__2642 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,anim__2641))?cljs.core.apply.call(null,cljs.core.hash_map,anim__2641):anim__2641);
var tween__2643 = cljs.core.get.call(null,anim__2642,"﷐'tween");
var dur__2644 = cljs.core.get.call(null,anim__2642,"﷐'dur");
var start_time__2645 = cljs.core.get.call(null,anim__2642,"﷐'start-time");

var now__2646 = Date.now();
var elapsed__2647 = ((((now__2646 - start_time__2645) / dur__2644) < 1) ? ((now__2646 - start_time__2645) / dur__2644) : 1);

tween__2643.call(null,elapsed__2647);
if(cljs.core.truth_(cljs.core._EQ_.call(null,elapsed__2647,1)))
{return null;
} else
{return pinot.draw.core.animation_frame.call(null,cljs.core.partial.call(null,do_animation,anim__2642));
}
});
pinot.draw.visualization.end_states = (function end_states(elems,attr,data){
var iter__354__auto____2666 = (function iter__2648(s__2649){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2649__2650 = s__2649;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2649__2650)))
{var vec__2651__2652 = cljs.core.first.call(null,s__2649__2650);
var el__2653 = cljs.core.nth.call(null,vec__2651__2652,0,null);
var d__2654 = cljs.core.nth.call(null,vec__2651__2652,1,null);

return cljs.core.cons.call(null,(function (){var iter__354__auto____2665 = (function iter__2655(s__2656){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2656__2657 = s__2656;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2656__2657)))
{var vec__2658__2659 = cljs.core.first.call(null,s__2656__2657);
var k__2660 = cljs.core.nth.call(null,vec__2658__2659,0,null);
var v__2661 = cljs.core.nth.call(null,vec__2658__2659,1,null);

return cljs.core.cons.call(null,(function (){var v__2662 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,v__2661))?v__2661.call(null,d__2654):v__2661);
var init__2663 = pinot.util.js.as_int.call(null,pinot.dom.attr.call(null,el__2653,k__2660));
var delta__2664 = (v__2662 - init__2663);

return cljs.core.Vector.fromArray([k__2660,init__2663,delta__2664]);
})(),iter__2655.call(null,cljs.core.rest.call(null,s__2656__2657)));
} else
{return null;
}
break;
}
})));
});

return iter__354__auto____2665.call(null,attr);
})(),iter__2648.call(null,cljs.core.rest.call(null,s__2649__2650)));
} else
{return null;
}
break;
}
})));
});

return iter__354__auto____2666.call(null,cljs.core.map.call(null,cljs.core.list,elems,data));
});
pinot.draw.visualization.tween = (function tween(p__2667){
var map__2668__2669 = p__2667;
var map__2668__2670 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2668__2669))?cljs.core.apply.call(null,cljs.core.hash_map,map__2668__2669):map__2668__2669);
var data__2671 = cljs.core.get.call(null,map__2668__2670,"﷐'data");
var attr__2672 = cljs.core.get.call(null,map__2668__2670,"﷐'attr");
var elems__2673 = cljs.core.get.call(null,map__2668__2670,"﷐'elems");

var final$__2674 = pinot.draw.visualization.end_states.call(null,elems__2673,attr__2672,data__2671);
var tweens__2675 = cljs.core.map.call(null,cljs.core.list,elems__2673,final$__2674);

return (function (elapsed_perc){
var G__2676__2678 = cljs.core.seq.call(null,tweens__2675);

if(cljs.core.truth_(G__2676__2678))
{var G__2680__2682 = cljs.core.first.call(null,G__2676__2678);
var vec__2681__2683 = G__2680__2682;
var el__2684 = cljs.core.nth.call(null,vec__2681__2683,0,null);
var attrs__2685 = cljs.core.nth.call(null,vec__2681__2683,1,null);
var G__2676__2686 = G__2676__2678;

var G__2680__2687 = G__2680__2682;
var G__2676__2688 = G__2676__2686;

while(true){
var vec__2689__2690 = G__2680__2687;
var el__2691 = cljs.core.nth.call(null,vec__2689__2690,0,null);
var attrs__2692 = cljs.core.nth.call(null,vec__2689__2690,1,null);
var G__2676__2693 = G__2676__2688;

var G__2677__2694 = cljs.core.seq.call(null,attrs__2692);

if(cljs.core.truth_(G__2677__2694))
{var G__2696__2698 = cljs.core.first.call(null,G__2677__2694);
var vec__2697__2699 = G__2696__2698;
var k__2700 = cljs.core.nth.call(null,vec__2697__2699,0,null);
var init__2701 = cljs.core.nth.call(null,vec__2697__2699,1,null);
var delta__2702 = cljs.core.nth.call(null,vec__2697__2699,2,null);
var G__2677__2703 = G__2677__2694;

var G__2696__2704 = G__2696__2698;
var G__2677__2705 = G__2677__2703;

while(true){
var vec__2706__2707 = G__2696__2704;
var k__2708 = cljs.core.nth.call(null,vec__2706__2707,0,null);
var init__2709 = cljs.core.nth.call(null,vec__2706__2707,1,null);
var delta__2710 = cljs.core.nth.call(null,vec__2706__2707,2,null);
var G__2677__2711 = G__2677__2705;

var elapsed_delta__2712 = (elapsed_perc * delta__2710);
var change__2713 = (init__2709 + elapsed_delta__2712);

pinot.dom.attr.call(null,el__2691,k__2708,change__2713);
var temp__3698__auto____2714 = cljs.core.next.call(null,G__2677__2711);

if(cljs.core.truth_(temp__3698__auto____2714))
{var G__2677__2715 = temp__3698__auto____2714;

{
var G__2718 = cljs.core.first.call(null,G__2677__2715);
var G__2719 = G__2677__2715;
G__2696__2704 = G__2718;
G__2677__2705 = G__2719;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____2716 = cljs.core.next.call(null,G__2676__2693);

if(cljs.core.truth_(temp__3698__auto____2716))
{var G__2676__2717 = temp__3698__auto____2716;

{
var G__2720 = cljs.core.first.call(null,G__2676__2717);
var G__2721 = G__2676__2717;
G__2680__2687 = G__2720;
G__2676__2688 = G__2721;
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
});
pinot.draw.visualization.start = (function start(p__2722){
var transition__2723 = p__2722;
var transition__2724 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,transition__2723))?cljs.core.apply.call(null,cljs.core.hash_map,transition__2723):transition__2723);
var dur__2725 = cljs.core.get.call(null,transition__2724,"﷐'dur");

var now__2726 = Date.now();

return pinot.draw.visualization.do_animation.call(null,cljs.core.ObjMap.fromObject(["﷐'start-time","﷐'dur","﷐'tween"],{"﷐'start-time":now__2726,"﷐'dur":dur__2725,"﷐'tween":pinot.draw.visualization.tween.call(null,transition__2724)}));
});
