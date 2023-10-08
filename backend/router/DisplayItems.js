const express = require("express")
const router = express.Router()

router.post('/fooditems', (req,res)=> {
    try {
        //console.log(global.foodItems)
        res.send(global.foodItems)
    } catch (error) {
        console.log(error);
        res.send("Server error")
    }
})

module.exports = router;