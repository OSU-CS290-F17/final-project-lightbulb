const path          = require('path');
const express       = require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const assert        = require('assert');
const mongoose      = require('mongoose');
const config        = require('./config/config');
const Posts         = require('./models/posts');
const app           = express();

var port = process.env.PORT || 3000;
mongoose.connect(config.database);
const db = mongoose.connection;

const corsOptions = {
  origin: config.origin,
  credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '1mb'}));

app.use(express.static('public'));

app.get('/search', (req, res) => {
  db.collection('posts').find({}).toArray((err, posts) => {
    assert.equal(err, null);
    console.log("Returned all posts");
    return res.json(posts);    
  });
});

app.post('/post', (req, res) => {
  db.collection('posts').insertOne(
    {'name':req.body.nameField, 'content':req.body.contentField});
  console.log("Inserted 1 document into the collection");
  return res.json();    
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
