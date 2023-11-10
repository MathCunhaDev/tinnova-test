import { Container } from "../../../components/atoms";
import Logo from "~common/assets/logo.png";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header data-testid="header">
      <Container>
        <S.Nav>
          <S.Logo src={Logo} alt="Logoda Tinnova" />
          <S.List>
            <S.Item>
              <S.Anchor href="/">Criar usuário</S.Anchor>
            </S.Item>
            <S.Item>
              <S.Anchor href="/users-listing">Listar usuários</S.Anchor>
            </S.Item>
          </S.List>
        </S.Nav>
      </Container>
    </S.Header>
  );
};
