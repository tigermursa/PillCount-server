import User from "./user.model";
import { IUser } from "./user.interface";

// Add a new user
const addUser = async (userData: IUser): Promise<IUser> => {
  const newUser = new User(userData);
  return await newUser.save();
};

// Get a user by ID
const getUser = async (userId: string): Promise<IUser | null> => {
  return await User.findById(userId);
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

// Get user's medicine details and total price
const getUserMedicinesWithTotal = async (userId: string) => {
  const user = await User.findById(userId).select("medicines");
  if (!user || !user.medicines) {
    return null;
  }
  const medicines = user.medicines.map((med) => ({
    name: med.name,
    price: med.price,
  }));

  const total = user.medicines.reduce((sum, med) => sum + med.price, 0);

  return {
    medicines,
    total,
  };
};

export default {
  addUser,
  getUser,
  getAllUsersBasicInfo,
  updateUser,
  deleteUser,
  getUserMedicinesWithTotal,
};
