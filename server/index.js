const express=require("express");
const app=express();
require('dotenv').config()

const mongoose=require('mongoose');


mongoose.connect(process.env.MONGOURL); 
 


// import Routers
const productRouter=require('./routes/product') 


//cors
const cors=require("cors")
app.use(cors())

//body-parser
const bodyParser=require('body-parser');

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}));
// app.use("/*",bodyParser())
app.use("/products",productRouter) 

app.get("/",(req,res)=>{
    res.end(` hello world ${process.env.MONGOURL}`)
})




app.listen(3000,()=>{
    console.log(" server run successfuly : http://localhost:3000/");
    
})