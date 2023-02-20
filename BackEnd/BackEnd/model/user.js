const db=require("../utils/databse")
module.exports.getAllUser= async()=>{
    return db.query('select * from customer')
}