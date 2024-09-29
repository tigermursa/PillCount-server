import mongoose, { Document, Schema } from "mongoose";
import { IMedicine } from "./med.interface";

const MedicineSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  totalTablets: { type: Number, required: true },
  tabletsToTake: { type: Number, required: true },
  daysRemaining: { type: Number, default: 10 }, // Default to 10 days
  isOver: { type: Boolean, default: false }, // Flag for whether the medicine is finished
});

const Medicine = mongoose.model<Document & IMedicine>(
  "Medicine",
  MedicineSchema
);

export default Medicine;
