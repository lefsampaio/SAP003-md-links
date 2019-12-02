#!/usr/bin/env node
const mdLinks = require("./index.js");
const path = process.argv[2];
const option = process.argv[3];

mdLinks(path, option)
  .then((result) => {
    console.table(result);
  })
  .catch(console.error);

