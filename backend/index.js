const express = require('express')
const mongodb = require("./connection")
const connectDB = require('./connection')
const app = express()
const port = 5000

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-with, Content-Type, Accept"
    );
    next();
})

connectDB();
app.get('/', (req, res ) => {
    res.send("hello world")
})

app.use(express.json())
app.use("/api", require("./router/CreateUser")); 
app.use("/api", require("./router/DisplayItems")); 
app.use("/api", require("./router/AddItems"));
app.use("/api", require("./router/OrderData"));

app.listen(port , () => {
    console.log(`listening to port ${port}`)
})