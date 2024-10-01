import express from "express";
import cors from "cors";

import userRoutes from "./app/modules/User/user.route";
import medRoutes from "./app/modules/Medicine/med.routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/medicine", medRoutes);

app.get("/", (req, res) => {
  res.send("The Server Running Alhamdulillah 🥰");
});

export default app;
