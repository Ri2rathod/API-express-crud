import express  from "express";  
import db from '../config/db.confg.js';


const router=express.Router();

router.get('/',(req,res)=>{
    let sql='SELECT * FROM `user`';

    db.query(sql,(err,data,fields)=>{
       if(err) throw err;
    //    res.json({
    //     status:200,
    //     data,
    //     message:"user list retiver successfully"
    //    });
       res.render('index',{data:data,notification_massage: req.query.massage ,script:" new bootstrap.Toast(document.querySelector('#liveToast')).show();"});
    
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
       res.redirect('/user?massage=User Data Insert Sussessfully');
    });

});


router.get('/:id',(req,res)=>{
    let userID=req.params.id;

    let sql='SELECT * FROM `user` WHERE `userID`= ?';

    db.query(sql,userID,(err,data,fields)=>{
       if(err) throw err;
       res.json({
        status:200,
        data,
        message:"user list retiver successfully"
       });
    
    });
});


router.delete('/:id',(req,res)=>{
    let userID=req.params.id;

    let sql='DELETE FROM `user` WHERE `userID`= ?';

    db.query(sql,userID,(err,data,fields)=>{
       if(err) throw err;
        res.redirect('/user?massage=User Data Delete Sussessfully');
    });
});




export default router;
