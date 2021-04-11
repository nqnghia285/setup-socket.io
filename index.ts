import socketio, { Namespace } from "socket.io";
import { parser, cookieParser } from "socket.io-cookies-parser";

const io = new socketio.Server();

/**
 * @method initIO
 * @param server
 * @param origin
 * @returns Server
 */
export function initIO(server: any, origin: string): socketio.Server {
    io.attach(server, {
        cors: {
            origin: [origin],
            methods: ["GET", "POST"],
            allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Origin", "Accept"],
            credentials: true,
        },
    });

    io.use(cookieParser);

    return io;
}

/**
 * @method createNamespace
 * @param nsp
 * @returns Namespace
 */
export function createNamespace(nsp: string): Namespace {
    return io.of(nsp, parser);
}

export default io;
