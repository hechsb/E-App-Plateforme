import React, { useState, useEffect } from "react";
import axios from "axios";
import PendingUser from "./PendingUser";

function Users(props) {
  // State to store pending users
  const [pendingUsers, setPendingUsers] = useState([]);
  
  // Fetch pending users on component mount
  useEffect(() => {
    axios
      .get("http://localhost:3000/classess/getPendingStudentClasses")
      .then((response) => {
        setPendingUsers(response.data);
        console.log("here is pending users",pendingUsers)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('im the pending user ',pendingUsers)
  // Function to handle user acceptance
  const handleAccept = (userId , classId) => {
    // Handle user acceptance here
    console.log("Accepted user with ID: ", userId);
    axios.put(`http://localhost:3000/classess/accept/${classId}/${userId}`)   

    window.location.reload()
  };

  // Function to handle user rejection
  const handleReject = (userId) => {
    // Handle user rejection here
    console.log("Rejected user with ID: ", userId);
  };

  return (
    <div className="user-management flex justify-center">
      <div className="text-center"> {/* Center the content */}
        <div className="p-4 flex justify-center items-center"> {/* Center the content */}
          <h1 className="text-3xl">Users management</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Class</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pendingUsers.map((userr) => (
                <PendingUser
                  key={userr.id}
                  userr={userr}
                  onAccept={handleAccept}
                  onReject={handleReject}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
