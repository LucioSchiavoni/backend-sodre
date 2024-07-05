import { Router } from "express";
import { crearParticipanteController, participanteByIdEventoController } from "../controllers/participante.controller.js";


const participanteRouter = Router();


participanteRouter.post("/participante", crearParticipanteController);
participanteRouter.get("/participante/:eventoId", participanteByIdEventoController);


export default participanteRouter;