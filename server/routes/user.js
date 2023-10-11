const { UserModel, AdModel } = require("../models")
const router = require("express").Router()


//add like
router.post("/likes", async (req, res) => {
    const { userId, postId } = req.body;

    const user = await UserModel.findById(userId).populate("likes");

    if (!user) {
        return res.status(500).send({ message: "user not found" })
    }

    let exist = false;
    user.likes.map(e => {
        if (e._id.toString() === postId) {
            user.likes.splice(user.likes.indexOf(e), 1)
            exist = true;
        };
    })
    if (!exist) {
        user.likes.push(postId);
    }

    user.save();

    res.status(200).send({ message: "Ad added to your likes" })

})

//find users likes
router.get("/:id/likes", async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findById(id).populate("likes");

    const likes = user.likes;
    likes.forEach(e => e.liked = true);
    return res.status(200).send({ data: likes })
})

//get user by id
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findOne({ _id: id });
    return res.status(200).send({ data: user })
})


//update phone and name
router.post("/:id", async (req, res) => {
    const id = req.params.id;
    const { phone, name } = req.body;

    const user = await UserModel.findOne({ _id: id });

    user.phone = phone;
    user.name = name;

    const updatedUser = await user.save()

    return res.status(200).send({ data: { email: updatedUser.email, name: updatedUser.name, _id: updatedUser._id, phone: updatedUser.phone } })
})


module.exports = router