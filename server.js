import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/dbConfig.js';
import authRoutes from './routes/authRoutes.js';
import homeRoutes from './routes/home-routes.js';
import adminRoutes from './routes/admin-routes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// database connection
connectDB();

// middleware
app.use(express.json());

// auth routes
app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
