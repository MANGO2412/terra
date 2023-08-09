// s
import usuarios from "../models/usuarios.js"
//insert 
export const createUser=async (req,res)=>{
    try {
        const user=new usuarios(req.body)
        const userSaved= await user.save()
        return res.json(userSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong creating the user",
          });
    }
}

//update 
export const updateUser=async(req,res)=>{
      if(!req.body){
          return res.status(400).send({
            message:"Data update cannot bet empty"
          });
      }

      const {id}=req.params;

      try {
        const update=await usuarios.findByIdAndUpdate(id,req.body);
      
        if (!update)
            return res.status(404).json({
              message: `Cannot update  with ${id}. Maybe the tutorial does not exists`,
            });

        return res.json(update)
  
      } catch (error) {
        res.status(500).json({
          message: `Error updating tutorial with id ${id}`,
        })
      }
}

//find all
export const findAllUser=async(req,res)=>{
    try {
      const users=await usuarios.find();  
      return res.json(users)
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong retrieving the users",
      }); 
    }
}


//email and password
export  const log=async(req,res)=>{
   try {
      const {correo,contrasena}=req.body
      const data=await usuarios.find({correo,contrasena})
       
      if (!data)
      return res.status(404).json({
        message: `the use doesn't exist`,
      });
      
      res.json(data)
   } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
   }
}



//finde by emali and password
//delete
export const deleteUser=async (req,res)=>{
   const id=req.params.id;

   try {
     const data=await usuarios.findByIdAndDelete(id);
     
  
     if(!data){
      return res.status(404).json({
        message: `Cannot delete user with id=${id}. Maybe the user does not exists`,
      });
     }
       

     return res.sendStatus(200);
   } catch (error) {
     
     res.status(500).json({
      message: error.message|| `Could not delete user with id = ${id}`,
    });
   }
}



