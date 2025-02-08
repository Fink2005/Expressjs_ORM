import React, { useState } from "react";
import {
  useCreateCommentsDetail,
  useInfoCommentsDetail,
} from "../api/hooks/use-info-detail";
import { IoIosArrowUp } from "react-icons/io";
import EmojiPicker from "emoji-picker-react";
import { IoSend } from "react-icons/io5";
import { Avatar, Popover } from "@mui/material";
import { FaSmile } from "react-icons/fa";
import { blue } from "@mui/material/colors";

type paramsType = {
  params: {
    id?: string;
  };
};
export default function Comments({ params }: paramsType) {
  const { mutateAsync, isSuccess } = useCreateCommentsDetail();
  const [displayComments, setDisplayComments] = useState<boolean>(false);
  const { data, refetch } = useInfoCommentsDetail(params.id);
  const dataComments = data?.data.metaData;
  const [inputValue, setInputValue] = useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmoji = (icon: any) => {
    setInputValue(inputValue + icon.emoji);
  };
  const handleComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handlePushComment = async () => {
    const dataPushComment = {
      image_id: Number(params.id),
      user_id: 1,
      comment_content: inputValue,
    };
    try {
      const result = await mutateAsync(dataPushComment);
      console.log(result);
      setInputValue("");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="mt-5">
      <div className="">
        <div className="flex justify-between">
          <p className="text-md font-medium">{dataComments?.length} Nhận xét</p>
          <div
            className={`mr-3 cursor-pointer transition-all duration-300 ${
              displayComments ? "rotate-0" : "-rotate-180"
            }`}
            onClick={() => setDisplayComments((a) => !a)}
          >
            <IoIosArrowUp className="text-xl font-semibold" />
          </div>
        </div>
        <div
          className={`transition-all duration-1000 h-64 overflow-y-auto ${
            displayComments
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {dataComments?.map((comment, index) => {
            return (
              <div className="flex items-center space-x-1 ">
                <div className="my-2 flex space-x-2">
                  <Avatar
                    variant="circular"
                    alt={comment.users.user_name}
                    src={comment.users.avatar}
                    sx={{
                      bgcolor: blue[500],
                      width: 20,
                      height: 20,
                      fontSize: 12,
                    }}
                  ></Avatar>
                  <p className="text-sm font-semibold">
                    {comment.users.user_name}
                  </p>
                </div>
                <p className="text-sm font-normal">{comment.comment_content}</p>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-8 w-full">
          <div className="relative ">
            <input
              type="text"
              onChange={handleComment}
              value={inputValue}
              placeholder="Thêm nhận xét"
              className="bg-gray-custom rounded-full w-full py-3 pl-4 font-medium"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-6">
              <div className="flex space-x-2">
                <button onClick={handleClick} aria-describedby={id}>
                  <FaSmile className="text-xl " />
                </button>
                {inputValue.length >= 1 && (
                  <button onClick={handlePushComment}>
                    <IoSend className="text-xl text-red-500" />
                  </button>
                )}
              </div>
            </div>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <EmojiPicker
                onEmojiClick={handleEmoji}
                autoFocusSearch
                height={400}
                width={300}
              />
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
