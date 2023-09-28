const { mongoose } = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    phone: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;