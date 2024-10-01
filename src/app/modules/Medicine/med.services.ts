import { IUser } from "../User/user.interface";
import User from "../User/user.model";
import { IMedicine } from "./med.interface";

// Add a medicine to a user's list
const addMedicineToUser = async (
  userId: string,
  medicineData: IMedicine
): Promise<IUser | null> => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  user.medicines!.push(medicineData);
  await user.save();
  return user;
};

// Get all medicines for a user
const getUserMedicines = async (
  userId: string
): Promise<IMedicine[] | null> => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  return user.medicines ?? [];
};

export default {
  addMedicineToUser,
  getUserMedicines,
};
