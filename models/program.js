import mongoose, {model, Schema} from "mongoose";


const ProgramSchema = new Schema({
    Name: {
        type:String,
        requiire: [true,'Name is required'],
        unique: true,
    },
    tipo: {
        type:String,
        requiire: [true,'Tipo is required'],
        unique: true,
    },
    codigo_programa: {
        type:Number,
        requiire: [true,'Codigo_Programa required'],
        unique: true,
    },
    cantidad_niveles: {
        type:Number,
        requiire: [true,'cantidad_aprendices is required'],
        unique: true,
    },
    estado: {
        type: String,
        enum: ['activo', 'inactivo'], // Permite solo estos valores
        default: 'activo' // Valor por defecto
    }

});

export default model('Program', ProgramSchema, 'program')
