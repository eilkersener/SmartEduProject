const express = require('express');
const app = express();
const pageRouter = require('./routes/pageRoute');
const port = 3000;

//Template Engine
app.set("view engine", "ejs");

//MIDDLEWAREs

app.use(express.static("public"));


app.use('/', pageRouter);


app.listen(port, (req, res) => {
  console.log(`App started on port ${port} `);
});
