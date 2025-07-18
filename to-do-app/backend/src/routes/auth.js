import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bycryptjs";
import User from "../models/User";
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: { id: user._id, name: user.name } });
});

export default router;
