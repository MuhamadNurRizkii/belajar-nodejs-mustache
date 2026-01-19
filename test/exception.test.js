import { callMe, MyException } from "../src/exception";

test("exception", () => {
  expect(() => callMe("Rizki")).toThrow();
  expect(() => callMe("Rizki")).toThrow(MyException);
  expect(() => callMe("Andi")).toThrow("OK");
});
