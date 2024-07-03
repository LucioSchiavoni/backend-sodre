import prisma from "../../config/db.js";

export const crearParticipanteService = async(req, res) => {

    const {eventoId, usuarioId, fecha} = req.body;

    try {
      
      const existUser = await prisma.participante.findFirst({
        where:{
          usuarioId: usuarioId,
          eventoId: eventoId
        }
      })
      if(existUser){
        return {error: "Ya estas participanto en este evento"}
      }
      await prisma.participante.create({
        data:{
          eventoId: eventoId,
          usuarioId: usuarioId,
          fecha_seleccionada:{
            create: fecha.map(fecha => ({
              fecha: fecha
            }))
          }
        },
        include:{
          fecha_seleccionada: true,
          usuario: true
        }
      })
        return {succes: "Participando en el sorteo"}
      
    } catch (error) {
       console.log(error) 
    }
}