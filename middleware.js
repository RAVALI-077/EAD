const express=require('express');
const app=express();
const path=require('path');
app.use((req,res,next)=>{
    console.log(`${req.method},${req.url}`);
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.get('/home',(req,res) =>{
    res.send("welcome to home page");
});
app.get('/contact',(req,res)=>{
    res.send("welcome to contact page");
});
app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");

});