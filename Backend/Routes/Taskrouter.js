const Router = require('express');
const router = Router();
const Task = require("../Models/Taskmodel")

//GET ALL TASKS
router.get("/",async(req,res)=>{
    try{
       const showalltasks = await Task.find();
       res.status(200).json(showalltasks);
    }
    catch(error){
        console.log("error is : ",error);
    }
})


//CREATE NEW TASK BY ID
router.post("/",async(req,res)=>{
    const data = req.body;
    try{
      const modelcreate = new Task(data);
      await modelcreate.save();
      res.status(201).json(modelcreate)
    }
    catch(error){
        console.log("error  is :",error);
    }
})


//  DELETE THE TASK BY ID
router.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const deletetask = await Task.findByIdAndDelete(id);
        res.status(200).json(deletetask)
    }catch(error){
     console.log("error is :",error)
    }
})


//UPADATE THE TASK
router.put("/:id",async(req,res)=>{
    try{
        const {id} = req.params;
    //    const {taskname} = req.params;
        const updatetask = await Task.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatetask);

    }
    catch(error){
     console.log("error is :" ,error)
    }
})



module.exports = router;


