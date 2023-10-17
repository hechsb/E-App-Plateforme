import React, { useContext ,useState , useEffect } from "react";
import axios from "axios";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
function Classesnavbar({ classData }) {

  const { user } = useContext(userContext); 
  const navbarStyle = {
    backgroundColor: "#F9FAFB",
  };

  useEffect(() => {
    const token = localStorage.getItem('token')
    const config = {
      headers:{
        'x-access-token': token
      }
    }
   
    axios.get('http://localhost:3000/User/classes', config)
      .then((response) => {
        setClassName(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, [])

  return (
    <div >
         <Navbar  fluid rounded style={navbarStyle}>
        <Navbar.Brand>
          <Link to="home">
            <i
              className="fas fa-book-open fa-2x me-3"
              style={{ color: "#ff6219" }}
            ></i>
            <span
              className="self-center whitespace-nowrap text-xxl font-semibold dark:text-black"
              style={{ color: "black", fontSize: "24px" }}
            >
              E-LEARNING
            </span>
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img=""
                rounded
                style={{ height: "60px", width: "60px" }}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.firstName}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <p>Settings</p>
            <Dropdown.Divider />
            <Link to="/">
              <span>Sign out</span>
            </Link>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
         
            <span
            
              className="flex items-center"
              style={{ color: "black", fontSize: "24px" }}
            >
             
            </span>
   
        </Navbar.Collapse>
      </Navbar>  
      </div>
  );
}

export default Classesnavbar;