import multer from "multer";
import path from "path";
// xu ly ten file va duoi mo rong (extension)
// noi luu tru (luu pixel data hinh anh)
const storage = multer.diskStorage({
  // xu ly noi luu tru file
  destination: function (req, file, cb) {
    // co req va file de xu ly logic tao ra folder muon
    cb(null, "images/");
  },
  // xu ly ten file
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // fileExtension (duoi mo rong cua file)
    const fileExtension = path.extname(file.originalname);
    const fileNameString = file.fieldname + "-" + uniqueSuffix + fileExtension;
    cb(null, fileNameString);
  },
});

const upload = multer({ storage: storage });
export default upload;
