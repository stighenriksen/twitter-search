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
var G__2559__2560 = cljs.core.seq.call(null,attr);

if(cljs.core.truth_(G__2559__2560))
{var G__2562__2564 = cljs.core.first.call(null,G__2559__2560);
var vec__2563__2565 = G__2562__2564;
var k__2566 = cljs.core.nth.call(null,vec__2563__2565,0,null);
var v__2567 = cljs.core.nth.call(null,vec__2563__2565,1,null);
var G__2559__2568 = G__2559__2560;

var G__2562__2569 = G__2562__2564;
var G__2559__2570 = G__2559__2568;

while(true){
var vec__2571__2572 = G__2562__2569;
var k__2573 = cljs.core.nth.call(null,vec__2571__2572,0,null);
var v__2574 = cljs.core.nth.call(null,vec__2571__2572,1,null);
var G__2559__2575 = G__2559__2570;

var v__2576 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,v__2574))?v__2574.call(null,d,idx):v__2574);

pinot.dom.attr.call(null,elem,k__2573,v__2576);
var temp__3698__auto____2577 = cljs.core.next.call(null,G__2559__2575);

if(cljs.core.truth_(temp__3698__auto____2577))
{var G__2559__2578 = temp__3698__auto____2577;

{
var G__2579 = cljs.core.first.call(null,G__2559__2578);
var G__2580 = G__2559__2578;
G__2562__2569 = G__2579;
G__2559__2570 = G__2580;
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
pinot.draw.visualization.enter = (function enter(p__2581,method){
var map__2582__2583 = p__2581;
var map__2582__2584 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2582__2583))?cljs.core.apply.call(null,cljs.core.hash_map,map__2582__2583):map__2582__2583);
var elem__2585 = cljs.core.get.call(null,map__2582__2584,"﷐'elem");
var attr__2586 = cljs.core.get.call(null,map__2582__2584,"﷐'attr");
var data__2587 = cljs.core.get.call(null,map__2582__2584,"﷐'data");

var G__2588__2589 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,data__2587));

if(cljs.core.truth_(G__2588__2589))
{var G__2591__2593 = cljs.core.first.call(null,G__2588__2589);
var vec__2592__2594 = G__2591__2593;
var idx__2595 = cljs.core.nth.call(null,vec__2592__2594,0,null);
var d__2596 = cljs.core.nth.call(null,vec__2592__2594,1,null);
var G__2588__2597 = G__2588__2589;

var G__2591__2598 = G__2591__2593;
var G__2588__2599 = G__2588__2597;

while(true){
var vec__2600__2601 = G__2591__2598;
var idx__2602 = cljs.core.nth.call(null,vec__2600__2601,0,null);
var d__2603 = cljs.core.nth.call(null,vec__2600__2601,1,null);
var G__2588__2604 = G__2588__2599;

var cur__2605 = pinot.draw.visualization.create_elem.call(null,elem__2585,d__2603,idx__2602);

pinot.draw.visualization.apply_attr.call(null,cur__2605,attr__2586,d__2603,idx__2602);
method.call(null,cur__2605);
var temp__3698__auto____2606 = cljs.core.next.call(null,G__2588__2604);

if(cljs.core.truth_(temp__3698__auto____2606))
{var G__2588__2607 = temp__3698__auto____2606;

{
var G__2608 = cljs.core.first.call(null,G__2588__2607);
var G__2609 = G__2588__2607;
G__2591__2598 = G__2608;
G__2588__2599 = G__2609;
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
pinot.draw.visualization.do_animation = (function do_animation(p__2610){
var anim__2611 = p__2610;
var anim__2612 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,anim__2611))?cljs.core.apply.call(null,cljs.core.hash_map,anim__2611):anim__2611);
var tween__2613 = cljs.core.get.call(null,anim__2612,"﷐'tween");
var dur__2614 = cljs.core.get.call(null,anim__2612,"﷐'dur");
var start_time__2615 = cljs.core.get.call(null,anim__2612,"﷐'start-time");

var now__2616 = Date.now();
var elapsed__2617 = ((((now__2616 - start_time__2615) / dur__2614) < 1) ? ((now__2616 - start_time__2615) / dur__2614) : 1);

tween__2613.call(null,elapsed__2617);
if(cljs.core.truth_(cljs.core._EQ_.call(null,elapsed__2617,1)))
{return null;
} else
{return pinot.draw.core.animation_frame.call(null,cljs.core.partial.call(null,do_animation,anim__2612));
}
});
pinot.draw.visualization.end_states = (function end_states(elems,attr,data){
var iter__356__auto____2636 = (function iter__2618(s__2619){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2619__2620 = s__2619;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2619__2620)))
{var vec__2621__2622 = cljs.core.first.call(null,s__2619__2620);
var el__2623 = cljs.core.nth.call(null,vec__2621__2622,0,null);
var d__2624 = cljs.core.nth.call(null,vec__2621__2622,1,null);

return cljs.core.cons.call(null,(function (){var iter__356__auto____2635 = (function iter__2625(s__2626){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2626__2627 = s__2626;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2626__2627)))
{var vec__2628__2629 = cljs.core.first.call(null,s__2626__2627);
var k__2630 = cljs.core.nth.call(null,vec__2628__2629,0,null);
var v__2631 = cljs.core.nth.call(null,vec__2628__2629,1,null);

return cljs.core.cons.call(null,(function (){var v__2632 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,v__2631))?v__2631.call(null,d__2624):v__2631);
var init__2633 = pinot.util.js.as_int.call(null,pinot.dom.attr.call(null,el__2623,k__2630));
var delta__2634 = (v__2632 - init__2633);

return cljs.core.Vector.fromArray([k__2630,init__2633,delta__2634]);
})(),iter__2625.call(null,cljs.core.rest.call(null,s__2626__2627)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____2635.call(null,attr);
})(),iter__2618.call(null,cljs.core.rest.call(null,s__2619__2620)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____2636.call(null,cljs.core.map.call(null,cljs.core.list,elems,data));
});
pinot.draw.visualization.tween = (function tween(p__2637){
var map__2638__2639 = p__2637;
var map__2638__2640 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__2638__2639))?cljs.core.apply.call(null,cljs.core.hash_map,map__2638__2639):map__2638__2639);
var data__2641 = cljs.core.get.call(null,map__2638__2640,"﷐'data");
var attr__2642 = cljs.core.get.call(null,map__2638__2640,"﷐'attr");
var elems__2643 = cljs.core.get.call(null,map__2638__2640,"﷐'elems");

var final$__2644 = pinot.draw.visualization.end_states.call(null,elems__2643,attr__2642,data__2641);
var tweens__2645 = cljs.core.map.call(null,cljs.core.list,elems__2643,final$__2644);

return (function (elapsed_perc){
var G__2646__2648 = cljs.core.seq.call(null,tweens__2645);

if(cljs.core.truth_(G__2646__2648))
{var G__2650__2652 = cljs.core.first.call(null,G__2646__2648);
var vec__2651__2653 = G__2650__2652;
var el__2654 = cljs.core.nth.call(null,vec__2651__2653,0,null);
var attrs__2655 = cljs.core.nth.call(null,vec__2651__2653,1,null);
var G__2646__2656 = G__2646__2648;

var G__2650__2657 = G__2650__2652;
var G__2646__2658 = G__2646__2656;

while(true){
var vec__2659__2660 = G__2650__2657;
var el__2661 = cljs.core.nth.call(null,vec__2659__2660,0,null);
var attrs__2662 = cljs.core.nth.call(null,vec__2659__2660,1,null);
var G__2646__2663 = G__2646__2658;

var G__2647__2664 = cljs.core.seq.call(null,attrs__2662);

if(cljs.core.truth_(G__2647__2664))
{var G__2666__2668 = cljs.core.first.call(null,G__2647__2664);
var vec__2667__2669 = G__2666__2668;
var k__2670 = cljs.core.nth.call(null,vec__2667__2669,0,null);
var init__2671 = cljs.core.nth.call(null,vec__2667__2669,1,null);
var delta__2672 = cljs.core.nth.call(null,vec__2667__2669,2,null);
var G__2647__2673 = G__2647__2664;

var G__2666__2674 = G__2666__2668;
var G__2647__2675 = G__2647__2673;

while(true){
var vec__2676__2677 = G__2666__2674;
var k__2678 = cljs.core.nth.call(null,vec__2676__2677,0,null);
var init__2679 = cljs.core.nth.call(null,vec__2676__2677,1,null);
var delta__2680 = cljs.core.nth.call(null,vec__2676__2677,2,null);
var G__2647__2681 = G__2647__2675;

var elapsed_delta__2682 = (elapsed_perc * delta__2680);
var change__2683 = (init__2679 + elapsed_delta__2682);

pinot.dom.attr.call(null,el__2661,k__2678,change__2683);
var temp__3698__auto____2684 = cljs.core.next.call(null,G__2647__2681);

if(cljs.core.truth_(temp__3698__auto____2684))
{var G__2647__2685 = temp__3698__auto____2684;

{
var G__2688 = cljs.core.first.call(null,G__2647__2685);
var G__2689 = G__2647__2685;
G__2666__2674 = G__2688;
G__2647__2675 = G__2689;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____2686 = cljs.core.next.call(null,G__2646__2663);

if(cljs.core.truth_(temp__3698__auto____2686))
{var G__2646__2687 = temp__3698__auto____2686;

{
var G__2690 = cljs.core.first.call(null,G__2646__2687);
var G__2691 = G__2646__2687;
G__2650__2657 = G__2690;
G__2646__2658 = G__2691;
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
pinot.draw.visualization.start = (function start(p__2692){
var transition__2693 = p__2692;
var transition__2694 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,transition__2693))?cljs.core.apply.call(null,cljs.core.hash_map,transition__2693):transition__2693);
var dur__2695 = cljs.core.get.call(null,transition__2694,"﷐'dur");

var now__2696 = Date.now();

return pinot.draw.visualization.do_animation.call(null,cljs.core.ObjMap.fromObject(["﷐'start-time","﷐'dur","﷐'tween"],{"﷐'start-time":now__2696,"﷐'dur":dur__2695,"﷐'tween":pinot.draw.visualization.tween.call(null,transition__2694)}));
});
