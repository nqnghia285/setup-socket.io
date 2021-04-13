import { Server } from "http";
import socketio, { Namespace } from "socket.io";

declare const io: socketio.Server;

/**
 * @method initIO
 * @param server
 * @param origin
 * @returns Server
 */
export declare function initIO(server: Server, origin: string): socketio.Server;

/**
 * @method createNamespace
 * @param nsp
 * @returns Namespace
 */
export declare function createNamespace(nsp: string): Namespace;

export default io;
