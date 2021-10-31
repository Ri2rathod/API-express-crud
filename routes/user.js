import express  from "express";  
const router=express.Router();
import db from '../db.confg.js';


router.get('/',(req,res)=>{
    let sql='SELECT * FROM `user`';

    db.query(sql,(err,data,fields)=>{
       if(err) throw err;
       res.json({
        status:200,
        data,
        message:"user list retiver successfully"
       });
    });


});


export default router;
