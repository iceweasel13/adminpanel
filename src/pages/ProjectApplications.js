import React from "react";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectApplications = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      position: "Developer",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Designer",
      status: "Approved",
    },
    // Diğer başvurularınızı buraya ekleyin
  ];

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Position",
      selector: "position",
      sortable: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
      cell: (row) => (
        <div>
          {row.status === "Pending" ? (
            <>
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 cursor-pointer"
                onClick={() => handleApprove(row.id)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 cursor-pointer ml-2"
                onClick={() => handleReject(row.id)}
              />
            </>
          ) : (
            <span>{row.status}</span>
          )}
        </div>
      ),
    },
  ];

  const handleApprove = (id) => {
    // Başvuruyu kabul etme işlemini burada gerçekleştirin
  };

  const handleReject = (id) => {
    // Başvuruyu reddetme işlemini burada gerçekleştirin
  };

  return (
    <div className="container mx-auto px-2 ml-96">
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
  );
};

export default ProjectApplications;
