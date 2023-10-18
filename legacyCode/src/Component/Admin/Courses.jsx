import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Course from './Course';
import AddCourse from './AddCourse';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const { classId } = useParams();
    console.log(classId)
    const fetchCourses = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/courses/${classId}`);
            setCourses(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);
    return (
        <div>
            <div><AddCourse classId={classId} fetchCourses={fetchCourses} /></div>
            <ul className="course-list">
                {courses.map(course => (
                    <li className="course-list-item" key={course.id}>
                        <Course course={course} fetchCourses={fetchCourses} />
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Courses;