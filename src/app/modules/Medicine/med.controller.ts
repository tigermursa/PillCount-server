import userServices from "./med.services";
import { Request, Response } from "express";
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

export default {
  addMedicineToUser,
  getUserMedicines,
};
