let express=require("express");
let mongoose=require("mongoose")
require("dotenv").config();
let enquiryModel = require("./models/enquirymodel.js");

//connect to mongodb using mongoose
let app=express();
app.use(express.json());


app.post("/api/enquiry-insert",(req,res)=>{
    
    let {sName,sEmail,sMessage,sPhone}=req.body;
  
    let enquiry= new enquiryModel({
        name:sName,
        phone:sPhone,
        message:sMessage,
        email:sEmail
    })
    enquiry.save().then(()=>{
        res.send({status:1,msg:"Enquiry saved succesfully"})
        
    }).catch((err)=>{
       res.send({status:0,msg:"error while saving enquiry",error:err})
    })
    
})

app.get("/api/enquiry-list",async(req,res)=>{
   let enquiryList=await enquiryModel.find();
   res.status(200).json({status:1,msg:"Enquiry List",data:enquiryList})
})

app.delete("/api/enquiry-delete/:id",async(req,res)=>{
    let enquiryId=req.params.id;
    let deletedEnquiry=await enquiryModel.deleteOne({_id:enquiryId})
    res.send({status:1,msg:"deleted successfully",id:enquiryId,delRes:deletedEnquiry}) 
})

app.put("/api/enquiry-update/:id",async(req,res)=>{
    let enquiryId=req.params.id;
    let {sName,sEmail,sMessage,sPhone}=req.body;
  
    let updateObj={
        name:sName,
        phone:sPhone,
        message:sMessage,
        email:sEmail
    }
    
    let updateRes=await enquiryModel.updateOne({_id:enquiryId},updateObj)
    res.send({status:1,msg:"data updated successfully",updateRes})
})

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("DB connected");

    app.listen(process.env.PORT,()=>{
        console.log("server is running on port" + process. env. PORT);
    })
});