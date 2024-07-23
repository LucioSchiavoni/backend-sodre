import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
import prisma from '../config/db.js';
dotenv.config();

    const transporter =  nodemailer.createTransport({
        host: 'mta.mec.gub.uy',
        port: 25,
        secure: false,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.PASSWORD_USER
        }
    })


 const sendEmailService = async(req,res) => {

    const {eventoId} = req.body;

    const ganadores = await prisma.ganador.findMany({
        where:{
            eventoId: eventoId
        },
        include:{
            usuario: true
        }
    })

    const listaGanadores = ganadores.map( g => `<div style="padding: 8px; border-bottom: 1px solid #ddd; font-size: 16px; font-weight: bold;">${g.usuario.nombre}</div>`).join('');

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `Ganadores del sorteo`,
        html: `
        <div>
        <h2>Buenas tardes</h2>
        <p>Nos complace informar que el grupo de ganadores del sorteo es el siguiente:</p>
        <div style="display: flex; flex-direction: column;">
         ${listaGanadores}
        </div>
        <p>Por este medio les comunicamos que han sido seleccionados para asistir a la función del Sodre.</p>
        <p>En caso de no poder asistir, por favor responder a este correo.</p>
        </div>
        `
    }  
    try {
        const info = await transporter.sendMail(mailOptions);
        return res.json({message: 'Se envio un correo notificando los ganadores'})
    } catch (error) {
        console.log(error)
    }
   
}


export default sendEmailService;



