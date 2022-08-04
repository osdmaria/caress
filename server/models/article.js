const mongoose = require('mongoose')

let articleSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: false
        },
        categories:{
            type: Array,
            required: true
        },
        content: {
            type: String,
            required: true
        }
});

module.exports = mongoose.model("article", articleSchema);