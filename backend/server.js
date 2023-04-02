const express = require('express');
const connectDb = require('./config/db.js');
const dotenv = require('dotenv').config({path:__dirname+'/.env'})
const app = express()
const path = require('path')
const port = process.env.PORT || 5000
const { errorHandler } = require ('./middleware/errorHandler.js');

connectDb()

app.use(express.urlencoded({ extended: false }));
app.use('/api/users', require('./routes/userRoutes.js'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }
  
  app.use(errorHandler);
app.listen(port, () => console.log(`app listening on port ${port}!`))