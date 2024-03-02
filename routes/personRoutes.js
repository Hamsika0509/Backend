const express=require("express");
const router=express.Router();
const Person=require("../models/Person");


router.post('/',async(req,res)=>{
    try{
      const newPerson=new Person(req.body);
      const response =await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  });
router.get('/',async(req,res)=>{
    try{
      const data=await Person.find();
      res.status(200).json(data);
    }
    catch(err){
       console.log("Error found");
      res.status(500).json({error:'Internal Server Error'});
    }
  })
router.get('/:designation',async(req,res)=>{
    const designation=req.params.designation;
    if(designation=="Student" || designation=="Professor" || designation=="Others"){
      const data=await Person.find({designation:designation});
      console.log("Data fetched successfully");
      res.status(200).json(data);
    }
    else{
      console.log("Designation is not found");
      res.status(404).json("Designation mentioned is wrong");
    }
});
router.put("/:id",async (req,res)=>{
  try{
    const personId=req.params.id;
    const updatedpersonData=req.body;
    const response= await Person.findByIdAndUpdate(personId,updatedpersonData,{
        new:true, //return the updated document
        runValidators:true, // run mongoose validation
    })
    if(!response){
        return res.status(404).json({error:"Person not found"});
    }
    console.log("data updated");
    res.status(200).json(response);
  }
  catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Error Found"});
  }
})
router.delete("/:id",async(req,res)=>{
    try{
        const personid=req.params.id;
        const response=await Person.findByIdAndDelete(personid);
        if(!response){
            return res.status(404).json({error:"Person data is not found"});
        }
        console.log("data is deleted");
        res.status(200).json({message:"Data deleted successfully"});

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

module.exports=router;