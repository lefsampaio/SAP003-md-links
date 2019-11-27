## Extrair links de arquivo Markdown v.1.0.1

  

**Essa biblioteca se destina à extrair links de arquivos markdown.**

Acesse a biblioteca no npm: [linksmarkdown-mk](https://www.npmjs.com/package/linksmarkdown-mk)

A versão atual extrai links de um texto no formato markdown fornecido como entrada. Por meio da função getLinksFromMd() que recebe uma string a biblioteca retorna um array de objetos contendo titulo e o link.

### Como instalar:  
```
$ npm install linksmarkdown-mk
```


(Você deverá ter o node e npm instalados antes de instalar a biblioteca. Para guia de instalação do npm visite  [o site](https://www.npmjs.com/get-npm).)

  

### Como utilizar:

 ````javascript
$node
> const linksMd = require("linksmarkdown-mk");
> console.log(linksMd.getLinksFromMd('ut aliquip ex ea commodo consequat. [foo](http://foo.com) Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'))
> // returns [{ href: 'http://foo.com', text: 'foo' }];
````
  

### versão 1.0.1 (released)  

- funcionalidades: extração de links de um texto em markdown;
- função de extração retorna os links e os seus respectivos textos em um array de objetos.


