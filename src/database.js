import mongoose from "mongoose";
import { mongodbURL } from "./config.js";
(async ()=>{
    try {
        const db=await mongoose.connect(mongodbURL);
        console.log("Database connected ",db.connection.host)
    } catch (error) {
        console.log(error.message)
    }
})()
