import React, { useState } from "react";

const CancelBookingForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    duration: "",
    department: "",
    event: "",
    reason: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { id, date, duration, department, event, reason } = formData;

    if (!id || !date || !duration || !department || !event || !reason) {
      alert("Please fill out all fields.");
      return;
    }

    console.log("ID:", id);
    console.log("Date:", date);
    console.log("Duration:", duration);
    console.log("Department:", department);
    console.log("Event Name:", event);
    console.log("Reason:", reason);

    alert("Booking cancellation submitted successfully!");
    setFormData({
      id: "",
      date: "",
      duration: "",
      department: "",
      event: "",
      reason: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-xl font-semibold mb-6">
          Cancelling Form
        </h2>
        <form id="cancelBookingForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block font-bold text-gray-700">
              ID
            </label>
            <input
              type="text"
              id="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="Enter your ID"
              className="w-full p-2 mt-1 border border-gray-400 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block font-bold text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-400 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="duration" className="block font-bold text-gray-700">
              Duration (in session)
            </label>
            <select
              id="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-400 rounded-md"
              required
            >
              <option value="">Select Duration</option>
              <option value="forenoon">Forenoon</option>
              <option value="afternoon">Afternoon</option>
              <option value="full_day">Full-Day</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="department"
              className="block font-bold text-gray-700"
            >
              Department
            </label>
            <input
              type="text"
              id="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter the department"
              className="w-full p-2 mt-1 border border-gray-400 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="event" className="block font-bold text-gray-700">
              Event Name
            </label>
            <input
              type="text"
              id="event"
              value={formData.event}
              onChange={handleChange}
              placeholder="Enter event name"
              className="w-full p-2 mt-1 border border-gray-400 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reason" className="block font-bold text-gray-700">
              Valid Reason for Cancellation
            </label>
            <textarea
              id="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Enter valid reason for cancellation"
              className="w-full p-2 mt-1 border border-gray-400 rounded-md resize-none"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CancelBookingForm;
