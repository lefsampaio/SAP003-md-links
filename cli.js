#!/usr/bin/env node
const mdLinks = require("./lib/index.js");
const path = process.argv[2];
const option = process.argv[3];


mdLinks(path, option)

  .then((result) => {
    result.forEach(element => {

      console.log('\n', element.href, element.text.substring(0, 50));

    });

  })
  .catch(console.error);

