import { IMedicine } from "./med.interface";
import Medicine from "./med.models";
import cron from "node-cron";

class MedicineService {
  constructor() {
    this.scheduleTabletDecrement();
  }

  private scheduleTabletDecrement() {
    // Schedule a job to run every day at 11:59 PM
    cron.schedule("59 23 * * *", async () => {
      await this.decrementTabletsForAllMedicines();
    });
  }

  private async decrementTabletsForAllMedicines() {
    const medicines = await Medicine.find({ isOver: false });

    for (const medicine of medicines) {
      const tabletsToTake = medicine.tabletsToTake;
      if (medicine.daysRemaining > 0) {
        medicine.totalTablets -= tabletsToTake;
        medicine.daysRemaining -= 1;

        // Check if the medicine is finished
        if (medicine.totalTablets <= 0 || medicine.daysRemaining <= 0) {
          medicine.isOver = true;
          medicine.totalTablets = 0; // Set to zero if finished
        }

        await medicine.save();
      }
    }
  }

  async addMedicine(medicineData: IMedicine): Promise<IMedicine> {
    const newMedicine = new Medicine(medicineData);
    return await newMedicine.save();
  }

  async getMedicineStatus(medicineName: string): Promise<IMedicine | null> {
    return await Medicine.findOne({ name: medicineName });
  }
}

export default new MedicineService();
