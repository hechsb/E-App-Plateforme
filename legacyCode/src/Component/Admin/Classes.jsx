import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Classes() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [classList, setClassList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
// dje,d
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_upload");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dmualnorm/image/upload`,
        formData
      );
      setImage(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };
  useEffect(() => {
    axios.get("http://localhost:3000/classess/getAll")
      .then((response) => {
        setClassList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  const filteredClasses = classList.filter((classInfo) => {
    return classInfo.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/classess/", {
        name,
        image: image,
      });
      setClassList([...classList, { name, image }]);
      setName("");
      setImage("");
      closeModal();
    } catch (error) {
      console.error("Error creating class:", error);
    }
  };

  const openModal = () => {
    setModalOpen(true);

  };

  const closeModal = () => {
    setModalOpen(false);

  };

  const modalStyles = {
    display: isModalOpen ? "block" : "none",
  };

  return (
    <div className="px-3 py-4 flex" style={{ backgroundColor: "#D3D3D3", flex: 1, overflowY: "auto" }}>

      <button
        onClick={openModal}
        className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
        style={{
          height: "150px",
          position: "relative",
          top: "20%",
          left: "10%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Add classes
      </button>
      <div
        id="authentication-modal"
        style={{ ...modalStyles, position: "absolute", left: "750px", top: "150px" }}
        className="fixed flex"
      >
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow dark-bg-gray-700">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-18 right-1.5 text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark-text-white"></h3>
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0"></div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Add class name
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder=" Class name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                        style={{ position: "absolute" }}
                      >
                        Add class image
                      </label>
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="class-list" style={{
        height: "150px",
        position: "relative",
        top: "20%",
        left: "10%",
        transform: "translate(-50%, -50%)",
      }}>
      </div>
      <div className="class-list">
        <div
          className="class-list"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: "210px",
            right: "50px",
          }}
        >
        </div>
      </div>
      <form
        className="flex items-center"
        style={{
          height: "150px",
          position: "relative",
          top: "1%",
          left: "34%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full xl:w-96">
          <input
            type="text"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Search for a class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </div>
      </form>
      <div className="grid grid-cols-3 gap-4" style={{ marginRight: '100px' }}>
        {filteredClasses.map((classInfo) => (
          <Link to={`/layout/info/${classInfo.id}`}><div key={classInfo.id}>
            <div style={{ flex: '1', minWidth: '50px', margin: '50px 0', padding: '5px', cursor: 'pointer', }}>
              <a
                href="#"
                className="flex items-center bg-white border border-gray-500 rounded-lg hover:bg-gray-100 dark:border-gray-1000 dark-bg-gray-800 dark-hover-bg-gray-700"
                style={{ boxShadow: '10px 2px 5px rgba(0, 0, 0, 0.1)' }}
              >
                <img
                  className="object-cover w-full rounded-t-lg h-45 md:h-48 md:w-48"
                  src={classInfo.image}
                  alt={classInfo.name}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold text-gray-900 dark-text-white">
                    {classInfo.name}
                  </h5>
                </div>
              </a>
            </div>
          </div></Link>
        ))}
      </div>

    </div>
  );
}

export default Classes;