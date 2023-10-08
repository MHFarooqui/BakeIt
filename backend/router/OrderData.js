const express = require("express")
const router = express.Router()
const Order = require('../model/Orders')

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data
    try {
        await Order.create({
                email: req.body.email,
                total_price: req.body.total_price,
                order_date: req.body.order_date,
                order_items: [data]
        }).then((error) => {
            res.json({ status: false })
            console.log("done")
        })
    } catch (error) {
        res.send("Server Error", error.message)
        console.log(error.message)
    }
})

router.post('/myOrder', async (req, res) => {
    try {
        let myData = await Order.find({ 'email': req.body.email })
        res.json( myData.reverse() )
    } catch (error) {
        res.send("server Error", error.message)
    }
})

module.exports = router;