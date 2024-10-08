import { Request, Response } from "express";
import userServices from "./user.services";

const addUser = async (req: Request, res: Response) => {
  try {
    const newUser = await userServices.addUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userServices.getUser(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

// Get all users with _id, relation, and image
const getAllUsersWithBasicInfo = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getAllUsersBasicInfo();
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

// Update a user by ID
const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userServices.updateUser(
      req.params.userId,
      req.body
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

// Delete a user by ID
const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await userServices.deleteUser(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

// Get user medicines and total price
const getUserMedicinesWithTotal = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const medicineData = await userServices.getUserMedicinesWithTotal(userId);

    if (!medicineData) {
      return res
        .status(404)
        .json({ message: "User not found or no medicines available" });
    }

    res.status(200).json(medicineData);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

// Delete a medicine by its _id
const deleteMedicineById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const medicineId = req.params.medicineId;

    // Calling the service that deletes the medicine
    const updatedUser = await userServices.deleteMedicineById(
      userId,
      medicineId
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the medicine was deleted successfully
    res
      .status(200)
      .json({ message: "Medicine deleted successfully", updatedUser });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

// Update a medicine by its _id
const updateMedicineById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const medicineId = req.params.medicineId;
    const updateData = req.body;
    const updatedUser = await userServices.updateMedicineById(
      userId,
      medicineId,
      updateData
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User or Medicine not found" });
    }

    res
      .status(200)
      .json({ message: "Medicine updated successfully", updatedUser });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};
export default {
  addUser,
  getUser,
  getAllUsersWithBasicInfo,
  updateUser,
  deleteUser,
  getUserMedicinesWithTotal,
  deleteMedicineById,
  updateMedicineById,
};
