const mongoose = require("mongoose")

const { Schema } = mongoose;

const ItemsSchema = new Schema ({
    name:{
        type: String,
        required : true
    },
    img:{
        type: String,
        required : true
    },
    price:{
        type: String,
        required : true
    },
    descrpition:{
        type: String,
        required : true
    },
})


module.exports =  mongoose.model('items', ItemsSchema)