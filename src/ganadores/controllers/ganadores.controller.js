import { ganadoresService, getGanadoresByIdEventoService } from "../services/ganadoresSerivces.js"



export const ganadoresController = async(req,res) => {
    try {
        const result = await ganadoresService(req,res)
        return res.json(result);
    } catch (error) {
        console.log(error)
    }
}

export const getGanadoresByIdEventoController = async(req,res) => {
    try {
        const result = await getGanadoresByIdEventoService(req,res);
        return res.json(result);
    } catch (error) {
        console.log(error)
    }
}