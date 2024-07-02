import prisma from "../../config/db.js";

export const crearParticipantes = async(req, res) => {

    const {userId, eventoId, fecha} = req.body;

    try {
        await prisma.participante.create({
            data:{
                eventoId: eventoId,
                usuarioId: userId,
                fecha_participante:{
                  create:{
                    fecha: fecha

                  }
                }
            }
        })
    } catch (error) {
       console.log(error) 
    }
}