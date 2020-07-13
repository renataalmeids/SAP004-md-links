const fs = require('fs');
const { argv } = require('process');

function mdLinks(path) {
  return new Promise((resolve) => {
    fs.stat(path, (err, stats) => {
      if (stats.isFile()) {
        fs.readFile(path, 'utf8', (err, data) => {
          const regex = data.match(/\[(.[^\]]*)\]\((http.*)\)/gm)
          const linkRegex = regex.map(e => {
            const result = e.match(/\[(.[^\]]*)\]\((http.*)\)/)
            return {
              text: result[1],
              href: result[2]
            }
          })
          resolve(linkRegex)
        })
      }

      else if (stats.isDirectory()) {
        console.log('is directory? ' + stats.isDirectory());
        fs.readdir(path, 'utf8', (err, data) => {
          if (err) {
            console.log(err)
          } else {
            console.log("O conteudo da file contained:", data)
          }
        });
      }
    });
  })
}
//mdLinks(process.argv[2]);

module.exports = mdLinks;
