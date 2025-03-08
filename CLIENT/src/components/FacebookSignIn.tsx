import { FaFacebook } from "react-icons/fa";

export default function FacebookSignIn() {
  const handleSignIn = (provider: string) => {
    alert(`Đăng nhập với ${provider}`);
  };
  return (
    <div>
      <button
        onClick={() => handleSignIn("Facebook")}
        className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <FaFacebook className="w-6 h-6 mr-2" />
        <span className="font-medium">Đăng nhập bằng Facebook</span>
      </button>
    </div>
  );
}
