export type SignupRes = {
  user_id: number;
  user_name: string;
  email: string;
  password?: string;
  age: number;
  avatar?: string | null;
};

export type SigninRes = {
  email: string;
  accessToken: string;
  refreshToken: string;
};
