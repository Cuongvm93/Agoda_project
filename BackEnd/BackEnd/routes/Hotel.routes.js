const {getAllHotel,getOneHotel}=require('../controller/Hotel.controller')
const express=require('express')
const router=express.Router()
router.get("/",getAllHotel)
router.get("/:id",getOneHotel)
module.exports=router