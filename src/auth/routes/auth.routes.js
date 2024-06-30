import { Router } from "express";
import { authController, changePasswordController, loginController, registerController } from "../controllers/auth.controller.js";



const routerAuth = Router();


routerAuth.post("/registro", registerController)
routerAuth.post("/login", loginController)
routerAuth.get("/auth", authController)
routerAuth.post("/password", changePasswordController)


export default routerAuth;