import React, { useContext } from "react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";


function Usernavbar() {
  const { user, setUser } = useContext(userContext);
  const navbarStyle = {
    backgroundColor: "#F9FAFB",
  };
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <div >
      <Navbar fluid rounded style={navbarStyle}>
        <Navbar.Brand>
          <Link to="user/home">
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
            <Link to="/" onClick={handleSignOut}>
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

export default Usernavbar;
