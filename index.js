import express from "express";
import bodyParser from 'body-parser';

import env from 'dotenv' ;
env.config();


import userRouter from './routes/user.js';

const app=express();

app.use(bodyParser.json());
app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.send('thisn is home pages');
});

app.listen(process.env.PORT,()=>console.log(`Server Running on the port: http://localhost:${process.env.PORT}`));