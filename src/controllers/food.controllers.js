const foodModel=require("../models/food.model")
const storageServices=require("../serveces/storage.service")
const { v4:uuid}=require("uuid")

 async function createFood(req,res){

   
    //  console.log(req.foodPartner);
    // console.log(req.body);
    // console.log(req.file);
   
    
        if (!req.file) {
        return res.status(400).json({
            message: "File not uploaded"
        }); 
    }
    const fileUploadResult=await storageServices.uploadFile(
        req.file.buffer,
        uuid()
    );
    
    const foodItem=await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner._id,
    })

    res.status(201).json({
        message:"food item create successfully",
       food: foodItem
    })
    
  

} 



async function getFoodItem(req,res){
     
    const foodItems=await foodModel.find({})

    res.status(200).json({
        message:"food item fatch successfully",
        foodItems
    })


}




module.exports={
    createFood,
    getFoodItem
}