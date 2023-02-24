const {getAllHotelbyCity,getAllHotel,getDistrictBycity,getoneHotel}=require('../model/Hotel.model')

module.exports.getAllHotel=async(req,res)=>{
    try{
        let [result]=await getAllHotelbyCity(req.params.id)
        res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.getOneHotel=async(req,res)=>{
    try{
        let [result]=await getoneHotel(req.params.id)
        res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}