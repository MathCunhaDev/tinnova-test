import styled from "styled-components";
import { Modal } from "antd";
import { theme } from "../../../common/styles/theme";

export const StyledModal = styled(Modal)`
  .ant-modal-footer {
    button {
      border-radius: 20px;
    }

    button:last-of-type {
      border: none;
      color: ${theme.color.focusedWhite};
      background: ${theme.color.backgroundGreen};

      &:hover {
        opacity: 0.7;
        background: ${theme.color.backgroundGreen} !important;
        color: ${theme.color.focusedWhite} !important;
      }

      &:disabled {
        color: ${theme.color.neutralGray400};
        background: ${theme.color.neutralGray200};
      }
    }
  }
`;

export const ModalText = styled.p``;
