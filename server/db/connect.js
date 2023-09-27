const { mongoose } = require("mongoose");



mongoose.connect("mongodb://localhost:27017/ads_app")
    .then(() => console.log("Connected..."));
