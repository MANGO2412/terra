import { Schema,model } from "mongoose";

const MascSchema=new Schema({
   nombre:{
     type:String,
     required:true,
     trim:true
   },
   especie:{
     type:String,
     required:true,
     trim:true
   },
   raza:{
    type:String,
    required:true,
    trim:true
   },
   edad:{
    type:Number,
    required:true,
    trim:true
   },
   tamano:{
     type:Number,
     required:true,
     trim:true 
   },
    descr:{
    type:String,
    required:true,
    trim:true
   },
   employe:{
    type:String,
    required:true,
   }
},
{
    versionKey: false,
    timestamps: true,
})


MascSchema.method('toJSON',function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})


export default model("Mascotas",MascSchema);

