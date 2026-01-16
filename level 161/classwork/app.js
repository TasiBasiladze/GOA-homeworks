const fs = require("fs");

const names = [
  "Anna",
  "Giorgi",
  "Nino",
  "Luka",
  "Mariam",
  "Dato",
  "Sandro",
  "Elene",
  "Irakli",
  "Taso"
];

fs.writeFileSync("names.txt", names.join("\n"), "utf-8");

const data = fs.readFileSync("names.txt", "utf-8");

data.split("\n").forEach(name => console.log(name));