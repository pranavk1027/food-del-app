import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"

import multer from "multer"


const foodRouter=express.Router();//using this router we can create get ,post etc method

//Image Storage Engine

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
            return  cb(null,`${Date.now()}${file.originalname}`) //to make file name unique
    }
})
const upload=multer({storage:storage})  //middleware upload is created


foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood);



export default foodRouter;


