import styled from "styled-components";
import { theme } from "../../../common/styles/theme";
import { Button } from "antd";

export const ButtonStyled = styled(Button)`
  width: 100% !important;
  height: 40px;
  max-width: 300px;
  border-radius: 20px;
  border: none;
  color: ${theme.color.focusedWhite};
  background: ${theme.color.backgroundGreen};

  &:hover:not(&:disabled) {
    opacity: 0.7;
    color: ${theme.color.focusedWhite} !important;
  }

  &:disabled {
    color: ${theme.color.neutralGray400};
    background: ${theme.color.neutralGray200};
  }
`;
