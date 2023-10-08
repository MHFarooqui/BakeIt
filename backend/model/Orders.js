const mongoose = require('mongoose')

const { Schema } = mongoose;

const OrderSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    total_price: String,
    order_date: String,
    order_items: {
        type: Array,
        required: true
    } 
});

module.exports = mongoose.model('order', OrderSchema)