import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone: { type: String, unique: true, sparse: true },
  email: { type: String, unique: true, sparse: true },
  password: { type: String },

  otp: String,
  otpExpiry: Date,

  isVerified: { type: Boolean, default: false },
  profileCompleted: { type: Boolean, default: false },

  name: String,
  age: Number,
  gender: String,
  religion: String,
  caste: String,
  location: String,
  profession: String,
  income: Number,
  bio: String,
  photos: [String],

  partnerPreference: {
    ageMin: Number,
    ageMax: Number,
    location: String,
    religion: String,
  },
}, { timestamps: true });

export default mongoose.model("User", userSchema);