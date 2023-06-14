import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await axios.get("http://localhost:5000/api/users");
      setData(res.data);
    };
    fetchProfiles();
  }, []);

  const columns = [
    {
      name: "wallet Address",
      selector: (row) => row.walletAddress,
      sortable: false,
    },
    {
      name: "Picture",
      selector: (row) => row.profilePicture,
      sortable: false,
      cell: (row) => (
        <img src={row.profilePicture} alt="logo" className="h-12 w-12" />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Surname",
      selector: (row) => row.surname,
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
    },
  ];

  return (
    <>
      <Sidebar />
      <div className="container mx-auto px-2 mr-12">
        <h1 className="flex items-center font-sans font-bold break-normal text-indigo-500 px-2 py-8 text-xl md:text-2xl">
          Users
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

export default Users;
