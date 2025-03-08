import { GoogleLogin } from "@react-oauth/google";
import { useGoogle } from "../../api/hooks/use-auth";
import { useDispatch } from "react-redux";
import {
  loginUser,
  setDisplaySnackBar,
} from "../../redux/features/auth/authSlice";

export default function Google() {
  const dispatch = useDispatch();

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
              dispatch(
                setDisplaySnackBar({
                  displayMessage: `${res.data.message}, hello  ${res.data.metaData.user_name}`,
                  displaySnack: true,
                  isSuccessMessage: true,
                })
              );
              dispatch(loginUser(res.data.metaData));
            })
            .catch((error) => {
              dispatch(
                setDisplaySnackBar({
                  displayMessage: `Loi`,
                  displaySnack: true,
                  isSuccessMessage: true,
                })
              );
            });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
