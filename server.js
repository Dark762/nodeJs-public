const http = require("http");

const enviroment = require('./src/enum/enum');

const settings = require("./appsettings");

const host = settings.HOST;
const port = settings.PORT;


const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("Hello World from Node.js HTTP Server");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {

    if(settings.enviroment === enviroment.Develop){
        console.log(`Server is running on http://${host}:${port}`);
    }

});