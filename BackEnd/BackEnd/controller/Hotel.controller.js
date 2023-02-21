const {getAllHotelbyCity,getAllHotel}=require('../model/Hotel.model')
module.exports.getAll=async(req,res)=>{
    try{
        let [result]=await getAllHotelbyCity(req.params.id)
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