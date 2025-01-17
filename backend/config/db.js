import mongoose from "mongoose";

 export const connectDB=async()=>{
    await mongoose.connect(`mongodb+srv://greatStack:iamthebestthesuperior@cluster0.y5psb.mongodb.net/food-del`).then(()=>console.log("DB connected"));
}