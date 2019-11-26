const fs = require("fs");

const mdLinks = (path, option) => {
  const links = /(\[(.*)\])(\(.*\))/g;
  const textBreak = /\[/;
  const linkBreak = /\)/;
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.error("Could not open file: %s", err);
        reject(err);
        process.exit(1);
        //   } else if (option === "validate") {

        //     console.log(option);

      } else {
        const arr = data.match(links);
        const result = arr.map((el) => {
          const splited = el.split("](");
          const text = splited[0].replace(textBreak, "");
          const href = splited[1].replace(linkBreak, "");
          const status = { validate: true };
          return { href, text/*, status */};
        });
        resolve(result);
      }
    });
  });
};
module.exports = mdLinks;
