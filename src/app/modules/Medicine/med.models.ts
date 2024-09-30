import mongoose, { Document, Schema } from "mongoose";
import { IMedicine } from "./med.interface";

const MedicineSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  totalTablets: { type: Number, required: true },
  tabletsToTake: { type: Number, required: true },
  daysRemaining: { type: Number },
  price: { type: Number },
  isOver: { type: Boolean, default: false }, // Flag for whether the medicine is finished
});

const Medicine = mongoose.model<Document & IMedicine>(
  "Medicine",
  MedicineSchema
);

export default Medicine;
