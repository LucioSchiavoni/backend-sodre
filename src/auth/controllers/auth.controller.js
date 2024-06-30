import {authService, changePasswordService, registerService, loginService}  from "../services/authServices.js";


export const registerController = async(req,res) => {
    try {
        const registro = await registerService(req,res)
        return res.json(registro);
    } catch (error) {
        console.log(error)
    }
}


export const loginController = async(req,res) =>{
    try {
        const login = await loginService(req,res)
        return login;
    } catch (error) {
        console.log(error)
    }
}

export const authController = async(req,res) =>{
    try {
        const login = await authService(req,res)
        return login;
    } catch (error) {
        console.log(error)
    }
}


export const changePasswordController = async(req,res) =>{
    try {
        const changePassword = await changePasswordService(req,res)
        return changePassword;
    } catch (error) {
        console.log(error)
    }
}


