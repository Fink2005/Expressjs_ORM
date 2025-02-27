import { Server } from "socket.io"
import handleCommentSocket from "./comment.socket"

const initSocket = (httpServer: any) => {
    const io = new Server(httpServer, {
        cors: {
            origin: 'http://localhost:5173'
        }
    })
    io.on('connection', (socket) => {
      handleCommentSocket(io, socket)
    }
    )
}


export default initSocket
