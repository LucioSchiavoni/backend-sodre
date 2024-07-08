import { ganadoresService } from "../services/ganadoresSerivces.js"



export const ganadoresController = async(req,res) => {
    try {
        const result = await ganadoresService(req,res)
        return res.json(result);
    } catch (error) {
        console.log(error)
    }
}