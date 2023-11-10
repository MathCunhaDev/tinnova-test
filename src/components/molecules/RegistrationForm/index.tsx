import { validateMessages } from "~constants/validateMessages";
import { IRegistrationForm } from "~models/IComponents";
import { Form } from "antd";
import * as Atoms from "~components/atoms";
import * as Utils from "~common/utils";
import * as S from "./styles";

export const RegistrationForm = ({
  form,
  isLoading,
  isButtonDisabled,
  handleSubmit,
}: IRegistrationForm) => {
  return (
    <S.FormWrapper>
      <Form
        form={form}
        name="registrationForm"
        layout="vertical"
        autoComplete="off"
        validateMessages={validateMessages}
      >
        <Form.Item
          name="name"
          label="nome"
          rules={[
            {
              required: true,
              min: 3,
              message: "Campo deve conter 3 caracteres ou mais.",
            },
          ]}
        >
          <Atoms.Input
            key={"name"}
            placeholder="Nome completo (sem abreviações)"
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="e-mail"
          rules={[{ required: true, type: "email" }]}
        >
          <Atoms.Input key={"email"} placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="cpf"
          label="cpf"
          rules={[
            { required: true },
            () => ({
              validator(_, value: string) {
                if (value === undefined) return;

                const formattedValue = Utils.formatCpf(value);

                form.setFieldValue("cpf", formattedValue);

                if (value.length < 12 && value.length !== 0) {
                  return Promise.reject(new Error("CPF inválido."));
                }

                if (value.length === 0) {
                  return Promise.reject(
                    new Error("Por favor, insira seu CPF.")
                  );
                }
              },
            }),
          ]}
        >
          <Atoms.Input key={"cpf"} placeholder="CPF" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="phone"
          rules={[
            { required: true },
            () => ({
              validator(_, value: string) {
                if (value === undefined) return;

                const formattedValue = Utils.formatPhone(value);

                form.setFieldValue("phone", formattedValue);

                if (value.length < 14 && value.length !== 0) {
                  return Promise.reject(new Error("Telefone inválido."));
                }

                if (value.length === 0) {
                  return Promise.reject(
                    new Error("Por favor, insira seu phone.")
                  );
                }
              },
            }),
          ]}
        >
          <Atoms.Input key={"phone"} placeholder="Telefone" />
        </Form.Item>
        <Form.Item>
          <Atoms.Button
            key={"submit"}
            isLoading={isLoading}
            handleOnClick={() => handleSubmit()}
            disabled={isButtonDisabled}
          >
            <>Cadastrar</>
          </Atoms.Button>
        </Form.Item>
      </Form>
    </S.FormWrapper>
  );
};
