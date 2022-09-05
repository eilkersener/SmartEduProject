const express = require('express');
const app = express();
const pageRouter = require('./routes/pageRoute');
const port = 3000;
const mongoose = require('mongoose');
const courseRouter = require('./routes/courseRoute');
const categoryRouter = require('./routes/categoryRoute');
const userRouter = require('./routes/userRoute')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override')
//connect db

mongoose.connect('mongodb://localhost/smartedu-db').then(() => {
  console.log('DB CONNECTED');
});

//Template Engine
app.set('view engine', 'ejs');

//Global variable

global.userIN = null;

//MIDDLEWAREs
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(session({
  secret: 'my_keyboard_cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db' })
 
}))
app.use(flash());
app.use((req,res,next)=>{
  res.locals.flashMessages = req.flash();
  next();
})
app.use(methodOverride('_method',{
  methods:['POST','GET']
}))

//routes
app.use('*',(req,res,next)=>{
  userIN = req.session.userID;
  next();
})
app.use('/', pageRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);

app.listen(port, (req, res) => {
  console.log(`App started on port ${port} `);
});
