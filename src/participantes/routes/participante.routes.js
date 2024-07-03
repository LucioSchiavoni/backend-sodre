import { Router } from "express";
import { crearParticipanteController } from "../controllers/participante.controller.js";


const participanteRouter = Router();


participanteRouter.post("/participante", crearParticipanteController);


export default participanteRouter;