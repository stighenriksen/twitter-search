goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
/**
* Process a single block of JavaScript received from the server
*/
clojure.browser.repl.evaluate_javascript = (function evaluate_javascript(block){
var result__4291 = (function (){try{return cljs.core.ObjMap.fromObject(["﷐'status","﷐'value"],{"﷐'status":"﷐'success","﷐'value":cljs.core.str.call(null,eval(block))});
}catch (e4289){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e4289)))
{var e__4290 = e4289;

return cljs.core.ObjMap.fromObject(["﷐'status","﷐'value"],{"﷐'status":"﷐'exception","﷐'value":cljs.core.pr_str.call(null,e__4290)});
} else
{if(cljs.core.truth_("﷐'else"))
{throw e4289;
} else
{return null;
}
}
}})();

return cljs.core.pr_str.call(null,result__4291);
});
clojure.browser.repl.send_result = (function send_result(connection,url,data){
return clojure.browser.net.transmit.call(null,connection,url,"POST",data,null,0);
});
/**
* Start the REPL server connection.
*/
clojure.browser.repl.start_evaluator = (function start_evaluator(url){
var temp__3695__auto____4292 = clojure.browser.net.xpc_connection.call(null);

if(cljs.core.truth_(temp__3695__auto____4292))
{var repl_connection__4293 = temp__3695__auto____4292;

var connection__4294 = clojure.browser.net.xhr_connection.call(null);

clojure.browser.event.listen.call(null,connection__4294,"﷐'success",(function (e){
return clojure.browser.net.transmit.call(null,repl_connection__4293,"﷐'evaluate-javascript",e.currentTarget.getResponseText(cljs.core.List.EMPTY));
}));
clojure.browser.net.register_service.call(null,repl_connection__4293,"﷐'send-result",cljs.core.partial.call(null,clojure.browser.repl.send_result,connection__4294,url));
clojure.browser.net.connect.call(null,repl_connection__4293,cljs.core.constantly.call(null,null));
return setTimeout.call(null,(function (){
return clojure.browser.repl.send_result.call(null,connection__4294,url,"ready");
}),50);
} else
{return alert.call(null,"No 'xpc' param provided to child iframe.");
}
});
/**
* Connects to a REPL server from an HTML document. After the
* connection is made, the REPL will evaluate forms in the context of
* the document that called this function.
*/
clojure.browser.repl.connect = (function connect(repl_server_url){
var repl_connection__4295 = clojure.browser.net.xpc_connection.call(null,cljs.core.ObjMap.fromObject(["﷐'peer_uri"],{"﷐'peer_uri":repl_server_url}));

clojure.browser.net.register_service.call(null,repl_connection__4295,"﷐'evaluate-javascript",(function (js){
return clojure.browser.net.transmit.call(null,repl_connection__4295,"﷐'send-result",clojure.browser.repl.evaluate_javascript.call(null,js));
}));
return clojure.browser.net.connect.call(null,repl_connection__4295,cljs.core.constantly.call(null,null),(function (iframe){
return iframe.style.display = "none";
}));
});
