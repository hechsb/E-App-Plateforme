import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import React, { createContext, useState } from "react";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Home from "./Component/Admin/Home";
import Navbars from "./Component/Admin/Navbar";
import Sidebars from "./Component/Admin/Sidebar";
import Users from "./Component/Admin/Users";
import Classes from "./Component/Admin/Classes";
import Userhome from "./Component/User/Userhome";
import Userclasses from "./Component/User/Userclasses";
import Usernavbar from "./Component/User/Usernavbar";
import Classesnavbar from "./Component/Classes/Classesnavbar";
import Classeshome from "./Component/Classes/Classeshome";
import Classessidebar from "./Component/Classes/Classessidebar";
import UserPersonnel from "./Component/User/UserPersonnel";
import { TodoProvider } from "./Component/User/TodoContext";
import UserCourses from "./Component/User/UserCourses";
import Courses from "./Component/Admin/Courses";

export const userContext = createContext();
const Layout = () => {
  return (
    <div>
      <div>
        <Navbars />
        <div className="flex" style={{ minHeight: "100vh" }}>
          <div>
            <Sidebars />
          </div>
          <div className="flex flex-grow-1" style={{ minHeight: "100vh" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
const UserLayout = () => {
  return (
    <div>
      <Usernavbar />
      <div className="flex" style={{ minHeight: "100vh" }}>
        <div>
          <Classessidebar />
        </div>
        <div className="flex flex-grow-1" style={{ minHeight: "100vh" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
const ClassesLayout = () => {
  return (
    <div>
      <Classesnavbar />
      <div className="flex" style={{ minHeight: "100vh" }}>
        <div>
          <Classeshome />
        </div>
        <div className="flex flex-grow-1" style={{ minHeight: "100vh" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        path: "admin/users",
        element: <Users />,
      },
      {
        path: "admin/classes",
        element: <Classes />,
      },
      {
        path: "info/:classId",
        element: <Courses />,
      },
    ],
  },
  {
    path: "/UserLayout",
    element: <UserLayout />,
    children: [
      {
        path: "user/classes",
        element: <Userclasses />,
      },
      {
        path: "user/home",
        element: <Userhome />,
      },
      {
        path: "user/personalSpace",
        element: <UserPersonnel />,
      },
      {
        path: "info/:classId",
        element: <UserCourses />,
      },
    ],
  },
  {
    path: "/ClassesLayout",
    element: <ClassesLayout />,
    children: [
      {
        path: "classes/home",
        element: <Classeshome />,
      },
    ],
  },
]);

function App() {
  const [user, setUser] = useState("");

  console.log("i'm cosole logged from app ", user);
  return (
    <TodoProvider>
      <div>
        <userContext.Provider value={{ user, setUser }}>
          <div>
            <RouterProvider router={router} />
          </div>
        </userContext.Provider>
      </div>
    </TodoProvider>
  );
}
export default App;
