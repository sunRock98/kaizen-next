import mongoose from "mongoose";
export type UserType = {
  _id: string;
  name: string;
  email: string;
  password: string;
  date: Date;
  role: "user" | "admin";
  workPlace: string;
};
const userSchema = new mongoose.Schema<UserType>({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "user",
  },

  workPlace: {
    type: String,
    required: true,
  },
});

// module.exports = mongoose.model('Users', userSchema);
export default mongoose.models.Users || mongoose.model("Users", userSchema);
