const fs = require('fs');
const path = require('path');

const string = `[Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)

[Sobre Node.js - Documentação oficial](https://nodejs.org/pt-br/about/)`;
const regex = string.match(/\[(.*)\](\(.*\))/g);

console.log(regex)


const readingFiles = (/*path*/) => {
    return new Promise((resolve, reject) => {
        fs.readFile('README.md', 'utf-8', (err, data) => {
            if (err) {
                console.error("Could not open file: %s", err);
                reject(err)
                process.exit(1);
            } else {
                resolve(data);
            }

            console.log(data);
        });

    }
    )
}

module.exports = readingFiles;







// const searchLinks = (object) => {
//     return new Promise((resolve) => {
//         const regex = /\[(.*)\](\(.*\))/g;
//         let match;
//         let i = 0;
//         let newArray = [];
//         while ((match = regex.match(object)) !== null) {
//             const newObject = {
//                 href: match[2],
//                 text: match[1],
//                 File: path.resolve()

//             };
//             i++;
//             newArray.push(newObject);
//         }
//         console.log(newArray)
//         resolve(newArray);
//     })
// };

// module.exports = searchLinks;
