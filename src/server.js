const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

// Inicializaciones
const app = express();

// Configuraciones 
app.set('port', process.env.port || 1000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares 
app.use(express.urlencoded({ extended: false }));

// Variables globales

// Rutas 
app.get('/', (req, res) => {
    res.render('index');
});

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del motor de plantillas Handlebars
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

module.exports = app;
