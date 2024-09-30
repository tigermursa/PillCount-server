import User from "./user.model";
import { IUser } from "./user.interface";
import { IMedicine } from "../Medicine/med.interface";

// Add a new user
const addUser = async (userData: IUser): Promise<IUser> => {
  const newUser = new User(userData);
  return await newUser.save();
};

// Get a user by ID
const getUser = async (userId: string): Promise<IUser | null> => {
  return await User.findById(userId);
};

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

// Get all users with _id, relation, and image
const getAllUsersBasicInfo = async (): Promise<Partial<IUser>[]> => {
  return await User.find({}, "relation image age name"); // Fetch only specified fields
};

// Update a user by ID
const updateUser = async (
  userId: string,
  updateData: Partial<IUser>
): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

// Delete a user by ID
const deleteUser = async (userId: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(userId);
};




export default {
  addUser,
  getUser,
  addMedicineToUser,
  getUserMedicines,
  getAllUsersBasicInfo,
  updateUser,
  deleteUser,
};
