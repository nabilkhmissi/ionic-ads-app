const express = require("express")
const { AdModel, UserModel } = require("../models")

const router = express.Router();

//find all
router.get("", async (req, res) => {

    const { category } = req.query
    let ads;
    if (category) {
        ads = await AdModel.find({ category: category }).populate("user");
    } else {
        ads = await AdModel.find({}).populate("user");
    }
    res.status(200).send({ data: ads })
})

//find ad by id
router.get("/:id", async (req, res) => {

    const id = req.params.id;
    const ad = await AdModel.findById(id).populate("user");
    res.status(200).send({ data: ad })
})

//update ad
router.put("/:id", async (req, res) => {

    const oldAd = req.body;
    const adId = req.params.id;

    let ad = await AdModel.find({ _id: adId });

    if (!ad) {
        res.status(500).send({
            message: "There is no ad with this id"
        })
    }

    await AdModel.findOneAndUpdate(
        { _id: adId },
        { $set: oldAd }
    )

    res.status(200).send({
        message: "Ad updated successfully !"
    })
})


//create new ad
router.post("", async (req, res) => {
    const { title, description, user, price, category, image } = req.body;

    if (!title || !description) {
        res.status(500).send({ message: "please provide title and description !" });
        return;
    }

    const new_ad = await new AdModel({
        title: title,
        description: description,
        image: image,
        user: user,
        price: price,
        category: category
    }).save();

    res.send({
        status: 200,
        data: new_ad,
        message: "ad created successfully "
    })
})

//delete by id
router.delete("/:id", async (req, res) => {

    const id = req.params.id;

    const ad = await AdModel.find({ _id: id });

    if (!ad) {
        return res.status(500).send({
            message: "Ad with this id not found"
        })
    }

    await AdModel.deleteOne({ _id: id });

    return res.send({
        status: 200, message: "Ad delete successfully"
    })
})

//get ads by user id
router.get("/user/:id", async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    if (!user) {
        return res.status(404).send({ message: "user with this not found" })
    }
    const ads = await AdModel.find({ user: id });
    return res.status(200).send({ data: ads })
})

module.exports = router