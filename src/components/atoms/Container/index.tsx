import { IContainer } from "~models/IComponents";
import * as S from "./styles";

export const Container = ({ children }: IContainer) => {
  return (
    <S.Body>
      <S.Container>{children}</S.Container>
    </S.Body>
  );
};
