goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4017){
var vec__4018__4019 = p__4017;
var k__4020 = cljs.core.nth.call(null,vec__4018__4019,0,null);
var v__4021 = cljs.core.nth.call(null,vec__4018__4019,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4020.toLowerCase()),v__4021]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__4052 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____4022 = this$;

if(cljs.core.truth_(and__3546__auto____4022))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4022;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____4023 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4023))
{return or__3548__auto____4023;
} else
{var or__3548__auto____4024 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4024))
{return or__3548__auto____4024;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__4053 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____4025 = this$;

if(cljs.core.truth_(and__3546__auto____4025))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4025;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____4026 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4026))
{return or__3548__auto____4026;
} else
{var or__3548__auto____4027 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4027))
{return or__3548__auto____4027;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__4054 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4028 = this$;

if(cljs.core.truth_(and__3546__auto____4028))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4028;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____4029 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4029))
{return or__3548__auto____4029;
} else
{var or__3548__auto____4030 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4030))
{return or__3548__auto____4030;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4055 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4031 = this$;

if(cljs.core.truth_(and__3546__auto____4031))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4031;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____4032 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4032))
{return or__3548__auto____4032;
} else
{var or__3548__auto____4033 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4033))
{return or__3548__auto____4033;
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
return connect__4052.call(this,this$);
case  2 :
return connect__4053.call(this,this$,opt1);
case  3 :
return connect__4054.call(this,this$,opt1,opt2);
case  4 :
return connect__4055.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__4057 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____4034 = this$;

if(cljs.core.truth_(and__3546__auto____4034))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4034;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____4035 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4035))
{return or__3548__auto____4035;
} else
{var or__3548__auto____4036 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4036))
{return or__3548__auto____4036;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__4058 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4037 = this$;

if(cljs.core.truth_(and__3546__auto____4037))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4037;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____4038 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4038))
{return or__3548__auto____4038;
} else
{var or__3548__auto____4039 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4039))
{return or__3548__auto____4039;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4059 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4040 = this$;

if(cljs.core.truth_(and__3546__auto____4040))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4040;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____4041 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4041))
{return or__3548__auto____4041;
} else
{var or__3548__auto____4042 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4042))
{return or__3548__auto____4042;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__4060 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____4043 = this$;

if(cljs.core.truth_(and__3546__auto____4043))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4043;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____4044 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4044))
{return or__3548__auto____4044;
} else
{var or__3548__auto____4045 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4045))
{return or__3548__auto____4045;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__4061 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____4046 = this$;

if(cljs.core.truth_(and__3546__auto____4046))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4046;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____4047 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4047))
{return or__3548__auto____4047;
} else
{var or__3548__auto____4048 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4048))
{return or__3548__auto____4048;
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
return transmit__4057.call(this,this$,opt);
case  3 :
return transmit__4058.call(this,this$,opt,opt2);
case  4 :
return transmit__4059.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__4060.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__4061.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4049 = this$;

if(cljs.core.truth_(and__3546__auto____4049))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____4049;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____4050 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4050))
{return or__3548__auto____4050;
} else
{var or__3548__auto____4051 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____4051))
{return or__3548__auto____4051;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4063){
var vec__4064__4065 = p__4063;
var k__4066 = cljs.core.nth.call(null,vec__4064__4065,0,null);
var v__4067 = cljs.core.nth.call(null,vec__4064__4065,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4066.toLowerCase()),v__4067]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__4068 = null;
var G__4068__4069 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4068__4070 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4068__4071 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4068__4072 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4068__4073 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__4068 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__4068__4069.call(this,this$,uri);
case  3 :
return G__4068__4070.call(this,this$,uri,method);
case  4 :
return G__4068__4071.call(this,this$,uri,method,content);
case  5 :
return G__4068__4072.call(this,this$,uri,method,content,headers);
case  6 :
return G__4068__4073.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4068;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4075){
var vec__4076__4077 = p__4075;
var k__4078 = cljs.core.nth.call(null,vec__4076__4077,0,null);
var v__4079 = cljs.core.nth.call(null,vec__4076__4077,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4078.toLowerCase()),v__4079]);
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
var register_service__4086 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____4080 = this$;

if(cljs.core.truth_(and__3546__auto____4080))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4080;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____4081 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4081))
{return or__3548__auto____4081;
} else
{var or__3548__auto____4082 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4082))
{return or__3548__auto____4082;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4087 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____4083 = this$;

if(cljs.core.truth_(and__3546__auto____4083))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4083;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____4084 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4084))
{return or__3548__auto____4084;
} else
{var or__3548__auto____4085 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4085))
{return or__3548__auto____4085;
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
return register_service__4086.call(this,this$,service_name,fn);
case  4 :
return register_service__4087.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__4089 = null;
var G__4089__4090 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__4089__4091 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__4089__4092 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__4089__4093 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__4089 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__4089__4090.call(this,this$);
case  2 :
return G__4089__4091.call(this,this$,on_connect_fn);
case  3 :
return G__4089__4092.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__4089__4093.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4089;
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
var G__4095 = null;
var G__4095__4096 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__4095__4097 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__4095 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__4095__4096.call(this,this$,service_name,fn);
case  4 :
return G__4095__4097.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4095;
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
var xpc_connection__4108 = (function (){
var temp__3698__auto____4099 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____4099))
{var config__4100 = temp__3698__auto____4099;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__4100)));
} else
{return null;
}
});
var xpc_connection__4109 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__4101){
var vec__4102__4103 = p__4101;
var k__4104 = cljs.core.nth.call(null,vec__4102__4103,0,null);
var v__4105 = cljs.core.nth.call(null,vec__4102__4103,1,null);

var temp__3698__auto____4106 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__4104);

if(cljs.core.truth_(temp__3698__auto____4106))
{var field__4107 = temp__3698__auto____4106;

return cljs.core.assoc.call(null,sum,field__4107,v__4105);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__4108.call(this);
case  1 :
return xpc_connection__4109.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
