const express = require("express");
const { createTodo, updateTodo } =  require("./types")
const {todo}=require("./db")
const app = express();

app.use(express.json());

app.get('/todos', async (req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.post('/todos', async (req,res)=>{
    const createPayload = req.body;
    const response = createTodo.safeParse(createPayload);
    if(!response.success){
        res.status(411).json({
            msg:" You sent the wrong inputs"
        })
    }
    const title= req.body.title;
    const description= req.body.description;
    const completed = false;
    //console.log(title, descriptio);

     await todo.create({
        title,
        description,
        completed
      })
    // return;
    res.json({
        message: 'todo created successfully'
    })
})

app.put('/completed', async (req,res)=>{
    const upadatePayload = req.body;
    const response = updateTodo.safeParse(upadatePayload);
    if(!response.success){
        res.status(411).json({
            msg:" You sent the wrong inputs"
        })
    }

    await todo.updateOne({
          _id: req.body.id },
        { completed:true }
        );

    res.json({
        message: 'todo marked completed'
    })
})







app.listen(3000, ()=>{
    console.log("Listening to port 3000");
})