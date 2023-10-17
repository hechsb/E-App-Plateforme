import React from 'react'
import { Label, Sidebar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
    HiArrowSmRight,
    HiHome,
    HiInbox,
    HiLogout,
    HiAcademicCap,
    HiTable,
    HiUsers,
    HiViewBoards,
    HiOutlineAnnotation
  } from "react-icons/hi"
function Classessidebar() {
 
  return (

     <Sidebar
        aria-label="Sidebar with content separator example"
        style={{ backgroundColor: "#F9FAFB" }}
       
      >
        <Sidebar.Items style={{ backgroundColor: "white" }}>
          <Sidebar.ItemGroup style={{ backgroundColor: "white" }}>
          <Link to='user/home' ><div><Sidebar.Item icon={HiHome}>
              <p style={{ color: "black", fontSize: "20px" }}>Home</p>
            </Sidebar.Item></div></Link>
          <Link to='user/classes' ><div><Sidebar.Item icon={HiAcademicCap}>
              <p style={{ color: "black", fontSize: "20px" }}>classes</p>
            </Sidebar.Item></div></Link>
            <Link to='user/personalSpace'><div><Sidebar.Item href="#" icon={HiOutlineAnnotation}>
              <p style={{ color: "black", fontSize: "20px" }}>Personel <br/> space</p>
            </Sidebar.Item></div></Link>
          </Sidebar.ItemGroup>
          <Link to='/'><div style={{ flex: 2,  flexDirection: 'column', justifyContent: 'flex-end' , marginBottom: '20px' }}>
    <Sidebar.ItemGroup>
      <Sidebar.Item href="#" icon={HiLogout}>
        <p style={{ color: "black", fontSize: "20px" }}>Logout</p>
      </Sidebar.Item>
    </Sidebar.ItemGroup>
  </div></Link>
        </Sidebar.Items>
      </Sidebar>

 
  )
}

export default Classessidebar