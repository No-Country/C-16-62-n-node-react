import { Router } from "express";
import { addWorkerData } from '../controllers/auth'; 
import { check } from "express-validator"; 
import { collectErrors } from "../middlewares/collectErrors"; 

const router = Router ()

router.post("/add", [
    check ("category", "te faltó la categoría").not().isEmpty(),
    check ("img", "Necesitas subir una imagen").not().isEmpty(),
    check ("desc", "Necesitas añadir una descripción").not().isEmpty(),

    collectErrors
], addWorkerData)


export default router 