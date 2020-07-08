/*module.exports = () => {
  // ...
};*/

const fs = require('fs');
path = "C:\\Users\\Samuel\\Documents\\Laboratoria\\SAP004-md-links"
fs.readdir(path, 'utf8', (err, data) => {
  if(err){
    console.log (err)
  } else { //array  de obj
    data.forEach(file => {
      console.log(file)
      console.log(data)
    //const oi = data.match(/http[s]?:/)
    //console.log (oi)
  })
}});
/*
fs.stat(path, (err, stats) => { 
    if( !err ){ 
        if(stats.isFile()){ 
            console.log('is file ? ' + stats.isFile()); 
            fs.readFile(path, 'utf8', (err, data) => {
              if(err){
                console.log (err)
              } else {
                console.log ("O conteudo da file contained:", data)
              }
            });
            
        } 
  
        else if(stats.isDirectory()){ 
            console.log('is directory? ' + stats.isDirectory());
            fs.readdir(path, 'utf8', (err, data) => {
              if(err){
                console.log (err)
              } else {
                console.log ("O conteudo da file contained:", data)
              }
            }); 
        } 
    } 
    else
        throw err;  
});
*/
