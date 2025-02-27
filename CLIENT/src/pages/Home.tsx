import { ImageList, ImageListItem } from "@mui/material";
import { useImageHomePage } from "../api/hooks/use-image-homePage";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Home() {
  const { data } = useImageHomePage();
  const reverseData = data?.data.metaData.slice().reverse();

  return (
    <div className="p-3">
      <div className="">
        {reverseData && (
          <div>
            <ImageList variant="masonry" cols={6} gap={15}>
              {reverseData.map((image, index) => (
                <ImageListItem key={index} className="group">
                  <div className="relative group">
                    <Link
                      to={`/image-detail/${image.image_id}`}
                      className="block"
                    >
                      <img
                        src={image.image_url}
                        className="rounded-2xl w-full h-auto object-cover"
                        alt="Image"
                      />
                      <div className="absolute top-0 left-0 w-full h-full rounded-2xl transition-all group-hover:bg-black group-hover:bg-opacity-40"></div>
                    </Link>

                    <div className=" group-hover:block hidden absolute top-4 right-4">
                      <button className="flex items-center text-white p-2 px-3 bg-red-600 rounded-3xl">
                        <p className="text-lg">Lưu</p>
                      </button>
                    </div>

                    <div className="group-hover:flex hidden space-x-2 absolute bottom-4 right-4">
                      <div className="rounded-full p-2 bg-white flex justify-center items-center  cursor-pointer shadow-md">
                        <IosShareIcon fontSize="small" />
                      </div>
                      <div className="rounded-full p-2 bg-white flex justify-center items-center  cursor-pointer shadow-md">
                        <MoreHorizIcon fontSize="small" />
                      </div>
                    </div>
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
