const mysql=require('mysql2')
const pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'Agoda_schema'
})
const db=pool.promise()
module.exports=db