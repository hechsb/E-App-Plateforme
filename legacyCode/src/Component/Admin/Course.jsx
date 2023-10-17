import React, { useState } from "react";
import axios from "axios";

const Course = ({ course, fetchCourses }) => {
    const [updatedName, setUpdatedName] = useState("");
    const [updatedFile, setUpdatedFile] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);
    const handleOpenPDF = () => {
        window.open(`http://localhost:3000/${course.file}`, "_blank");
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", updatedName);
        if (updatedFile) {
            formData.append("file", updatedFile);
        }

        try {
            await axios.put(`http://localhost:3000/courses/${course.id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setIsEditMode(false);
            fetchCourses();
        } catch (error) {
            console.error("Error updating course:", error);
        }
    };

    const handleDelete = async () => {
        const shouldDelete = window.confirm("Are you sure you want to delete this course?");
        if (shouldDelete) {
            try {
                await axios.delete(`http://localhost:3000/Courses/${course.id}`);
                fetchCourses();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const iconStyle = {
        fontSize: "48px",
        color: "red",
        position: "relative",
        left: "50px",
        top: "145px",
        cursor: "pointer"
    };

    return (
        <div>
            <div>
                <i className="fa fa-file-pdf-o" style={iconStyle} styleonClick={handleOpenPDF}></i>
                <h3 style={{ position: "relative", left: "100px", top: "100px", cursor: "pointer", display: "flex" }} onClick={handleOpenPDF}>{course.name}</h3>
            </div>
            <div>
                {isEditMode ? (
                    <div style={{ position: "relative", left: "30px", top: "100px" }}>
                        <form>
                            <input
                                type="text"
                                value={updatedName}
                                onChange={(e) => setUpdatedName(e.target.value)}
                                placeholder="Enter updated name"
                            />
                            <input
                                type="file"
                                accept="application/pdf"
                                onChange={(e) => {
                                    console.log(e.target.files[0]);
                                    setUpdatedFile(e.target.files[0]);
                                }}
                            />
                            <button
                                type="button"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                style={{ position: "relative", left: "-60px", top: "0px" }}
                                onClick={handleUpdate}>Submit</button>
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                style={{ position: "relative", left: "-40px" }}
                                onClick={() => setIsEditMode(false)}> Cancel </button>
                        </form>
                    </div>)
                    : (
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            style={{ position: "relative", left: "100px", top: "100px" }}
                            onClick={() => setIsEditMode(true)}
                        >
                            Update
                        </button>)}
                <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    style={{ position: "relative", left: "100px", top: "100px" }}
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Course;
