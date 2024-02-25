import { Router } from "express";
import { registerUser, logIn } from '../controllers/auth'; 
import { check } from "express-validator"; 
import { collectErrors } from "../middlewares/collectErrors"; 
import { emailExist, emailNotExist } from "../helpers/validations";

const router = Router ()

router.post("/register", [
    check ("name", "te falto el nombre").not().isEmpty(),
    check ("email", "faltó el email").isEmail(),
    check ("phone", "te faltó el teléfono").isNumeric(),
    check ("password", "la contraseña debe contener al menos 6 caracteres").isLength({min: 6}),
    check ("location", "te faltó la locación").not().isEmpty(),
    
     check ("email").custom(emailExist),
    collectErrors
], registerUser)

router.post("/login", [
    check ("email", "faltó el email").isEmail(),
    check ("password", "la contraseña debe contener al menos 6 carácteres").isLength({ min: 6 }),
    check("email").custom(emailNotExist),
    collectErrors
], logIn)

/* router.patch("/worker", [
    check ("category", "te faltó la categoría").not().isEmpty(),
    check ("img", "Necesitas subir una imagen").not().isEmpty(),
    check ("desc", "Necesitas añadir una descripción").not().isEmpty(),

    collectErrors
], addWorkerData)
*/
export default router 
    

