// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     var url = req.url;
//     if(url === '/quienes_somos') {
//         res.write('Somos nosotros');
//         res.end();
//     } else if(url === '/donde_estamos') {
//         res.write('Estamos aquís');
//         res.end();
//     } else if(url === '/que_hacemos') {
//         res.write('Hacemos esto');
//         res.end();
//     } else if(url === '/contacto') {
//         res.write('Contáctanos');
//         res.end();
//     } else {
//         res.write('Bienvenido a nuestra página');
//         res.end();
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`);
// });

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-type', 'text/html');
    let route = './';
    switch (req.url) {
        case '/':
            route += 'index.html';
            break;
        case '/contacto':
            route += 'contacto.html';
            break;
        case '/quienes_somos':
            route += 'nosotros.html';
            break;
        case '/que_hacemos':
            route += 'quehacemos.html';
            break;
        case '/donde_estamos':
            route += 'dondestamos.html';
            break;
        default:
            route += '404.html';
            break;
    }
    fs.readFile(route, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data);
        }
    })
})
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})