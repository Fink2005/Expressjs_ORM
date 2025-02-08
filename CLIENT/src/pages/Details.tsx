import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { MdOutlineFileUpload } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useInfoImageDetail } from "../api/hooks/use-info-detail";
import { MdCancel } from "react-icons/md";
import { Avatar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Comments from "../components/Comments";
import { stringAvatar } from "../utils/helpers";
import { CgArrowsExpandLeft } from "react-icons/cg";
export default function Details() {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [displayPreview, setDisplayPreview] = useState<boolean>(false);
  const params = useParams();
  const { data } = useInfoImageDetail(params.id);
  const dataImage = data?.data?.metaData;
  const imageRef = useRef<HTMLImageElement | null>(null);
  const buttonPreviewRef = useRef<HTMLImageElement | null>(null);
  // Close image when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        imageRef.current &&
        !imageRef.current.contains(event.target as Node) &&
        buttonPreviewRef.current &&
        !buttonPreviewRef.current.contains(event.target as Node)
      ) {
        setDisplayPreview(false); // Hide image if click is outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-center ">
        <div className="rounded-3xl flex w-[1000px] h-[600px] overflow-hidden border-2">
          <div className="w-1/2 h-full bg-black/80 relative">
            <img
              src={dataImage?.image_url}
              className="h-full w-full object-contain"
              alt=""
            />
            {/* <div className="absolute bottom-5 right-5 group w-10 hover:w-36 duration-700 flex items-center rounded-full justify-center transition-all ease-in-out bg-gray-custom">
            <div className="ps-2 hidden group-hover:opacity-100 opacity-0 group-hover:block  w-full group-hover:w-3/4">
              Xem lớn hơn
            </div>
            <div className="h-10 flex justify-center items-center group-hover:w-1/4 w-full">
              <CgArrowsExpandLeft className="z-50" />
            </div>
          </div> */}
            <div
              className="absolute bottom-5 right-5 group cursor-pointer"
              onClick={() => setDisplayPreview(true)}
              ref={buttonPreviewRef}
            >
              <div className="text-md font-semibold transition-all h-10 absolute bottom-0 right-0 w-0 group-hover:w-36 ease-in duration-300 flex items-center group-hover:bg-gray-custom rounded-full group-hover:ps-3 overflow-hidden">
                <p className="text-nowrap ">Xem lớn hơn</p>
              </div>
              <div className="h-10 flex justify-center items-center w-10  group rounded-full bg-gray-custom z-50">
                <CgArrowsExpandLeft className="z-50 w-full rounded-full bg-gray-custom " />
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full relative mx-4 mt-5">
            <div className="flex justify-between">
              <div className="flex items-start space-x-5">
                <div className="flex items-center space-x-1">
                  {favorite ? (
                    <FaHeart
                      className="text-xl text-red-500 cursor-pointer"
                      onClick={() => setFavorite(false)}
                    />
                  ) : (
                    <FaRegHeart
                      className="text-xl cursor-pointer"
                      onClick={() => setFavorite(true)}
                    />
                  )}
                  <p className="text-md font-semibold">0</p>
                </div>
                <div>
                  <MdOutlineFileUpload className="text-2xl font-semibold" />
                </div>
                <div>
                  <SlOptions className="text-2xl font-semibold" />
                </div>
              </div>
              <div className="me-3">
                <button className="flex items-center text-white p-2 px-4 bg-red-600 rounded-3xl">
                  <p className="text-lg font-medium">Lưu</p>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {dataImage?.users.user_name && (
                <Avatar
                  variant="circular"
                  {...stringAvatar(
                    dataImage?.users.user_name ? dataImage?.users.user_name : ""
                  )}
                  sx={{ width: 25, height: 25, fontSize: 13 }}
                />
              )}
              <p className="text-md font-medium">
                {dataImage?.users.user_name}
              </p>
            </div>
            <div>
              <Comments params={params} />
            </div>
          </div>

          {/* <EmojiPicker /> */}
        </div>
      </div>
      {displayPreview && (
        <div className="bg-black/90 z-50 fixed top-0 left-0 w-full h-full flex justify-center">
          <div className="rounded-xl overflow-hidden">
            <img
              ref={imageRef}
              src={dataImage?.image_url}
              className="object-fill h-full"
              alt=""
            />
          </div>
          <button className="flex items-center text-white p-2 px-4 bg-red-600 rounded-3xl fixed top-3 right-3">
            <p className="text-lg font-medium">Lưu</p>
          </button>
          <button
            className="fixed top-3 left-3 "
            onClick={() => setDisplayPreview(false)}
          >
            <MdCancel className="text-5xl text-gray-300" />
          </button>
        </div>
      )}
    </div>
  );
}
