
import jwt from 'jsonwebtoken';
const authMiddleware = (req , res , next)=> {
    const authHeader = req.headers.authorization;
    console.log("Auth Header:", authHeader);
    const token = authHeader && authHeader.split(' ')[1]; // gets the token part only : generated string was Bearer <token>

    // unauthorized user if no token
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided, authorization denied. Please log in to continue."
        });
    }

    // decode and verify token
    try{
        const decodedToken = jwt.verify(token , process.env.JWT_SECRET);
        console.log("Decoded Token:", decodedToken);
        req.userInfo = decodedToken; // attach user info to request object
        next(); // proceed to the next middleware or route handler
    }catch (err) {
        console.log("Token verification error:", err);
        return res.status(403).json({
            success: false,
            message: "Invalid token, authorization denied. Please log in again."
        });
    }
}

export default authMiddleware;