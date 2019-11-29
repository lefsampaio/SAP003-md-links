const fs = require("fs");
const fetch = require("node-fetch");


const mdLinks = (path, option) => {
  const links = /(\[(.*)\])(\(.*\))/g;
  const textBreak = /\[/;
  const linkBreak = /\)/;
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err || !data.match(links)) {
        reject(`Could not open file: ${err}`);

      } else {
        const arr = data.match(links);
        const result = arr.map((el) => {
          const splited = el.split("](");
          const text = splited[0].replace(textBreak, "");
          const href = splited[1].replace(linkBreak, "");

          return { href, text };
        });
        if (option) {
          const promises = result.map(link => {
            return fetch(link.href)
              .then((res) => {        
                link.status = res.status;
              });
          });
  
          Promise.all(promises).then(() => resolve(result)); 
        } else {
          resolve(result);
        }
      }
    });
  });
};


module.exports = mdLinks;
