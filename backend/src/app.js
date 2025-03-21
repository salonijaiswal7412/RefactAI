const express=require('express');
const app=express();
const aiRoutes=require('./routes/ai.routes')

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello i am working");
})
app.use('/ai',aiRoutes)
module.exports=app;