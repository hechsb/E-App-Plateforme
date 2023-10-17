import React from "react";

const UserCourse = ({ course }) => {
    const handleOpenPDF = () => {
        window.open(`http://localhost:3000/${course.file}`, "_blank");
    };

    const iconStyle = {
        fontSize: "48px",
        color: "red",
        position: "relative",
        left: "50px",
        top: "145px"
    };

    return (
        <div onClick={handleOpenPDF} style={{ cursor: "pointer" }}>
            <i className="fa fa-file-pdf-o" style={iconStyle}></i>
            <h3 style={{ position: "relative", left: "100px", top: "100px" }}>{course.name}</h3>
        </div>
    )
}
export default UserCourse;