const express = require('express')
const path = require('path');
const { engine }  = require('express-handlebars')

// Inicializaciones
const app = express()

// Configuraciones 
app.set('port',process.env.port || 1000)
app.set('views',path.join(__dirname, 'views'))

// Middlewares 
app.use(express.urlencoded({extended:false}))
// Rutas 
app.use(require('./routers/index.routes'))


// Variables globales

// Rutas 
app.get('/',(req,res)=>{
    res.render('index')
})

// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))

// Configuraciones 

app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
app.set('view engine','.hbs')


module.exports = app