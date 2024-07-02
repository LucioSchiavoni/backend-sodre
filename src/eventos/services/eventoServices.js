import prisma from "../../config/db.js";
import dotenv from 'dotenv'
dotenv.config()


export const crearEventoService = async(req,res) => {
    
    
    const {entradas,fechas_evento, nombre_evento, descripcion } = req.body;
    const file = req.file;
    const uploadFile = file ? `${process.env.URL_UPLOAD}/upload/${file.filename}` : '';

    
    try {
        const fechaList = JSON.parse(fechas_evento);
        await prisma.evento.create({
            data:{
                entradas: parseInt(entradas),
                nombre_evento: nombre_evento,
                descripcion: descripcion,
                imagen: uploadFile,
                fechas_evento:{
                    create: fechaList.map((fecha) => ({
                        fecha,
                    }))
                }
            }

        })
    
        return {success: "Nuevo evento creado"}
    } catch (error) {
        console.log(error)
    }
}


export const mostrarEventoService = async(req,res) => {
    try {
       return await prisma.evento.findMany({
            include:{
                fechas_evento:{
                    select:{
                        fecha: true
                    }
                },
                participantes:{
                    select:{
                        usuario:{
                            select:{
                                nombre: true
                            }
                        }
                    }
                }

            }
        })
    } catch (error) {
        console.log(error)
    }
}