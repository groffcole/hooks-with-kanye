import { renderHook } from "@testing-library/react-hooks";
import moxios from "moxios";
import useKanyeQuotes from "./useKanyeQuotes";

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

it("should do something", async () => {
  const quote = "i am from iowa";

  moxios.stubRequest("https://api.kanye.rest/", {
    status: 200,
    response: {
      "quote": quote
    }
  });

  const { result, waitForNextUpdate } = renderHook(() => useKanyeQuotes());

  await waitForNextUpdate();

  expect(result.current.quotes.firstQuote).toBe(quote);
  expect(result.current.quotes.secondQuote).toBe(quote);
});