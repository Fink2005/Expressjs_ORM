import Details from "../pages/Details";
import Home from "../pages/Home";
export const userRouter = [
  {
    path: "/",
    text: "Home",
    component: <Home />,
  },
  {
    path: "/image-detail/:id",
    text: "Detail",
    component: <Details />,
  },
];
