import { IUser } from "~models/IUsersListing";
import * as Utils from "~common/utils";

export const findUserMapper = (users: IUser[], userCpf: string) => {
  return users
    .filter((user: IUser) => user.cpf === userCpf)
    .map((user: IUser) => {
      return {
        name: user.name,
        email: user.email,
        cpf: Utils.formatCpf(user.cpf),
        phone: Utils.formatPhone(user.phone),
      };
    });
};

export const editUserMapper = (
  users: IUser[],
  userCpf: string,
  newValues: IUser
) => {
  return users.map((user: IUser) => {
    if (user.cpf !== userCpf) return user;

    return {
      name: newValues.name,
      email: newValues.email,
      cpf: Utils.removeChars(newValues.cpf),
      phone: Utils.removeChars(newValues.phone),
    };
  });
};
