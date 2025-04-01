import Files from "../models/files.js";

// Obtener todos los archivos
export const getFiles = async (req, res) => {
    try {
        const files = await Files.find();
        res.json(files);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener archivos', error });
    }
};

// Obtener un archivo por ID
export const getFileById = async (req, res) => {
    try {
        const file = await Files.findById(req.params.id);
        if (!file) return res.status(404).json({ message: 'Archivo no encontrado' });
        res.json(file);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el archivo', error });
    }
};

// Crear un nuevo archivo
export const createFile = async (req, res) => {
    try {
        const newFile = new Files(req.body);
        await newFile.save();
        res.status(201).json(newFile);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el archivo', error });
    }
};

// Actualizar un archivo
export const updateFile = async (req, res) => {
    try {
        const updatedFile = await Files.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFile) return res.status(404).json({ message: 'Archivo no encontrado' });
        res.json(updatedFile);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el archivo', error });
    }
};

// Eliminar un archivo
export const deleteFile = async (req, res) => {
    try {
        const deletedFile = await Files.findByIdAndDelete(req.params.id);
        if (!deletedFile) return res.status(404).json({ message: 'Archivo no encontrado' });
        res.json({ message: 'Archivo eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el archivo', error });
    }
};
