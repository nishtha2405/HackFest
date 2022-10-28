const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

////////////////////////////////////////////////////////////
//File Handeling Intro

//Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `The content of input.txt file is : ${textIn}\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log("File written!");

//Non-Blocking, Asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err1, data) => {
//     if (err1) return console.log("Unable to read start.txt file");
//     fs.readFile(`./txt/${data}.txt`, 'utf-8', (err2, data2) => {
//         if (err2) return console.log(`Unable to read ${data2}.txt file`);
//         fs.readFile('./txt/append.txt', 'utf-8', (err3, data3) => {
//             if (err3) return console.log(`Unable to read append.txt file`);
//             fs.writeFile('./txt/final.txt', `Content of final file is : ${data2} \n ${data3}`, 'utf-8', (err) => {
//                 if (err) throw err;
//                 console.log("file written successFully!");
//             });
//         });
//     });
// });

///////////////////////////////////////////////////////////////////
//SERVER

const tempOverview = fs
  .readFileSync(`${__dirname}/templates/template-overview.html`)
  .toString();
const tempProduct = fs
  .readFileSync(`${__dirname}/templates/template-product.html`)
  .toString();
const tempCard = fs
  .readFileSync(`${__dirname}/templates/template-card.html`)
  .toString();
const apiData = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const productData = JSON.parse(apiData);

//Just to see implementation of slugify
// const temp = productData.map(el => slugify(el.productName, { replacement: '-', lower: true, trim: true }));
// console.log(temp);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  //OVERVIEW PAGE
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardhtmlList = productData
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace(/{%PRODUCT_CARD%}/g, cardhtmlList);
    res.end(output);
  }
  //PRODUCT PAGE
  else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = productData[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  }
  //API
  else if (pathname == '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(apiData);
  }
  //NOT FOUND
  else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page NOT found :(</h1>');
  }
});

server.listen(process.env.PORT || 5000);
