import { Router } from "express";
import { ganadoresController, getGanadoresByIdEventoController } from "../controllers/ganadores.controller.js";



const ganadoresRouter = Router();



ganadoresRouter.post("/ganadores", ganadoresController);
ganadoresRouter.get("/search/ganadores/:eventoId", getGanadoresByIdEventoController);

export default ganadoresRouter;