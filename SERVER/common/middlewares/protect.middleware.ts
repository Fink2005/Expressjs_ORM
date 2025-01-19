// import { UnauthorizationException } from "../helpers/error.helper"
// import jwt from "jsonwebtoken";

// export const protect = async (req, res, next) => {
//     try {
//         const accessToken = req.headers.authorization?.split(" ")[1]
//         if (!accessToken) {
//             throw new UnauthorizationException("Vui lòng cung cấp token để sử dụng")
//         }
//         const decode = jwt.verify(accessToken, ACCESS_TOKEN)
//     } catch (error) {

//     }
// }
