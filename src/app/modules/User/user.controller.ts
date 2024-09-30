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

const addMedicineToUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userServices.addMedicineToUser(
      req.params.userId,
      req.body
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

const getUserMedicines = async (req: Request, res: Response) => {
  try {
    const medicines = await userServices.getUserMedicines(req.params.userId);
    if (!medicines) {
      return res.status(404).json({ message: "Medicines not found" });
    }
    res.status(200).json(medicines);
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

export default {
  addUser,
  getUser,
  addMedicineToUser,
  getUserMedicines,
  getAllUsersWithBasicInfo,
};
