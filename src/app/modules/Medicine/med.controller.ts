import { Request, Response } from "express";
import MedicineService from "./med.services";

class MedicineController {
  async addMedicine(req: Request, res: Response) {
    const medicineData = req.body;

    try {
      const newMedicine = await MedicineService.addMedicine(medicineData);
      res.status(201).json(newMedicine);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }

  async getMedicineStatus(req: Request, res: Response) {
    const { medicineName } = req.params;

    try {
      const medicine = await MedicineService.getMedicineStatus(medicineName);
      if (!medicine) {
        return res.status(404).json({ message: "Medicine not found" });
      }
      res.status(200).json(medicine);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }
}

export default new MedicineController();
