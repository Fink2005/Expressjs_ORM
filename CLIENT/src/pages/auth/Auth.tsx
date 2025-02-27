import SignIn from "./SignIn";
import { createContext, SetStateAction, useEffect, useState } from "react";
import { signInTypeRespone } from "../../types/auth";
import DropdownHeader from "../../components/DropdownHeader";
import SignUp from "./SignUp";
import SnackbarAuth from "../../components/auth/SnackbarAuth";
export type DisplaySnackBarType = {
  displayMessage: string;
  isSuccessMessage: boolean;
  displaySnack: boolean;
};
export interface UserContextType {
  user: signInTypeRespone | null;
  switchAuth: boolean;
  setSwitchAuth: React.Dispatch<SetStateAction<boolean>>;
  loginUser: (userData: any) => void;
  logoutUser: () => void;
  displaySnackBar: DisplaySnackBarType;
  setDisplaySnackBar: React.Dispatch<SetStateAction<DisplaySnackBarType>>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
export default function Auth() {
  const [user, setUser] = useState<signInTypeRespone | null>(
    JSON.parse(localStorage.getItem("user")!)
  );

  const [switchAuth, setSwitchAuth] = useState<boolean>(false);

  const loginUser = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };
  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };
  const [displaySnackBar, setDisplaySnackBar] = useState<DisplaySnackBarType>({
    displayMessage: "",
    displaySnack: false,
    isSuccessMessage: false,
  });
  console.log(displaySnackBar);
  return (
    <div className="w-full me-3">
      <UserContext.Provider
        value={{
          user,
          loginUser,
          logoutUser,
          switchAuth,
          setSwitchAuth,
          setDisplaySnackBar,
          displaySnackBar,
        }}
      >
        {user ? (
          <div className="flex justify-center items-center">
            <DropdownHeader />
          </div>
        ) : (
          <div className="flex space-x-2 w-full">
            <div className="w-1/2">
              <SignIn />
            </div>{" "}
            <div className="w-1/2">
              <SignUp />
            </div>
          </div>
        )}
        <SnackbarAuth
          displaySnackBar={displaySnackBar}
          setDisplaySnackBar={setDisplaySnackBar}
        />
      </UserContext.Provider>
    </div>
  );
}
