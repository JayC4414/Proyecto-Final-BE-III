import mongoose from "mongoose";

const sucursalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: String,

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Sucursal", sucursalSchema);