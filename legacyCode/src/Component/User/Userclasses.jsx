import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";


function Userclasses() {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(userContext);
  const [classData, setClassData] = useState([]);
  const [joinStatus, setJoinStatus] = useState("Join Class");

  const [hiddenClasses, setHiddenClasses] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:3000/classess/getAll")
      .then((response) => {
        setClassData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

 

  const handleJoinClick = (classId) => {
    axios
      .post(`http://localhost:3000/classess/${classId}/${user.id}`)
      .then((response) => {
        setJoinStatus("Pending");
        setHiddenClasses([...hiddenClasses, classId]);
        // Replace the pop-up with an alert
        alert("Your request was sent to the admin.");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filteredClasses = classData.filter((cls) => {
    return cls.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div  >
      <div >
        <form className="flex items-center" >

          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative w-full xl:w-96">
            <input
              type="text"
              id="search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-2.5 dark-bg-gray-700 dark-border-gray-600 dark-placeholder-gray-400 dark-text-white dark-focus:ring-orange-500 dark-focus:border-orange-500"
              placeholder="Search for a class..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
              style={{
                position: "relative",
                left: "160%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </form>
      </div>
      <div className="class-container grid grid-cols-3 gap-4">
        {filteredClasses.map((cls) => (
          !hiddenClasses.includes(cls.id) && (
            <div key={cls.id} className="class-card">
              <a
                href="#"
                className="flex items-craftsmen-bg-white border border-gray-500 rounded-lg hover-bg-gray-100 dark-border-gray-1000 dark-bg-gray-800 dark-hover-bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48"
                  src={cls.image}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark-text-white">
                    {cls.name}
                  </h5>
                  <button
                    onClick={() => handleJoinClick(cls.id)}
                    className="text-white bg-orange-700 hover-bg-orange-800 focus-ring-4 focus-outline-none focus-ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-orange-600 dark-hover-bg-orange-700 dark-focus-ring-orange-800"
                  >
                    join 
                  </button>
                </div>
              </a>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Userclasses;
