// console.log("Hello, World!");
// console.log("This is a simple JavaScript file.");
import express from 'express';
import connectDB from './config/db.js';
import authRouter from './routes/AuthRoutes.js';
import userRouter from './routes/UserRoutes.js';


const app = express();
app.use(express.json());

connectDB();
// app.use('/api/auth', require('./routes/AuthRoutes'));

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
