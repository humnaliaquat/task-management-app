import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import "../config/passport.js";

const router = express.Router();

// Email + password register
router.post("/register", async (req, res) => {
  try {
    console.log("📩 Register request body:", req.body);

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: "Already exists" });

    const newUser = new User({ username, email, password });
    await newUser.save();

    console.log("✅ User registered:", newUser);

    res.status(201).json({ msg: "User created" });
  } catch (err) {
    console.error("❌ Registration error:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  console.log("📥 Login req.body:", req.body);

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    console.log("❌ No user with that email");
    return res.status(400).json({ msg: "Invalid creds" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    console.log("❌ Incorrect password");
    return res.status(400).json({ msg: "Invalid creds" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({
    token,
    user: { id: user._id, username: user.username, email: user.email },
  });
});

// Google OAuth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const { token, user } = req.user;

    console.log("🔁 OAuth returned user:", user);

    const username = user?.username || "Unknown";
    res.redirect(
      `http://localhost:5173/google-auth-success?token=${token}&name=${encodeURIComponent(
        username
      )}`
    );
  }
);

export default router;
