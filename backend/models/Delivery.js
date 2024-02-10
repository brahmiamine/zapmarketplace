const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    days: {
      type: String,
      required: false,
    },
    cost: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      lowercase: true,
      enum: ["show", "hide"],
      default: "show",
    },
  },
  {
    timestamps: true,
  }
);

const Delivery = mongoose.model("Delivery", deliverySchema);
module.exports = Delivery;
