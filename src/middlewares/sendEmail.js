import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
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

    const {nombre, entradas} = req.body;

 
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "gonzalo.bonino@mec.gub.uy",
        subject: `Ganador del sorteo`,
        html: `
        <div>
        <h1>Buenas tardes</h2>
        <p>Por este medio comunicamos que las personas que fueron seleccionadas para asistir a la funcion del sodre  </p>
        <p>En caso de no poder asistir, por favor responder a este correo avisándolo.</p>
        </div>`
    }  
    try {
        const info = await transporter.sendMail(mailOptions);
        return res.json({message: 'Se envio un correo con los nombres de los ganadores', info})
    } catch (error) {
        console.log(error)
    }
   
}


export default sendEmailService;



