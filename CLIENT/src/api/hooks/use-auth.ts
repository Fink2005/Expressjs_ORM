import { useMutation } from "@tanstack/react-query";
import auth from "../axios/auth";
import {
  facebookLoginRequest,
  signInTypeRequest,
  signUpTypeRequest,
} from "../../types/auth";

export const useSignIn = () => {
  return useMutation({
    mutationFn: (userAuth: signInTypeRequest) => auth.signIn(userAuth),
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: (userAuth: signUpTypeRequest) => auth.signUp(userAuth),
  });
};

export const useGoogle = () => {
  return useMutation({
    mutationFn: (userAuth: any) => auth.google(userAuth),
  });
};
export const useFacebook = () => {
  return useMutation({
    mutationFn: (userAuth: facebookLoginRequest) => auth.facebook(userAuth),
  });
};
