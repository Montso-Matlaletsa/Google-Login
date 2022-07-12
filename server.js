const express = require('express')
const passport = require('passport')
const app = express();
const session = require('express-session')

app.set('view engine', 'ejs')

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}))

app.get('/', (req, res)=>{
    res.json({message: 'app running'})
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('App listening on port ', port))