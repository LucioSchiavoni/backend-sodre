import { crearParticipanteService } from "../services/participanteServices.js"



export const crearParticipanteController = async(req,res) => {
    try {
        console.log("body: ",req.body)
        const result = await crearParticipanteService(req,res)
        return res.json(result)
    } catch (error) {
        console.log(error)
    }
}