import Vacuna from '../models/Vacuna.js';


export const createVaccune=async (req,res)=>{
    try {
        const vac=new Vacuna(req.body)
        const vacSaved= await vac.save()
        return res.json(vacSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong creating the animal",
          });
    }
}

//update 
export const updateVac=async(req,res)=>{
      if(!req.body){
          return res.status(400).send({
            message:"Data update cannot bet empty"
          });
      }

      const {id}=req.params;

      try {
        const update=await Vacuna.findByIdAndUpdate(id,req.body);
      
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
export const findAllVac=async(req,res)=>{
    try {
      const vac=await Vacuna.find();  
      return res.json(vac)
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong retrieving the  pets",
      }); 
    }
}



//delete
export const deleteVac=async (req,res)=>{
   const id=req.params.id;

   try {
     const data=await Vacuna.findByIdAndDelete(id);
     
  
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

