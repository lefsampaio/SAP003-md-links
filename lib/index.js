const fs = require("fs");
const fetch = require("node-fetch");

const mdLinks = (path, option) => {
  const links = /([^[]+)\](\([^)]*)/gm;

  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err || !data.match(links)) {
        reject(`Could not open file: ${err}`);

      } else {
        const arr = data.match(links);
        const result = arr.map((el) => {
          const splited = el.split("](");
          const text = splited[0].replace("\n", "");
          const href = splited[1];

          return { href, text };
        });
        if (option && option.validate) {
          Promise.all(result.map(link => {
            return new Promise((resolve) => {
              fetch(link.href)
                .then((res) => {
                  resolve({
                    ...link,
                    status: res.status
                  });
                })
                .catch(() => {
                  resolve({
                    ...link,
                    status: 404
                  });
                });
            });
          }))
            .then((data) => {
              resolve(data);
            });
        } else {
          resolve(result);
        }
      }
    });
  });
};

module.exports = mdLinks;
