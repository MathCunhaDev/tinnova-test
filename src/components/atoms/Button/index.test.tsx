import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Button from "./index";

jest.mock("./styles", () => ({
  ButtonStyled: "button",
}));

describe("Button", () => {
  it("deve renderizar o botão corretamente", () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Button isLoading={false} disabled={false} handleOnClick={onClickMock}>
        <>Meu Botão</>
      </Button>
    );

    expect(screen.getByText("Meu Botão")).toBeInTheDocument();

    expect(container.querySelector("button")).not.toBeDisabled();

    fireEvent.click(screen.getByText("Meu Botão"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("deve renderizar o botão desativado corretamente", () => {
    const { container } = render(
      <Button isLoading={false} disabled={true} handleOnClick={() => {}}>
        <>Meu Botão Desativado</>
      </Button>
    );

    expect(container.querySelector("button")).toBeDisabled();
  });
});
