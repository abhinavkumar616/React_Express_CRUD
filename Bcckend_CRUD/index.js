const express = require("express")
const Dec = require("./modules/Dec")
require('./dbConnect')

const app = express()
app.use(express.json())


app.post("/dec", async (req, res) => {
    try {
        var data = new Dec(req.body)
        await data.save()
        res.send({ result: "Done", message: "Data inserted successfully" })
    } catch (error) {
        // console.log(error);
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})


app.get("/dec", async (req, res) => {
    try {
        var data = await Dec.find()
        res.send({ result: "Done", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Srver Error" })
    }
})

app.get("/dec/:_id", async (req, res) => {
    try {
        var data = await Dec.findOne({ _id: req.params._id })
        if (data) {
            res.send({ result: "Done", data: data })
        }
        else {
            res.status(404).send({ result: "Fail", message: "Invalid Id" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internal Srver Error" })
    }
})

app.put("/dec/:_id",async(req,res)=>{
    try{   
        var data=await Dec.findOne({_id:req.params._id})
        if(data){
            data.name=req.body.name
            data.email=req.body.email
            data.phone=req.body.phone
            data.state=req.body.state
            data.pincode=req.body.pincode
            data.aadhar=req.body.aadhar

            await data.save()
            res.send({result:"Done",message:"Record is Updated"})
        }
        else{
            res.status(404).send({result:"Fail",message:"Invalid Id"})
        }
    }catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})


app.patch("/dec/:_id",async(req,res)=>{
    try{   
        var data=await Dec.findOne({_id:req.params._id})
        if(data){
            data.phone=req.body.phone
            await data.save()
            res.send({result:"Done",message:"Record is Updated"})
        }
        else{
            res.status(404).send({result:"Fail",message:"Invalid Id"})
        }
    }catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})

app.delete("/dec/:_id",async(req,res)=>{
    try{
        var data=await Dec.findOne({_id:req.params._id})
        if(data){
            await data.delete()
            res.send({result:"Done",message:"Data Deleted Successfully"})
        }
        else{
            res.status(404).send({result:"Fail",message:"Invalid Id"})
        }
    }catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})


app.get("/dec", async (req, res) => {
    try {
        var data = await Dec.findOne({ _id: req.query._id })
        res.render("update", { data: data })
    }
    catch (error) {
        res.redirect("/")
    }
})

app.post("/dec/:_id",  async (req, res) => {
    console.log("abcd");
    try {
        const data = await Dec.findOne({ _id: req.params._id })
        
        data.name = req.body.name ?? data.name
        data.email = req.body.email ?? data.email
        data.phone = req.body.phone ?? data.phone
        data.state = req.body.state ?? data.state
        data.pincode = req.body.pincode ?? data.pincode
        data.aadhar = req.body.aadhar ?? data.aadhar
        await data.save()
        res.redirect("/")
    }
    
    catch (error) {
        res.render("add", { show: true })
    }
})

app.listen(8000, () => {
    console.log("Server is connecting with 8000 PORT");
})