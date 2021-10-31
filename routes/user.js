import express  from "express";  
import db from '../config/db.confg.js';


const router=express.Router();

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

router.post('/')




export default router;
