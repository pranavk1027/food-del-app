// npm install
// express-backend
// mongoose-to help connect to db 
// jsonwebtoken-for auth 
// bcrypt-to encrypt and store user data in db 
// cors -give the permision for frontend to connect to backend 
// dotenv-use environment variable 
// body-parser -parse user data
// multer-we can create image store system 
// stripe-payment gateway 
// validator-check pass & email is valid 
// nodemon-when save server restart
 //npm run server (execute server.js)


 import express from "express"
 import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import  'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//app config
const app=express();
const port=4000;

//middleware
app.use(express.json())//whenever req from frontend to backend it will be parsed by json
app.use(cors());//can access backend from any frontend

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
});


