const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect('mongodb+srv://ashishvispute306:AFywzDalWMdPCMW3@cluster0.dmsasva.mongodb.net/');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports={todo};