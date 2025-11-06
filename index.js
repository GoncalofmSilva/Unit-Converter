import express from "express";
import routes from "./routes/converterRoute.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/converter", routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});