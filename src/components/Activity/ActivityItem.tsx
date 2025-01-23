// components/ActivityItem.js

interface ActivityItem {
  id: number;
  text: string;
  time: string;
}

const ActivityItem = ({ activity }: { activity: ActivityItem }) => {
  return (
    <div
      key={activity.id}
      className="border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0"
    >
      <p className="text-gray-800 dark:text-gray-200">{activity.text}</p>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {new Date(activity.time).toLocaleString()}
      </span>
    </div>
  );
};

export default ActivityItem;
