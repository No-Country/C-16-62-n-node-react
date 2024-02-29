import nodemailer from "nodemailer"

const pass = process.env.MAIL
console.log(pass)

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "tiendagameoverarg@gmail.com",
        pass: pass,
    },
    from: "tiendagameoverarg@gmail.com"
})

export const sendEmail =async (to:string, code: string ):Promise<void> => {
    console.log( to, code)
    try{
        const mailOptions={
            from: '"Contratame App" tiendagameoverarg@gmail.com',
            to,
            subject: "Verifica tu cuenta",
            text: `Por favor, ingresa el siguiente código en la web para verificar tu cuenta: ${code}.
                
            Si no te registrarse en nuestra web, por favor ignora este correo.
            `
        }
        console.log(mailOptions)
        await transporter.sendMail(mailOptions)
        console.log("Correo electrónico enviado")
    }catch(error){
        console.error("Error al enviar el correo electrónico", error)
    }
}