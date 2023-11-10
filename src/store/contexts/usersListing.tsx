import { usersTableMapper } from "~store/mappers/usersListing";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserListing } from "~pages";
import * as Props from "~models/IUsersListing";
import * as Services from "~store/services";

export const UsersListingContext =
  React.createContext<Props.IUsersListingContext>(
    {} as Props.IUsersListingContext
  );

export const UsersListingProvider = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [currentCpf, setCurrentCpf] = useState<string>("");
  const [users, setUsers] = useState<Props.IUserElement[]>([]);

  const handleEdit = (cpf: string) => navigate(`/:${cpf}`);

  const handleRemove = (cpf: string) => {
    setIsModalOpened(true);
    setCurrentCpf(cpf);
  };

  const handleModalOkButton = () => {
    setIsLoading(true);

    const users = Services.storageService.getStorage("users");

    const newUsers = users.filter(
      (user: Props.IUser) => user.cpf !== currentCpf
    );

    const usersFormatted = usersTableMapper(newUsers, handleEdit, handleRemove);

    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpened(false);
      setUsers(usersFormatted);
      Services.storageService.setStorage("users", newUsers);
      Services.notificationService.success("Usuário deletado com sucesso.");
    }, 2000);
  };

  const handleModalCancelButton = () => setIsModalOpened(false);

  const loadData = async () => {
    const users = Services.storageService.getStorage("users");

    const usersFormatted = usersTableMapper(users, handleEdit, handleRemove);

    setUsers(usersFormatted);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <UsersListingContext.Provider
      value={{
        isLoading,
        users,
        isModalOpened,
        handleModalOkButton,
        handleModalCancelButton,
      }}
    >
      <UserListing />
    </UsersListingContext.Provider>
  );
};
