// src/components/ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-indigo-600 text-white text-center p-4">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-4">Oops! Page Not Found</p>
      <p className="mb-8">The page you are looking for does not exist.</p>
      <Link to="/home" className="bg-white text-indigo-600 py-2 px-4 rounded-full font-semibold shadow-lg hover:bg-indigo-50">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
