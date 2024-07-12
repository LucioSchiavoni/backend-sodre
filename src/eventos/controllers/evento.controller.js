import { crearEventoService, deleteEventoService, mostrarEventoService } from "../services/eventoServices.js"



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

export const deleteEventoController = async(req,res) => {
    try {
        const deleteEvento = await deleteEventoService(req,res)
        return res.json(deleteEvento)
    } catch (error) {
        console.log(error)
    }
}