import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user.interface";

const MedicineSchema: Schema = new Schema({
  name: { type: String, required: true },
  totalTablets: { type: Number, required: true },
  tabletsToTake: { type: Number, required: true },
  daysRemaining: { type: Number, default: 10 },
  isOver: { type: Boolean, default: false },
});

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  relation: { type: String, required: true },
  image: { type: String },
  medicines: [MedicineSchema], // Embedded medicines for each user
});

const User = mongoose.model<Document & IUser>("User", UserSchema);

export default User;
