import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { type } from "os";
const userSchema = new mongoose.Schema({
  user: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.model("User", userSchema);
