import { Router } from "express";
import { createProgram, getProgramById, getPrograms, updateProgram, deleteProgram } from "../controllers/programControllers.js";


const routesProgram = Router();

// Crear un nuevo programa
routesProgram.post('/', createProgram);

// Obtener todos los programas
routesProgram.get('/', getPrograms);

// Obtener un programa por ID
routesProgram.get('/:id', getProgramById);

// Actualizar un programa
routesProgram.put('/:id', updateProgram);

// Eliminar un programa
routesProgram.delete('/:id', deleteProgram);

export default routesProgram;