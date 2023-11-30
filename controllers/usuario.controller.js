import Usuario from '../models/usuario.model.js'
import { userValidation } from '../config/userValidation.js';

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find({})

        if (usuarios.length === 0) {
            res.json({ message: "No hay usuarios en la base de datos" });
            return;
        }

        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ocurrió un error inesperado" })
    }
}

export const postUsuario = async (req, res) => {
    try {
        const { nombre, edad } = req.body;

        const validationResult = userValidation.validate({nombre, edad});

        if(validationResult.error || !nombre || !edad){
            return res.status(400).json({ message: "Los valores enviados son incorrectos o están vacios" });
        }

        const newUsuario = new Usuario({
            nombre,
            edad
        })

        const usuarioGuardado = await newUsuario.save();

        res.status(201).json({ "message": `Usuario ${nombre} añadido, ${usuarioGuardado}` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ocurrió un error inesperado" })
    }
}

export const putUsuario = async (req, res) => {
    try {
        const id = req.params.idUsuario;

        if (!req.body.nombre && !req.body.edad) {
            res.status(400).json({ message: "No hay valores para actualizar" });
            return;
        }

        const updatedUser = await Usuario.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            res.status(404).json({ message: "No se encontró el id del usuario" });
            return;
        }

        res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ocurrió un error al intentar actualizar el usuario" })
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.idUsuario;

        await Usuario.findByIdAndDelete(id)

        res.status(204).json({ message: "Usuario eliminado" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ocurrió un error inesperado" })
    }
}