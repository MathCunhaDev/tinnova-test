import type { FormInstance } from "antd";
import { IUser } from "./IUsersListing";

interface IUserFormData {
  cpf: string;
  email: string;
  name: string;
  phone: string;
}

interface IUserManagementContext {
  isLoading: boolean;
  handleSubmit: () => void;
  isDisabled: boolean;
  form: FormInstance;
}

interface UsersResponse {
  data: IUser[];
}

export { IUserFormData, IUserManagementContext, UsersResponse };
