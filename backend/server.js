const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./dbConn');
const { mongoose } = require('mongoose');
const User = require('./Models/users');
const jwt = require('jsonwebtoken');
const withAuth = require('./middleware')
const cookieParser = require('cookie-parser');
const secret = 'mysecretsshhh';
// const path = require('path');
const PORT = process.env.PORT || 3000


// let build = 'build';
// console.log(path.join(__dirname, '..',build))
// app.use(express.static(path.join(__dirname, '..',build)));

//middleware...
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Its backened Development yoooh')
})

//CONNECT TO MONGODB...
connectDB();
mongoose.connection.once('open',()=>{
    console.log('Connected to Mongo db');
    app.listen(PORT,()=>(console.log('Server running on port',`${PORT}`)));
})

//Create user account ...
app.post('/register', (req, res) => {
    var myData = new User(req.body);
 myData.save()
 .then(item => {
  console.log("item saved to database");
  return res.status(200).json({
    success:true,
    msg:"Successfully signed Up"
  })

 })
 .catch(err => {
  console.log("unable to save to database");
  return res.status(500).json({
    success:false,
    msg:'Error while signing Up .Try again later'
  })

 });

});



// //Authenticate User...
app.post('/Login', function(req, res) {
    const { email, password } = req.body;

    User.findOne({ email }, function(err, user) {
      if (err) {
        console.error(err);
        console.log('Internal error please try again')
       return res.status(500)
          .json({
            success: false,
            msg: 'Internal error please try again'
        });
      } else if (!user) {
        console.log("Incorrect email or password")

       return res.status(401)
          .json({
            success: false,
            msg: 'Incorrect email or password'
          });
      } else {
        user.isCorrectPassword(password, function(err, same) {
          if (err) {
            console.log("Internal err please try again")

           return  res.status(500)
              .json({
                success: false,
                msg: 'Internal error please try again'
            });
          } else if (!same) {
            console.log("Incorrect email or password")
           return res.status(401)
              .json({
                success: false,
                msg: 'Incorrect email or password'
            });
          } else {
            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '1h'
            });
            console.log("success")
            res.cookie('token', token, { httpOnly: true })
           return res.status(200).json({
              success: true,
              msg: 'success',
            })
          }
        });
      }
    });
  });


  // app.get('/secret', withAuth, function(req, res) {
  //   res.send('The password is potato');
  // });
  
  app.get('/checkToken', withAuth, function(req, res) {
    return res.statusCode(200).json({
      success:true,
      msg:"success"});
        // res.sendStatus(200);
  });

