import express from 'express';
import dotenv from  'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_STRING_URL);

app.use(cookieParser())
app.use(express.json());

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/hotels', hotelsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
    })
}); 

app.listen(8000, () => {
    console.log('Server is running on port 8080');
});