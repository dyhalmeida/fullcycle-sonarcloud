describe("index.ts logs", () => {
  const consoleSpy = jest.spyOn(console, "log");

  beforeEach(() => {
    consoleSpy.mockClear();
  });

  it("should log the correct results for sum, multiply, and divide", () => {
    require("../../src/index");

    expect(consoleSpy).toHaveBeenCalledWith(8);
    expect(consoleSpy).toHaveBeenCalledWith(15);
    expect(consoleSpy).toHaveBeenCalledWith(4);
  });
});
