const express=require("express")
const bodyparser=require("body-parser")
const cors=require("cors")
const cookieparser=require("body-parser")
const app=express()
const port=5001
const routerLogin=require('./routes/login.routes')
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use("/api/v1/login",routerLogin)

app.listen(port,()=>{
    console.log(`server is running on http://localhost/${port}`);
})