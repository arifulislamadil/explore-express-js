const express=require("express");
const app = express();
const PORT = 5000;


app.get("/",(req,res)=>{
    const id = req.query.id;
    const name = req.query.name;
    res.send(`<h3>Id Number: ${id}</h3> And Student Name: <h4>${name}</h4>`)
})

app.listen(PORT)