const express = require("express");

const app = express();

app.use(express.json());

app.get('/todos', (req,res)=>{
    res.send("Hello");
})

app.post('/todos', (req,res)=>{
    res.send("Hello");
})

app.put('/todos', (req,res)=>{
    res.send("Hello");
})







app.listen(3000, ()=>{
    console.log("Listening to port 3000");
})