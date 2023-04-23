import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tag from ".";

describe("tag", () => {
  test("renders tag", () => {
    render(<Tag>click me</Tag>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("tag support onClose", () => {
    const onClose = jest.fn();
    const { container } = render(<Tag onClose={onClose}></Tag>);
    const linkElement = container.querySelector("svg") as SVGElement;
    fireEvent.click(linkElement);
    expect(onClose).toBeCalled();
  });
});
