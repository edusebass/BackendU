const express = require('express')
const path = require('path');
const { engine }  = require('express-handlebars')
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');

// Inicializaciones
const app = express()
require('./config/passport')
// Configuraciones 
app.set('port',process.env.port || 1000)
app.set('views',path.join(__dirname, 'views'))





// Middlewares 
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use(session({ 
    secret: 'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize())
app.use(passport.session())

// Variables globales

app.use((req,res,next)=>{
    res.locals.user = req.user?.name || null
    next()
})


// Rutas 
app.get('/',(req,res)=>{
    res.render('index')
})

app.use(require('./routers/portafolio.routes')) 
app.use(require('./routers/index.routes'))
app.use(require('./routers/user.routes'))

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