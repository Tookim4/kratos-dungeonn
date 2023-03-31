const express = require('express');
const connectDb = require('./config/db.js');
const dotenv = require('dotenv').config({path:__dirname+'/.env'})
const app = express()
const port = process.env.PORT || 3000

connectDb()

app.use(express.urlencoded({ extended: false }));
app.use('/api/users', require('./routes/userRoutes.js'))
app.listen(port, () => console.log(`app listening on port ${port}!`))