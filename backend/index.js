import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
import bookingRoute from "./Routes/Booking.js"
// require('express-async-errors');
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
};

app.get('/', (req, res) => {
    res.send('API is working');
});

// DB Connection
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Database is connected');
    } catch (error) {
        console.log('Unable to connect with Database', error);
        throw error; // Reject the promise if there's an error
    }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/bookings', bookingRoute);

// Error-handling middleware
app.use(((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
}));

connectDB().then(() => {
    app.listen(port, () => {
        console.log("Server is running on port " + port);
    });
}).catch((error) => {
    console.log("Failed to start server:", error);
});