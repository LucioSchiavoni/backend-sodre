import { crearEventoService, mostrarEventoService } from "../services/eventoServices.js"



export const crearEventoController = async(req,res) => {
    try {
        const crearEvento = await crearEventoService(req,res);
        return res.json(crearEvento);
    } catch (error) {
        console.log(error)
    }
}


export const mostrarEventoController = async(req,res) => {
    try {
        const evento = await mostrarEventoService();
        return res.json(evento);
    } catch (error) {
        console.log(error)
    }
}