import { render, screen } from "@testing-library/react";
import Heart from "./Heart";
// importação de correção do projeto
import '@testing-library/jest-dom'


describe("Heart component", () => {
    
  // it ou test("descrição/identificação do teste")
  it("should render correctly", () => {
    render(<Heart />);
    // é esperado que o 'heart' seja renderizado corretamente no documento
    expect(screen.getByTestId("heart")).toBeInTheDocument();
  });

  it("should render correctly when selected", () => {
    render(<Heart selected/>);
    expect(screen.getByTestId("heart")).toBeInTheDocument();
    expect(screen.getByTestId("heart")).toHaveClass("heart-selected")
  });

});
