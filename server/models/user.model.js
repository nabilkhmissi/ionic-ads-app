const { default: mongoose } = require("mongoose")
const monggose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);
module.export = User;