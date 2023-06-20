import { render, screen } from "@testing-library/react";
import List from "./List";
import "@testing-library/jest-dom";

describe("List component", () => {
  const mockedItem = {
    id: 1,
    name: "bulbasaur",
    sprites: {
      other: {
        "official-artwork": {
          front_default: " ",
        },
      },
    },
  };
  
  const mockedItems = [
      mockedItem,
      {
        id: 25,
        name: "pikachu",
        sprites: {
          other: {
            "official-artwork": {
              front_default: " ",
            },
          },
        },
      }
  ]

  it("should render correctly", () => {
    render(<List items={mockedItems} />);
    expect(screen.getByTestId("list")).toBeInTheDocument();
    expect(screen.getByTestId("list-item-1")).toBeInTheDocument();
    expect(screen.getByTestId("list-item-25")).toBeInTheDocument();
  });
  
});
