import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Classes from '../Admin/Classes';
import { Link } from 'react-router-dom';

const UserHome = () => {
  const { user } = useContext(userContext);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/classess/userAcceptedClass/${user.id}`)
      .then((response) => {
        setCourses(response.data);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log("this is the courses ", courses)
  return (
    <div style={{backgroundColor : "#C2C0C0"}}>
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
                left: "200%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </form>
      </div>
      <div className="class-container grid grid-cols-3 gap-4">
       {courses.length > 0 ? (
 filteredClasses.map((course) => (
  <Link to={`/UserLayout/info/${course.id}`}> <div key={course.id} className="class-card">
            <a
              href="#"
              className="flex items-center bg-white border border-gray-500 rounded-lg hover-bg-gray-100 dark-border-gray-1000 dark-bg-gray-800 dark-hover-bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48"
                src={course.image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark-text-white">
                  {course.name}
                </h5>
              </div>
            </a>
          </div></Link>
           ))
          ) : (
            <div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            ur classes
          </h1>
            <p className="no-courses-message">You are not enrolled in any courses yet. If you want to see our available click here <Link to="/UserLayout/user/classes">Classes</Link></p>
            </div>
          )}
      </div>
    </div>
    </div>
  );
};

export default UserHome;
