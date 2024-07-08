import { crearParticipanteService, participanteByIdEventoService } from "../services/participanteServices.js"



export const crearParticipanteController = async(req,res) => {
    try {
        const result = await crearParticipanteService(req,res)
        return res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const participanteByIdEventoController = async(req,res) => {

    try {
        const result = await participanteByIdEventoService(req,res)
        return res.json(result)
    } catch (error) {
        console.log(error)
    }
}