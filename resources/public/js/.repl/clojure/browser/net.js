goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4732){
var vec__4733__4734 = p__4732;
var k__4735 = cljs.core.nth.call(null,vec__4733__4734,0,null);
var v__4736 = cljs.core.nth.call(null,vec__4733__4734,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4735.toLowerCase()),v__4736]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__4767 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____4737 = this$;

if(cljs.core.truth_(and__3546__auto____4737))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4737;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____4738 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4738))
{return or__3548__auto____4738;
} else
{var or__3548__auto____4739 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4739))
{return or__3548__auto____4739;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__4768 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____4740 = this$;

if(cljs.core.truth_(and__3546__auto____4740))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4740;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____4741 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4741))
{return or__3548__auto____4741;
} else
{var or__3548__auto____4742 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4742))
{return or__3548__auto____4742;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__4769 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4743 = this$;

if(cljs.core.truth_(and__3546__auto____4743))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4743;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____4744 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4744))
{return or__3548__auto____4744;
} else
{var or__3548__auto____4745 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4745))
{return or__3548__auto____4745;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4770 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4746 = this$;

if(cljs.core.truth_(and__3546__auto____4746))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4746;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____4747 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4747))
{return or__3548__auto____4747;
} else
{var or__3548__auto____4748 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4748))
{return or__3548__auto____4748;
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
return connect__4767.call(this,this$);
case  2 :
return connect__4768.call(this,this$,opt1);
case  3 :
return connect__4769.call(this,this$,opt1,opt2);
case  4 :
return connect__4770.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__4772 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____4749 = this$;

if(cljs.core.truth_(and__3546__auto____4749))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4749;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____4750 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4750))
{return or__3548__auto____4750;
} else
{var or__3548__auto____4751 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4751))
{return or__3548__auto____4751;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__4773 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4752 = this$;

if(cljs.core.truth_(and__3546__auto____4752))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4752;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____4753 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4753))
{return or__3548__auto____4753;
} else
{var or__3548__auto____4754 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4754))
{return or__3548__auto____4754;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4774 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4755 = this$;

if(cljs.core.truth_(and__3546__auto____4755))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4755;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____4756 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4756))
{return or__3548__auto____4756;
} else
{var or__3548__auto____4757 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4757))
{return or__3548__auto____4757;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__4775 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____4758 = this$;

if(cljs.core.truth_(and__3546__auto____4758))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4758;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____4759 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4759))
{return or__3548__auto____4759;
} else
{var or__3548__auto____4760 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4760))
{return or__3548__auto____4760;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__4776 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____4761 = this$;

if(cljs.core.truth_(and__3546__auto____4761))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4761;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____4762 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4762))
{return or__3548__auto____4762;
} else
{var or__3548__auto____4763 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4763))
{return or__3548__auto____4763;
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
return transmit__4772.call(this,this$,opt);
case  3 :
return transmit__4773.call(this,this$,opt,opt2);
case  4 :
return transmit__4774.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__4775.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__4776.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4764 = this$;

if(cljs.core.truth_(and__3546__auto____4764))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____4764;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____4765 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4765))
{return or__3548__auto____4765;
} else
{var or__3548__auto____4766 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____4766))
{return or__3548__auto____4766;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4778){
var vec__4779__4780 = p__4778;
var k__4781 = cljs.core.nth.call(null,vec__4779__4780,0,null);
var v__4782 = cljs.core.nth.call(null,vec__4779__4780,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4781.toLowerCase()),v__4782]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__4783 = null;
var G__4783__4784 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4783__4785 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4783__4786 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4783__4787 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4783__4788 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__4783 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__4783__4784.call(this,this$,uri);
case  3 :
return G__4783__4785.call(this,this$,uri,method);
case  4 :
return G__4783__4786.call(this,this$,uri,method,content);
case  5 :
return G__4783__4787.call(this,this$,uri,method,content,headers);
case  6 :
return G__4783__4788.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4783;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4790){
var vec__4791__4792 = p__4790;
var k__4793 = cljs.core.nth.call(null,vec__4791__4792,0,null);
var v__4794 = cljs.core.nth.call(null,vec__4791__4792,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4793.toLowerCase()),v__4794]);
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
var register_service__4801 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____4795 = this$;

if(cljs.core.truth_(and__3546__auto____4795))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4795;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____4796 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4796))
{return or__3548__auto____4796;
} else
{var or__3548__auto____4797 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4797))
{return or__3548__auto____4797;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4802 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____4798 = this$;

if(cljs.core.truth_(and__3546__auto____4798))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4798;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____4799 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4799))
{return or__3548__auto____4799;
} else
{var or__3548__auto____4800 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4800))
{return or__3548__auto____4800;
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
return register_service__4801.call(this,this$,service_name,fn);
case  4 :
return register_service__4802.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__4804 = null;
var G__4804__4805 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__4804__4806 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__4804__4807 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__4804__4808 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__4804 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__4804__4805.call(this,this$);
case  2 :
return G__4804__4806.call(this,this$,on_connect_fn);
case  3 :
return G__4804__4807.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__4804__4808.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4804;
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
var G__4810 = null;
var G__4810__4811 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__4810__4812 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__4810 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__4810__4811.call(this,this$,service_name,fn);
case  4 :
return G__4810__4812.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4810;
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
var xpc_connection__4823 = (function (){
var temp__3698__auto____4814 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____4814))
{var config__4815 = temp__3698__auto____4814;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__4815)));
} else
{return null;
}
});
var xpc_connection__4824 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__4816){
var vec__4817__4818 = p__4816;
var k__4819 = cljs.core.nth.call(null,vec__4817__4818,0,null);
var v__4820 = cljs.core.nth.call(null,vec__4817__4818,1,null);

var temp__3698__auto____4821 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__4819);

if(cljs.core.truth_(temp__3698__auto____4821))
{var field__4822 = temp__3698__auto____4821;

return cljs.core.assoc.call(null,sum,field__4822,v__4820);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__4823.call(this);
case  1 :
return xpc_connection__4824.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
