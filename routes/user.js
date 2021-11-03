import express, { json }  from "express";  
import db from '../config/db.confg.js';

import flash from 'connect-flash';

const router=express.Router();

router.get('/',(req,res)=>{
    let sql='SELECT `userID`, `userName`, `userGen`, `userAdd` FROM `user`';

    db.query(sql,(err,data,fields)=>{
       if(err) throw err;

        let msg= req.flash('message');
        if(msg =='')
        {
            res.render('index',{data:data});
        }
        else
        {
            res.render('index',{data:data,notification_massage:msg ,script:" new bootstrap.Toast(document.querySelector('#liveToast')).show();"});
        }

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
        req.flash('message','Data was Successfully inserted');
        
       res.redirect('/user');
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
        req.flash('message', 'Data Remove of '+userID);
        res.redirect('/user');
    });
});


router.patch('/',(req,res)=>{
    var req_data=[
        req.body.username,
        req.body.gender,
        req.body.address,
        req.body.userID,
     ];

     let sql='UPDATE `user` SET `userName`= ? ,`userGen`= ? ,`userAdd`=?  WHERE `userID`= ?';

     db.query(sql,req_data,(err,data,fields)=>{
        if(err) throw err;
        req.flash('message','Data Updated of User '+  req_data[3]);
        res.redirect('/user');
     });


});

export default router;
