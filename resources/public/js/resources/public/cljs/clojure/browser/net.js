goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3813){
var vec__3814__3815 = p__3813;
var k__3816 = cljs.core.nth.call(null,vec__3814__3815,0,null);
var v__3817 = cljs.core.nth.call(null,vec__3814__3815,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3816.toLowerCase()),v__3817]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__3848 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3818 = this$;

if(cljs.core.truth_(and__3546__auto____3818))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3818;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____3819 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3819))
{return or__3548__auto____3819;
} else
{var or__3548__auto____3820 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3820))
{return or__3548__auto____3820;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__3849 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____3821 = this$;

if(cljs.core.truth_(and__3546__auto____3821))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3821;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____3822 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3822))
{return or__3548__auto____3822;
} else
{var or__3548__auto____3823 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3823))
{return or__3548__auto____3823;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3850 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____3824 = this$;

if(cljs.core.truth_(and__3546__auto____3824))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3824;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____3825 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3825))
{return or__3548__auto____3825;
} else
{var or__3548__auto____3826 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3826))
{return or__3548__auto____3826;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__3851 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____3827 = this$;

if(cljs.core.truth_(and__3546__auto____3827))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____3827;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____3828 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3828))
{return or__3548__auto____3828;
} else
{var or__3548__auto____3829 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____3829))
{return or__3548__auto____3829;
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
return connect__3848.call(this,this$);
case  2 :
return connect__3849.call(this,this$,opt1);
case  3 :
return connect__3850.call(this,this$,opt1,opt2);
case  4 :
return connect__3851.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__3853 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____3830 = this$;

if(cljs.core.truth_(and__3546__auto____3830))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3830;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____3831 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3831))
{return or__3548__auto____3831;
} else
{var or__3548__auto____3832 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3832))
{return or__3548__auto____3832;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3854 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____3833 = this$;

if(cljs.core.truth_(and__3546__auto____3833))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3833;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____3834 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3834))
{return or__3548__auto____3834;
} else
{var or__3548__auto____3835 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3835))
{return or__3548__auto____3835;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__3855 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____3836 = this$;

if(cljs.core.truth_(and__3546__auto____3836))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3836;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____3837 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3837))
{return or__3548__auto____3837;
} else
{var or__3548__auto____3838 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3838))
{return or__3548__auto____3838;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__3856 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____3839 = this$;

if(cljs.core.truth_(and__3546__auto____3839))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3839;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____3840 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3840))
{return or__3548__auto____3840;
} else
{var or__3548__auto____3841 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3841))
{return or__3548__auto____3841;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__3857 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____3842 = this$;

if(cljs.core.truth_(and__3546__auto____3842))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____3842;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____3843 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3843))
{return or__3548__auto____3843;
} else
{var or__3548__auto____3844 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____3844))
{return or__3548__auto____3844;
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
return transmit__3853.call(this,this$,opt);
case  3 :
return transmit__3854.call(this,this$,opt,opt2);
case  4 :
return transmit__3855.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__3856.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__3857.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____3845 = this$;

if(cljs.core.truth_(and__3546__auto____3845))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____3845;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____3846 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3846))
{return or__3548__auto____3846;
} else
{var or__3548__auto____3847 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____3847))
{return or__3548__auto____3847;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3859){
var vec__3860__3861 = p__3859;
var k__3862 = cljs.core.nth.call(null,vec__3860__3861,0,null);
var v__3863 = cljs.core.nth.call(null,vec__3860__3861,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3862.toLowerCase()),v__3863]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__3864 = null;
var G__3864__3865 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3864__3866 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3864__3867 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3864__3868 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__3864__3869 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__3864 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__3864__3865.call(this,this$,uri);
case  3 :
return G__3864__3866.call(this,this$,uri,method);
case  4 :
return G__3864__3867.call(this,this$,uri,method,content);
case  5 :
return G__3864__3868.call(this,this$,uri,method,content,headers);
case  6 :
return G__3864__3869.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3864;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__3871){
var vec__3872__3873 = p__3871;
var k__3874 = cljs.core.nth.call(null,vec__3872__3873,0,null);
var v__3875 = cljs.core.nth.call(null,vec__3872__3873,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__3874.toLowerCase()),v__3875]);
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
var register_service__3882 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____3876 = this$;

if(cljs.core.truth_(and__3546__auto____3876))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____3876;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____3877 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3877))
{return or__3548__auto____3877;
} else
{var or__3548__auto____3878 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____3878))
{return or__3548__auto____3878;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__3883 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____3879 = this$;

if(cljs.core.truth_(and__3546__auto____3879))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____3879;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____3880 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3880))
{return or__3548__auto____3880;
} else
{var or__3548__auto____3881 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____3881))
{return or__3548__auto____3881;
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
return register_service__3882.call(this,this$,service_name,fn);
case  4 :
return register_service__3883.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__3885 = null;
var G__3885__3886 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__3885__3887 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__3885__3888 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__3885__3889 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__3885 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__3885__3886.call(this,this$);
case  2 :
return G__3885__3887.call(this,this$,on_connect_fn);
case  3 :
return G__3885__3888.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__3885__3889.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3885;
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
var G__3891 = null;
var G__3891__3892 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__3891__3893 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__3891 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__3891__3892.call(this,this$,service_name,fn);
case  4 :
return G__3891__3893.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3891;
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
var xpc_connection__3904 = (function (){
var temp__3698__auto____3895 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____3895))
{var config__3896 = temp__3698__auto____3895;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__3896)));
} else
{return null;
}
});
var xpc_connection__3905 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__3897){
var vec__3898__3899 = p__3897;
var k__3900 = cljs.core.nth.call(null,vec__3898__3899,0,null);
var v__3901 = cljs.core.nth.call(null,vec__3898__3899,1,null);

var temp__3698__auto____3902 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__3900);

if(cljs.core.truth_(temp__3698__auto____3902))
{var field__3903 = temp__3698__auto____3902;

return cljs.core.assoc.call(null,sum,field__3903,v__3901);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__3904.call(this);
case  1 :
return xpc_connection__3905.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
