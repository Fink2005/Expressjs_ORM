import { Avatar, Popover, Tooltip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/features/auth/authSlice";
export default function DropdownHeader() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const { user } = useSelector((state: any) => state.auth);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="flex items-center w-full space-x-2">
      <Tooltip title="Hồ sơ của bạn">
        <div className="hover:bg-gray-custom p-2 rounded-lg">
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={user.avatar ? user.avatar : user.avatar2}
          ></Avatar>
        </div>
      </Tooltip>
      <Tooltip title="Tài khoản">
        <button onClick={handleClick}>
          <p className="text-sm rounded-full hover:bg-gray-custom">
            <ExpandMoreIcon className="text-black/40" />
          </p>
        </button>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="h-48 p-4 w-96">
          <p className="text-sm font-semibold">Đang đăng nhập</p>
          <div className="transition-all cursor-pointer hover:bg-gray-400/30 flex rounded-md h-20 my-3">
            <div className="flex w-[90%]">
              <div className="h-full w-1/4 flex justify-center items-center">
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  src={user.avatar2 ? user.avatar2 : user.avatar}
                ></Avatar>
              </div>
              <div className="w-3/4 flex flex-col justify-center">
                <p className="text-md font-bold">{user.user_name}</p>
                <div className="font-normal text-sm text-gray-500">
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
            <div className="w-[10%] flex items-center justify-center">
              <DoneIcon fontSize="small" />
            </div>
          </div>
          <button
            className="text-sm font-semibold my-3 active:text-red-500"
            onClick={() => dispatch(logoutUser())}
          >
            Đăng xuất
          </button>
        </div>
      </Popover>
    </div>
  );
}
