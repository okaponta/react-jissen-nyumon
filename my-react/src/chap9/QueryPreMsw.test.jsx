import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import QueryPre from "../chap6/QueryPre.jsx";

describe("QueryPre (Mock)", () => {
  const server = setupServer(
    http.get(
      "https://api.openweathermap.org/data/2.5/weather",
      () => {
        return HttpResponse.json({
          weather: [{ icon: "4n", main: "Clouds", description: "曇り" }],
        });
      }
    )
  );
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("モックを利用したテスト", async () => {
    const { debug, baseElement } = render(<QueryPre />);
    const img = await screen.findByRole("img", {}, { timeout: 3000 });
    expect(img).toHaveAttribute("alt", "Clouds");
    // eslint-disable-next-line
    debug(baseElement);
  });
});
