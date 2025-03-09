const express = require('express');
const app = express();

app.use("/firstpath",(req,res)=>{
    res.send("firstpath")
 //   console.log('We got a new request');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});