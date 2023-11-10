import styled from "styled-components";
import { theme } from "../../../common/styles/theme";

export const Header = styled.header`
  width: 100%;
  background: white;
  margin-bottom: 40px;
  border-bottom: 1px solid ${theme.color.neutralGray400};
`;

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  column-gap: 20px;
`;

export const Item = styled.li``;

export const Anchor = styled.a``;

export const Logo = styled.img`
  width: 130px;
  object-fit: contain;
`;
