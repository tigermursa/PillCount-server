import express from "express";
import cors from "cors";
import medicineRoutes from "./app/modules/Medicine/med.routes";
import userRoutes from "./app/modules/User/user.route";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/med", medicineRoutes);
app.use("/api/med", userRoutes);

app.get("/", (req, res) => {
  res.send("The Server Running Alhamdulillah 🥰");
});

export default app;
