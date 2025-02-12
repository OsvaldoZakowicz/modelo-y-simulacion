
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port ?? 3000

app.use(express.static(path.join(__dirname, 'web')));

const staticFiles = {
    '/vendor/jquery/jquery.min.js': 'vendor/jquery/jquery.min.js',
    '/vendor/bootstrap/js/bootstrap.bundle.min.js': 'vendor/bootstrap/js/bootstrap.bundle.min.js',
    '/vendor/jquery-easing/jquery.easing.min.js': 'vendor/jquery-easing/jquery.easing.min.js',
    '/vendor/css/sb-admin-2.min.css': 'vendor/css/sb-admin-2.min.css',
    '/vendor/js/sb-admin-2.min.js': 'vendor/js/sb-admin-2.min.js',

    '/js/integrador.js': 'js/integrador.js',
    '/js/fibonacci.js': 'js/fibonacci.js',
    '/js/congruencia.js': 'js/congruencia.js',
    '/js/poker.js': 'js/poker.js',
    '/js/chiCuadrado.js': 'js/chiCuadrado.js',
    '/js/marcas.js': 'js/marcas.js',
    '/js/localStorage.js': 'js/localStorage.js',
    '/js/simulacion.js': 'js/simulacion.js'
}

for (const [route, filePath] of Object.entries(staticFiles)) {
    app.get(route, (req, res) => {
        res.sendFile(path.resolve(__dirname, filePath), (err) => {
            if (err) {
                console.error(`Error sending file: ${filePath}`, err);
                res.status(404).send('File not found');
            }
        });
    });
}
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})