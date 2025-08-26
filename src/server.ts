import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
