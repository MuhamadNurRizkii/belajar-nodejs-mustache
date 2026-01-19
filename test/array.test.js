test("Array Simple", () => {
  const buah = ["pisang", "magga", "apel", "semangka"];

  expect(buah).toContain("pisang");
  expect(buah).toContain("apel");
});

test("Array Object", () => {
  const data = [
    {
      id: 1,
      name: "Jeruk",
      price: 10000,
    },
    {
      id: 2,
      name: "Pepaya",
      price: 12000,
    },
  ];

  expect(data).toContainEqual({ id: 1, name: "Jeruk", price: 10000 });
});
