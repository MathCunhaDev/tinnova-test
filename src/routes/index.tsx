import { createBrowserRouter } from "react-router-dom";
import * as Provider from "~store/contexts";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Provider.UserManagementProvider />,
  },
  {
    path: "/:user",
    element: <Provider.UserManagementProvider />,
  },
  {
    path: "/users-listing",
    element: <Provider.UsersListingProvider />,
  },
]);
