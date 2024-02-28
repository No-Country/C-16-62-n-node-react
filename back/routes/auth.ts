import { Router } from "express";
import { registerUser, logIn, addWorkerData, logIn } from '../controllers/auth'; 
import { check } from "express-validator"; 
import { collectErrors } from "../middlewares/collectErrors"; 
import { createCheckSchema } from "express-validator/src/middlewares/schema";
import { register } from "module";



const router = Router ()

router.post("/registerUser", [
    check ("name", "te falto el nombre").not().isEmpty(),
    check ("email", "faltó el email").isEmail(),
    check ("phone", "te faltó el teléfono").isNumeric(),
    check ("password", "la contraseña debe contener al menos 6 caracteres").isLength({min: 6}),
    
//    check ("email").custom(emailExist),
    collectErrors
], registerUser)

router.post("addWorkerData", [
    check ("category", "te faltó la categoría").not().isEmpty(),
    check ("img", "Necesitas subir una imagen").not().isEmpty(),
    check ("desc", "Necesitas añadir una descripción").not().isEmpty(),

    collectErrors
], addWorkerData)


export default router 
    

