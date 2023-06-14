import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const ProjectApplications = () => {
  const [data, setData] = useState([]);
  const apiUrl = "http://localhost:5000/api/projects";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const projects = response.data.filter(
          (project) => project.applicationStatus === false
        );
        setData(projects);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  const handleApprove = (id) => {
    axios
      .put(`${apiUrl}/${id}`, { applicationStatus: true })
      .then((response) => {
        setData(data.filter((project) => project._id !== id));
      })
      .catch((error) => {
        console.error("Error updating project: ", error);
      });
  };

  const handleReject = (id) => {
    axios
      .delete(`${apiUrl}/${id}`)
      .then((response) => {
        setData(data.filter((project) => project._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting project: ", error);
      });
  };
  const columns = [
    {
      name: "wallet Address",
      selector: (row) => row.walletAddress,
      sortable: false,
    },
    {
      name: "Logo",
      selector: (row) => row.logo,
      sortable: false,
      cell: (row) => <img src={row.logo} alt="logo" className="h-12 w-12" />,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.application_status,
      sortable: true,
      cell: (row) => (
        <div>
          {!row.application_status && (
            <>
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 cursor-pointer"
                onClick={() => handleApprove(row._id)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 cursor-pointer ml-2"
                onClick={() => handleReject(row._id)}
              />
            </>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <Sidebar />
      <div className="container mx-auto px-2 mr-12">
        <h1 className="flex items-center font-sans font-bold break-normal text-indigo-500 px-2 py-8 text-xl md:text-2xl">
          Project Applications
        </h1>
        <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <DataTable
            columns={columns}
            data={data}
            responsive={true}
            pagination={true}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectApplications;
