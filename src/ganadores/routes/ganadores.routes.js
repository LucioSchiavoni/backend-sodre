import { Router } from "express";
import { deleteGanadoresController, ganadoresController, getGanadoresByIdEventoController } from "../controllers/ganadores.controller.js";
import sendEmailService from "../../middlewares/sendEmail.js";
import { getFechasGanadores } from "../services/ganadoresSerivces.js";



const ganadoresRouter = Router();


ganadoresRouter.post("/ganadores", ganadoresController);
ganadoresRouter.get("/search/ganadores/:eventoId", getGanadoresByIdEventoController);
ganadoresRouter.post("/sendEmail", sendEmailService);
ganadoresRouter.delete("/ganadores/:id", deleteGanadoresController)
ganadoresRouter.get("/fechas/ganadores/:id", getFechasGanadores)

export default ganadoresRouter;