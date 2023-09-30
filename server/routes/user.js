const User = require("../models/user.model")
const router = require("express").Router()



router.post("/:id/likes", async (req, res) => {

    const { id } = req.params;
    const { _id } = req.body;

    const user = await User.findOne({ _id: id });

    if (!user) {
        res.status(500).send({ message: "user not found" })
        return;
    }

    if (user.likes.includes(_id)) {
        user.likes = user.likes.filter(item => item._id === _id)
    } else {
        user.likes.push(_id);
    }

    user.save();

    res.status(200).send({ message: "Ad added to your likes" })

})

router.get("/:id/likes", async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ _id: id }).select('likes').populate([
        { path: 'likes', populate: { path: 'category' } },
        { path: 'likes', populate: { path: 'user' } }
    ]);
    const likes = user.likes.map(e => ({
        _id: e._id,
        title: e.title,
        description: e.description,
        image: e.image,
        category: e.category.title,
        user: {
            name: e.user.name
        }
    }));

    res.status(200).send({ data: likes })
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });

    res.status(200).send({ data: user })
})


router.post("/:id", async (req, res) => {
    const id = req.params.id;
    const { phone, name } = req.body;

    const user = await User.findOne({ _id: id });

    user.phone = phone;
    user.name = name;

    const updatedUser = await user.save()

    res.status(200).send({ data: { email: updatedUser.email, name: updatedUser.name, _id: updatedUser._id, phone: updatedUser.phone } })
})


module.exports = router