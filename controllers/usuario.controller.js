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

        const validationResult = userValidation.validate({ nombre, edad });

        if (validationResult.error || !nombre || !edad) {
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

        const { nombre, edad } = req.body;

        const validationResult = userValidation.validate({ nombre, edad });

        if ((!nombre && !edad) || validationResult.error) {
            return res.status(400).json({ message: "No hay valores para actualizar y/o son inválidos" });
        }

        const updatedUser = await Usuario.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json(
            {
                message: `Usuario actualizado`,
                updatedUser
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ocurrió un error al intentar actualizar el usuario" })
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.idUsuario;

        const deletedUser = await Usuario.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "El usuario no fue encontrado" });
        }

        res.status(204).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ocurrió un error inesperado" });
    }
};
