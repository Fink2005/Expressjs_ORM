export type signUpTypeRespone = {
  id: number;
  user_name: string;
  email: string;
  password: string;
  age: undefined;
  avatar: null;
};

export type signUpTypeRequest = Omit<signUpTypeRespone, "id" | "avatar">;

export type signInTypeRespone = {
  data: any;
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: null;
  accessToken: string;
  refreshToken: string;
};

export type signInTypeRequest = Pick<signInTypeRespone, "email" | "password">;

export type facebookLoginRequest = {
  userId: number;
  user_name: string;
  email: string;
  picture: {
    data: string;
  };
};

export type facebookLoginRespone = {
  data: {
    message: string;
    metaData: facebookLoginRequest & {
      avatarFacebook: string;
      accessToken: string;
      refreshToken: string;
    };
  };
};
