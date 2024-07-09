import UserSchema from "../models/UserSchema.js";
import BookingSchema from "../models/BookingSchema.js";
import DoctorSchema from "../models/DoctorSchema.js";
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await UserSchema.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await UserSchema.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Unable to delete" });
    }
};

export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserSchema.findById(id);

        res.status(200).json({
            success: true,
            message: "User found",
            data: user,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "No user found" });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await UserSchema.find({}).select("-password");

        res.status(200).json({
            success: true,
            message: "Users found",
            data: users,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "No users found" });
    }
};

export const getUserProfile = async(req,res)=>{
    const userId = req.userId

    try{
        const user  = await User.findById(userId)

        if(!user){
            return res.status(404).json({success:false, message:'User Not Found'})
        }
        const{password, ...rest} = user.doc

        res.status(200).json({success:true, message:'Profile info is getting', data:{...rest}})
    }
    catch(error){
        res.status(500).json({success:false, message:'Something Went Wrong'})
    }
}
export const getMyAppointments = async(req,res) =>{
    try{
        //step 1 : retrieve appointments from booking for a specific user 
        const bookings = await Booking.find({user:req.userId})
        //step 2 extract doctor ids from appointment booking
        const doctorIds = bookings.map(el=>el.doctor.id)
        //step 3: retrieve doctor using doctor ids
        const doctors = await DoctorSchema.find({ _id: { $in: doctorsIds } }).select('-password');

        res.status(200).json({success:true, message:"Appointments are getting", data:doctors})
    }
    catch(err){
        res.status(500).json({success:false, message:'Something Went Wrong'})
    }
}