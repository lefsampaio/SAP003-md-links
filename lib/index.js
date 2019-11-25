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

            // console.log(data);
        });

    }
    )
}

module.exports = readingFiles;





const searchLinks = (/*path*/) => {
    // return new Promise((resolve) => {
        const fileContent = readingFiles(/*path*/);
        const tittleRegexLink= /\[(.*)\]/g
        const regexLink = /(\(.*\))/g
        const linksInMd = fileContent.match(regexLink);
        console.log(linksInMd)
        const mdLinkArr = [];

            for (let i in linksInMd) {
                let textLinks = linksInMd[i].match(tittleRegexLink);
                console.log(textLinks);
        
                mdLinkArr.push({
                   href: textLinks
                });
                
                console.log(mdLinkArr);
            }
    // })
};

module.exports = searchLinks;








// const getLinks = (path) => 
// new Promise((resolve, error) => {
//     const fileContent = readingFile(path);
//     // console.log(typeof(fileContent));
//     const linkByRegexp = /\[((.+?))\]\((http|https).+?\)/g;
//     const textOfLinksRegexp = /.\((.+?\))/g;

//     const linksInMd = fileContent.match(linkByRegexp);
//     console.log(linksInMd);

//     const onlyLink = fileContent.match(textOfLinksRegexp);
//     // console.log(onlyLink);
//     const mdLinkArr = [];

//     for (let i in linksInMd) {
//         let textLinks = linksInMd[i].match(textOfLinksRegexp);
//         console.log(textLinks);

//         mdLinkArr.push({
//            href: textLinks
//         });
        
//         console.log(mdLinkArr);
//     };
//     resolve(mdLinkArr);
// });

// module.exports = getLinks;