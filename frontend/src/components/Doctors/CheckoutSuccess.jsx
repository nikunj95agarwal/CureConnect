import React from 'react';

const CheckoutSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-lg text-gray-700 text-center mb-8">Thank you for your payment. Your transaction has been completed successfully.</p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => window.location.replace('users/profile/me')}>
            My Bookings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
