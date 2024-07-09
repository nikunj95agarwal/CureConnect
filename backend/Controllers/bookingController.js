import UserSchema from "../models/UserSchema.js";
import DoctorSchema from "../models/DoctorSchema.js";
import BookingSchema from "../models/BookingSchema.js";
import Stripe from "stripe";

export const getCheckoutSession = async (req, res) => {
    try {
        const doctor = await DoctorSchema.findById(req.params.doctorId);
        const user = await UserSchema.findById(req.params.userId);

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        // Create stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email: user.email,
            client_reference_id: req.params.doctorId,
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        unit_amount: doctor.ticketPrice * 100,
                        product_data: {
                            name: `Appointment with Dr. ${doctor.name}`,
                            description: doctor.bio 
                        },
                        
                    },
                    quantity: 1
                }
            ]
        });


        const booking = new BookingSchema({
            doctor:doctor._id,
            user:user._id,
            ticketPrice: user.ticketPrice,
            session:session.id
        })

        await booking.save()
        res.status(200).json({ success:true, message : "Successfully Paid" , session});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
