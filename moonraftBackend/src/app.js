const express=require('express');
const path=require("path");
const app=express();
const port=process.env.PORT || 3000;
require("./db/conn");



const Register=require("./models/index");
const {json}=require('express');

// const static_path=path.join(__dirname,"../public")
// app.use(express.static(static_path));
// app.use(express.json());
app.use(express.urlencoded({extended:false}))

// app.use(express.static(static_path))


app.set("view engine","hbs")

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/register",(req,res)=>{
    res.render("register");
})



app.post("/register", async (req,res)=>{

    try{
        const registrationEmployee=new Register({   
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password

        })
        const registeredData= await registrationEmployee.save();
        res.status(201).render("index");

    }
    catch(error){
        res.status(404).send(error)
    }
})




app.listen(port,()=>{
    console.log(`server is running at port number ${port}`)
})