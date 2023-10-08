require('dotenv').config();
const mongoose = require('mongoose')
const mongoURI = process.env.CONNECTION_STRING;


const connectDB = async() => {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI)
    .then( () => {
        console.log("connected");

        
        const fetchData = mongoose.connection.db.collection("items");
        fetchData.find({}).toArray(function(err, data){
            if(err) console.log(err);
            else {
                global.foodItems = data;
            }
        })
        
        
    })
}

module.exports = connectDB;