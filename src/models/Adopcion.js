import { Schema,model } from "mongoose";

const AdoptSchema=new Schema({
   usuario:{
    type: Schema.Types.ObjectId,  // Cambio aquí
    ref: "usuarios",              // Referencia al modelo de Usuario
    required: true,
   },
   mascota:{
    type: Schema.Types.ObjectId,  // Cambio aquí
    ref: "mascotas",              // Referencia al modelo de Usuario
    required: true,
   },
   status:{
     type:Boolean,
     required:true
   }
},
{
    versionKey: false,
    timestamps: true,
})


AdoptSchema.method('toJSON',function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})


export default model("Adopcion",AdoptSchema);

