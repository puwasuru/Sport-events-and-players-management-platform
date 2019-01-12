const mongoose = require('mongoose')
const schema = mongoose.Schema

const adminModel = new schema({
    name: { type: String, required : true} ,
    username: { type: String, required : true} ,
    password: { type: String, required : true }
})

module.exports = mongoose.model('admin', adminModel)