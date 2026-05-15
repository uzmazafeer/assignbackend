import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRouter from './routes/AuthRoutes.js';
import userRouter from './routes/UserRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ message: 'Server is running' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
