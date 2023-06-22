<!-- This document covers for dynamic websocket node  -->
# Dynamic Websocket Node

This node is a dynamic websocket node.

## Installation

```bash
npm install @erhansiraci/dynamic-websocket
```

### Usage

This node is a dynamic websocket node. It can be used to create a websocket connection to a server. The url of the server can be set dynamically by `msg.uri` prop of the input message. The node will try to connect to the server and send the message to the server. The node will also receive the message from the server and send it to the output message.

## Example

```json
[
    {
        "id": "67e096bb997ecf28",
        "type": "debug",
        "z": "e453a28f46a90931",
        "name": "debug 29",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 320,
        "y": 320,
        "wires": []
    },
    {
        "id": "5990d0c629e115ba",
        "type": "websocket in",
        "z": "e453a28f46a90931",
        "name": "",
        "server": "6637e80e61fae304",
        "client": "",
        "x": 130,
        "y": 320,
        "wires": [
            [
                "67e096bb997ecf28"
            ]
        ]
    },
    {
        "id": "32a9621309520400",
        "type": "websocket in",
        "z": "e453a28f46a90931",
        "name": "",
        "server": "66cdf876c88c0df7",
        "client": "",
        "x": 130,
        "y": 260,
        "wires": [
            [
                "dc0f26e8db57aede"
            ]
        ]
    },
    {
        "id": "dc0f26e8db57aede",
        "type": "debug",
        "z": "e453a28f46a90931",
        "name": "out_test2",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 320,
        "y": 260,
        "wires": []
    },
    {
        "id": "030905b080a5a585",
        "type": "inject",
        "z": "e453a28f46a90931",
        "name": "test1",
        "props": [
            {
                "p": "uri",
                "v": "ws://127.0.0.1:1880/ws/test1",
                "vt": "str"
            },
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 80,
        "wires": [
            [
                "238a88e3da7c6636"
            ]
        ]
    },
    {
        "id": "6ec8b68b4cc52b04",
        "type": "debug",
        "z": "e453a28f46a90931",
        "name": "out_websocket",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 570,
        "y": 140,
        "wires": []
    },
    {
        "id": "238a88e3da7c6636",
        "type": "dynamic-websocket",
        "z": "e453a28f46a90931",
        "name": "dynamic-websocket",
        "x": 360,
        "y": 140,
        "wires": [
            [
                "6ec8b68b4cc52b04"
            ]
        ]
    },
    {
        "id": "874ad9f0d6b30f9c",
        "type": "inject",
        "z": "e453a28f46a90931",
        "name": "test2",
        "props": [
            {
                "p": "uri",
                "v": "ws://127.0.0.1:1880/ws/test2",
                "vt": "str"
            },
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 200,
        "wires": [
            [
                "238a88e3da7c6636"
            ]
        ]
    },
    {
        "id": "0a79a663bbc0d464",
        "type": "inject",
        "z": "e453a28f46a90931",
        "name": "empty",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 140,
        "wires": [
            [
                "238a88e3da7c6636"
            ]
        ]
    },
    {
        "id": "14edf6c99cb90e5d",
        "type": "inject",
        "z": "e453a28f46a90931",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"reply\":\"test\"}",
        "payloadType": "json",
        "x": 120,
        "y": 380,
        "wires": [
            [
                "b889b69550c1cccb"
            ]
        ]
    },
    {
        "id": "b889b69550c1cccb",
        "type": "websocket out",
        "z": "e453a28f46a90931",
        "name": "",
        "server": "6637e80e61fae304",
        "client": "",
        "x": 340,
        "y": 380,
        "wires": []
    },
    {
        "id": "aca5baacb0a4a33a",
        "type": "inject",
        "z": "e453a28f46a90931",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"reply\":\"test2\"}",
        "payloadType": "json",
        "x": 120,
        "y": 440,
        "wires": [
            [
                "67ce4606921215b1"
            ]
        ]
    },
    {
        "id": "67ce4606921215b1",
        "type": "websocket out",
        "z": "e453a28f46a90931",
        "name": "",
        "server": "66cdf876c88c0df7",
        "client": "",
        "x": 340,
        "y": 440,
        "wires": []
    },
    {
        "id": "6637e80e61fae304",
        "type": "websocket-listener",
        "path": "/ws/test1",
        "wholemsg": "false"
    },
    {
        "id": "66cdf876c88c0df7",
        "type": "websocket-listener",
        "path": "/ws/test2",
        "wholemsg": "false"
    }
]
```

## License

No License

## Author

[Erhan Siraci]()

[Alper Yazir]()
