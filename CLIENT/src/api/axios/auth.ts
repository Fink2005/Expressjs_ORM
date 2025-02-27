import api from "../api";
import {
  signInTypeRequest,
  signInTypeRespone,
  signUpTypeRespone,
  signUpTypeRequest,
  facebookLoginRequest,
  facebookLoginRespone,
} from "../../types/auth";

const auth = {
  signIn: (payload: signInTypeRequest): Promise<signInTypeRespone> =>
    api.post("/api/auth/signin", payload),
  signUp: (payload: signUpTypeRequest): Promise<signUpTypeRespone> =>
    api.post("/api/auth/signup", payload),
  google: (payload: { googleToken: string }): Promise<signInTypeRespone> =>
    api.post("/api/auth/google", payload),
  facebook: (payload: facebookLoginRequest): Promise<facebookLoginRespone> =>
    api.post("/api/auth/facebook", payload),
};

export default auth;
