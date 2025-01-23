// components/Card/ActivityCard.js
import { Activity } from "lucide-react";
import { useState } from "react";
import { parseDate } from "../../utilities/parseDate";
import DateRangePicker from "../DateRangePicker";
import Card from "../Card";
import ActivityItem from "./ActivityItem";

const ActivityCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filterTerm, setFilterTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const mockActivities = [
    { id: 1, text: "User JohnDoe logged in", time: "2023-10-15T08:30:00" },
    {
      id: 2,
      text: "User JaneSmith uploaded a file",
      time: "2023-10-16T09:00:00"
    },
    {
      id: 3,
      text: "System maintenance scheduled",
      time: "2023-10-17T10:00:00"
    },
    { id: 4, text: "User JohnDoe logged out", time: "2023-10-18T11:00:00" },
    {
      id: 5,
      text: "New user registration: Alice",
      time: "2023-10-19T12:00:00"
    }
  ];

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Filter activities based on text and date range, Plamen: in real scenario we would make api calls here, so debounce would be more efficient
  const filteredActivities = mockActivities.filter((activity) => {
    const activityDate = parseDate(activity.time);

    const matchesText = activity.text
      .toLowerCase()
      .includes(filterTerm.toLowerCase());

    const matchesStartDate = startDate
      ? activityDate >= parseDate(startDate)
      : true;

    const matchesEndDate = endDate ? activityDate <= parseDate(endDate) : true;

    return matchesText && matchesStartDate && matchesEndDate;
  });

  return (
    <Card
      title="Recent Activity"
      icon={Activity}
      isExpanded={isExpanded}
      onClick={handleCardClick}
    >
      <div className="space-y-4">
        {/* Filter input field */}
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-md mb-2"
        />
        {/* Date range inputs */}
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        {/* Display filtered activities */}
        {filteredActivities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </Card>
  );
};

export default ActivityCard;
