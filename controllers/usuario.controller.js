import Usuario from '../models/usuario.model.js'

export const getUsuarios = async (req, res) => {

    const usuarios = await Usuario.find({})

    res.json(usuarios);
}

export const postUsuario = async (req, res) => {
    const { nombre, edad } = req.body;

    const newUsuario = new Usuario({
        nombre,
        edad
    })

    const usuarioGuardado = await newUsuario.save();

    res.status(201).json({ "message": `Usuario ${nombre} añadido, ${usuarioGuardado}` });
}

export const putUsuario = async (req, res) => {
    const id = req.params.idUsuario;

    const updatedUser = await Usuario.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(updatedUser)
}

export const deleteUsuario = async (req, res) => {
    const id = req.params.idUsuario;

    await Usuario.findByIdAndDelete(id)

    res.status(204).json(userDelete)
}