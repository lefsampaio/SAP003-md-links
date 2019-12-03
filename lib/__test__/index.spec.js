const mdLinks = require("../index.js");

const fullArraystats = [
  { href: "https://en.wiktionary.org/wiki/labore", text: "labore", status: 200 },
  { href: "https://en.wiktionary.org/wiki/dolore", text: "dolore", status: 200 },
  { href: "http://foo.com", text: "foo", status: 200 }
];
const fullArray = [
  { href: "https://en.wiktionary.org/wiki/labore", text: "labore" },
  { href: "https://en.wiktionary.org/wiki/dolore", text: "dolore" },
  { href: "http://foo.com", text: "foo" }
];

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("Should return 3 links", (done) => {
    mdLinks("./lib/__test__/text.md").then(result => {
      expect(result).toEqual(fullArray);
      done();
    });
  });
  it("Should return an error", (done) => {
    mdLinks("./lib/__test__/tex.md").catch(result => {
      expect(result).toEqual("Could not open file: Error: ENOENT: no such file or directory, open 'H:\\Users\\let_l\\sap003-git\\SAP003-md-links\\lib\\__test__\\tex.md'");
      done();
    });
  });
  it("Should return 3 links with status", (done) => {
    mdLinks("./lib/__test__/text.md", true).then(result => {
      expect(result).toEqual(fullArraystats);
      done();
    });
  });

  it("Should return 3 links with 'not found' status", (done) => {
    mdLinks("./lib/__test__/erro404.md", true).catch(result => {
      expect(result).toEqual("not found");
      done();
    });
  });
});
