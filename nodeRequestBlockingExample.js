const http = require("http");
const port = 3000;

let count = 0;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    switch (req.url) {
        case '/user':
            count ++;
            console.log(count, count % 2 === 0);
            if(count % 2 === 0) {
                setTimeout(() => {
                    res.end("User Route late response");
                    console.log("User Route late response sent");
                }, 20000);
            } else {
                res.end("User Route quick response");
                console.log("User Route quick response sent");
            }
            break;
        
        case '/admin':
            res.end("Admin Route");
            console.log("Admin Route response sent");
            break;
        default:
            res.end("Route Mismatch");
            break;
    }
})

server.listen(port,  () => {
    console.log(`NodeJs Application Running at ${port}`)
});

