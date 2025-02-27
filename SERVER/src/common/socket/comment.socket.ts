import jwt from "jsonwebtoken";
import { prisma } from "../../../prisma/init.prisma";
import { BadRequestException } from "../helpers/error.helper";

const handleCommentSocket = (io, socket) => {
  socket.on("join-detail-image", (roomId) => {
    
    console.log(`User with id ${socket.id} joined room ${roomId}`);
    socket.rooms.forEach((roomId) => {
        socket.leave(roomId);
      });
    socket.join(roomId);
  });
  socket.on("send-message", async (message) => {
    const { image_id, user_info, comment_content } = message;
    const decodeUser = jwt.decode(user_info?.tokens.accessToken)?.userId;
    console.log({ image_id, decodeUser, comment_content });
    const userExist = await prisma.users.findFirst({
      where: {
        user_id: Number(decodeUser),
      },
    });
    if (!userExist)
      throw new BadRequestException("Lỗi không tìm thấy người dùng");

    await prisma.comments.create({
      data: {
        comment_user_id: Number(decodeUser),
        comment_image_id: image_id,
        comment_content,
      },
    });
    const messageRespone = () => {
      let commentRespone = {};
      if (user_info.avatar2) {
        return (commentRespone = {
          comment_content,
          users: {
            user_name: user_info.user_name,
            avatar: user_info.avatar2,
          },
        });
      }
      else {
        return (commentRespone = {
            comment_content,
            users: {
              user_name: user_info.user_name,
              avatar: user_info.avatar,
            },
          });
      }
    };

    socket.broadcast.emit("recieve-message", messageRespone());
  });
};

export default handleCommentSocket;
