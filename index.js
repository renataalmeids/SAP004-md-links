/*module.exports = () => {
  // ...
};*/

const fs = require('fs');
const { argv } = require('process');
// path = "C:\\Users\\Samuel\\Documents\\Laboratoria\\SAP004-md-links"
// fs.readdir(path, 'utf8', (err, data) => {               /*lendo o arquivo md*/
//   if(err){
//     console.log (err)
//   } else { //array  de obj
//     data.forEach(file => {
//       console.log(file)
//       console.log(data)
//     //const oi = data.match(/http[s]?:/)
//     //console.log (oi)
//   })
// }});

function cheking(path) {

  fs.stat(path, (err, stats) => {
    if (stats.isFile()) {
      fs.readFile(path, 'utf8', (err, data) => {
        const regex = data.match(/\[(.[^\]]*)\]\((http.*)\)/gm)
        const linkRegex = regex.map(e => {
          const result = e.match(/\[(.[^\]]*)\]\((http.*)\)/)
          return{
            text: result[1],
            href:result [2]
          }
        })
        console.log(linkRegex)
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
}
cheking(process.argv[2])

