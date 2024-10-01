import mongoose, { Document, Schema } from "mongoose";
import { IMedicine } from "./med.interface";

export const MedicineSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  totalTablets: { type: Number, required: true },
  tabletsToTake: { type: Number, required: true },
  price: { type: Number },
  isOver: { type: Boolean, default: false },
});


