import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ToogleTheme from "../ToogleTheme";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const dataIcon = [
    {
      icon: (
        <svg
          fill="#E60022"
          aria-hidden="true"
          aria-label=""
          height="20"
          role="img"
          viewBox="0 0 24 24"
          width="20"
        >
          <path d="M7.54 23.15q-.2-2.05.26-3.93L9 14.04a7 7 0 0 1-.35-2.07c0-1.68.81-2.88 2.09-2.88.88 0 1.53.62 1.53 1.8q0 .57-.23 1.28l-.52 1.72q-.15.5-.15.92c0 1.2.91 1.87 2.08 1.87 2.09 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.12-5.05-5.12-3.36 0-5.49 2.19-5.49 5.24 0 1.22.38 2.36 1.11 3.14-.24.41-.5.48-.88.48-1.2 0-2.34-1.69-2.34-4 0-4 3.2-7.17 7.68-7.17 4.7 0 7.66 3.29 7.66 7.33s-2.88 7.15-5.98 7.15a3.8 3.8 0 0 1-3.06-1.48l-.62 2.5a11 11 0 0 1-1.62 3.67A11.98 11.98 0 0 0 24 12a11.99 11.99 0 1 0-24 0 12 12 0 0 0 7.54 11.15"></path>
        </svg>
      ),
      title: "Trang chủ",
    },
    {
      icon: <HomeOutlinedIcon fontSize="medium" />,
      title: "Trang chủ",
    },
    {
      icon: <AddBoxOutlinedIcon fontSize="medium" />,
      title: "Tạo",
    },
    {
      icon: <NotificationsNoneOutlinedIcon fontSize="medium" />,
      title: "Cập nhật",
    },
    {
      icon: <MessageOutlinedIcon fontSize="medium" />,
      title: "Tin nhắn",
    },
    { icon: <ToogleTheme />, title: "Theme" },
  ];
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full 
        border-r-2
        sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto flex items-start">
          <div className="w-full">
            <div className="flex flex-col w-full items-center space-y-10">
              {dataIcon.map((item, index) => (
                <Link
                  to="/"
                  key={index}
                  className="rounded-full size-10 flex items-center justify-center hover:bg-gray-custom transition-all cursor-pointer"
                >
                  <Tooltip title={item.title}>{item.icon}</Tooltip>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
