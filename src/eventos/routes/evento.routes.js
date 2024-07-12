import { Router } from "express";
import upload from "../../middlewares/uploadImage.js";
import { crearEventoController, deleteEventoController, mostrarEventoController } from "../controllers/evento.controller.js";


const eventoRouter = Router()



eventoRouter.post("/crearEvento" , upload.single('evento[imagen]'), crearEventoController);
eventoRouter.get("/eventos", mostrarEventoController);
eventoRouter.delete("/evento/:id", deleteEventoController);

export default eventoRouter;
