import { useState } from "react";
import axios from "axios";

const AddCourse = ({ classId, fetchCourses }) => {
    console.log(classId)
    const [name, setName] = useState("");
    const [file, setFile] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", file);

        try {
            await axios.post(`http://localhost:3000/courses/${classId}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("Course added successfully!");
            fetchCourses()
        } catch (error) {
            console.error("Error adding course:", error);
        }
    };
    return (
        <div className="pdfForm">
            <form className="formStyle" onSubmit={handleSubmit}>
                <h4>Upload Pdf in React</h4>
                <br />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="file"
                    className="form-control"
                    accept="application/pdf"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddCourse;