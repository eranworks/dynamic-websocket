
module.exports = function(RED) {
    "use strict";
    const WebSocket = require("ws");
    
    var ws = null;

    function StartWebSocket(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {

            if (msg.uri == null || msg.uri == "") {
                if (ws != null) {
                    terminateConn();
                }

                node.status({fill:"red",shape:"dot",text:"uri is empty"});
                node.error("uri is empty");
                
                return;
            
            }else {
                if (ws != null) {
                    if (ws.url == msg.uri) {
                        sendPayload(msg, node, ws);
                        return;
                    }
                    else {
                        terminateConn();
                    }
                }
                startConn(msg.uri);
            }
            
            ws.on('error', console.error);

            ws.on('open', function open() {
                node.status({fill:"green",shape:"dot",text:"connected"});
                sendPayload(msg, node, ws);
            });

            ws.on('message', function message(data) {
                node.send({payload:data});
            });

            ws.on('close', function close() {
                if (!node.closing) {
                    clearTimeout(node.tout);
                    node.tout = setTimeout(function() { startConn(ws.url); }, 3000); // try to reconnect every 3 secs... bit fast ?
                }

                node.status({fill:"red",shape:"ring",text:"disconnected"});

            });
        });
        node.on('close', function() {
            node.closing = true;
            if (ws != null) {
                terminateConn();
            }
            clearTimeout(node.tout);
        }
        );
    }

    function startConn(url) {
        ws = new WebSocket(url);
    }

    function terminateConn() {
        ws.terminate();
    }

    function sendPayload(msg, node, ws) {
        ws.send(msg.payload);
        node.status({fill:"green",shape:"dot",text:"connected to : "+ws.url});
    }

    RED.nodes.registerType("dynamic-websocket",StartWebSocket);
}