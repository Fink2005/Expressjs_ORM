import express from "express";
import userRouter from "./user.router";
import authRouter from "./auth.router";
import homePageRouter from "./homePage.router";
import detailRouter from "./detail.router";
import imageCreateRouter from "./imageCreatePage.router";
import manageRouter from "./manage.router";
const rootRouter = express.Router();

rootRouter.use("/api", userRouter);
rootRouter.use("/api", authRouter);
rootRouter.use("/api", homePageRouter);
rootRouter.use("/api", imageCreateRouter);
rootRouter.use("/api", detailRouter);
rootRouter.use("/api", manageRouter);
export default rootRouter;
