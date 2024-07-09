import prisma from "../../config/db.js";

export const ganadoresService = async (req, res) => {
    try {
        const { id, numGanadores } = req.body;

        const participantesList = await prisma.participante.findMany({
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

        if (participantesList) {
            const shuffled = participantesList.sort(() => 0.5 - Math.random());
            const ganadores = shuffled.slice(0, numGanadores);
            const ganadoresIds = ganadores.map(ganador => ganador.usuario.id);

            const updateUsuarios = await prisma.usuario.updateMany({
                where: {
                    id: {
                        in: ganadoresIds
                    }
                },
                data: {
                    ganador_anterior: true
                }
            });

            const ganadoresData = ganadores.map(ganador => ({
                usuarioId: ganador.usuario.id,
                eventoId: ganador.eventoId,
                fecha_seleccionada: ganador.fecha_seleccionada
            })
            );

            return await prisma.ganador.createMany({
                data: ganadoresData
            })


            
        }   
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

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