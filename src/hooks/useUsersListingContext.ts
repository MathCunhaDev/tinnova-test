import { useContext } from "react"
import { UsersListingContext } from "~store/contexts/usersListing";

export const useUsersListingContext = () => useContext(UsersListingContext);