import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  const toggleUsers = () => {
    setIsUsersOpen(!isUsersOpen);
  };

  const toggleBlog = () => {
    setIsBlogOpen(!isBlogOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const logout = () => {
    localStorage.removeItem("authenticated");
    navigate("/login", { replace: true });
    window.location.reload();
  };

  return (
    <div>
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={toggleSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${
          isSidebarOpen ? "" : "hidden"
        }`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Authore
            </h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={toggleSidebar}
            ></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <Link to="/dashboard">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Dashboard
            </span>
          </div>
        </Link>

        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={toggleProjects}
        >
          <i className="bi bi-folder2-open"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Projects
            </span>
            <span className="text-sm rotate-180">
              <i
                className={`bi bi-chevron-down ${
                  isProjectsOpen ? "rotate-0" : ""
                }`}
              ></i>
            </span>
          </div>
        </div>
        <div
          className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
            isProjectsOpen ? "" : "hidden"
          }`}
        >
          <Link to="/projects">
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              Projects
            </h1>
          </Link>
          <Link to="/project-applications">
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              Project Applications
            </h1>
          </Link>
        </div>

        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={toggleUsers}
        >
          <i className="bi bi-people-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Users
            </span>
            <span className="text-sm rotate-180">
              <i
                className={`bi bi-chevron-down ${
                  isUsersOpen ? "rotate-0" : ""
                }`}
              ></i>
            </span>
          </div>
        </div>
        <div
          className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
            isUsersOpen ? "" : "hidden"
          }`}
        >
          <Link to="/kyc-applications">
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              KYC Applications
            </h1>
          </Link>
          <Link to="/users">
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              Users
            </h1>
          </Link>
        </div>

        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={toggleBlog}
        >
          <i className="bi bi-journal-text"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Blog
            </span>
            <span className="text-sm rotate-180">
              <i
                className={`bi bi-chevron-down ${isBlogOpen ? "rotate-0" : ""}`}
              ></i>
            </span>
          </div>
        </div>
        <div
          className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
            isBlogOpen ? "" : "hidden"
          }`}
        >
          <Link to="/create-post">
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              Create Post
            </h1>
          </Link>
          <Link to="/posts">
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              Posts
            </h1>
          </Link>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={logout}
        >
          <i className="bi bi-box-arrow-right"></i>
          <span className="text-[15px] ml-4 text-white font-bold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
