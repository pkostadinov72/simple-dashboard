import UserCard from "../components/Users/UserCard";
import ChartCard from "../components/Chart";
import DashboardHeader from "../components/DashboardHeader";
import ActivityCard from "../components/Activity/ActivityCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header, Plamen: this part can be made with a router layout, utilizing outlet */}
      <DashboardHeader title="Dashboard" />

      {/* Main Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Card */}
            <div>
              <UserCard />
            </div>
            {/* Activity Card */}
            <div>
              <ActivityCard />
            </div>
            {/* Chart Card */}
            <div>
              <ChartCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
