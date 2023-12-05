//PLANTILLAS HANDLEBARS
const express = require('express')

const app = express()

// app.use(express.json())
// // app.get('/entrada', (req, res) => {
// //     res.render('entrada al local')
// // })

// //midleware
// app.use((req, res, next) => {
//     const {email, password} = req.body
//     if(email === "byrono@gmail.com" && password === "12345"){
//         next()
//     } else {
//         res.send("Usuario no registrado")
//     }
// })

app.get('/pedio', (req, res) => {
    res.send(`Bienvendio listoma par atomar su oorden`)
})

app.get('/p', (req, res) => {
    res.send(`Bienvendio listoma par atomar su oorden`)
})







// Verifica si funciona
app.listen(3000)
console.log("Web server ejecutandose en el puerto 3000")

// ruta 404 para cuando se ingrese algo que no estaba
app.use((req, res) => {
    res.send("404 - NOT FOUND")
})