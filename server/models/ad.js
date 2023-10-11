const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const adSchema = new Schema({
    title: String,
    description: String,
    image: String,
    category: String,
    location: String,
    prix: Number,
    liked: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'user' }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("ad", adSchema);