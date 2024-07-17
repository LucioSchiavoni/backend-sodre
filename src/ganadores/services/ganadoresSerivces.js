import prisma from "../../config/db.js";

export const ganadoresService = async (req, res) => {
    try {
        const { id, numGanadores, fechaSeleccionada } = req.body;

        const participantesList = await findParticipante(id, fechaSeleccionada)

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

            return {success: "Sorteo generado"}
        }else{
            return {error: "No se encontro participantes para esas fechas"}
        } 
          
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getFechasGanadores = async(req,res) => {
    try {
        const {id} = req.params;
        const fechas = await prisma.fechaSeleccionada.findMany({
            where:{
                participanteId: parseInt(id)
            }
        })
        return res.json(fechas)
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


export const findParticipante = async(id, fecha_seleccionada)=> {
    try {
      let participantes = await prisma.participante.findMany({
            where: {
                eventoId: id,
                fecha_seleccionada:fecha_seleccionada,
                usuario: {
                  ganador_anterior: false
                }
            },
            include: {
                usuario: true,
                fecha_seleccionada: true
            }
        });

        if(participantes.length === 0){
            participantes = await prisma.participante.findMany({
                where:{
                    eventoId: id,
                    usuario:{
                        ganador_anterior: true
                    }
                },
                include:{
                    usuario:true,
                    fecha_seleccionada:true
                }
            })
        }
        return participantes
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



export const deleteGanadorServices = async (req,res) => {

    const {id} = req.params;

    try {

        const usuarioGanador = await prisma.usuario.findFirst({
            where:{
                ganadores:{
                    some:{
                        id: parseInt(id)
                    }
                }
            }
        })

        if(!usuarioGanador){
            return res.status(404).json({message: "Usuario no encontrado"})
        }
        
        const updateUser = await prisma.usuario.update({
            where:{
                id: usuarioGanador.id
            },
            data:{
                ganador_anterior: false
            }
        })

        const result = await prisma.ganador.delete({
            where:{
                id: parseInt(id)
            }
        })
 
        return {message: "Ganador eliminado"}
    } catch (error) {
        console.log(error)
    }
}