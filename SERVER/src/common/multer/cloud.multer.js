import multer from "multer";
// multer.memoryStorage(): luu tam buffer(data hinh anh) vao trong ram roi moi dua buffer
// tu giai phong RAM sau khi ket thuc API
const uploadCloud = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
});

export default uploadCloud;
