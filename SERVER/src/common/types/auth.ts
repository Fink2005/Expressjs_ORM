import type { JwtPayload } from "jsonwebtoken";

export type SignupRes = {
  user_id: number;
  user_name: string;
  email: string;
  password?: string;
  age: number;
  avatar?: string | null;
};

export type SigninRes = {
  age: number | null;
  avatar?: string | null | undefined;
  email: string;
  user_id: number;
  user_name: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

export type googleRespone = {
  email: string;
  name: string;
  picture: string;
} | null;
