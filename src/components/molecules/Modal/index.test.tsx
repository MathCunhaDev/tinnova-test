import { render, fireEvent } from "@testing-library/react";
import { Modal } from "./index";

const mockProps = {
  isOpen: true,
  isLoading: false,
  handleOkButton: jest.fn(),
  handleCancelButton: jest.fn(),
};

test("renders Modal component with the provided props", () => {
  const { getByText } = render(
    <Modal
      isOpen={mockProps.isOpen}
      isLoading={mockProps.isLoading}
      handleOkButton={mockProps.handleOkButton}
      handleCancelButton={mockProps.handleCancelButton}
    />
  );

  const modalTitle = getByText("Deletar cadastro");
  expect(modalTitle).toBeInTheDocument();

  const modalText = getByText("Tem certeza que deseja deletar esse cadastro?");
  expect(modalText).toBeInTheDocument();

  const cancelButton = getByText("Cancelar");
  const saveButton = getByText("Salvar");
  expect(cancelButton).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();

  fireEvent.click(saveButton);
  expect(mockProps.handleOkButton).toHaveBeenCalled();

  fireEvent.click(cancelButton);
  expect(mockProps.handleCancelButton).toHaveBeenCalled();
});

test("does not render Modal component when isOpen is false", () => {
  const { queryByText } = render(
    <Modal
      isOpen={false}
      isLoading={false}
      handleOkButton={mockProps.handleOkButton}
      handleCancelButton={mockProps.handleCancelButton}
    />
  );

  const modalTitle = queryByText("Deletar cadastro");
  expect(modalTitle).toBeNull();
});
