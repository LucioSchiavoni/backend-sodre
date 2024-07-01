import { Router } from "express";
import upload from "../../middlewares/uploadImage.js";
import { crearEventoController } from "../controllers/evento.controller.js";


const eventoRouter = Router()



eventoRouter.post("/crearEvento" , upload.single('evento[imagen]'), crearEventoController);



export default eventoRouter;
