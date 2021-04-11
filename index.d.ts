/// <reference path="./index.ts" />
/// <reference types="socket.io" />
/// <reference types="socket.io-cookies-parser" />

import socketio, { Namespace } from "socket.io";

/**
 * @method initIO
 * @param server
 * @param origin
 * @returns Server
 */
export function initIO(server: any, origin: string): socketio.Server;

/**
 * @method createNamespace
 * @param nsp
 * @returns Namespace
 */
export function createNamespace(nsp: string): Namespace;
