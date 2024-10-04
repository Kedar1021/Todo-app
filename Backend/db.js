const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://NAME:PASSWORD@cluster0.drcpyjj.mongodb.net/DATABASE_NAME")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

});

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo 
};