import api from "../api";
import {
  signInTypeRequest,
  signInTypeRespone,
  signUpTypeRespone,
  signUpTypeResquest,
} from "../types/auth";

const auth = {
  signIn: (payload: signInTypeRequest): Promise<signInTypeRespone> =>
    api.post("/api/auth/signup", payload),
  signUp: (payload: signUpTypeResquest): Promise<signUpTypeRespone> =>
    api.post("/api/auth/signin", payload),
};

export default auth;
