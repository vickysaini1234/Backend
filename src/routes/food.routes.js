const express=require("express")
const foodController=require("../controllers/food.controllers")
const authMiddleware=require("../middlewares/auth.middleware")
const router=express.Router()
const multer=require("multer")
const upload=multer({
    storage:multer.memoryStorage(),
})

// post/api/food/ [protected]

router.post('/',authMiddleware.authFoodPartnerMiddleware,upload.single("video"),foodController.createFood)

// get/api/food/ [protected]
router.get('/',authMiddleware.authUserMiddleware,foodController.getFoodItem)

module.exports=router 