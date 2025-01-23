import { useQuery } from "@tanstack/react-query";

const fetchActiveUsers = async () => {
  try {
    const response = await fetch("/activeUsers.json");
    if (!response.ok) {
      throw new Error("Failed to fetch active users data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch active users data", error);
  }
};

const useActiveUsers = () => {
  return useQuery({ queryKey: ["activeUsers"], queryFn: fetchActiveUsers });
};

export default useActiveUsers;
