// import { render, screen } from "@testing-library/react";
// import Index from "../pages/index";

// describe("Index", () => {
//   it("renders without crashing", () => {
//     render(<Index />);
//     expect(
//       screen.getByRole("h3", { name: "I am Sheng Zhuang" })
//     ).toBeInTheDocument();
//   });
// });

import React from "react";
import { render } from "@testing-library/react";
import Index from "../pages/index";

test("renders learn react link", () => {
  const { getByText } = render(<Index />);

  expect(getByText(/learn/i)).toBeInTheDocument();
});
