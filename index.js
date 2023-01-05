// const {addContact} = require('./contacts.js');
// console.log(`addContact function result: ${addContact()}`);

// console.log(123123);
// const {getCurrentDate} = require('./dateUtils');
// console.log(`get current date function result: ${getCurrentDate()}`);

//*       PATH       ///
// const path = require('path');
// const qwe = path.resolve('../db/contacts.json'); //Абсолютный путь
// const qwe1 = '../db/contacts.json'; //Относительный путь
//*       FS       ///
//*   АСИНХРОННО   //
// const fs = require('fs').promises;
// fs.readFile('./db/contacts.json', 'utf8', (error, data)=>{
//   if(error){
//     console.log(error);
//   }
//   console.log(data)
// })
//console.log(123)

//*      НЕ использовать     //
//*  СИНХРОННО     promises   //
// const fs = require('fs').promises
// const data =  fs.readFile(path.resolve('./db/contacts.json'), 'utf8');
//     .then(data=> {
//       console.log(data)
//       })
//      .catch(err => console.error)
// console.log(data)
// console.log(123)

//*  СИНХРОННО     async   //
// const fs = require('fs').promises;
// (async()=>{
//   const data = await fs.readFile(path.resolve('./db/contacts.json'), 'utf-8')
// console.log(data)
// })();

//*   СИНХРОННО     Sync    //
// const fs = require('fs')
// const data =  fs.readFileSync(path.resolve('./db/contacts.json'), 'utf8');
// console.log(data)
// console.log(123)

//*    process.env
// представляет состояние окружения системы в момент запуска приложения.
// Например, если в системе задана переменная PATH, обратиться к ней из приложения
// можно посредством конструкции process.env.PATH. Её можно использовать, например,
// если вам нужно узнать место, где можно найти исполняемые файлы,
// к которым требуется обратиться из кода.

//*    process.argv
//содержит массив аргументов командной строки
// Первый элемент этого массива всегда указывает на путь к файлу node.exe,
// который вызывает приложение. Второй элемент массив всегда
// указывает на путь к файлу приложения, который выполняется.

//*    process.exit()
//завершает процесс с указанным в качестве аргумента кодом:
//0 – успешный код, любое отличное от 0 число, но чаще всего 1 – код ошибки

//*     __filename
//имя файла исполняемого скрипта;
//*     __dirname
//абсолютный путь до исполняемого скрипта.

//*    HTTP       ///

// const http = require("http");
// const PORT = 8083;

//  //*    читаем файл
//  const requestHandler = async (request, response) => {
//   const manifest = await fs.readFile('./db/contacts.json', 'utf-8');
//   response.writeHead(200, {'Content-type':'text/json'});
//   return response.end(manifest); }

// const server = http.createServer(requestHandler);
// //запускаем сервер на каком-то порту
// //http -80
// //https - 443
// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at a server launch:", err);
//   }
//   console.log(`Server works at port ${PORT}!`);
// });

//* const requestHandler = (request, response) => {
  //*    JSON file
  // response.writeHead(200, { "Content-type": "text/json" });
  // response.end(JSON.stringify({ a: 1, b: [] }));

  //*     HTML разметка
  // response.writeHead(200, {'Content-type': 'text/html'});
  // response.end('<h1>GOIT</h1>')
  // две записи идентичны, выше сокращенная запись, ниже развернутая,
  // response.write('<h1>GOIT</h1>');
  // response.end();
// };



// //*       запускаем сервер на каком-то порту
// const server = http.createServer(requestHandler);
// //запускаем сервер на каком-то порту
// //http -80
// //https - 443
// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at a server launch:", err);
//   }
//   console.log(`Server works at port ${PORT}!`);
// });


//*  PRACTICE BLAND   //

// const express = require ('express');
// const router = require ('./routes/router');
// const app = express();
// const PORT = 8081;

// app.use(router);

//  app.listen(PORT, (err) => {
//  if (err) {
//    console.error("Error at a server launch:", err);
//  }
//  console.log(`Server works at port ${PORT}!`);
// });