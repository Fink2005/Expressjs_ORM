import { IconButton, Modal, SnackbarCloseReason } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useSignIn } from "../../api/hooks/use-auth";
import { loginSchema } from "../../validations/authSchema";
import Facebook from "./Facebook";
import Google from "./Google";
import { handleApiError } from "../../api/errHandler";
import { UserContext } from "./Auth";

export type displayType = {
  openModal: boolean;
  displayMessage: string;
  isSuccessMessage: boolean;
  displaySnack: boolean;
};
export default function SignIn() {
  const {
    user,
    loginUser,
    logoutUser,
    switchAuth,
    setDisplaySnackBar,
    displaySnackBar,
  } = useContext(UserContext);

  useEffect(() => {
    if (switchAuth) {
      setDisplayModal(true);
    }
  }, [switchAuth]);
  const { mutateAsync } = useSignIn();
  const icon = (
    <svg
      height={40}
      viewBox="-3 -3 82 82"
      width={50}
      className="fill-red-500"
      style={{ display: "block" }}
    >
      <title>Logo Pinterest</title>
      <circle cx={38} cy={38} fill="white" r={40} />
      <path
        d="M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z"
        fill="var(--color-red-pushpin-450)"
        fillRule="evenodd"
      />
    </svg>
  );
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  const spinner = (
    <div role="status">
      <svg
        aria-hidden="true"
        className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex items-center h-full w-full">
        <button
          onClick={() => setDisplayModal(true)}
          className="text-xs rounded-full bg-gray-custom p-2 w-full"
        >
          <p className="text-nowrap">Đăng nhập</p>
        </button>
      </div>
      <Modal
        open={displayModal}
        className="flex justify-center items-center"
        onClose={() => setDisplayModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-[450px] h-[600px] rounded-3xl shadow-2xl bg-white flex flex-col items-center p-5 sm:p-10">
          <div>{icon}</div>
          <div>
            <h1 className="text-3xl text-center text-black/80 font-bold">
              Chào mừng bạn đến với Pinterest
            </h1>
          </div>
          <div className="sm:w-5/6 w-full">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Form Submitted:", values);
                mutateAsync(values)
                  .then((res) => {
                    console.log("thanh cong", res);
                    setSubmitting(false);
                    setDisplaySnackBar({
                      ...displaySnackBar,
                      displayMessage: `${res.data.message}, hello  ${res.data.metaData.user_name}`,
                      displaySnack: true,
                      isSuccessMessage: true,
                    });
                    loginUser(res.data.metaData);
                    setDisplayModal(false);
                  })
                  .catch((err) => {
                    console.log(err);
                    setSubmitting(false);
                    setDisplaySnackBar({
                      ...displaySnackBar,
                      displayMessage: handleApiError(err),
                      displaySnack: true,
                      isSuccessMessage: false,
                    });
                    throw new Error(handleApiError(err));
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form className=" max-w-md  ">
                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full p-2 border-2 rounded-xl"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Mật khẩu</label>
                    <Field
                      type="password"
                      name="password"
                      className="w-full p-2 border-2 rounded-xl"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 rounded-full text-white py-2  hover:bg-red-700 transition"
                  >
                    {isSubmitting ? spinner : "Tiếp tục"}
                  </button>
                </Form>
              )}
            </Formik>
            <p className="text-sm font-semibold text-center my-3">Hoặc</p>
            <Google
              setDisplaySnackBar={setDisplaySnackBar}
              displaySnackBar={displaySnackBar}
            />
            <Facebook
              setDisplaySnackBar={setDisplaySnackBar}
              displaySnackBar={displaySnackBar}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
