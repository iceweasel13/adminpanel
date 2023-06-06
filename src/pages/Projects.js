import React from "react";
import DataTable from "react-data-table-component";

const Projects = ({ data, columns }) => {
  return (
    <div className="container mx-auto px-2 ml-96">
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
  );
};

export default Projects;
