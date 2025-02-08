import express from "express";
import rootRouter from "./src/routes/root.router";
import { handleError } from "./src/common/helpers/error.helper";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "google.com"],
  })
);
app.use(express.json());
app.use(rootRouter);
app.use(handleError);

app.listen(6969, () => {
  console.log(`server online at port 6969`);
});
