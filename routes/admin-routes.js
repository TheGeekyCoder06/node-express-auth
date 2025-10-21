import express from 'express';
import authMiddleware from '../middleware/auth-middleware.js';
import isAdmin from '../middleware/admin-middleware.js';
const router = express.Router();
// if authenticated and role is admin then welcome
router.get('/welcome' , authMiddleware , isAdmin , (req, res) => {
     const { email, role, username } = req.userInfo;
    res.json({
        message: `Welcome Admin ${username}! Your email is ${email} and your role is ${role}.`
    });
});

export default router;