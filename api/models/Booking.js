const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  place: { type: mongoose.Schema.Types.ObjectId, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  numberOfGuests: { type: String, required: true },
  fullname: { type: String, required: true },
  phone: { Number },
});

const BookingModel = mongoose.model("Booking", bookingSchema);

module.exports = BookingModel;
