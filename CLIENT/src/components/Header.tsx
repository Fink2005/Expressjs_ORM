import DropdownHeader from "./DropdownHeader";
import SignIn from "./SignIn";

function Header() {
  return (
    <header>
      <div className="flex w-full space-x-4">
        <div className="relative my-2 w-[93%]">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="w-full py-2 pl-10 m-1 border-2 rounded-xl"
          />
          <svg
            className="absolute top-1/2 -translate-y-1/2 left-4 fill-gray-500"
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
          >
            <path d="M10 16a6 6 0 1 1 .01-12.01A6 6 0 0 1 10 16m13.12 2.88-4.26-4.26a10 10 0 1 0-4.24 4.24l4.26 4.26a3 3 0 1 0 4.24-4.24"></path>
          </svg>
        </div>
        <SignIn />
        {/* <DropdownHeader /> */}
      </div>
    </header>
  );
}
export default Header;
