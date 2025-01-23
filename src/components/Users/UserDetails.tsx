// components/UserForm.js
import { Edit2 } from "lucide-react";

interface UserData {
  name: string;
  email: string;
  role: string;
  department: string;
}

interface UserDetailsProps {
  userData: UserData;
  setIsEditing: (isEditing: boolean) => void;
}

const UserDetails = ({ userData, setIsEditing }: UserDetailsProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {Object.entries(userData).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300 capitalize">
              {key}:
            </span>
            <span className="font-semibold dark:text-white">{value}</span>
          </div>
        ))}
        <button
          onClick={() => setIsEditing(true)}
          className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 
                     transition-colors duration-200 flex items-center justify-center"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
