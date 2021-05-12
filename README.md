# `Setup Socket.IO` [![Build Status](https://github.com/Links2004/arduinoWebSockets/workflows/CI/badge.svg?branch=master)](https://github.com/nqnghia285/setup-socket.io.git)

### Functions:

```typescript
/**
 * @method initIO Initiate io instance
 * @param server Server
 * @param origin string
 * @returns socketio.Server
 */
function initIO(server: Server, origin: string): socketio.Server;
```

```typescript
/**
 * @method createNamespace Create namespace of io
 * @param nsp string
 * @returns Namespace
 */
function createNamespace(nsp: string): Namespace;
```

### Example:

```typescript
// ES6
import dotenv from "dotenv";
import { createServer } from "http";
import express from "express";
import { Socket } from "socket.io";
import io, { createNamespace, initIO } from "setup-socket.io";

dotenv.config();

const ORIGIN = process.env.ORIGIN || "*";

const app = express();
const server = createServer(app);

// Init io
initIO(server, ORIGIN);

// Create client namespace
const client = createNamespace("/client");

io.on("connection", (socket: Socket) => {
    socket.on("your-event", (message) => {
        console.log(message);
        console.log("Cookies:", socket.request.cookies);
    });
});

client.on("connection", (socket: Socket) => {
    socket.on("your-event", (message) => {
        console.log(message);
        console.log("Cookies:", socket.request.cookies);
    });
});
```
