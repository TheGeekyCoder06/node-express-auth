import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//register controller
const register = async (req, res) => {
  try {
    // extract user details from request body
    const { username, email, password, role } = req.body;
    // ccheck if user already exists in our database
    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }
    // else create a new user
    // hash the password before saving to database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user instance
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    // respond with success message.
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (err) {
    console.log("Registration error:", err);
    res.status(500).json({
      success: false,
      message: "Server Error. Please try again later.",
    });
  }
};

// login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //find if the current user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    // compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    //bearer token can be added here for further security enhancements (MOVE IT HERE!)
    const accessToken = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    
    // if everything is fine, respond with success message AND the token
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: user,
      token: accessToken,
    });

  } catch (err) {
    console.log("Login error:", err);
    res.status(500).json({
      success: false,
      message: "Server Error. Please try again later.",
    });
  }
};
export { register, login };
