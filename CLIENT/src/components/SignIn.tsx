import { Modal, useTheme } from "@mui/material";
import { SignInPage, type AuthProvider } from "@toolpad/core/SignInPage";
import React from "react";

export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const providers = [
    { id: "google", name: "Google" },
    { id: "facebook", name: "Facebook" },
    { id: "credentials", name: "Email and Password" },
  ];

  const signIn: (provider: AuthProvider, formData: FormData) => void = async (
    provider,
    formData
  ) => {
    const promise = new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(
          `Đăng nhập với "${provider.name}" and credentials: ${formData.get(
            "email"
          )}, ${formData.get("password")}`
        );
        resolve();
      }, 300);
    });
    return promise;
  };

  return (
    <div className="">
      <div className="flex items-center h-full w-full">
        <button
          onClick={handleOpen}
          className="text-xs rounded-full bg-gray-custom p-2"
        >
          <p className="">Đăng nhập</p>
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SignInPage
          sx={{ borderRadius: 1000 }}
          signIn={signIn}
          slots={{
            rememberMe: () => <h1></h1>,
            title: () => <h1></h1>,
            subtitle: () => (
              <div className="flex flex-col items-center">
                {icon}
                <h1 className="text-2xl font-semibold text-nowrap">
                  Đăng nhập để xem thêm
                </h1>
              </div>
            ),
            submitButton: () => (
              <div className="flex justify-center">
                <button className="p-3 px-12 text-white bg-red-500 rounded-full">
                  Đăng nhập
                </button>
              </div>
            ),
          }}
          providers={providers}
          slotProps={{ emailField: { autoFocus: false } }}
        />
      </Modal>
    </div>
  );
}
