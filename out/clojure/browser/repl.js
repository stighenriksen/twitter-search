goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
/**
* Process a single block of JavaScript received from the server
*/
clojure.browser.repl.evaluate_javascript = (function evaluate_javascript(block){
var result__3784 = (function (){try{return cljs.core.ObjMap.fromObject(["﷐'status","﷐'value"],{"﷐'status":"﷐'success","﷐'value":cljs.core.str.call(null,eval(block))});
}catch (e3782){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e3782)))
{var e__3783 = e3782;

return cljs.core.ObjMap.fromObject(["﷐'status","﷐'value"],{"﷐'status":"﷐'exception","﷐'value":cljs.core.pr_str.call(null,e__3783)});
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3782;
} else
{return null;
}
}
}})();

return cljs.core.pr_str.call(null,result__3784);
});
clojure.browser.repl.send_result = (function send_result(connection,url,data){
return clojure.browser.net.transmit.call(null,connection,url,"POST",data,null,0);
});
/**
* Start the REPL server connection.
*/
clojure.browser.repl.start_evaluator = (function start_evaluator(url){
var temp__3695__auto____3785 = clojure.browser.net.xpc_connection.call(null);

if(cljs.core.truth_(temp__3695__auto____3785))
{var repl_connection__3786 = temp__3695__auto____3785;

var connection__3787 = clojure.browser.net.xhr_connection.call(null);

clojure.browser.event.listen.call(null,connection__3787,"﷐'success",(function (e){
return clojure.browser.net.transmit.call(null,repl_connection__3786,"﷐'evaluate-javascript",e.currentTarget.getResponseText(cljs.core.List.EMPTY));
}));
clojure.browser.net.register_service.call(null,repl_connection__3786,"﷐'send-result",cljs.core.partial.call(null,clojure.browser.repl.send_result,connection__3787,url));
clojure.browser.net.connect.call(null,repl_connection__3786,cljs.core.constantly.call(null,null));
return setTimeout.call(null,(function (){
return clojure.browser.repl.send_result.call(null,connection__3787,url,"ready");
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
var repl_connection__3788 = clojure.browser.net.xpc_connection.call(null,cljs.core.ObjMap.fromObject(["﷐'peer_uri"],{"﷐'peer_uri":repl_server_url}));

clojure.browser.net.register_service.call(null,repl_connection__3788,"﷐'evaluate-javascript",(function (js){
return clojure.browser.net.transmit.call(null,repl_connection__3788,"﷐'send-result",clojure.browser.repl.evaluate_javascript.call(null,js));
}));
return clojure.browser.net.connect.call(null,repl_connection__3788,cljs.core.constantly.call(null,null),(function (iframe){
return iframe.style.display = "none";
}));
});
