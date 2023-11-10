import { render, screen } from "@testing-library/react";
import { UsersList } from "./index";
import { usersTableHeaders } from "../../../constants/usersTableHeaders";

const mockData = [
  { key: 1, name: "User 1", email: "user1@example.com" },
  { key: 2, name: "User 2", email: "user2@example.com" },
];

test("renders UsersList component with data", () => {
  render(<UsersList data={mockData} />);

  const userList = screen.getByTestId("user-list");
  expect(userList).toBeInTheDocument();

  for (const header of usersTableHeaders) {
    const headerElement = screen.getByText(header.title);
    expect(headerElement).toBeInTheDocument();
  }

  for (const user of mockData) {
    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
  }
});

test('renders an "Empty" component when there is no data', () => {
  render(<UsersList data={[]} />);

  const emptyComponent = screen.getByText("Nenhum item encontrado");
  expect(emptyComponent).toBeInTheDocument();
});
