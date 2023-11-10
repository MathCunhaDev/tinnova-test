interface IUser {
  name: string;
  email: string;
  cpf: string;
  phone: string;
}

interface IUserElement extends IUser {
  key: string;
  actions: React.ReactElement;
}

interface IUsersListingContext {
  isLoading: boolean;
  users: IUserElement[];
  isModalOpened: boolean;
  handleModalOkButton: () => void;
  handleModalCancelButton: () => void;
}

export { IUser, IUserElement, IUsersListingContext };
