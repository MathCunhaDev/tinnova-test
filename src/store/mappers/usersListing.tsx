import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { IUser } from "~models/IUsersListing";
import * as Utils from "~common/utils";

export const usersTableMapper = (
  users: IUser[],
  handleEdit: (cpf: string) => void,
  handleDelete: (cpf: string) => void
) => {
  return users.map((user: IUser) => {
    return {
      key: user.cpf,
      name: user.name,
      email: user.email,
      cpf: Utils.formatCpf(user.cpf),
      phone: Utils.formatPhone(user.phone),
      actions: (
        <>
          <IconButton title="Editar" onClick={() => handleEdit(user.cpf)}>
            <Edit fontSize="small" />
          </IconButton>
          <IconButton title="Deletar" onClick={() => handleDelete(user.cpf)}>
            <Delete fontSize="small" />
          </IconButton>
        </>
      ),
    };
  });
};
