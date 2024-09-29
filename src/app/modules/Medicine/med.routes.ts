import { Router } from "express";
import MedicineController from "./med.controller";

const router = Router();

router.post("/add", MedicineController.addMedicine); // Route to add medicine
router.get("/status/:medicineName", MedicineController.getMedicineStatus); // Route to get medicine status

const medicineRoutes = router;
export default medicineRoutes;
