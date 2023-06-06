import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardInfo = ({ Icon, title, value }) => {
  return (
    <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
      <div className="p-4 flex items-center">
        <div className="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
          <FontAwesomeIcon icon={Icon} />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;
