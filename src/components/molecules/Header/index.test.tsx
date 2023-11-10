import { render, screen } from "@testing-library/react";
import { Header } from "./index";

test("renders Header component with navigation links and logo", () => {
  render(<Header />);

  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();

  const createUserLink = screen.getByText("Criar usuário");
  const userListLink = screen.getByText("Listar usuários");

  expect(createUserLink).toBeInTheDocument();
  expect(userListLink).toBeInTheDocument();
});

test("navigates to the correct URLs when navigation links are clicked", () => {
  render(<Header />);

  const createUserLink = screen.getByText("Criar usuário");
  const userListLink = screen.getByText("Listar usuários");

  expect(createUserLink).toHaveAttribute("href", "/");
  expect(userListLink).toHaveAttribute("href", "/users-listing");
});
