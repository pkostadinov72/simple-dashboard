// components/Card/UserCard.js
import { User } from "lucide-react";
import Card from "../Card";
import { useState } from "react";
import UserDetails from "./UserDetails";
import UserForm from "./UserForm";

const UserCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Senior Developer",
    department: "Engineering"
  });

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = (data) => {
    setUserData(data); // Plamen: here in professional scenario we would make an api call to perceive the data.
    setIsEditing(false);
  };

  const renderContent = () => {
    if (!isEditing) {
      return <UserDetails userData={userData} setIsEditing={setIsEditing} />;
    }

    return (
      <UserForm
        defaultValues={userData}
        setIsEditing={setIsEditing}
        onSubmit={handleSubmit}
      />
    );
  };

  return (
    <Card
      title="User Details"
      icon={User}
      isExpanded={isExpanded}
      onClick={handleCardClick}
    >
      {renderContent()}
    </Card>
  );
};

export default UserCard;
