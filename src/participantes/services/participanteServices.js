import prisma from "../../config/db.js";

export const crearParticipanteService = async(req, res) => {

    const {eventoId, usuarioId, fecha_participante, cantidad_entradas} = req.body;

    try {
      
      const existUser = await prisma.participante.findFirst({
        where:{
          usuarioId: usuarioId,
          eventoId: eventoId
        }
      })
      if(existUser){
        return {error: "Ya estas participando para este sorteo"}
      }
      await prisma.participante.create({
        data:{
          eventoId: eventoId,
          usuarioId: usuarioId,
          cantidad_entradas:cantidad_entradas,
          fecha_seleccionada: fecha_participante && fecha_participante.length > 0 ? {
            create: fecha_participante.map(fecha => ({
              fecha: fecha
            }))
          }
          : undefined
        }
      })
        return {success: "Mucha suerte!"}
      
    } catch (error) {
       console.log(error) 
    }
}

export const participanteByIdEventoService = async(req,res) => {

  try {
    const {eventoId} = req.params;
    return await prisma.participante.findMany({
      where:{
        eventoId: parseInt(eventoId)
      },
      include:{
        fecha_seleccionada: true,
        usuario: true
      }
    })
  } catch (error) {
    console.log(error)
  }
}


export const deleteParticipanteServie = async(req,res) => {
  try {
    
  } catch (error) {
    
  }
}