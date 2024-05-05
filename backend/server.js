import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import { connectDB } from "./db/connectToDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth",authRoutes);

app.get('/',(req,res)=>{
    // root route https://localhost:5000/
    res.send("hello world!")
})




app.listen(PORT,()=>{
    connectDB();
    console.log(`server is listening on ${PORT}`)
});