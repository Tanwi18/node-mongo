const express=require('express');

const app=express();

app.get('/',(req,res)=>res.send("Thank you for calling me"));
app.listen(3003,()=>console.log('Listening to the port 3003'));