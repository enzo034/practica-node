import { Router} from "express";
import { getUsuarios, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuario.controller.js";

const router = Router();

router.get('/', getUsuarios);

router.post('/', postUsuario);

router.put('/:idUsuario', putUsuario);

router.delete('/:idUsuario', deleteUsuario);

export default router;