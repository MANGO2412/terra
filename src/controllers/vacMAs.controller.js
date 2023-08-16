import VacunaMas from '../models/Vacuna_mascota.js';


export const createMasDetail=async (req,res)=>{
    try {
        const  vacmas=new VacunaMas(req.body)
        const vacmasSaved= await vacmas.save()
        return res.json(vacmasSaved)

    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong creating the animal",
          });
    }
}

//update 
export const updateMasDetail=async(req,res)=>{
      if(!req.body){
          return res.status(400).send({
            message:"Data update cannot bet empty"
          });
      }

      const {id}=req.params;

      try {
        const update=await VacunaMas.findByIdAndUpdate(id,req.body);
      
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
export const findAllMasDetail=async(req,res)=>{
    try {
      const vm=await VacunaMas.find();  
      return res.json(vm)
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong retrieving the  pets",
      }); 
    }
}

//delete
export const deleteMasDetail=async (req,res)=>{
   const id=req.params.id;

   try {
     const data=await VacunaMas.findByIdAndDelete(id);
     
  
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
