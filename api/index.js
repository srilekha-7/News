import express from "express";
import authRoutes from "./routes/auth.js";
import articleRoutes from "./routes/article.js";
import cors from "cors";
const app = express();
// app.use(jsonParser);
const corsOrigin = {
  origin: "http://localhost:3004", //or whatever port your frontend is using
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/article", articleRoutes);

app.listen(4040, () => {
  console.log("running on 8000");
});
