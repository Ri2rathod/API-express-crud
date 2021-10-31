import express from 'express';
import mysql from 'mysql';

import env from 'dotenv' ;
env.config();



const app=express();

let db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER ,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABADATABASE_NAMEE_USER
});

db.connect((err) => {  
    if(!err) {  
        console.log("Db Connection Succeed");  
    }  
    else{  
        console.log("Db connect Failed "+err);  
    }  
});  

export default db;