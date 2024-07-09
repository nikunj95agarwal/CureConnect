import DoctorSchema from "../models/DoctorSchema.js";
export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await DoctorSchema.findByIdAndUpdate(
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
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        await DoctorSchema.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Unable to delete" });
    }
};

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await DoctorSchema.findById(id);

        res.status(200).json({
            success: true,
            message: "Doctor found",
            data: doctor,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "No Doctor found" });
    }
};

export const getAllDoctor = async (req, res) => {
    try {
        const {query} = req.query
        let doctors;

        if(query){
            doctors = await Doctor.find({
                isApproved : 'pending',
            $or:[
                {name : {$regex: query, $options: "i"}},
                {specialization : {$regex: query , $options: "i"}},

            ],
        }).select("-password")
        }
        else{
             doctors = await DoctorSchema.find({isApproved : 'approved',}).select("-password");
        }
        
        

        res.status(200).json({
            success: true,
            message: "Doctors found",
            data: doctors,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "No Doctors found" });
    }
};

export const getDoctorProfile = async(req,res)=>{
    const doctorId = req.doctorId

    try{
        const doctor  = await DoctorSchemaoctor.findById(doctorId)

        if(!doctor){
            return res.status(404).json({success:false, message:'doctor Not Found'})
        }
        const{password, ...rest} = doctor.doc
        const appointment = await Booking.find({doctor:doctorId})

        res.status(200).json({success:true, message:'Profile info is getting', data:{...rest}})
    }
    catch(error){
        res.status(500).json({success:false, message:'Something Went Wrong'})
    }
}