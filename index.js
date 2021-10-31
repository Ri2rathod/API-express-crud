import express from "express";
import bodyParser from 'body-parser';
import morgan from "morgan";
import  logger from "./config/winston.js";
import userRouter from './routes/user.js';
import env from 'dotenv' ;

env.config();

const app=express();

app.use(morgan('combined',{ 'stream': logger.stream }));

app.use(bodyParser.json());

app.use('/user',userRouter);


app.get('/',(req,res)=>{
    res.send('thisn is home pages');
});

app.listen(process.env.PORT,()=>console.log(`Server Running on the port: http://localhost:${process.env.PORT}`));