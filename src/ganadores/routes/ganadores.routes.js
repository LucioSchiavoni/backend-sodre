import { Router } from "express";
import { ganadoresController, getGanadoresByIdEventoController } from "../controllers/ganadores.controller.js";
import sendEmailService from "../../middlewares/sendEmail.js";



const ganadoresRouter = Router();



ganadoresRouter.post("/ganadores", ganadoresController);
ganadoresRouter.get("/search/ganadores/:eventoId", getGanadoresByIdEventoController);
ganadoresRouter.post("/sendEmail", sendEmailService);

export default ganadoresRouter;