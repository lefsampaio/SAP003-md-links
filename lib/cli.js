const mdLinks = require('./index.js')

mdLinks.readingFiles(url)
    .then(links => {
        console.log(links);
    })
    
// mdLinks("./example.md")
//   .then(links => {
//     // => [{ href, text }]
//   })
//   .catch(console.error);