goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3789){
var vec__3790__3791 = p__3789;
var k__3792 = cljs.core.nth.call(null,vec__3790__3791,0,null);
var v__3793 = cljs.core.nth.call(null,vec__3790__3791,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3792.toLowerCase()),v__3793]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__3824 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3794 = this$;

if(cljs.core.truth_(and__3546__auto____3794))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3794;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____3795 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3795))
{return or__3548__auto____3795;
} else
{var or__3548__auto____3796 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3796))
{return or__3548__auto____3796;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__3825 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____3797 = this$;

if(cljs.core.truth_(and__3546__auto____3797))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3797;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____3798 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3798))
{return or__3548__auto____3798;
} else
{var or__3548__auto____3799 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3799))
{return or__3548__auto____3799;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3826 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____3800 = this$;

if(cljs.core.truth_(and__3546__auto____3800))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3800;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____3801 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3801))
{return or__3548__auto____3801;
} else
{var or__3548__auto____3802 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3802))
{return or__3548__auto____3802;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__3827 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____3803 = this$;

if(cljs.core.truth_(and__3546__auto____3803))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3803;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____3804 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3804))
{return or__3548__auto____3804;
} else
{var or__3548__auto____3805 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3805))
{return or__3548__auto____3805;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__3824.call(this,this$);
case  2 :
return connect__3825.call(this,this$,opt1);
case  3 :
return connect__3826.call(this,this$,opt1,opt2);
case  4 :
return connect__3827.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__3829 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____3806 = this$;

if(cljs.core.truth_(and__3546__auto____3806))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3806;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____3807 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3807))
{return or__3548__auto____3807;
} else
{var or__3548__auto____3808 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3808))
{return or__3548__auto____3808;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3830 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____3809 = this$;

if(cljs.core.truth_(and__3546__auto____3809))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3809;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____3810 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3810))
{return or__3548__auto____3810;
} else
{var or__3548__auto____3811 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3811))
{return or__3548__auto____3811;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__3831 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____3812 = this$;

if(cljs.core.truth_(and__3546__auto____3812))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3812;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____3813 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3813))
{return or__3548__auto____3813;
} else
{var or__3548__auto____3814 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3814))
{return or__3548__auto____3814;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__3832 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____3815 = this$;

if(cljs.core.truth_(and__3546__auto____3815))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3815;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____3816 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3816))
{return or__3548__auto____3816;
} else
{var or__3548__auto____3817 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3817))
{return or__3548__auto____3817;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__3833 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____3818 = this$;

if(cljs.core.truth_(and__3546__auto____3818))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3818;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____3819 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3819))
{return or__3548__auto____3819;
} else
{var or__3548__auto____3820 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3820))
{return or__3548__auto____3820;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__3829.call(this,this$,opt);
case  3 :
return transmit__3830.call(this,this$,opt,opt2);
case  4 :
return transmit__3831.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__3832.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__3833.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____3821 = this$;

if(cljs.core.truth_(and__3546__auto____3821))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____3821;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____3822 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3822))
{return or__3548__auto____3822;
} else
{var or__3548__auto____3823 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____3823))
{return or__3548__auto____3823;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3835){
var vec__3836__3837 = p__3835;
var k__3838 = cljs.core.nth.call(null,vec__3836__3837,0,null);
var v__3839 = cljs.core.nth.call(null,vec__3836__3837,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3838.toLowerCase()),v__3839]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__3840 = null;
var G__3840__3841 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3840__3842 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3840__3843 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3840__3844 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3840__3845 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__3840 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__3840__3841.call(this,this$,uri);
case  3 :
return G__3840__3842.call(this,this$,uri,method);
case  4 :
return G__3840__3843.call(this,this$,uri,method,content);
case  5 :
return G__3840__3844.call(this,this$,uri,method,content,headers);
case  6 :
return G__3840__3845.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3840;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3847){
var vec__3848__3849 = p__3847;
var k__3850 = cljs.core.nth.call(null,vec__3848__3849,0,null);
var v__3851 = cljs.core.nth.call(null,vec__3848__3849,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3850.toLowerCase()),v__3851]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3858 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____3852 = this$;

if(cljs.core.truth_(and__3546__auto____3852))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____3852;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____3853 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3853))
{return or__3548__auto____3853;
} else
{var or__3548__auto____3854 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____3854))
{return or__3548__auto____3854;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__3859 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____3855 = this$;

if(cljs.core.truth_(and__3546__auto____3855))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____3855;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____3856 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3856))
{return or__3548__auto____3856;
} else
{var or__3548__auto____3857 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____3857))
{return or__3548__auto____3857;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__3858.call(this,this$,service_name,fn);
case  4 :
return register_service__3859.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__3861 = null;
var G__3861__3862 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__3861__3863 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__3861__3864 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__3861__3865 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__3861 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__3861__3862.call(this,this$);
case  2 :
return G__3861__3863.call(this,this$,on_connect_fn);
case  3 :
return G__3861__3864.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__3861__3865.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3861;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__3867 = null;
var G__3867__3868 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__3867__3869 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__3867 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__3867__3868.call(this,this$,service_name,fn);
case  4 :
return G__3867__3869.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3867;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__3880 = (function (){
var temp__3698__auto____3871 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____3871))
{var config__3872 = temp__3698__auto____3871;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__3872)));
} else
{return null;
}
});
var xpc_connection__3881 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__3873){
var vec__3874__3875 = p__3873;
var k__3876 = cljs.core.nth.call(null,vec__3874__3875,0,null);
var v__3877 = cljs.core.nth.call(null,vec__3874__3875,1,null);

var temp__3698__auto____3878 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__3876);

if(cljs.core.truth_(temp__3698__auto____3878))
{var field__3879 = temp__3698__auto____3878;

return cljs.core.assoc.call(null,sum,field__3879,v__3877);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__3880.call(this);
case  1 :
return xpc_connection__3881.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
