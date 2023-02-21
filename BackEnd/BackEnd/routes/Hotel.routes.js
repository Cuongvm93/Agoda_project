const {getAll}=require('../controller/Hotel.controller')
const express=require('express')
const router=express.Router()
router.get("/:id",getAll)
module.exports=router