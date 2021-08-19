import useInitialState from "../hooks/useInitialState";

describe("Prueba de Fetch API custom hook", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("Llama y retorna los datos de una API", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));

    useInitialState("https://google.com").then((response) => {
      expect(response.data).toEqual('123');
    });

    expect(fetch.mock.calls[0][0]).toEqual("https://google.com");
  });
});
