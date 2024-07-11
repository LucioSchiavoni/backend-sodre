import prisma from "../../config/db.js";

export const ganadoresService = async (req, res) => {
    try {
        const { id, numGanadores } = req.body;

        const participantesList = await findParticipante(id)
        console.log("a ver flaco: ",participantesList)
        if (participantesList) {
            const shuffled = participantesList.sort(() => 0.5 - Math.random());
            const ganadores = shuffled.slice(0, numGanadores);
            const ganadoresIds = ganadores.map(ganador => ganador.usuario.id);

           await updateGanadores(ganadoresIds)

            const ganadoresData = ganadores.map(ganador => ({
                usuarioId: ganador.usuario.id,
                eventoId: ganador.eventoId,
                
            })
            );

               await prisma.ganador.createMany({
                data: ganadoresData
            }) 
            const participanteId = ganadores.map(id => id.id)

            await getFechasGanadores(participanteId)
            return {success: "Sorteo generado"}
            
        }   
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getFechasGanadores = async(id) => {
    try {
        return await prisma.fechaSeleccionada.findMany({
            where:{
                participanteId:{
                    in: id
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateGanadores = async(ganadoresIds) => {
    try {
        return await prisma.usuario.updateMany({
            where: {
                id: {
                    in: ganadoresIds
                }
            },
            data: {
                ganador_anterior: true
            }
        });
    } catch (error) {
        console.log(error)
    }
}


export const findParticipante = async(id)=> {
    try {
      return await prisma.participante.findMany({
            where: {
                eventoId: id,
                usuario: {
                    OR: [
                        { ganador_anterior: false }, // participantes que no ganaron el ultimo sorteo
                        { NOT: { ganador_anterior: true } } // de lo contrario si todos ganaron el utlimo sorteo
                    ]
                }
            },
            include: {
                usuario: true,
                fecha_seleccionada: true
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export const getGanadoresByIdEventoService = async(req,res) => {
    try {
        const {eventoId} = req.params;
        const result = await prisma.ganador.findMany({
            where:{
                eventoId: parseInt(eventoId)
            },
            include:{
                usuario:true,
            }
        })
        return result;
    } catch (error) {
        console.log(error)
    }
}