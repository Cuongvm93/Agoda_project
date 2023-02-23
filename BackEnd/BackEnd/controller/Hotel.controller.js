const {getAllHotelbyCity,getAllHotel,getDistrictBycity}=require('../model/Hotel.model')
module.exports.getAll=async(req,res)=>{
    try{
        let result=await Promise.all([getAllHotelbyCity(req.params.id),getDistrictBycity(req.params.id)])
        res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.getAllHotel=async(req,res)=>{
    try{
        let [result]=await getAllHotel()
        res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}