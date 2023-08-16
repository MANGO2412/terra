import { Schema,model } from "mongoose";

const VacuSchema=new Schema({
     nombre:{
        type:String,
        required:true,
        trim:true
     },
     proposito:{
        type:String,
        required:true,
        trim:true
     }
},
{
    versionKey: false,
    timestamps: true,    
})


VacuSchema.method('toJSON',function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})


export default model('Vacuna',VacuSchema)