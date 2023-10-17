import React from "react";



const UserCourse = ({ course }) => {
    console.log(course)
    return (

        <div>

            <h3>{course.name}</h3>
            <h3 className="flex"></h3>
           
        </div>
    )
}
export default UserCourse;