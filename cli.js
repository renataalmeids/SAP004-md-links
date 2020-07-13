#!/usr/bin/env node
const mdLinks = require ('./index.js')
const files = process.argv[2];

mdLinks(files)
.then (result => {
    result.forEach(element => {
        console.log (element.text, element.href)
    });
}).catch((err) => {
    console.log(err)
});

