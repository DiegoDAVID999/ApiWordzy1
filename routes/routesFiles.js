import { Router } from "express";
import { createFile, getFileById, getFiles, updateFile, deleteFile } from "../controllers/fileControllers.js";

const routesFiles = Router();


// Crear un nuevo archivo
routesFiles.post('/', createFile);

// Obtener todos los archivos
routesFiles.get('/', getFiles);

// Obtener un archivo por ID
routesFiles.get('/:id', getFileById);

// Actualizar un archivo
routesFiles.put('/:id', updateFile);

// Eliminar un archivo
routesFiles.delete('/:id', deleteFile);

export default routesFiles;
