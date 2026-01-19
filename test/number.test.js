import { sum } from "../src/sum";

test("Number", () => {
  const value = 2 + 2;
  const result = sum(5, 4);

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);

  expect(result).toBeGreaterThanOrEqual(9);
  expect(result).toBeGreaterThan(7);

  expect(value).toBeLessThan(10);
  expect(result).toBeLessThan(11);
});
