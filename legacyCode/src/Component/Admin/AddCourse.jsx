import { useState } from "react";
import axios from "axios";

const AddCourse = ({ classId, fetchCourses }) => {
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
    <div className="max-w-md mx-auto " style={{ position: "absolute", left: "1000px", top: "150px" }}
    >
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h4 className="text-xl font-semibold mb-4">Add course to the Class</h4>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Title
          </label>
          <input
            id="name"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Title"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
            PDF File
          </label>
          <input
            id="file"
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="application/pdf"
            required
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
