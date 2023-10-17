import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";

function PendingUser({ userr, onAccept, onReject }) {
  const [info, setInfo] = useState({});
  const [userClass, setUserClass] = useState({});
  const { user } = useContext(userContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make both requests concurrently
        const [userInfoResponse, userClassResponse] = await Promise.all([
          axios.get(`http://localhost:3000/User/getOneUser/${userr.studentId}`),
          axios.get(`http://localhost:3000/classess/${userr.classId}`)
        ]);

        setInfo(userInfoResponse.data.message);
        setUserClass(userClassResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [userr.id, userr.classId]);

  return (
    <tr className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5">{info.email}</td>
      <td className="p-3 px-5">{userClass.name}</td>
      <td className="p-3 px-5 flex justify-end">
        <button
          type="button"
          className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={() => onAccept(userr.studentId ,userr.classId)}
        >
          Accept
        </button>
        <button
          type="button"
          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={() => onReject(userr.id)}
        >
          Reject
        </button>
      </td>
    </tr>
  );
}

export default PendingUser;
