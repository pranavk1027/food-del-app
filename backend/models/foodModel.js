import mongoose from "mongoose";

//create the scheema where we will decribe food model properties

const foodSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

//problem->when run this file again it will create the model again to solve this 
//if it already exists then no need
const foodModel= mongoose.models.food|| mongoose.model("food",foodSchema);


export default  foodModel;
