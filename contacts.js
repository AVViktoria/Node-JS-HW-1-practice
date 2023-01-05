// const path = require("path");
// const fs = require("fs").promises;
// const contactsPath = require("./db/contacts.json");
// const http = require("http");
// const PORT = 8083;



 //*             Read file        //
//  const requestHandler = async (request, response) => {
//   const allContacts = await fs.readFile('./db/contacts.json', 'utf-8');
//   response.writeHead(200, {'Content-type':'text/json'});
//   return response.end(allContacts); }
// const server = http.createServer(requestHandler);
// //запускаем сервер на каком-то порту
// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at a server launch:", err);
//   }
//   console.log(`Server works at port ${PORT}!`);
// });




// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

// function addContact = async (name, email, phone)=> {
  // const newContact = await fs.readFile('./contacts.json', 'utf-8');
  // response.writeHead(200, {'Content-type':'text/json'});
  // return response.end(newContact); 


  //'name': "Philip Philipovich",
  // 'email': "Philipovich@mymail.net",
  // 'phone': "(123) 456-7890" `;

  // const data = fs
  //   .writeFile(path.resolve("./db/contacts.json"), newContact, "utf8")
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => console.error);
  
// }
// module.exports = {
//   addContact
// }