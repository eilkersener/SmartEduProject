const express = require('express');
const app = express();

const port = 3000;

//Template Engine
app.set("view engine", "ejs");

//MIDDLEWAREs

app.use(express.static("public"));


app.get('/', (req, res) => {
  res.status(200).render('index', {
    page_name : "index"
  })
});

app.get('/about', (req, res) => {
  res.status(200).render('about', {
    page_name : "about"
  })
});

app.listen(port, (req, res) => {
  console.log(`App started on port ${port} `);
});
