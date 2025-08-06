import { render, screen } from "@testing-library/react";
import { vi } from 'vitest';
import ForNest from "../chap3/ForNest.jsx";
import books from "../chap3/books";

vi.mock("../chap3/ForItem.jsx", () => {
  return {
    default: function ForItemMock({ book }) {
      return (
        <>
          <dt>{book.title}</dt>
          <dd>{book.summary.substring(0, 10)}...</dd>
        </>
      );
    }
  };
});

test("ForNest Test", () => {
  const { debug, baseElement } = render(<ForNest src={books} />);
  const dt = screen.getAllByRole("term");
  // eslint-disable-next-line
  debug(baseElement);
  expect(dt).toHaveLength(5);
  expect(dt[0]).toHaveTextContent("Vue.js");
});
