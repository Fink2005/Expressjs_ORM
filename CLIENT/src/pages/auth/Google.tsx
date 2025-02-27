import { GoogleLogin } from "@react-oauth/google";
import React, { useContext } from "react";
import { useGoogle } from "../../api/hooks/use-auth";
import { DisplaySnackBarType, UserContext } from "./Auth";
type googleType = {
  setDisplaySnackBar: React.Dispatch<React.SetStateAction<DisplaySnackBarType>>;
  displaySnackBar: DisplaySnackBarType;
};
export default function Google({
  setDisplaySnackBar,
  displaySnackBar,
}: googleType) {
  const { loginUser } = useContext(UserContext);

  const { mutateAsync } = useGoogle();
  return (
    <div>
      <GoogleLogin
        size="large"
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          mutateAsync({ googleToken: credentialResponse.credential })
            .then((res) => {
              console.log(res);
              setDisplaySnackBar({
                ...displaySnackBar,
                displayMessage: `${res.data.message}, hello  ${res.data.metaData.user_name}`,
                displaySnack: true,
                isSuccessMessage: true,
              });
              loginUser(res.data.metaData);
            })
            .catch((error) => {
              console.log(error);
              setDisplaySnackBar({
                ...displaySnackBar,
                displaySnack: true,
              });
            });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
