import React from "react";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  console.log("Token being used:", token);  // Log token being used
  const bookingHandler = async () => {
    try {
      console.log("Token being used:", token);  // Log token being used
      console.log("Initiating booking request for doctor ID:", doctorId);  // Log doctorId

      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: 'POST',
        headers: {
          
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Response status:", res.status);  // Log response status
      const data = await res.json();
      console.log("Response data:", data);  // Log response data

      if (!res.ok) {
        throw new Error(data.message || "Failed to create checkout session. Please try again.");
      }

      if (data.session && data.session.url) {
        window.location.href = data.session.url;
      } else {
        throw new Error("Checkout session URL is missing. Please try again.");
      }
    } catch (err) {
      console.error("Booking handler error:", err);  // Log error details
      toast.error(err.message);
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          Rs. {ticketPrice}
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>

        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.startingTime} - {item.endingTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md hover:bg-green-600">Book Appointment</button>
      <div className="flex items-center justify-center">
      <span className="text-center">(Use Card No. 4242-4242-4242-4242 For Testing Payment)</span>
    </div>
    </div>
  );
};

export default SidePanel;
