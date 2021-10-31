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

router.post('/',(req,res)=>{

    let data=[
       req.body.username,
       req.body.gender,
       req.body.address
    ]

    let sql='INSERT INTO `user`  (`userName`,`userGen`,`userAdd`) VALUES (?, ?, ?)' ;

    db.query(sql,data,(err,data)=>{
        if(err) throw err;
       res.json({
        status:200,
        data,
        message:"User Data Insert Sussessfully"
       });
    });

});




export default router;
