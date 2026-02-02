import Mustache from "mustache";

test("Menggunakan Muustache", () => {
  const data = Mustache.render("Hello, {{name}}", { name: "Rizki" });

  expect(data).toBe("Hello, Rizki");
});

test("Menggunakan Muustache cache", () => {
  Mustache.parse("Halo, nama saya {{fullname}}");

  const data = Mustache.render("Halo, nama saya {{fullname}}", {
    fullname: "Muhamad Nur Rizki",
  });

  expect(data).toBe("Halo, nama saya Muhamad Nur Rizki");
});
