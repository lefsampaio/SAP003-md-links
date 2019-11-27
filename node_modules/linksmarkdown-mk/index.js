function getLinksFromMd (str) {
  const texts = str.match(/(?<=\[).+?(?=(\]\())/g);
  const hrefs = str.match(/(?<=\]\()(.+?)(?=\))/g);
  if (texts && texts.length === hrefs.length) {
    return texts.map((element, index) => {
      return {
        href: hrefs[index],
        text: element
      };
    });
  }
}

module.exports.getLinksFromMd = getLinksFromMd;