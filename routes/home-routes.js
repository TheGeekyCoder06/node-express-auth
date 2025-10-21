import express from "express";
import authMiddleware from "../middleware/auth-middleware.js";
const router = express.Router();

// if only authenticated then welcome
router.get("/welcome", authMiddleware, (req, res) => {
  const { email, role, username } = req.userInfo;
  res.json({
    message: `Welcome ${username} ! Your email is ${email} and your role is ${role}`,
    user: {
      email,
      role,
      username,
    },
  });
});

export default router;
