import Program from "../models/program.js";

// Obtener todos los programas
export const getPrograms = async (req, res) => {
    try {
        const programs = await Program.find();
        res.json(programs);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener programas', error });
    }
};

// Obtener un programa por ID
export const getProgramById = async (req, res) => {
    try {
        const program = await Program.findById(req.params.id);
        if (!program) return res.status(404).json({ message: 'Programa no encontrado' });
        res.json(program);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el programa', error });
    }
};

// Crear un nuevo programa
export const createProgram = async (req, res) => {
    try {
        const newProgram = new Program(req.body);
        await newProgram.save();
        res.status(201).json(newProgram);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el programa', error });
    }
};

// Actualizar un programa
export const updateProgram = async (req, res) => {
    try {
        const updatedProgram = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProgram) return res.status(404).json({ message: 'Programa no encontrado' });
        res.json(updatedProgram);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el programa', error });
    }
};

// Eliminar un programa
export const deleteProgram = async (req, res) => {
    try {
        const deletedProgram = await Program.findByIdAndDelete(req.params.id);
        if (!deletedProgram) return res.status(404).json({ message: 'Programa no encontrado' });
        res.json({ message: 'Programa eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el programa', error });
    }
};
   