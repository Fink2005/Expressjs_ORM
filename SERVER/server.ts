import express from "express";
import rootRouter from "./routes/root.router";
import { handleError } from "./common/helpers/error.helper";

const app = express();
app.use(express.json());
app.use(rootRouter);
app.use(handleError);

app.listen(6969, () => {
  console.log(`server online at port 6969`);
});
