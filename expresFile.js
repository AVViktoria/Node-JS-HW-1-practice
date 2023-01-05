

 //*             Read file Express       //
//  const express = require ('express');
//  const app = express();
//  const PORT = 8081;
 
 //* get
//  app.get('/home', (req, res)=>{
//   res.send('GET request');
//  })

//*post
//  app.post('/home', (req, res)=>{
//   res.send('POST request');
//  })

//* можем сделать валидацию запроса на параметр:
//  app.post('/home', (req, res)=>{
//   if(!req.body.goit){
//     return res.status(400).json({status: "goit parameter is required"})
//   }
// res.json({javascript: 'object', body: req.body})
//  })


//* del
//  app.delete('/home', (req, res)=>{
//   res.send('DELETE request');
//  })

 // *    USE              //
// app.use((req, res)=>{
//   res.sendStatus('middleware request');
//  })

//  app.use((req, res)=>{
//   res.json({contact : 'One more'});
//  })

//* обязательно next и после него get или другой запрос
//  app.use((req, res, next)=>{
//   console.log(`${req.method} ${req.originalUrl}, ${new Date().toISOString()}`);
// next(); 
// })

// app.get('/home', (req, res)=>{
//   res.send('GET request');
//  })

//  app.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at a server launch:", err);
//   }
//   console.log(`Server works at port ${PORT}!`);
// });
 

/// *      Встроенные миделвары    //
// app.use(express.json()); //если нужно получить данные
// app.use(express.urlencoded({extended:true}));
// app.use(express.static('pablic'));  //позволяет сделать выбранную директорию публичной