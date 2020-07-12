#!/usr/bin/env node
const mdLinks = require ('./index.js')
const files = process.argv[2];

mdLinks(files)
.then (result => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

