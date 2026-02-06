import { connectDB } from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./Routes/userRoutes.js";
import  authUserRoute from "./Routes/athuserRouters.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(cors())

 connectDB()
 app.use('/api/user', userRoute);
 app.use('/api/auth', authUserRoute)
 app.listen(PORT, () => {
    console.log(`your server is runing in ${PORT}`);
 })