import express from "express";
import session from 'express-session';
import flash from 'connect-flash';
import methodOverride from 'method-override';
import morgan from "morgan";
import  logger from "./config/winston.js";
import userRouter from './routes/user.js';
import env from 'dotenv' ;

env.config();

const app=express();


app.use(session({
    secret:'djhxcvxfgshajfgjhgsjhfgsakjeauytsdfy',
    resave:false,
    saveUninitialized:false
}));
app.use(flash());
app.use(morgan('combined',{ 'stream': logger.stream }));
app.use(express.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

app.use('/user',userRouter);


app.get('/',(req,res)=>{
    res.send('Wellcome to crud api');
});

app.listen(process.env.PORT,()=>console.log(`Server Running on the port: http://localhost:${process.env.PORT}`));