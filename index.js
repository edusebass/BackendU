// Creacion de un web server con Express

// Invocar la libreria de expresss
// const express = require('express')

// // Crear una instancia
// const app = express()

// // RUTAS
// rutas app
// app.get('/', (req, res) => {
//     res.send("Bienvenidos")
// })
// app.get('/cositas', (req, res) => {
//     res.send("cositas")
// })

// // Mandar info en formato JSON
// app.use(express.json())

// app.post('/register', (req, res) => {
//     const {pedido, solicitado} = req.body
//     console.log(req.body)
// })

// //params
// app.get('/pedido/:tipo', (req, res) => {
//     res.send(`El pedido es ${req.params.tipo}`)
//     console.log(req.params)
// })

// //request query
// app.get('/search', (req, res) => {
//     if (req.query.tipo === "sencilla"){
//         res.send("Hamburguesa sencilla")
//     }
// })


//ENVIO DE ARCHIVOS
// app.get('/hamburguesa/simple', (req, res) => {
//     res.send("Hamburguesa simple")
// })

// //enviar imagenes
// console.log(__dirname)
// app.get('/hamburguesa/doble', (req, res) => {
//     res.sendFile('./src/public/doble.jpg', {
//         root:__dirname
//     })
// })

// //enviar word
// app.get('/hamburguesa/triple', (req, res) => {
//     res.sendFile('./src/public/triple.docx', {
//         root:__dirname
//     })
// })

// //json
// app.get('/hamburguesa/mixta', (req, res) => {
//     res.status(200).json({
//         "tipo": "Mixta",
//         "extra": "no"
//     })
// })



//PLANTILLAS HANDLEBARS
const express = require('express')
const {engine} = require('express-handlebars')

const app = express()


//utilizar el motor de plantillas
app.engine('handlebars', engine())
//ubicacion del directorio view
app.set('view engine', 'handlebars')
app.set('views', './src/views')

app.get('/hamburguesa/vegana', (req, res) => {
    res.render('home')
})




// Verifica si funciona
app.listen(3000)
console.log("Web server ejecutandose en el puerto 3000")

// ruta 404 para cuando se ingrese algo que no estaba
app.use((req, res) => {
    res.send("404 - NOT FOUND")
})