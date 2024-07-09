import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: {
      type: Number,
      required: true,
    },
   
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: false, // Assuming bookings start as unpaid by default
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
