import prisma from "../../config/db.js";
import dotenv from 'dotenv'
dotenv.config()


export const crearEventoService = async(req,res) => {
    
    const {file} = req.file;
    const {entradas,fecha_evento, nombre_evento, descripcion } = req.body;

    const uploadFile = file ? `${process.env.URL_UPLOAD}/upload/${file.filename}` : '';
    try {
        await prisma.evento.create({
            data:{
                entradas:entradas,
                fecha_evento: fecha_evento,
                nombre_evento: nombre_evento,
                descripcion: descripcion,
                imagen: uploadFile,
            }
        })
        return {success: "Nuevo evento creado"}
    } catch (error) {
        console.log(error)
    }
}