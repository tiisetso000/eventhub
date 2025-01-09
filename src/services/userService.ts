import { UserInfo } from "@/types/user";

// In a real application, this would be an API call
export const saveUserInfo = (
  userInfo: Omit<UserInfo, "id" | "purchaseDate">,
  ticketDetails?: UserInfo["ticketDetails"]
) => {
  const users: UserInfo[] = JSON.parse(localStorage.getItem("users") || "[]");
  const newUser: UserInfo = {
    ...userInfo,
    id: crypto.randomUUID(),
    purchaseDate: new Date().toISOString(),
    ticketDetails,
  };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  return newUser;
};

export const getAllUsers = (): UserInfo[] => {
  return JSON.parse(localStorage.getItem("users") || "[]");
};