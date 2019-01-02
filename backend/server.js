const express = require("express");
require('dotenv').config();
const bodyParser = require("body-parser");
const next = require('next');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'

const server = express()
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const MONGODB_URI = process.env.DB_URL || 'mongodb://localhost:27017/perasports'

const routes = require('./routes/')
server.use('/api', routes)

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

if (process.env.NODE_ENV !== 'test') {
  const app = next({ dev })
  const handle = app.getRequestHandler()

  app.prepare()
    .then(() => {

      server.get('*', (req, res) => {
        return handle(req, res)
      })
      
      server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })

    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    })
}


module.exports = server;