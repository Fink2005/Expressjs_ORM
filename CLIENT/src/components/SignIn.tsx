import { Modal, useTheme } from "@mui/material";
import { SignInPage, type AuthProvider } from "@toolpad/core/SignInPage";
import React from "react";
import { LockOutlined } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GoogleLogin } from 'react-google-login-component';
import GoogleSignIn from "./GoogleSignIn";
import FacebookSignIn from "./FacebookSignIn";



export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const providers = [
  //   { id: "google", name: "Google" },
  //   { id: "facebook", name: "Facebook" },
  //   { id: "credentials", name: "Email and Password" },
  // ];

  // const signIn: (provider: AuthProvider, formData: FormData) => void = async (
  //   provider,
  //   formData
  // ) => {
  //   const promise = new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       alert(
  //         `Đăng nhập với "${provider.name}" and credentials: ${formData.get(
  //           "email"
  //         )}, ${formData.get("password")}`
  //       );
  //       resolve();
  //     }, 300);
  //   });
  //   return promise;
  // };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");



  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    // <div className="">
    //   <div className="flex items-center h-full w-full">
    //     <button
    //       onClick={handleOpen}
    //       className="text-xs rounded-full bg-gray-custom p-2"
    //     >
    //       <p className="">Đăng nhập</p>
    //     </button>
    //   </div>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <SignInPage
    //       signIn={signIn}
    //       providers={providers}
    //       slots={{
    //         button: ({ provider, onClick }) => {
    //           if (provider.id === "google") {
    //             return (
    //               <button
    //                 onClick={onClick}
    //                 className="flex items-center w-full p-3 bg-white border rounded-full shadow-md hover:bg-gray-100"
    //               >
    //                 <img src="/google-icon.png" alt="Google" className="w-6 h-6 mr-2" />
    //                 <span className="text-black font-medium">Đăng nhập bằng Google</span>
    //               </button>
    //             );
    //           } else if (provider.id === "facebook") {
    //             return (
    //               <button
    //                 onClick={onClick}
    //                 className="flex items-center w-full p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
    //               >
    //                 <img
    //                   src="/facebook-icon.png"
    //                   alt="Facebook"
    //                   className="w-6 h-6 mr-2"
    //                 />
    //                 <span className="font-medium">Đăng nhập bằng Facebook</span>
    //               </button>
    //             );
    //           }
    //           return (
    //             <button
    //               onClick={onClick}
    //               className="w-full p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700"
    //             >
    //               {provider.name}
    //             </button>
    //           );
    //         },
    //       }}
    //     />
    //   </Modal>
    // </div>
    <div>
      <button
        onClick={handleOpen}
        className="text-xs rounded-full bg-gray-custom p-2"
      >
        <p>Đăng nhập</p>
      </button>

      <Modal open={open} onClose={handleClose}>
        <div className="flex items-center justify-center h-screen">
          <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-center">
              Đăng nhập để xem thêm
            </h2>

            {/* Nút đăng nhập Google & Facebook */}
            <div className="mt-3 space-y-2">
              
              <GoogleSignIn/>

              <FacebookSignIn/>
            </div>

            {/* Form đăng nhập bằng email */}
            <form className="mt-3" onSubmit={handleEmailSignIn}>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm font-medium">Mật khẩu</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded mt-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-3 w-full p-3 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
