import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";
import { describe, expect } from "vitest";

describe("Form component", () => {

  it("Should Home component render Sucessfully", () => {
    render(<Form />);
  });

  it("Should render Button component Sucessfully", () => {
    render(<Form />);
    expect(screen.getByTestId("submit-btn")).not.toBeNull();
  });

  it("Should render SelectField component Sucessfully", () => {
    render(<Form />);
    expect(screen.getByTestId("topic")).not.toBeNull();
  });
  it("Should render Other topic input when other is selected in topic select component", () => {
    render(<Form />);
    fireEvent.change(screen.getByTestId("topic"), {
      target: { value: "Other" },
    });
    expect(screen.getByTestId("othertopic")).not.toBeNull();
  });

  it("Should set value for name input", () => {
    render(<Form />);
    const name = screen.getByTestId("name");
    name.textContent = "test";
    expect(name.textContent).toBe("test");
  });
  it("Should  set value for surname input", () => {
    render(<Form />);
    const surname = screen.getByTestId("surname");
    surname.textContent = "test";
    expect(surname.textContent).toBe("test");
  });

  it("Should render Submit the form", async () => {
    render(<Form />);
    fireEvent.change(screen.getByTestId("topic"), {
      target: { value: "Travel" },
    });
    fireEvent.change(screen.getByTestId("name"), {
      target: { value: "Vishnu" },
    });
    fireEvent.change(screen.getByTestId("surname"), {
      target: { value: "Rajan" },
    });
    fireEvent.click(screen.getByTestId("submit-btn"));
    expect(screen.getByTestId("submit-btn")).not.toHaveAttribute("disabled");
  });
});
