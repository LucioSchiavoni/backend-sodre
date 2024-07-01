import { crearEventoService } from "../services/eventoServices.js"



export const crearEventoController = async(req,res) => {
    try {
        const crearEvento = await crearEventoService(req,res);
        return res.json(crearEvento);
    } catch (error) {
        console.log(error)
    }
}