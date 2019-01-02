const mongoose = require('mongoose')
const schema = mongoose.Schema

const eventModel = new schema({
    name: { type: String, required : true} ,
    description: { type: String, required : true},
    imageURL: {type: String, default: "default_news.jpg"}
})

module.exports = mongoose.model('news', eventModel)