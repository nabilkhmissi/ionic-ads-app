const { mongoose, Schema } = require("mongoose")

const adSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    prix: Number
});

module.exports = mongoose.model("Ad", adSchema);