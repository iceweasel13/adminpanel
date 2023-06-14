import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // API endpoint
    const apiUrl = "http://localhost:5000/api/projects";

    // Veriyi al
    axios
      .get(apiUrl)
      .then((response) => {
        const projects = response.data.filter(
          (project) => project.applicationStatus === true
        );
        setData(projects);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

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
  ];

  return (
    <>
      <Sidebar />
      <div className="container mx-auto px-2 mr-16">
        <h1 className="flex items-center font-sans font-bold break-normal text-indigo-500 px-2 py-8 text-xl md:text-2xl">
          Projects
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

export default Projects;
