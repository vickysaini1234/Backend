const mongoose=require("mongoose")

function connectDB(){
    try {

        mongoose.connect(process.env.MONGOOSE_URL)
        console.log("connected DB");
        
        
    } catch (error) {
        console.log("not connected ",error);
        
        
    }
}

module.exports=connectDB