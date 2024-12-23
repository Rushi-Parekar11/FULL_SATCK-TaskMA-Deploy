const express = require("express");
const app=express();
const mongoose=require('mongoose')
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const router = require("./Routes/Taskrouter");
const { json } = require("body-parser");
const cors = require('cors');
const bodyParser = require("body-parser");


//MIDDELWARE
app.use(cors());
app.use(bodyParser.json())
//app.use(express.json())

//DATABASE CONNECTION 
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Database connected Successfully !");
})
.catch((err) => {
    console.error("Database connection failed:", err.message);
});




app.use("/tasks",router)


app.listen(PORT,()=>{
    console.log(`app is listen at port : ${PORT}`)
})