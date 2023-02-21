const {getAllCity} =require("../model/city.model")
module.exports.getAllcity=async(req,res)=>{
    try{
        let [result]=await getAllCity()
    res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}