const app = require("../../src/mockApp");


describe("User routes", () => {
  afterAll(() => {
    app.close()
  })

  test("It should response with ok", async () => {
    const response = await app.server.get("/users");

    expect(response.statusCode).toBe(200);
  });
});
