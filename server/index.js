require("./db/connect")
const authRouter = require("./routes/auth")
const adsRouter = require("./routes/ads")
const categoriesRouter = require("./routes/categories")
const userRouter = require("./routes/user")

const { categories } = require("./data")

const User = require("./models/user.model")
const Category = require("./models/category.model")
const Ad = require("./models/ad.model")

const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/v1/auth", authRouter)
app.use("/api/v1/ads", adsRouter)
app.use("/api/v1/categories", categoriesRouter)
app.use("/api/v1/user", userRouter)


async function initDB() {

    categories.forEach(async (element) => {
        console.log(element)
        await new Category({
            title: element.title
        }).save()
    });
    /*   await Ad.deleteMany({})
      await Category.deleteMany({})
      await User.deleteMany({}) */
    /*
       new User({
           name: "user",
           email: "user@mail.com",
           password: "user"
       }).save();
       new Category({
           title: "old gadgets"
       }).save()
   
       new Ad({
           title: "iphone 13 pro max",
           description: "en bonne etat",
           prix: 1200
       }).save(); */
}

//initDB();
/* 
app.get("/api/v1/ads/all", (req, res) => {
    const query = req.query.search;
    setTimeout(() => {
        const response = ads.map(ad => {
            const user = users.find(user => user.id === ad.ownerId);
            if (user) {
                return {
                    ...ad,
                    owner: {
                        id: user.id,
                        name: user.name,
                        email: user.email ?? "undefined",
                        phone: user.phone ?? "undefined"
                    }
                }
            }
            return ad;
        });
        if (query) {
            const category = categories.find(c => c.id === +query)
            const filtered = response.filter(ad => ad.category === category.title)
            res.send({ status: 200, data: filtered })
        } else {
            res.send({ status: 200, data: response })
        }
    }, 1000);
})

app.get("/api/v1/ads/:id", (req, res) => {
    const id = req.params.id;
    setTimeout(() => {
        const ad = ads.find(ad => ad.id === id);
        const user = users.find(u => (ad.ownerId === u.id && ad.id === id))
        res.send({
            status: 200,
            data: {
                ...ad, owner: {
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                    email: user.email ?? "undefined"
                }
            }
        })
    }, 1000);
})


app.get("/api/v1/users/:id", (req, res) => {
    const id = req.params.id;
    setTimeout(() => {
        const user = users.find(user => user.id === id);
        res.send({
            status: 200,
            data: {
                user: {
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                    email: user.email ?? "undefined"
                }
            }
        })
    }, 1000);
})


app.get("/api/v1/users/:id/ads", (req, res) => {
    const id = req.params.id;
    setTimeout(() => {
        let myAds = []
        const user = users.find(user => user.id === id);
        ads.forEach(ad => {
            if (ad.ownerId === user.id) myAds.push(ad)
        })

        res.send({
            status: 200,
            data: {
                ads: myAds
            }
        })
    }, 1000);
})

app.get("/api/v1/categories", (req, res) => {
    setTimeout(() => {
        res.send({
            status: 200,
            data: categories
        })
    }, 1000);
})

app.post("/api/v1/auth/login", (req, res) => {
    setTimeout(() => {
        const { email, password } = req.body;
        if (!email || !password) {
            throw { status: 501, message: "email/password incorrect" }
        }
        const authUser = users.find(user => user.email === email);
        if (!authUser) {
            throw { status: 501, message: "no user found with these credentials" }
        }
        if (authUser.password !== password) {
            throw { status: 501, message: "invalid passwprd" }
        }
        res.send({ status: 200, data: { email: authUser.email, name: authUser.name, id: authUser.id } })
    }, 1000);
})
 */

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("app listening on port " + PORT))
