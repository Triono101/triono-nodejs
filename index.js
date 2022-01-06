// 1. Bahasan awal

    // const hello = require("./module");

    // console.log(hello());

//  2. Module System

    // const {hello, world} = require("./module");

    // console.log(hello(), world());

// 3. Core Module

    // const http = require('http');
    // const moment = require('moment');

    // const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    //     write
    // res.write("<h1>Hello from Node HTTP</h1>");
    //     other method
    // res.setHeader("Content-Type", "text-json")
    // res.write(JSON.stringify({
    //     status: "succesfully",
    //     message: "Welcome to MERN class",
    //     loginAt: moment()
    // }));

    //     res.end();
    // });

    // server.listen(3000, () => console.log("Server running at http://127.0.0.1:3000"));

// 4. NPM Module

    // const http = require('http');
    // const moment = require('moment');

    // const server = http.createServer((req, res) => {
    //     res.statusCode = 200;

            // write
        // res.write("<h1>Hello from Node HTTP</h1>");
            // other method

    //     res.setHeader("Content-Type", "text-json")
    //     res.write(JSON.stringify({
    //         status: "succesfully",
    //         message: "Welcome to MERN class",
    //         study: "Node Js",
    //         loginAt: moment()
    //     }));

    //     res.end();
    // });

    // server.listen(3000, () => console.log("Server running at http://127.0.0.1:3000"));

// 5. Handle Routing

    const http = require('http');
    const moment = require('moment');

    const server = http.createServer((req, res) => {
        switch(req.url) {
            case "/welcome": welcome(res); break;
            case "/": home(res); break;
            default: page404(res); break;
        }
    
    });

        const welcome = res => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text-json")
            res.write(JSON.stringify({
                status: "succesfully",
                message: "Welcome to MERN class",
                study: "Node Js",
                loginAt: moment()
            }));

            res.end();
        }

        const page404 = res => {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text-json")
            res.write(JSON.stringify({
                status: "failed",
                message: "Resource Not Found"
            }));

            res.end();
        }

        const home = res => {
            res.end("<h1>Home Page</h1>");
        }

    server.listen(3000, () => console.log("Server running at http://127.0.0.1:3000"));

