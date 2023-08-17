import  express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app=express();

//setting
app.set("port",process.env.PORT||8000);




app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(router)
app.get("/",(req,res)=>{
    res.json({message:"welcome to the application"})
})



export default app;