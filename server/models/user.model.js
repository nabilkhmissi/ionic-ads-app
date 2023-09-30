const { mongoose, Schema } = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    phone: String,
    likes: [{ type: Schema.Types.ObjectId, ref: 'Ad' }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;