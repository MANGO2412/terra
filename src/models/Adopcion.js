import { Schema,model } from "mongoose";

const AdoptSchema=new Schema({
   usuario:{
     type:String,
     required:true,
     trim:true
   },
   mascota:{
     type:String,
     required:true,
     trim:true
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

