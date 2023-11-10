import PropTypes from "prop-types";
import * as S from "./styles";
import { IButton } from "~models/IComponents";

export const Button = ({
  isLoading,
  disabled,
  handleOnClick,
  children,
}: IButton) => {
  return (
    <S.ButtonStyled
      disabled={disabled || isLoading}
      onClick={handleOnClick}
      loading={isLoading ? true : undefined}
    >
      {!isLoading ? children : ""}
    </S.ButtonStyled>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
