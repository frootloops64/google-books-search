// To start app 
const express = require('express');
const app = express();
const routes = require('./routes');

// Define required middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connecting to Mongo DB
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOD_URI || 'mongod://localhost/reactgooglebooks');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT,function () {
  console.log('API server now listening on PORT' + PORT);
});