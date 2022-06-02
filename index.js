/*
 * ОСПМКЯП
 * Очень Странный Простой Малофункциональный Кроссплатформенный Язык Программирования
 * Разработчик: @SeryiBaran (github.com)
 */

const fs = require("fs");
const path = require("path");
const codeFile = path.join(__dirname, "code.ospmk");

let counter;

const operations = {
  "!": () => {
    console.log('Hello, World!');
  },
  "@": () => {
    counter = 0;
  },
  ">": () => {
    counter++;
  },
  "<": () => {
    counter--;
  },
  "?": () => {
    console.log(`counter is ${counter}`);
  },
};

fs.readFile(codeFile, { encoding: "utf-8" }, (err, data) => {
  if (!err) {
    data.replace(/\s/g, "").split(":").forEach((text) => {
      let operation = operations[text];
      if (text) {
        if (operation) {
          operation();
        }
      }
    });
  } else {
    console.log(err);
  }
});
