// components/ChartCard.js
import { useState, useRef } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import DateRangePicker from "./DateRangePicker";
import useActiveUsers from "../services/useActiveUsers";

ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ChartCard = () => {
  const [chartType, setChartType] = useState("pie");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const chartRef = useRef(null);

  // Use the useActiveUsers hook to fetch data
  const { data: activeUsers, isLoading, error } = useActiveUsers();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <p className="text-center text-gray-700 dark:text-white">Loading...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <p className="text-center text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  // Apply date range filtering
  const filteredData = activeUsers.filter((item) => {
    const dataDate = new Date(item.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    return (!start || dataDate >= start) && (!end || dataDate <= end);
  });

  // Prepare data for the chart
  const chartData = {
    labels: filteredData.map((item) => item.date),
    datasets: [
      {
        label: "Active Users",
        data: filteredData.map((item) => item.activeUsers),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", // Red
          "rgba(54, 162, 235, 0.2)", // Blue
          "rgba(255, 206, 86, 0.2)", // Yellow
          "rgba(75, 192, 192, 0.2)", // Green
          "rgba(153, 102, 255, 0.2)", // Purple
          "rgba(255, 159, 64, 0.2)" // Orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Red
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 206, 86, 1)", // Yellow
          "rgba(75, 192, 192, 1)", // Green
          "rgba(153, 102, 255, 1)", // Purple
          "rgba(255, 159, 64, 1)" // Orange
        ],
        borderWidth: 1
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  // Handle chart type change
  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  // Render the appropriate chart based on chartType
  const renderChart = () => {
    switch (chartType) {
      case "pie":
        return <Pie ref={chartRef} data={chartData} options={options} />;
      case "bar":
        return <Bar ref={chartRef} data={chartData} options={options} />;
      case "line":
        return <Line ref={chartRef} data={chartData} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      {/* Date Range Picker */}
      <div className="flex gap-4 mb-4">
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>

      {/* Chart */}
      <div className="h-72">{renderChart()}</div>

      {/* Chart Type Selector */}
      <div className="mt-4">
        <label
          htmlFor="chartType"
          className="block text-gray-700 dark:text-white font-semibold mb-2"
        >
          Chart Type
        </label>
        <select
          id="chartType"
          value={chartType}
          onChange={handleChartTypeChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="pie">Pie</option>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
        </select>
      </div>
    </div>
  );
};

export default ChartCard;
