const { mongoose } = require("mongoose");


mongoose.connect('mongodb://root:root@localhost:27017/ads_app_db?authSource=admin',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected..."));
