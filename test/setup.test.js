import { sum } from "../src/sum.js";

beforeAll(() => {
  console.log("database connected");
});

afterAll(() => {
  console.log("database disconnected");
});

beforeEach(() => {
  console.log("Before Each");
});

afterEach(() => {
  console.log("After Each");
});

test("first test sum", () => {
  const result = sum(2, 2);

  expect(result).toBe(4);
  expect(result).not.toBeNull();

  console.log("first test");
});

test("second test sum", () => {
  const result = sum(10, 10);

  expect(result).toBe(20);
  expect(result).toBeGreaterThan(8);

  console.log("second test");
});
