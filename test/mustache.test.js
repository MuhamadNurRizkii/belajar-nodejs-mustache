import Mustache from "mustache";
import fs from "fs/promises";

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

test("Tags", () => {
  Mustache.parse("Halo, nama saya {{fullname}}, saya tinggal di {{{address}}}");

  const data = Mustache.render(
    "Halo, nama saya {{fullname}}, saya tinggal di {{{address}}}",
    {
      fullname: "Muhamad Nur Rizki",
      address: "<b>Tangerang</b>",
    },
  );

  expect(data).toBe(
    "Halo, nama saya Muhamad Nur Rizki, saya tinggal di <b>Tangerang</b>",
  );
});

test("Nested Object", () => {
  Mustache.parse("Halo, nama saya {{person.name}}");

  const data = Mustache.render("Halo, nama saya {{person.name}}", {
    person: {
      name: "Muhamad Nur Rizki",
      age: 19,
    },
  });

  expect(data).toBe("Halo, nama saya Muhamad Nur Rizki");
});

test("Test Mustache file", async () => {
  const template = await fs
    .readFile("./templates/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(template, { name: "rizki" });

  console.log(data);

  expect(data).toContain("rizki");
});

test("Test Mustache Sections not Show", async () => {
  const template = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(template, {});

  console.log(data);

  expect(data).not.toContain("Hello Person");
});

test("Test Mustache Sections Show", async () => {
  const template = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(template, {
    person: {
      name: "Rizki",
    },
  });

  console.log(data);

  expect(data).toContain("Hello Person Rizki");
});

test("List", async () => {
  const template = await fs
    .readFile("./templates/hobbies.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(template, {
    hobbies: ["main game", "rebahan", "makan"],
  });

  console.log(data);

  expect(data).toContain("main game");
  expect(data).toContain("rebahan");
  expect(data).toContain("makan");
});
