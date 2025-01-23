// components/DateRangePicker.js
import React from "react";
import PropTypes from "prop-types";

const DateRangePicker = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  startLabel = "Start Date",
  endLabel = "End Date"
}) => {
  return (
    <div className="flex space-x-2 mb-4 gap-4">
      <div className="flex-1">
        <label className="block text-gray-700 dark:text-white font-semibold mb-1">
          {startLabel}
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
        />
      </div>
      <div className="flex-1">
        <label className="block text-gray-700 dark:text-white font-semibold mb-1">
          {endLabel}
        </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
        />
      </div>
    </div>
  );
};

DateRangePicker.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
  startLabel: PropTypes.string,
  endLabel: PropTypes.string
};

export default DateRangePicker;
