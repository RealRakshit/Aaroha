const express = require("express");
const app= express();

let port=8080;

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
    await mongoose.connect("mongodb://127.0.0.1:27017/userdata");
}

const userSchema=new mongoose.Schema({
    username:String,
    phonenumber:String,
    scholarnumber:String
});

const Userdata=mongoose.model("Userdata",userSchema);


app.listen(port,()=>{
    console.log("listening");
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/register",(req,res)=>{
    res.render("register.ejs");
});

app.post("/register",(req,res)=>{
    let{username,phonenumber,scholarnumber}=req.body;
    Userdata.create({username,phonenumber,scholarnumber});
    Userdata.find().then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err);
    });
    res.redirect("/");
});
