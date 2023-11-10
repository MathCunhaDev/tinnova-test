import styled from "styled-components";
import { theme } from "~common/styles/theme";

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .ant-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ant-form-item {
    width: 100%;
    max-width: 300px;
  }

  .ant-form-item-label {
    display: none;
  }

  .ant-form-item-explain-error {
    color: ${theme.color.invalidRed};
  }
`;
