import prisma from "../../config/db.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerService = async (req,res) => {

    const {username, password, rol, nombre, sector, cedula } = req.body;
    try {
        const exist = await prisma.usuario.findFirst({
            where: {
                username: username
            }
        })
        if(exist){
            return res.json({ error: 'El usuario ya existe' });
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword =  bcrypt.hashSync(password, salt)
        const newUser = await prisma.usuario.create({
            data:{
                cedula:cedula, 
                ganador_anterior:false,
                nombre:nombre,
                password: hashPassword,
                rol: rol,
                sector: sector,
                username: username,
            }
        })
        return {success: "Usuario creado con exito"}
        
    } catch (error) {
        console.log("Error del registro: ", error)
    }
}

export const loginService = async (req, res) => {
      const {username, password} = req.body;
    try {
        const existUser = await prisma.usuario.findUnique({
            where:{
                username: username
            }
        })
        if (!existUser) {
        return res.json({ error: 'Usuario no encontrado' });
        }
    const passwordMatch = await bcrypt.compare(password, existUser.password);
    if (!passwordMatch) {
      return res.json({ error: 'Credenciales inválidas' });
    }
    const token = jwt.sign({ 
    id: existUser.id,
    username: existUser.username,
    password: existUser.password,
    cedula: existUser.cedula,
    ganador_anterior: existUser.ganador_anterior,
    sector: existUser.sector,
    rol: existUser.rol,
    nombre: existUser.nombre
    },
    process.env.SECRET_KEY , 
    { expiresIn: '12h' });
        
    res.status(200).json({ token });

    } catch (error) {
        console.log("Error en el login: ", error)
    }
}

export const authService = async (req, res) => {

    try {
        const authHeader = req.get('Authorization')
        const token = authHeader.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

        if (!decodedToken) {
        return res.status(401).json({ error: 'Token inválido' });
    }  
    const userToken = await prisma.usuario.findUnique({
        where: {
            id: decodedToken.id
        }
    })
    if(!userToken){
        return res.status(401).json({ error: "Usuario no encontrado"})
    }
    
    res.status(200).json({
        id: userToken.id,
        username: userToken.username,
        nombre: userToken.nombre,
        rol: userToken.rol,
        sector: userToken.sector,
        cedula: userToken.cedula,
        ganador_anterior: userToken.ganador_anterior
    })
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ error: 'Token JWT inválido' });
        }
        console.log("Error de autenticacion: ", error)
    }
}


export const changePasswordService = async(req,res) => {
    const {id} = req.params;
    const {password} = req.body;

    try {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword =  bcrypt.hashSync(password, salt)
            await prisma.usuario.update({
                where:{
                    id: parseInt(id)
                },
            data:{
                password: hashPassword
            }
        })
        res.json({success: "Contraseña actualizada con éxito"})
    } catch (error) {
        console.log(error)
    }
}