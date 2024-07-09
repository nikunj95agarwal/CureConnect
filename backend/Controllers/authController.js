import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

const generateToken = user => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d'
    });
};

export const register = async (req, res) => {
    const { email, password, name, role, gender, specialization } = req.body;
    try {
        let user = null;

        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        // Check if user exists
        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashedPassword,
                // photo,
                gender,
                role
            });
        } else if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashedPassword,
                // photo,
                gender,
                role,
                specialization
            });
        }

        await user.save();

        res.status(200).json({ success: true, message: 'User Successfully Registered' });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error, Try Again' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email }) || await Doctor.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ status: false, message: "Invalid credentials" });
        }

        const token = generateToken(user);

        const { password: userPassword, ...userData } = user._doc;

        res.status(200).json({ status: true, message: "Successfully logged in", token, data: userData, role: user.role });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ status: false, message: "Unable to login" });
    }
};
