import SignIn from "./SignIn";
import DropdownHeader from "../../components/DropdownHeader";
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";

export default function Auth() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="w-full me-3">
      {user ? (
        <div className="flex justify-center items-center">
          <DropdownHeader />
        </div>
      ) : (
        <div className="flex space-x-2 w-full">
          <div className="w-1/2">
            <SignIn />
          </div>{" "}
          <div className="w-1/2">
            <SignUp />
          </div>
        </div>
      )}
    </div>
  );
}
