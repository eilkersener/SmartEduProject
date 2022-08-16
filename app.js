const express = require('express');
const app = express();
const pageRouter = require('./routes/pageRoute');
const port = 3000;
const mongoose = require('mongoose');
const courseRouter = require('./routes/courseRoute');

//connect db

mongoose.connect('mongodb://localhost/smartedu-db').then(()=>{
  console.log('DB CONNECTED')
});

//Template Engine
app.set('view engine', 'ejs');

//MIDDLEWAREs

app.use(express.static('public'));

app.use('/', pageRouter);
app.use('/courses', courseRouter)

app.listen(port, (req, res) => {
  console.log(`App started on port ${port} `);
});
