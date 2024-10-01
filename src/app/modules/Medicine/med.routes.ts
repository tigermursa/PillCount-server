import { Router } from "express";
import medController from "./med.controller";

const router = Router();
router.post("/:userId/medicine", medController.addMedicineToUser); // Route to add medicine to a user
router.get("/:userId/medicines", medController.getUserMedicines); // Route to get all medicines for a user

const medRoutes = router;
export default medRoutes;
