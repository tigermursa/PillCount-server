import User from "./user.model";
import { IUser } from "./user.interface";
import { IMedicine } from "../Medicine/med.interface";

class UserService {
  async addUser(userData: IUser): Promise<IUser> {
    const newUser = new User(userData);
    return await newUser.save();
  }

  async getUser(userId: string): Promise<IUser | null> {
    return await User.findById(userId);
  }

  async addMedicineToUser(
    userId: string,
    medicineData: IMedicine
  ): Promise<IUser | null> {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    user.medicines!.push(medicineData);
    await user.save();
    return user;
  }

  async getUserMedicines(userId: string): Promise<IMedicine[] | null> {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user.medicines ?? [];
  }
}

export default new UserService();
