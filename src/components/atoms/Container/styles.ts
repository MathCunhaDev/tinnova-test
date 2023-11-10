import styled from "styled-components";
import { theme } from "../../../common/styles/theme";

export const Body = styled.main`
  width: 100vw;
`;

export const Container = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: ${theme.width.container};
  padding: ${theme.padding.container};
`;
