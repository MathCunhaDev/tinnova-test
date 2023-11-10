interface IButton {
  isLoading: boolean;
  children: React.ReactElement;
  disabled: boolean;
  handleOnClick: () => void;
}

interface IContainer {
  children: React.ReactElement;
}

interface IInput {
  placeholder: string;
  value?: string;
  onChange?: () => void;
}

interface IModal {
  isOpen: boolean;
  isLoading: boolean;
  handleOkButton: () => void;
  handleCancelButton: () => void;
}

interface IRegistrationForm {
  form: FormInstance;
  isLoading: boolean;
  isButtonDisabled: boolean;
  handleSubmit: () => void;
}

interface IUsersList {
  data: IUserElement[];
}

export { IButton, IContainer, IInput, IModal, IRegistrationForm, IUsersList };
