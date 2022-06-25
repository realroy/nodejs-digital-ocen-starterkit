const app = require("../../src/mockApp");

describe("Index routes", () => {
  afterAll(() => {
    app.close()
  })
  test("It should response with ok", async () => {
    const response = await app.server.get("/");

    expect(response.statusCode).toBe(200);
  });
});
