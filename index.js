
const express = require('express');
const app = express();
const port= 2000
const hostName = 'localhost';
app.set("view engine","ejs");


app.use(express.urlencoded({ extended: true }));

app.get("/addsUser",(req,res)=>{
    res.render("adds");
})

let googleForm = []
app.post("/addsName",(req,res)=>{
    console.log(req.body);

    googleForm.push(req.body);
    res.render("list",{data: googleForm})
    
    
})









app.listen(port,hostName,()=>{
    console.log(`${hostName} :${port}`);
    
})