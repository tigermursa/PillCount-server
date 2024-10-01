import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user.interface";
import { MedicineSchema } from "../Medicine/med.models";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  relation: { type: String, required: true },
  image: { type: String },
  medicines: [MedicineSchema], // Embedded medicines for each user
});

const User = mongoose.model<Document & IUser>("User", UserSchema);

export default User;
