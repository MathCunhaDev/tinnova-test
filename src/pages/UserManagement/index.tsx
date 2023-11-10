import { useUserManagementContext } from "~hooks/useUserManagementContext";
import * as Molecules from "~components/molecules";
import * as Atoms from "~components/atoms";

export const UserManagement = () => {
  const { isLoading, handleSubmit, isDisabled, form } =
    useUserManagementContext();

  return (
    <>
      <Molecules.Header />
      <Atoms.Container>
        <Molecules.RegistrationForm
          form={form}
          key={"registrationForm"}
          handleSubmit={() => handleSubmit()}
          isButtonDisabled={isDisabled}
          isLoading={isLoading}
        />
      </Atoms.Container>
    </>
  );
};
