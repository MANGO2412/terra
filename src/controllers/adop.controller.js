import Adopcion from "../models/Adopcion.js";
import mongoose, { ObjectId } from "mongoose";
//insert 
export const createAdopt=async (req,res)=>{
    const data=req.body;
    data.status=false
    try {
        const adop=new Adopcion(data)
        const adopSaved= await adop.save()
        return res.json(adopSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong creating the animal",
          });
    }
}

//update 
export const updateAdop=async(req,res)=>{
      if(!req.body){
          return res.status(400).send({
            message:"Data update cannot bet empty"
          });
      }

      const {id}=req.params;

      try {
        const update=await Adopcion.findByIdAndUpdate(id,req.body);
      
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
export const findAllAdop=async(req,res)=>{
    try {
      const adop=await Adopcion.aggregate([
        {
          $lookup: {
            from: "usuarios",
            localField: "usuario",
            foreignField: "_id",
            as: "informacionUsuario",
          },
        },
        {
          $lookup: {
            from: "mascotas",
            localField: "mascota",
            foreignField: "_id",
            as: "informacionMascota",
          },
        },
        {
          $unwind: "$informacionUsuario",
        },
        {
          $unwind: "$informacionMascota",
        },
       ]);  
      return res.json(adop)
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something went wrong retrieving the  pets",
      }); 
    }
}




//show list adoption
export const  findByUser=async (req,res)=>{
   try {
    const usuarioId =new  mongoose.Types.ObjectId(req.params.id)
     const adop=await Adopcion.aggregate([
      {
        $lookup: {
          from: "usuarios",
          localField: "usuario",
          foreignField: "_id",
          as: "informacionUsuario",
        },
      },
      {
        $lookup: {
          from: "mascotas",
          localField: "mascota",
          foreignField: "_id",
          as: "informacionMascota",
        },
      },
      {
        $match: { usuario: usuarioId },
      },
      {
        $unwind: "$informacionUsuario",
      },
      {
        $unwind: "$informacionMascota",
      },
     ])

     res.json(adop)
   } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong retrieving the  pets",
    }); 
   }
}



//finde by emali and password
//delete
export const deleteAdop=async (req,res)=>{
   const id=req.params.id;

   try {
     const data=await Adopcion.findByIdAndDelete(id);
     
  
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


