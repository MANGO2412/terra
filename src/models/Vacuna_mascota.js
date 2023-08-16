import { Schema,model } from "mongoose";

const VacuMasSchema=new Schema({
     vacuna:{
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


VacuMasSchema.method('toJSON',function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})


export default model('VacunaMas',VacuMasSchema)