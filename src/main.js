import Mustache from "mustache";

const render = () => {
  const template = document.querySelector("#template").innerHTML;
  const rendered = Mustache.render(template, { name: "Muhamad Nur Rizki" });

  document.getElementById("target").innerHTML = rendered;
};
