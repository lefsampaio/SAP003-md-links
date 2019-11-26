const mdLinks = require("../index.js");

const fullArray = [
  { href: "https://en.wiktionary.org/wiki/labore", text: "labore" },
  { href: "https://en.wiktionary.org/wiki/dolore", text: "dolore" },
  { href: "http://foo.com", text: "foo" }
];

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("Should return 3 links", () => {
    return expect(mdLinks("./lib/__test__/text.md")).resolves.toEqual(fullArray);
  });
});