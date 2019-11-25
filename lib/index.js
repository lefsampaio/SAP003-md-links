const fs = require('fs');
const path = require('path');

// const string = `[Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)

// [Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)`;
// const regex = string.match(/\[(.*)\](\(.*\))/g);

// console.log(regex)
// const links = /(\[[^\s].*?\])(\(http.*?\))/g;



const links = /\[(.*)\](\(.*\))/g
const readingFiles = (/*path*/) => {
    return new Promise((resolve, reject) => {
        fs.readFile('README.md', 'utf-8', (err, data) => {
            if (err) {
                console.error("Could not open file: %s", err);
                reject(err)
                process.exit(1);
            } else {
                const arr = data.match(links);
                const result = arr.map((el) => {
                    const splited = el.split('](');
                    const text = splited[0];
                    const href = splited[1];
                    return { href, text };
                });
                resolve(result);
                console.log(result)
            }
        });
    })
};
module.exports = readingFiles;