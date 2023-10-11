const express = require("express")
const { UserModel } = require("../models")

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!password || !email) {
        res.status(500).send({ message: "invalid credentials !" });
        return;
    }
    const authUser = await UserModel.findOne({ email: email });

    if (!authUser) {
        res.status(500).send({ message: "user doesnt exist" });
        return;
    }

    if (authUser.password !== password) {
        res.status(500).send({ message: "bad credentials" });
        return;
    }

    res.status(200).send({
        user: {
            _id: authUser._id,
            name: authUser.name,
            email: authUser.email,
            phone: authUser.phone,
        }
    })
})


router.post("/register", async (req, res) => {
    const { name, email, password, phone } = req.body;

    if (!name || !password || !email) {
        res.status(500).send({ message: "please fill all fiealds !" });
        return;
    }
    await new UserModel({
        name: name,
        email: email,
        password: password,
        phone: phone,
    }).save();

    res.status(200).send({
        message: "User created successfully "
    })
})
module.exports = router