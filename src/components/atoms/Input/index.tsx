import { IInput } from "~models/IComponents";
import * as S from "./styles";

export const Input = ({ placeholder, value, onChange }: IInput) => {
  return (
    <S.InputStyled
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
