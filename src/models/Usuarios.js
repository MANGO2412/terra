import { Schema,model } from "mongoose";

const userSchema=new Schema({
   nombre:{
     type:String,
     required:true,
     trim:true
   },
   apellido:{
     type:String,
     required:true,
     trim:true
   },
   correo:{
    type:String,
    required:true,
    trim:true
   },
   contrasena:{
    type:String,
    required:true,
    trim:true
   },
   direccion:{
     type:String,
     required:true,
     trim:true 
   },
   tel:{
    type:String,
    required:true,
    trim:true
   },
},
{
    versionKey: false,
    timestamps: true,
})


userSchema.method('toJSON',function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})


export default model("usuarios",userSchema);


