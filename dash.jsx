import React, { useState } from "react";

const AdminDashboard = () => {
  const [requests, setRequests] = useState([
    {
      id: "BID123",
      event: "Computer Science Workshop",
      date: "2024-12-25",
      duration: "3 hours",
      department: "Computer Science",
      status: "Pending",
    },
    {
      id: "BID124",
      event: "Commerce Seminar",
      date: "2024-12-26",
      duration: "2 hours",
      department: "Commerce",
      status: "Pending",
    },
  ]);

  const [historyRecords, setHistoryRecords] = useState([]);
  const [actionTimestamp, setActionTimestamp] = useState(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const approveRequest = (bookingID) => {
    const updatedRequests = requests.map((request) =>
      request.id === bookingID ? { ...request, status: "Approved" } : request
    );
    setRequests(updatedRequests);

    const request = requests.find((req) => req.id === bookingID);
    addHistoryRecord(request, "Approved");
    sendEmailNotification(request, "Approved");
    setActionTimestamp(new Date().toLocaleString());
  };

  const rejectRequest = (bookingID) => {
    const updatedRequests = requests.map((request) =>
      request.id === bookingID ? { ...request, status: "Rejected" } : request
    );
    setRequests(updatedRequests);

    const request = requests.find((req) => req.id === bookingID);
    addHistoryRecord(request, "Rejected");
    sendEmailNotification(request, "Rejected");
    setActionTimestamp(new Date().toLocaleString());
  };

  const addHistoryRecord = (request, status) => {
    const newHistoryRecord = { ...request, status };
    setHistoryRecords([...historyRecords, newHistoryRecord]);
  };

  const sendEmailNotification = (request, status) => {
    alert(
      `Email sent to user: Your booking request with ID ${request.id} has been ${status}.`
    );
    console.log(
      `Email sent to user regarding booking ${request.id} status: ${status}`
    );
  };

  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/4 bg-blue-800 text-white p-4">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="hover:underline">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Pending Requests
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Approved Requests
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Rejected Requests
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Reports
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleHistory} className="hover:underline">
              History
            </a>
          </li>
        </ul>

        {actionTimestamp && (
          <div className="mt-4 p-2 bg-gray-700 rounded">
            <p>Last action performed at: {actionTimestamp}</p>
          </div>
        )}
      </div>

      <div className="w-3/4 p-4">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Admin Profile"
            className="rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-bold">Admin Name</h3>
            <p>Administrator</p>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">Manage Booking Requests</h1>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-4 py-2">Booking ID</th>
                <th className="px-4 py-2">Event Name</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b">
                  <td className="px-4 py-2">{request.id}</td>
                  <td className="px-4 py-2">{request.event}</td>
                  <td className="px-4 py-2">{request.date}</td>
                  <td className="px-4 py-2">{request.duration}</td>
                  <td className="px-4 py-2">{request.department}</td>
                  <td
                    className={`px-4 py-2 ${
                      request.status === "Approved"
                        ? "text-green-500"
                        : request.status === "Rejected"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {request.status}
                  </td>
                  <td className="px-4 py-2">
                    {request.status === "Pending" && (
                      <>
                        <button
                          className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                          onClick={() => approveRequest(request.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                          onClick={() => rejectRequest(request.id)}
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isHistoryVisible && (
          <div className="mt-8">
            <h1 className="text-xl font-bold mb-4">
              History of Approved/Rejected Requests
            </h1>
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-2">Booking ID</th>
                  <th className="px-4 py-2">Event Name</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {historyRecords.map((record) => (
                  <tr key={record.id} className="border-b">
                    <td className="px-4 py-2">{record.id}</td>
                    <td className="px-4 py-2">{record.event}</td>
                    <td
                      className={`px-4 py-2 ${
                        record.status === "Approved"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {record.status}
                    </td>
                    <td className="px-4 py-2">{record.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
