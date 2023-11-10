import { IModal } from "~models/IComponents";
import * as S from "./styles";

export const Modal = ({
  isOpen,
  isLoading,
  handleOkButton,
  handleCancelButton,
}: IModal) => {
  return (
    <S.StyledModal
      title={"Deletar cadastro"}
      open={isOpen}
      onOk={() => handleOkButton()}
      onCancel={() => handleCancelButton()}
      width={"750px"}
      cancelText="Cancelar"
      okText={"Salvar"}
      okButtonProps={{ loading: isLoading }}
    >
      <S.ModalText>Tem certeza que deseja deletar esse cadastro?</S.ModalText>
    </S.StyledModal>
  );
};
