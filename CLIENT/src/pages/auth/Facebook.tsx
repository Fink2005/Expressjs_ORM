import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FaFacebook } from "react-icons/fa";
import { useFacebook } from "../../api/hooks/use-auth";
import { DisplaySnackBarType, UserContext } from "./Auth";
type facebookType = {
  setDisplaySnackBar: React.Dispatch<React.SetStateAction<DisplaySnackBarType>>;
  displaySnackBar: DisplaySnackBarType;
};
export default function Facebook({
  displaySnackBar,
  setDisplaySnackBar,
}: facebookType) {
  const { loginUser } = useContext(UserContext);

  const { mutateAsync } = useFacebook();
  const responseFacebook = (response: any) => {
    const dataRespone = {
      email: response.email,
      user_name: response.name,
      userId: response.userId,
      picture: response.picture.data.url,
    };
    mutateAsync(dataRespone)
      .then((res) => {
        console.log({ res });
        setDisplaySnackBar({
          ...displaySnackBar,
          displayMessage: `${res.data.message}, hello  ${res.data.metaData.user_name}`,
          displaySnack: true,
          isSuccessMessage: true,
        });
        loginUser(res.data.metaData);
      })
      .catch((err) => console.log(err));
    console.log(response);
  };
  return (
    <div className="mt-3">
      <FacebookLogin
        appId="995502679210385"
        callback={responseFacebook}
        fields="name,email,picture"
        render={(renderProps) => (
          <button
            className="flex items-center justify-center w-full space-x-3 border p-2 rounded-md hover:bg-blue-100/35 transition-all"
            onClick={renderProps.onClick}
          >
            <FaFacebook className="text-lg text-blue-500" />{" "}
            <p className="text-sm px-10">Đăng nhập bằng Facebook</p>
          </button>
        )}
      />
    </div>
  );
}
