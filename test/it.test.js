import { sumAll } from "../src/sum.js";

describe("When call sumAll([10,10,10])", () => {
  it("Should get 30", () => {
    const numbers = [10, 10, 10];

    expect(sumAll(numbers)).toBe(30);
  });
});
