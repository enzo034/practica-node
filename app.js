import express from "express";
import usuariosRoutes from './routes/usuarios.routes.js'

const app = express();

app.use(express.json());

app.use('/api/users', usuariosRoutes);

export default app;

