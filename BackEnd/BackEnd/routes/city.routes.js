const {getAllcity}=require('../controller/city.controller')
const express=require('express')
const router=express.Router()
router.get("/",getAllcity)
module.exports=router
