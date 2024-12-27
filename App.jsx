import React from "react";
import banner from "./img/banner.gif";

const AuditoriumBookingForm = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mx-auto my-10">
      {/* Form Section */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Book Auditorium
        </h2>
        <form className="flex flex-col gap-6">
          {/* Booking ID */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <label htmlFor="name" className="p-3 bg-gray-100 text-gray-600">
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Booking ID"
              className="flex-1 p-3 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <label htmlFor="email" className="p-3 bg-gray-100 text-gray-600">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="flex-1 p-3 outline-none"
              required
            />
          </div>

          {/* Department Name */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <label
              htmlFor="department"
              className="p-3 bg-gray-100 text-gray-600"
            >
              <i className="fas fa-building"></i>
            </label>
            <input
              type="text"
              id="department"
              placeholder="Department Name"
              className="flex-1 p-3 outline-none"
              required
            />
          </div>

          {/* Occasion Name */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <label htmlFor="occasion" className="p-3 bg-gray-100 text-gray-600">
              <i className="fas fa-calendar-alt"></i>
            </label>
            <input
              type="text"
              id="occasion"
              placeholder="Occasion Name"
              className="flex-1 p-3 outline-none"
              required
            />
          </div>

          {/* Date */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <label htmlFor="date" className="p-3 bg-gray-100 text-gray-600">
              <i className="fas fa-calendar"></i>
            </label>
            <input
              type="date"
              id="date"
              className="flex-1 p-3 outline-none"
              required
            />
          </div>

          {/* Time */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <label htmlFor="time" className="p-3 bg-gray-100 text-gray-600">
              <i className="fas fa-clock"></i>
            </label>
            <input
              type="time"
              id="time"
              className="flex-1 p-3 outline-none"
              required
            />
          </div>

          {/* Purpose */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <label htmlFor="purpose" className="p-3 bg-gray-100 text-gray-600">
              <i className="fas fa-pencil-alt"></i>
            </label>
            <input
              type="text"
              id="purpose"
              placeholder="Purpose of Booking with accurate time (e.g., 10:00 AM to 12:00 PM)"
              className="flex-1 p-3 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Book Now
          </button>
        </form>
        <a
          href="#"
          className="block text-center text-red-500 mt-4 hover:underline"
        >
          Cancel Booking
        </a>
      </div>

      {/* Image Section */}
      <div className="flex-1 bg-gray-100 flex justify-center items-center p-4">
        <img
          src={banner}
          alt="Auditorium Illustration"
          className="rounded-lg max-w-full"
        />
      </div>
    </div>
  );
};

export default AuditoriumBookingForm;
