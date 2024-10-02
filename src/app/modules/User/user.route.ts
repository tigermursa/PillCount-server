import { Router } from "express";
import userController from "./user.controller";

const router = Router();
router.get("/get/all", userController.getAllUsersWithBasicInfo);
router.get("/:userId", userController.getUser); // Route to get a user by ID
router.get("/:userId/medicines", userController.getUserMedicinesWithTotal);
router.get("/get", userController.getAllUsersWithBasicInfo);

router.post("/add", userController.addUser); // Route to add a user
router.put("/update/:userId", userController.updateUser); // Route to update a user
router.delete("/delete/:userId", userController.deleteUser); // Route to delete a user

router.delete("/:userId/medicine/:medicineId", userController.deleteMedicineById); // Route to delete a medicine by its _id
router.put("/:userId/medicine/:medicineId", userController.updateMedicineById); // Route to update a medicine by its _id

const userRoutes = router;
export default userRoutes;
