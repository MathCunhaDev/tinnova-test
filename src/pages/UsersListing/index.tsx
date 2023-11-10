import { useUsersListingContext } from "~hooks/useUsersListingContext";
import * as Molecules from "~components/molecules";
import * as Atoms from "~components/atoms";

export const UserListing = () => {
  const {
    users,
    isModalOpened,
    handleModalCancelButton,
    handleModalOkButton,
    isLoading,
  } = useUsersListingContext();

  return (
    <>
      <Molecules.Modal
        key={"deleteModal"}
        isOpen={isModalOpened}
        isLoading={isLoading}
        handleCancelButton={() => handleModalCancelButton()}
        handleOkButton={() => handleModalOkButton()}
      />
      <Molecules.Header />
      <Atoms.Container>
        <Molecules.UsersList key={"users"} data={users} />
      </Atoms.Container>
    </>
  );
};
