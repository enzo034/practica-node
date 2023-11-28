/* import fs from 'fs'
import { moduloSuma } from './modules/module1.js'

fs.writeFile('./archivos/hola.txt', "Hola mundo desde archivo", "utf-8", (error)=>{
    if(error) throw error;
    console.log("Se creó el archivo!");
});

fs.readFile("./archivos/hola.txt", "utf-8", (error, data)=>{
    if(error) throw error;
    console.log(data);
});

console.log(moduloSuma(2, 4)); */

import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

import './config/db.js'; // Importar después de cargar las variables de entorno

app.listen(3000);

console.log("Servidor en el puerto 3000");


