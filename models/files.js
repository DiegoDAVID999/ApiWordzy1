import mongoose, {model, Schema} from "mongoose";


const FilesSchema = new Schema({
    fileNumber: {
        type:Number,
        requiire: [true,'file number is required'],
        unique: true,
    },
    programa: {
        type:String,
        requiire: [true,'Program is required'],
        unique: true,
    },
    istructor: {
        type:String,
        requiire: [true,'Instructor is required'],
        unique: true,
    },
    cantidad_aprendices: {
        type:Number,
        requiire: [true,'cantidad_aprendices is required'],
        unique: true,
    },
    startDate: {
        type:Date,
        default:''
    },
    endDate: {
        type:Date,
        default:''
    },
    level: {
        type:Number,
        requiire: [true,'level is required'],
        unique: true,
    },
    estado: {
        type: String,
        enum: ['activo', 'inactivo'], // Permite solo estos valores
        default: 'activo' // Valor por defecto
    }




})

export default model('Files', FilesSchema, 'files')