import { theme } from "../../../common/styles/theme";
import { Input } from "antd";
import styled from "styled-components";

export const InputStyled = styled(Input)`
  width: 100%;
  max-width: 300px;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid ${theme.color.neutralGray700};
  color: ${theme.color.neutralGray700};
  box-shadow: none !important;
  padding-left: 0;

  &:focus,
  &:hover {
    color: ${theme.color.neutralGray700};
    border-bottom: 2px solid ${theme.color.neutralGray700};
  }
`;
