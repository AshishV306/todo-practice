const express = require("express");
const { createTodo, updateTodo } =  require("./types")

const app = express();

app.use(express.json());

app.get('/todos', (req,res)=>{
    res.send("Hello");
})

app.post('/todos', (req,res)=>{
    const createPayload = req.body;
    const response = createTodo.safeParse(createPayload);
    if(!response.success){
        res.status(411).json({
            msg:" You sent the wrong inputs"
        })
    }
    return;
})

app.put('/todos', (req,res)=>{
    const upadatePayload = req.body;
    const response = updateTodo.safeParse(upadatePayload);
    if(!response.success){
        res.status(411).json({
            msg:" You sent the wrong inputs"
        })
    }
    return;
})







app.listen(3000, ()=>{
    console.log("Listening to port 3000");
})