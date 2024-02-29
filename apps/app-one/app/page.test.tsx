import { render, screen } from "@testing-library/react";
import Page from "./page";

jest.mock("./components/productsList");

describe("app-one", () => {
  it("can render page", async () => {
    const page = await Page();
    render(page);

    expect(screen.getByText("Application #1")).toBeInTheDocument();
    expect(screen.getByText("Example next.js app router application")).toBeInTheDocument();
  });
});
