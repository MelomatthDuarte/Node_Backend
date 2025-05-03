const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const { multiplication } = require('./utils/operations');

const app = express();
const PORT = 5000;

// Seguridad básica con Helmet
app.use(helmet());

// Logs de peticiones HTTP
app.use(morgan('dev'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

// Ruta 404 (para cualquier ruta no encontrada)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log('✅ multiplication:', multiplication(3, 5));
});
