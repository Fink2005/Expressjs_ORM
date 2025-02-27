import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Yêu cầu đúng định dạng email")
    .required("Email không được bỏ trống"),
  password: Yup.string()
    .min(6, "Mật khẩu chứa ít nhất 6 kí tự")
    .required("Mật khẩu không được để trống"),
});

export const registerSchema = Yup.object({
  user_name: Yup.string().required("Yêu cầu điền họ và tên"),
  email: Yup.string()
    .email("Yêu cầu đúng định dạng email")
    .required("Email không được bỏ trống"),
  password: Yup.string()
    .min(6, "Mật khẩu chứa ít nhất 6 kí tự")
    .required("Mật khẩu không được để trống"),
  age: Yup.number()
    .positive("Phải điền số dương")
    .required("Yêu cầu điền số tuổi"),
});

// export const profileSchema = Yup.object({
//   firstName: Yup.string().required("First name is required"),
//   lastName: Yup.string().required("Last name is required"),
//   phone: Yup.string()
//     .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
//     .required("Phone number is required"),
// });
