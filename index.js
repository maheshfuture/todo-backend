//const express  = require("express");
import express from "express"
import mongoose from "mongoose";
//const user = mongoose.model("user")
//import user from mongoose.model("user")
const app = express();

const PORT = 5000;
app.use(express.json()) 


mongoose.connect("mongodb+srv://mahesh123:CSiToOPSW0MWfrdr@cluster0.8t13h5t.mongodb.net/")
mongoose.connection.on("connected", () => {console.log("Connected to database")})
mongoose.connection.on("error", () => {console.log("Error connecting to database")})

app.post("/create",(req,res)=>{
    console.log(req.body)
    let newUser = new user({
        title: title,
        description: description,
        status: status
    })
    newUser.save()  // async in nature
                    .then((savedUser)=>{
                       if(!savedUser){
                          return res.send({error: "User not saved"})
                       }
                       return res.send({success: true, message: "User saved successfully", data: savedUser})
                    })
                    .catch(err => console.log(err))
                    res.send({success:true, message:"user saved successfully",data:req.body})
                    const {title,description,status}=req.body
                })
    


app.get("/read",(req,res)=>{
    
    return res.send({success: true, message: "You are reading the data", data: req.user})
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})