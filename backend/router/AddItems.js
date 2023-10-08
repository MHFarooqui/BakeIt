const express = require("express")
const router = express.Router()
const items = require("../model/items")

router.post("/additems", async (req, res) => {
    try {
        await items.create({
            name: req.body.name,
            img: req.body.img,
            price: req.body.price,
            descrpition: req.body.descrpition
        })
        res.json({success: true});
    } catch (error) {
        console.log(error);
        res.json({success: false});
    }
})

module.exports = router;