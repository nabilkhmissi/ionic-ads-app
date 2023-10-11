const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: String,
    name: String,
    password: String,
    phone: String,
    likes: [
        { type: Schema.Types.ObjectId, ref: 'ad' }
    ]
});

module.exports = mongoose.model("user", userSchema);