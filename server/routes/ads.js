const express = require("express")
const Ad = require("../models/ad.model")
const User = require("../models/user.model")

const router = express.Router();

router.get("", async (req, res) => {

    const ads = await Ad.find({}).populate('user category');

    res.status(200).send({
        data: ads
    })
})

router.get("/:id", async (req, res) => {

    const id = req.params.id;

    const ad = await Ad.findOne({ _id: id }).populate('user category');

    res.status(200).send({
        data: ad
    })
})

router.get("/user/:id", async (req, res) => {

    const userId = req.params.id;

    const ads = await Ad.find({ user: userId });
    console.log(ads)

    res.status(200).send({
        data: ads
    })
})

router.get("/category/:id", async (req, res) => {

    const catId = req.params.id;

    const ads = await Ad.find({ categoryId: catId });

    res.status(200).send({
        data: ads
    })
})



router.get("/user/:userId/category/:catId", async (req, res) => {

    const { catId, userId } = req.params.id;
    console.log(catId, userId)

    const ads = await Ad.find({ userId: userId, categoryId: catId });

    res.status(200).send({
        data: ads
    })
})



router.put("/:id", async (req, res) => {

    const oldAd = req.body;
    const adId = req.params.id;

    let ad = await Ad.find({ _id: adId });

    if (!ad) {
        res.status(500).send({
            message: "There is no ad with this id"
        })
    }

    await Ad.findOneAndUpdate(
        { _id: adId },
        { $set: oldAd }
    )

    res.status(200).send({
        message: "Ad updated successfully !"
    })
})



router.post("", async (req, res) => {
    const { title, description, userId, categoryId, image } = req.body;

    if (!title || !description) {
        res.status(500).send({ message: "please provide title and description !" });
        return;
    }

    const user = User.findOne({ _id: userId });

    if (!user) {
        res.status(500).send({ message: "user not found" })
    }


    await new Ad({
        title: title,
        description: description,
        image: image,
        user: userId,
        category: categoryId
    }).save();

    res.send({
        status: 200,
        message: "ad created successfully "
    })
})


router.delete("/:id", async (req, res) => {

    const { id } = req.params.id;

    const ad = await Ad.find({ _id: id });


    if (!ad) {
        res.status(500).send({
            message: "ad with this id not found"
        })
        return;
    }

    res.send({
        status: 200,
        data: ads
    })
})

module.exports = router