import React, { useEffect, useState } from "react";
import { UserManagement } from "~pages";
import { AxiosResponse } from "axios";
import { Form } from "antd";
import * as Mappers from "~store/mappers/userManagement";
import * as Props from "~models/IUserManagement";
import * as Services from "~store/services";
import * as Utils from "~common/utils/";

export const UserManagementContext =
  React.createContext<Props.IUserManagementContext>(
    {} as Props.IUserManagementContext
  );

export const UserManagementProvider = () => {
  const [form] = Form.useForm();
  const formValues = Form.useWatch([], form);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [currentCpf, setCurrentCpf] = useState<string>("");
  const [isCreateOrEditUser, setIsCreateOrEditUser] = useState<string>("");

  const handleCreateUser = () => {
    setIsLoading(true);

    const users = Services.storageService.getStorage("users");

    const newUsers = [
      ...users,
      {
        name: formValues.name,
        email: formValues.email,
        cpf: Utils.removeChars(formValues.cpf),
        phone: Utils.removeChars(formValues.phone),
      },
    ];

    setTimeout(() => {
      setIsLoading(false);
      Services.storageService.setStorage("users", newUsers);
      Services.notificationService.success("Usuário criado com sucesso.");
    }, 2000);
  };

  const handleEditUser = () => {
    setIsLoading(true);

    const users = Services.storageService.getStorage("users");

    const newUsers = Mappers.editUserMapper(users, currentCpf, formValues);

    setTimeout(() => {
      setIsLoading(false);
      Services.storageService.setStorage("users", newUsers);
      Services.notificationService.success("Usuário editado com sucesso.");
    }, 2000);
  };

  const handleSubmit = () => {
    if (isCreateOrEditUser === "edit") handleEditUser();
    if (isCreateOrEditUser === "create") handleCreateUser();
  };

  const loadEditUserData = (path: string) => {
    const userCpf = path.split(":")[1];
    const users = Services.storageService.getStorage("users");
    const user = Mappers.findUserMapper(users, userCpf);

    setCurrentCpf(userCpf);
    form.setFieldsValue(user[0]);
  };

  const loadCreateUserData = async (): Promise<void> => {
    const hasUsers = Services.storageService.hasStorage("users");

    if (!hasUsers) {
      try {
        const users: AxiosResponse<Props.IUserFormData[]> =
          await Services.usersApiService.getAll();

        Services.storageService.setStorage("users", users.data);
      } catch (error) {
        Services.notificationService.error(
          "Erro ao carregar usuários, tente novamente mais tarde."
        );
      }
    }
  };

  useEffect(() => {
    if (Utils.areObjectFilled(formValues)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formValues]);

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/") {
      loadCreateUserData();
      setIsCreateOrEditUser("create");
    } else {
      loadEditUserData(path);
      setIsCreateOrEditUser("edit");
    }
  }, []);

  return (
    <UserManagementContext.Provider
      value={{ isLoading, handleSubmit, isDisabled, form }}
    >
      <UserManagement />
    </UserManagementContext.Provider>
  );
};
