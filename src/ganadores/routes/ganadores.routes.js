import { Router } from "express";
import { ganadoresController } from "../controllers/ganadores.controller.js";



const ganadoresRouter = Router();



ganadoresRouter.get("/ganadores", ganadoresController);

export default ganadoresRouter;