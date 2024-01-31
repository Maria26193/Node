// var a = require('./test')
// console.log(a);

// const jester = require('jester-jokes');

// console.log(jester.getJoke());

const express = require('express')   // import express packge file
const app = express(); // add in variable
app.set("view engine","ejs");
app.use(express.static('./public'));
// app.use(function(req,res,next){
//  console.log('hello this is MiddleWhere ');
//  next(); //If wenot use this never send req next level
// });
// app.use(function(req,res,next){
//  console.log('hello this is MiddleWhere 2');
//  next();
// });
// This is Intially / route by default
app.get('/', function (req, res) {   // app.get('route',function and use (request and response))
  res.render("index",{name:'maria'});
})
// app.get('/', function (req, res) {   // app.get('route',function and use (request and response))
//   res.send('Hello Maria islam');
// })
// This is /about Route
app.get('/about', function (req, res) {   // app.get('route',function and use (request and response))
  res.render('about');
})
// THis Is Normal route 
// app.get('/profile/Maria', function (req, res) {   // app.get('route',function and use (request and response))
//   res.send('Prfile Maria islam');
// })
// This Is Dynamic Route
app.get('/profile/:username', function (req, res) {   // app.get('route',function and use (request and response))
  res.send(`About Maria isla${req.params.username}`);
})
app.get('/error', function (req, res) {   // app.get('route',function and use (request and response))
  throw Error("Some thing Went Wrong");
})
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})
app.listen(4000); //This Code Use Node code to run as a server on 3000 port