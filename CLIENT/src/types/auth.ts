export type signUpTypeRespone = {
  id: number;
  name: string;
  email: string;
  password: "string";
  age: number;
  avatar: null;
};

export type signUpTypeResquest = Omit<signUpTypeRespone, "id" | "avatar">;

export type signInTypeRespone = {
  id: number;
  name: string;
  email: string;
  password: "string";
  avatar: null;
  accessToken: string;
  refreshToken: string;
};

export type signInTypeRequest = Pick<signInTypeRespone, "email" | "password">;
