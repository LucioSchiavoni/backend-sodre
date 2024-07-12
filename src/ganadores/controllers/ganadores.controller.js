import { deleteGanadorServices, ganadoresService, getGanadoresByIdEventoService } from "../services/ganadoresSerivces.js"



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

export const deleteGanadoresController = async(req,res) => {
    try {
        const deleteGanador = await deleteGanadorServices(req, res)
        return res.json(deleteGanador)
    } catch (error) {
        console.log(error)
    }
}