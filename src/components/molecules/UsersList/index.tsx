import { usersTableHeaders } from "../../../constants/usersTableHeaders";
import { IUsersList } from "../../../models/IComponents";
import { ConfigProvider, Empty } from "antd";
import * as S from "./styles";

export const UsersList = ({ data }: IUsersList) => {
  return (
    <ConfigProvider
      renderEmpty={() => <Empty description="Nenhum item encontrado" />}
    >
      <S.List
        data-testid="user-list"
        dataSource={data}
        columns={usersTableHeaders}
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 20,
          pageSizeOptions: [20, 50, 100, 150],
          showTotal: (total: number) =>
            `Total de ${total} ${total > 1 ? "usuários" : "usuário"}`,
          locale: { items_per_page: "usuários em exibição" },
        }}
        scroll={{
          x: 800,
        }}
      />
    </ConfigProvider>
  );
};
