const express = require("express")
const Catgeory = require("../models/category.model")

const router = express.Router();

router.get("", async (req, res) => {

    const cats = await Catgeory.find({});

    res.status(200).send(cats)
})



router.post("", async (req, res) => {

    const { title } = req.body
    new Catgeory({
        title: title
    }).save();

    res.status(200).send({
        message: "category saved successfully"
    })
})


router.delete("/:id", async (req, res) => {

    const catId = req.params.id
    await Catgeory.delete({
        _id: catId
    });

    res.status(200).send({
        message: "category deleted successfully"
    })
})

module.exports = router