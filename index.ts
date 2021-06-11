import { Server } from "http";
import socketio, { Namespace } from "socket.io";
import { ioCookieParser, namespaceCookieParser } from "socket.io-cookies-parser";
import { RequestType } from "socket.io-cookies-parser/dist/lib/interface";

const io = new socketio.Server();

export interface IRequest extends RequestType {}

/**
 * @method initIO Initiate io instance
 * @param server Server
 * @param origin string
 * @returns socketio.Server
 */
export function initIO(server: Server, origin: string): socketio.Server {
	io.attach(server, {
		cors: {
			origin: [origin],
			methods: ["GET", "POST"],
			allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Origin", "Accept"],
			credentials: true,
		},
	});

	io.use(ioCookieParser);

	return io;
}

/**
 * @method createNamespace Create namespace of io
 * @param nsp string
 * @returns Namespace
 */
export function createNamespace(nsp: string): Namespace {
	return io.of(nsp, namespaceCookieParser);
}

export default io;
