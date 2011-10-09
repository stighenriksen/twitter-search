goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4296){
var vec__4297__4298 = p__4296;
var k__4299 = cljs.core.nth.call(null,vec__4297__4298,0,null);
var v__4300 = cljs.core.nth.call(null,vec__4297__4298,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4299.toLowerCase()),v__4300]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__4331 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____4301 = this$;

if(cljs.core.truth_(and__3546__auto____4301))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4301;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____4302 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4302))
{return or__3548__auto____4302;
} else
{var or__3548__auto____4303 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4303))
{return or__3548__auto____4303;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__4332 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____4304 = this$;

if(cljs.core.truth_(and__3546__auto____4304))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4304;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____4305 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4305))
{return or__3548__auto____4305;
} else
{var or__3548__auto____4306 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4306))
{return or__3548__auto____4306;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__4333 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4307 = this$;

if(cljs.core.truth_(and__3546__auto____4307))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4307;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____4308 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4308))
{return or__3548__auto____4308;
} else
{var or__3548__auto____4309 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4309))
{return or__3548__auto____4309;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4334 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4310 = this$;

if(cljs.core.truth_(and__3546__auto____4310))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4310;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____4311 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4311))
{return or__3548__auto____4311;
} else
{var or__3548__auto____4312 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4312))
{return or__3548__auto____4312;
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
return connect__4331.call(this,this$);
case  2 :
return connect__4332.call(this,this$,opt1);
case  3 :
return connect__4333.call(this,this$,opt1,opt2);
case  4 :
return connect__4334.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__4336 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____4313 = this$;

if(cljs.core.truth_(and__3546__auto____4313))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4313;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____4314 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4314))
{return or__3548__auto____4314;
} else
{var or__3548__auto____4315 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4315))
{return or__3548__auto____4315;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__4337 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4316 = this$;

if(cljs.core.truth_(and__3546__auto____4316))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4316;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____4317 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4317))
{return or__3548__auto____4317;
} else
{var or__3548__auto____4318 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4318))
{return or__3548__auto____4318;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4338 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4319 = this$;

if(cljs.core.truth_(and__3546__auto____4319))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4319;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____4320 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4320))
{return or__3548__auto____4320;
} else
{var or__3548__auto____4321 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4321))
{return or__3548__auto____4321;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__4339 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____4322 = this$;

if(cljs.core.truth_(and__3546__auto____4322))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4322;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____4323 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4323))
{return or__3548__auto____4323;
} else
{var or__3548__auto____4324 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4324))
{return or__3548__auto____4324;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__4340 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____4325 = this$;

if(cljs.core.truth_(and__3546__auto____4325))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4325;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____4326 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4326))
{return or__3548__auto____4326;
} else
{var or__3548__auto____4327 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4327))
{return or__3548__auto____4327;
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
return transmit__4336.call(this,this$,opt);
case  3 :
return transmit__4337.call(this,this$,opt,opt2);
case  4 :
return transmit__4338.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__4339.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__4340.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4328 = this$;

if(cljs.core.truth_(and__3546__auto____4328))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____4328;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____4329 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4329))
{return or__3548__auto____4329;
} else
{var or__3548__auto____4330 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____4330))
{return or__3548__auto____4330;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4342){
var vec__4343__4344 = p__4342;
var k__4345 = cljs.core.nth.call(null,vec__4343__4344,0,null);
var v__4346 = cljs.core.nth.call(null,vec__4343__4344,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4345.toLowerCase()),v__4346]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__4347 = null;
var G__4347__4348 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4347__4349 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4347__4350 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4347__4351 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4347__4352 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__4347 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__4347__4348.call(this,this$,uri);
case  3 :
return G__4347__4349.call(this,this$,uri,method);
case  4 :
return G__4347__4350.call(this,this$,uri,method,content);
case  5 :
return G__4347__4351.call(this,this$,uri,method,content,headers);
case  6 :
return G__4347__4352.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4347;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4354){
var vec__4355__4356 = p__4354;
var k__4357 = cljs.core.nth.call(null,vec__4355__4356,0,null);
var v__4358 = cljs.core.nth.call(null,vec__4355__4356,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4357.toLowerCase()),v__4358]);
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
var register_service__4365 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____4359 = this$;

if(cljs.core.truth_(and__3546__auto____4359))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4359;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____4360 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4360))
{return or__3548__auto____4360;
} else
{var or__3548__auto____4361 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4361))
{return or__3548__auto____4361;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4366 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____4362 = this$;

if(cljs.core.truth_(and__3546__auto____4362))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4362;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____4363 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4363))
{return or__3548__auto____4363;
} else
{var or__3548__auto____4364 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4364))
{return or__3548__auto____4364;
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
return register_service__4365.call(this,this$,service_name,fn);
case  4 :
return register_service__4366.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__4368 = null;
var G__4368__4369 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__4368__4370 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__4368__4371 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__4368__4372 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__4368 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__4368__4369.call(this,this$);
case  2 :
return G__4368__4370.call(this,this$,on_connect_fn);
case  3 :
return G__4368__4371.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__4368__4372.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4368;
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
var G__4374 = null;
var G__4374__4375 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__4374__4376 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__4374 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__4374__4375.call(this,this$,service_name,fn);
case  4 :
return G__4374__4376.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4374;
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
var xpc_connection__4387 = (function (){
var temp__3698__auto____4378 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____4378))
{var config__4379 = temp__3698__auto____4378;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__4379)));
} else
{return null;
}
});
var xpc_connection__4388 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__4380){
var vec__4381__4382 = p__4380;
var k__4383 = cljs.core.nth.call(null,vec__4381__4382,0,null);
var v__4384 = cljs.core.nth.call(null,vec__4381__4382,1,null);

var temp__3698__auto____4385 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__4383);

if(cljs.core.truth_(temp__3698__auto____4385))
{var field__4386 = temp__3698__auto____4385;

return cljs.core.assoc.call(null,sum,field__4386,v__4384);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__4387.call(this);
case  1 :
return xpc_connection__4388.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
