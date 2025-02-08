import { Avatar, Popover, Tooltip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
export default function DropdownHeader() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="flex items-center w-[7%] space-x-2">
      <Tooltip title="Hồ sơ của bạn">
        <div className="hover:bg-gray-custom p-2 rounded-lg">
          <Avatar sx={{ width: 30, height: 30 }}>
            <p className="text-sm">S</p>
          </Avatar>
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
        <div className="h-40 p-4 w-96">
          <p className="text-xs font-normal">Đang đăng nhập</p>
          <div className="bg-gray-400/30 flex rounded-md h-20 my-3">
            <div className="flex w-[90%]">
              <div className="h-full w-1/4 flex justify-center items-center">
                <h1 className="text-xl font-bold">P</h1>
              </div>
              <div className="w-3/4 flex flex-col justify-center">
                <p className="text-md font-bold">Phan Sy</p>
                <div className="font-normal text-sm text-gray-500">
                  <p>Ca nhan</p>
                  <p>phans3806@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-[10%] flex items-center justify-center">
              <DoneIcon fontSize="small" />
            </div>
          </div>
          <p className="text-sm font-semibold my-3">Đăng xuất</p>
        </div>
      </Popover>
    </div>
  );
}
