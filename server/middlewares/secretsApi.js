const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const mongoose = require('mongoose');
let Schema = mongoose.Schema
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/secretkeeper');

let db = mongoose.connection;

let secretSchema = new Schema({
    secret: String,
  });

const Secret = mongoose.model('Secret', secretSchema);

router.use((req, res, next) => {
  console.log('API request made by user');
  next();
})

router.get('/', (req, res) => {
  console.log('req.body is', req.body);
  db.collection('secrets')
  .find()
  .toArray()
  .then((secrets) => res.json(secrets));
});

router.post('/', (req, res) => {
  if (req.body["secret"].length > 0) {
    db.collection('secrets').insert(req.body, (err, data) => {
      if (err) return console.log(err)
      console.log('secret successfully saved to database')
      res.redirect('/')
    })
  }
});

module.exports = router;
