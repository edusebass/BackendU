// Creacion de un web server con Express

// Invocar la libreria de expresss
const express = require('express')

// Crear una instancia
const app = express()

// Se ejecutara en el 
app.listen(3000)
console.log("Web server ejecutandose en el puerto 3000")

app.get('/', (req, res) => {
    res.send("Bienvenidos")
})
app.get('/cositas', (req, res) => {
    res.send("cositas")
})

app.use((req, res) => {
    res.send("404 - NOT FOUND")
})

