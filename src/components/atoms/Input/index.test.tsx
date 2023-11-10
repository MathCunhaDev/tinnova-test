import { render } from "@testing-library/react";
import { Input } from "./index";

const mockProps = {
  placeholder: "Enter something",
  value: "",
  onChange: jest.fn(),
};

test("renders Input component with the provided props", () => {
  const { getByPlaceholderText } = render(
    <Input
      placeholder={mockProps.placeholder}
      value={mockProps.value}
      onChange={mockProps.onChange}
    />
  );

  const inputElement = getByPlaceholderText(mockProps.placeholder);

  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("value", mockProps.value);
});
