import { useContext } from "react"
import { UserManagementContext } from "~store/contexts/userManagement";

export const useUserManagementContext = () => useContext(UserManagementContext);
