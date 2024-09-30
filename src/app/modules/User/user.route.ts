import { Router } from "express";
import userController from "./user.controller";

const router = Router();
router.get("/get/all", userController.getAllUsersWithBasicInfo);
router.post("/add", userController.addUser); // Route to add a user
router.get("/:userId", userController.getUser); // Route to get a user by ID
router.post("/:userId/medicine", userController.addMedicineToUser); // Route to add medicine to a user
router.get("/:userId/medicines", userController.getUserMedicines); // Route to get all medicines for a user
router.get("/get", userController.getAllUsersWithBasicInfo);

router.put("/update/:userId", userController.updateUser); // Route to update a user
router.delete("/delete/:userId", userController.deleteUser); // Route to delete a user
const userRoutes = router;
export default userRoutes;
