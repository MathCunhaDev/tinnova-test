import { render } from "@testing-library/react";
import { Container } from "./index";

test("renders children inside Container component", () => {
  const { getByText } = render(
    <Container>
      <div>Test Child</div>
    </Container>
  );

  const childElement = getByText("Test Child");
  expect(childElement).toBeInTheDocument();
});
