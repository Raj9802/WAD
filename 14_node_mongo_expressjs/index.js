const dbConnect = require('./mongodb')
const express = require('express') ;
const app = express();
app.use(express.json())

//get API

app.get('/getData',async(req,res)=>{
    
    let result = await dbConnect();
    result = await result.find().toArray();
    res.send(result);
})

// post API

app.post('/insertData',async(req,res)=>{
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data inserted Successfully")

})
// put API

app.put('/updateData/:name',async(req,res)=>{
    let result = await dbConnect();
    result=await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data updated Successfully")
})

// Delete API

app.delete('/deleteData/:name',async(req,res)=>{
    let result = await dbConnect();
    result=await result.deleteOne({name:req.params.name});
    res.send("Data deleted Succuessfully");
})
app.listen(3000);