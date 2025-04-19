const enquiryModel = require("../../models/enquirymodel");

let enquiryInsert=(req,res)=>{
    
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
}

let enquiryList= async(req,res)=>{
    let enquiryList=await enquiryModel.find();
    res.status(200).json({status:1,msg:"Enquiry List",data:enquiryList})
 }
let deleteEnquiry=async(req,res)=>{
    let enquiryId=req.params.id;
    let deletedEnquiry=await enquiryModel.deleteOne({_id:enquiryId})
    res.send({status:1,msg:"deleted successfully",id:enquiryId,delRes:deletedEnquiry}) 
}
let updateEnquiry=async(req,res)=>{
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
}
module.exports={enquiryInsert,enquiryList,deleteEnquiry,updateEnquiry}