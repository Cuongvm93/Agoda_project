const db=require('../utils/databse')
module.exports.getAllHotelbyCity=(id_hotel)=>{
    return db.query(`select * from hotel where city_name='${id_hotel}' `)
}
module.exports.getAllHotel=()=>{
    return db.query('select * from hotel')
}
module.exports.getDistrictBycity=(id_hotel)=>{
    return db.query(`select district, count(district) as counts from hotel where city_name='${id_hotel}' group by district`)
}