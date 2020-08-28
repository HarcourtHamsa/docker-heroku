const express = require ('express');
const path = require ('path');
const numCPUs = require ('os').cpus ().length;
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');

require ('dotenv').config ();

// Constants
const app = express ();
const PORT = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV !== 'production';

// Middleware
app.use (bodyParser.urlencoded ({extended: true}));
app.use (bodyParser.json ());
app.use (cors ());

// Priority serve any static files.
app.use (express.static (path.join (__dirname, './client/build')));

//production
if (process.env.NODE_ENV === 'production') {
  app.use (express.static ('./client/build'));

  // All remaining requests return the React app, so it can handle routing.
  app.get ('*', (req, res) => {
    res.sendFile (path.resolve (__dirname, './client/build/index.html'));
  });
}

const uri = process.env.ATLAS_URI;
mongoose.connect (uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on ('error', console.error.bind (console, 'connection error:'));
db.once ('open', () => {
  console.log ('MongoDB server connected successfully!');
});

const userRouter = require ('./routes/user.route');
app.use ('/api/users/', userRouter);

app.listen (PORT, function () {
  console.error (
    `Node ${isDev ? 'dev server' : 'cluster worker ' + process.pid}: listening on port ${PORT}`
  );
});
