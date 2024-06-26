import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import path from 'path'
import {app, server} from './socket/socket.js'
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import { connectDB } from "./db/connectToDB.js";


const PORT = 5000;
dotenv.config();

const __dirname = path.resolve();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,'/frontend/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})
// app.get('/',(req,res)=>{
//     // root route https://localhost:5000/
    
//     res.send("hello world!")
// })


server.listen(PORT,()=>{
    connectDB();
    console.log(`server is listening on ${PORT}`)
   
});