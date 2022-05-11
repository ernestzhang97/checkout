require("dotenv").config();
const express = require("express");
const path = require("path");
const {getAll, addEntry, getMatching, editEntry, deleteEntry} = require('./db.js');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.urlencoded({extended: false}));


// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/entries', (req, res) => {
  getAll()
  .then((data) => {
    console.log('GET');
    res.json(data);
    // res.send(data);
  })
  .catch((err) => {
    console.log('ERROR', err);
  })
})

app.post('/entries', (req, res) => {
  addEntry(req.body)
  .then((result) => {
    res.status(201).send('successful post');
  })
})

app.get('/entries/search', (req, res) => {
  console.log('GETS HERE', req.query.term);
  // getMatching(req.query.term)
  // .then((result) => {
  //   console.log(result)
  // })
})

app.put('/entries/:word', (req, res) => {
  editEntry(req.body)
  .then((result) => {
    res.status(204).send('successful put');
  });
})

app.delete('/entries/:word', (req, res) => {
  deleteEntry(req.params.word.substring(1))
  .then((result) =>
  res.send('successful deletion'));
})



let PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
