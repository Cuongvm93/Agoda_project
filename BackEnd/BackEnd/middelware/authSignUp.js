const {getAllUser}=require('../model/user')
module.exports.checkLogin=async(req,res,next)=>{
    const {email,password}=req.body;
    let result=await getAllUser()
    let error={}
    let find=result[0].find(item=>{
        return item.customer_email==email
    })
    if (find) {
        if (find.password!==password) {
            error['errPass']="error pass"
        }else{
            next()
        }
    }else{
        error['errEmail']="error email"
    }
    console.log(error);
    if (error.errEmail || error.errPass) {
        console.log(1111);
        res.status(500).json(error)
    }
}