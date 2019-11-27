const chai = require('chai');
const expect = chai.expect;
const piece = require('../index');

describe('Find links in Markdown', () => {

  describe("when it doesn't have parameter", () => {
    it(`should return an error`, () => {
      expect(piece.getLinksFromMd.bind()).to.throw(TypeError, 'Cannot read property \'match\' of undefined');
    });
  })

  describe("when the parameter is a number", () => {
    it(`should return an error`, () => {
      expect(piece.getLinksFromMd.bind(123)).to.throw(TypeError, 'Cannot read property \'match\' of undefined');
    });
  })

  describe("when the parameter is a empty string", () => {
    it(`should return undefined`, () => {
      expect(piece.getLinksFromMd('')).to.eql(undefined);
    });
  })

  describe("when the parameter is not a empty string", () => {

    describe("and there is more than one url in the text", () => {
      it(`should return a multiple item array`, () => {
        const fullStr = `# Lorem ipsum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore)
        et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.        
        [foo](http://foo.com)        
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
        const fullArray = [
          { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
          { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
          { href: 'http://foo.com', text: 'foo' }
        ];
        expect(piece.getLinksFromMd(fullStr)).to.eql(fullArray);
      });
    })

    describe("and there is one url in the text", () => {
      it(`should return a single item array`, () => {
        const oneLinkStr = `ut aliquip ex ea commodo consequat.        
        [foo](http://foo.com)        
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.`;
        const oneLinkArray = [
          { href: 'http://foo.com', text: 'foo' }
        ];
        expect(piece.getLinksFromMd(oneLinkStr)).to.eql(oneLinkArray);
      });
    })

    describe("and there is no url in the text", () => {
      
      describe("there is no url or formatting symbols in the text", () => {
        it(`should return undefined`, () => {
          const noLinkStr = `Duis aute irure dolor in reprehenderit in voluptate velit esse illum dolore eu fugiat nulla pariatur.`;
          expect(piece.getLinksFromMd(noLinkStr)).to.eql(undefined);
        });
      })

      describe("there is formatting symbols but no url in the text", () => {
        it(`should return undefined`, () => {
          const symbolsWithNoLinkStr = `ut aliquip ex ea commodo consequat. []() Duis aute irure dolor.`;
          expect(piece.getLinksFromMd(symbolsWithNoLinkStr)).to.eql(undefined);
        });
      })

    })

    describe("and the link doesn't apply the formatting rules", () => {

      describe("the symbols (parentheses and keys) had their positions switched", () => {
        it(`should return undefined`, () => {
          const wrongFormattingStr = `ut aliquip ex ea commodo consequat. (foo)[http://foo.com] Duis aute irure dolor.`;
          expect(piece.getLinksFromMd(wrongFormattingStr)).to.eql(undefined);
        });
      })

      describe("there is no symbols (parentheses and keys)", () => {
        it(`should return undefined`, () => {
          const noSymbolsStr = `ut aliquip ex ea commodo consequat. foo http://foo.com uis aute irure dolor.`;
          expect(piece.getLinksFromMd(noSymbolsStr)).to.eql(undefined);
        });
      })

    })

  })

});