import express from "express";
import rootRouter from "./src/routes/root.router";
import { createServer } from "http"
import { handleError } from "./src/common/helpers/error.helper";
import cors from "cors";
import initSocket from "./src/common/socket/init.socket";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.static("."));

const httpServer = createServer(app);
initSocket(httpServer)
app.use(rootRouter);
app.use(handleError);


httpServer.listen(6969, () => {
  console.log(`server online at port 6969`);
});
