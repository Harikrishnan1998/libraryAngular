const express = require('express');
var mongoose = require('mongoose')
const cors = require ('cors');
const jwt = require ('jsonwebtoken');
var bodyparser = require('body-parser');
const BookData = require('./src/model/BookData');
const AuthorData = require('./src/model/AuthorData');
const user = require('./src/model/user');
// const sign= require('./src/model/signup');
var app = new express();
app.use(cors());
app.use(bodyparser.json())
username="admin"
password="1234"

function verifyToken(req,res,next){
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.post('/login',(req,res)=>{
    let user = req.body
    if(!username){
        res.status(401).send("invalid u")
    }else if(password !==user.password){
        res.status(401).send("invalid p")
    }else{
        let payload  = {subject:username+password}
        let token = jwt.sign(payload,'secretKey')
        res.status(200).send({token})
    }
})

app.get('/books',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE")
    BookData.find()
    .then((books)=>{
        res.send (books);
    });

});

app.get('/books/:id',  (req, res) => {
  
    const id = req.params.id;
      BookData.findOne({"_id":id})
      .then((book)=>{
          res.send(book);
      });
  })



app.post('/insertb',(req,res)=>{
    
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    console.log(req.body);
    var book = {

        name:req.body.book.name,
        author:req.body.book.author,
        genre:req.body.book.genre,
        imageUrl:req.body.book.imageUrl
    }
    var book = new BookData(book);
    book.save();
});

app.put('/updateb',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    name=req.body.name,
    author=req.body.author,
    genre=req.body.genre,
    imageUrl = req.body.imageUrl
   BookData.findByIdAndUpdate({"_id":id},
                                {$set:{"name":name,
                                "author":author,
                                "genre":genre,
                               
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })

 
app.delete('/remove/books/:id',(req,res)=>{
 
   id = req.params.id;
   BookData.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })





app.get('/authors',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE")
    AuthorData.find()
    .then((authors)=>{
        res.send (authors);
    });

});
app.get('/authors/:id',  (req, res) => {
  
     const id = req.params.id;
      AuthorData.findOne({"_id":id})
      .then((author)=>{
          res.send(author);
      });
  })

app.post('/inserta',(req,res)=>{
    
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    console.log(req.body);
    var author = {

        name:req.body.author.name,
        genre:req.body.author.genre,
        imageUrl:req.body.author.imageUrl
    }
    var author = new AuthorData(author);
    author.save();
});
app.put('/updatea',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    name=req.body.name,
    genre=req.body.genre,
    imageUrl = req.body.imageUrl
   AuthorData.findByIdAndUpdate({"_id":id},
                                {$set:{"name":name,
                            
                                "genre":genre,
                               
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   });
 });
 app.delete('/remove/authors/:id',(req,res)=>{
 
    id = req.params.id;
    AuthorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
 
 
app.listen(3000,function(){

    console.log('listening to port 3000');
})
