const express=require('express');
require('dotenv').config({path:'./config/.env'})
require('./config/db')
const app=express();

// Middleware for receive data in the form json
app.use(express.json())

//Middleware for routes
app.use('/users',require('./routes/user'))

// lisning to the port
app.listen(process.env.PORT, ()=>{
    console.log(`server are listning on http://localhost:${process.env.PORT}`)
})