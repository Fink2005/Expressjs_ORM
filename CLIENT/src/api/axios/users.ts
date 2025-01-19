import { userUpdateType } from "../../types/users";
import api from "../api";

const users = {
  userList: (): Promise<unknown> => api.get("/user-list"),
  userUpdate: (body: userUpdateType): Promise<unknown> =>
    api.put("/user-update", body),
};
export default users;
