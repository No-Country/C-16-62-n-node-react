import nodemailer from "nodemailer"

const pass = process.env.MAIL
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "contrameapp@gmail.com",
        pass: pass
    },
    from: "contrameapp@gmail.com",
    tls: {
        rejectUnauthorized: false
    }
})

export const sendEmail =async (to:string, code: string ):Promise<void> => {
    try{
        const mailOptions={
            from: '"Contratame App" contrameapp@gmail.com',
            to,
            subject: "Verifica tu cuenta",
            text: `Por favor, ingresa el siguiente código en la web para verificar tu cuenta: ${code}.
                
            Si no te registrarse en nuestra web, por favor ignora este correo.
            `
        }
        await transporter.sendMail(mailOptions)
        console.log("Correo electrónico enviado")
    }catch(error){
        console.error("Error al enviar el correo electrónico", error)
    }
}