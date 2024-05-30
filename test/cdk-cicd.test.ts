import { handler } from "../services/hello";

describe("initial test suit", () => {
  test("hello handler should return 200", async () => {
    const result = await handler({}, {});
    expect(result.statusCode).toBe(300);
  });
});
