import multiply from "../../src/utils/multiply";

describe("multiply", () => {
  it("should return the multiply of two numbers", () => {
    expect(multiply(7, 7)).toBe(49);
  });
});
