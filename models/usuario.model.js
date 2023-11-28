import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    nombre: String,
    edad: String
},{
    versionKey: false,
    timestamps: true
})

export default model('Usuario', usuarioSchema);