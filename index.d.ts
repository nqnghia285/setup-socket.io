import { Server } from "http";
import socketio, { Namespace } from "socket.io";

declare const io: socketio.Server;

/**
 * @method initIO Initiate io instance
 * @param server Server
 * @param origin string
 * @returns socketio.Server
 */
export declare function initIO(server: Server, origin: string): socketio.Server;

/**
 * @method createNamespace Create namespace of io
 * @param nsp string
 * @returns Namespace
 */
export declare function createNamespace(nsp: string): Namespace;

export default io;
