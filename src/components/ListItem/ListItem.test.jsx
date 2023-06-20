import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";
import "@testing-library/jest-dom";

describe("ListItem component", () => {
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

  it("should render correctly", () => {
    render(<ListItem item={mockedItem} />);
    expect(screen.getByTestId("list-item-1")).toBeInTheDocument();
  });
  
});
