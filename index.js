const express = require("express");
const app= express();
require('dotenv').config();



const path=require("path"); 

app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

const mongoose=require("mongoose");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect(process.env.DATABASE_URI);
}

const userSchema=new mongoose.Schema({
    username:String,
    phonenumber:String,
    scholarnumber:String
});

// const Userdata=mongoose.model("Userdata",userSchema); //new collection
const users=mongoose.model("users",userSchema);

mongoose.connection.once('open',()=>{
    console.log('conneted 1')
    app.listen(process.env.PORT,()=>{
        console.log("listening");
    })
})

mongoose.connection.on('error',err=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/register",(req,res)=>{
    res.render("register.ejs");
});

app.post("/register",(req,res)=>{
    let{username,phonenumber,scholarnumber}=req.body;
    users.create({username,phonenumber,scholarnumber});
    users.find().then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err);
    });
    res.redirect("/");
});
