import { render, screen } from "@testing-library/react";
import ForNest from "../chap3/ForNest";
import books from "../chap3/books";

jest.mock("../chap3/ForItem", () => {
  return function ForItemMock({ book }) {
    return (
      <>
        <dt>{book.title}</dt>
        <dd>{book.summary.substring(0, 10)}...</dd>
      </>
    );
  };
});

test("ForNest Test", () => {
  const { debug, baseElement } = render(<ForNest src={books} />);
  const dt = screen.getAllByRole("term");
  debug(baseElement);
  expect(dt).toHaveLength(5);
  expect(dt[0]).toHaveTextContent("Vue.js");
});
