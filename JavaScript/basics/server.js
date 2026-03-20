// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.url === "/") {
//         return res.end("Hello World");
//     } 
//     else if (req.url === "/about") {
//         return res.end("Hello About");
//     }

//     res.statusCode = 404;
//     res.end("Page not found");

// });

// server.listen(8000, () => {
//     console.log("Listening on port 8000");
// });


import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    try {
        if (!fs.existsSync('mydir')) {
            fs.mkdirSync('mydir');
        }

        fs.writeFileSync('mydir/demo.txt', 'Hello World ');
        fs.appendFileSync('mydir/demo.txt', 'file append completely');

        const data = fs.readFileSync('mydir/demo.txt', 'utf-8');
        res.write("file content:\n" + data + "\n");
        fs.renameSync('mydir/demo.txt', 'mydir/new.txt');
        res.write("file renamed complete\n");
        fs.unlinkSync('mydir/new.txt');
        res.write("file deleted");
        res.end();
    } catch (err) {
        res.statusCode = 500;
        res.end("Error: " + err.message);
    }
});

server.listen(7200, () => {
    console.log("program is running on port 7200");
});
