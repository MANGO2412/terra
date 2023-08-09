import Mascotas from "../models/Mascotas.js";

//insert 
export const createMascotas=async (req,res)=>{
    try {
        const anim=new Mascotas(req.body)
        const animSaved= await anim.save()
        return res.json(animSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong creating the animal",
          });
    }
}

//update 
export const updateMas=async(req,res)=>{
      if(!req.body){
          return res.status(400).send({
            message:"Data update cannot bet empty"
          });
      }

      const {id}=req.params;

      try {
        const update=await Mascotas.findByIdAndUpdate(id,req.body);
      
        if (!update)
            return res.status(404).json({
              message: `Cannot update  with ${id}. Maybe the pet does not exists`,
            });

        return res.json(update)
  
      } catch (error) {
        res.status(500).json({
          message: `Error updating the pet with id ${id}`,
        })
      }
}

//find all
export const findAllMas=async(req,res)=>{
    try {
      const pet=await Mascotas.find();  
      return res.json(pet)
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong retrieving the  pets",
      }); 
    }
}


//email and password



//finde by emali and password
//delete
export const deleteMas=async (req,res)=>{
   const id=req.params.id;

   try {
     const data=await Mascotas.findByIdAndDelete(id);
     
  
     if(!data){
      return res.status(404).json({
        message: `Cannot delete pets with id=${id}. Maybe the pets does not exists`,
      });
     }
       

     return res.sendStatus(200);
   } catch (error) {
     
     res.status(500).json({
      message: error.message|| `Could not delete pets with id = ${id}`,
    });
   }
}

