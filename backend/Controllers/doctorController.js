import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js"; // Assuming Booking is another model for appointments

export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedDoctor,
        });
    } catch (err) {
        console.error("Update error:", err);
        res.status(500).json({ success: false, message: "Failed to update", error: err.message });
    }
};

export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        await Doctor.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        console.error("Delete error:", err);
        res.status(500).json({ success: false, message: "Unable to delete", error: err.message });
    }
};

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id);

        res.status(200).json({
            success: true,
            message: "Doctor found",
            data: doctor,
        });
    } catch (err) {
        console.error("Get single doctor error:", err);
        res.status(500).json({ success: false, message: "No Doctor found", error: err.message });
    }
};

export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: 'approved',
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ],
            }).select("-password");
        } else {
            doctors = await Doctor.find({ isApproved: 'approved' }).select("-password");
        }

        res.status(200).json({
            success: true,
            message: "Doctors found",
            data: doctors,
        });
    } catch (err) {
        console.error("Get all doctors error:", err);
        res.status(500).json({ success: false, message: "No Doctors found", error: err.message });
    }
};

export const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId;

    try {
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        const { password, ...rest } = doctor._doc;
        const appointments = await Booking.find({ doctor: doctorId });

        res.status(200).json({
            success: true,
            message: 'Profile info retrieved',
            data: { ...rest, appointments },
        });
    } catch (error) {
        console.error("Get doctor profile error:", error);
        res.status(500).json({ success: false, message: 'Something went wrong', error: error.message });
    }
};
