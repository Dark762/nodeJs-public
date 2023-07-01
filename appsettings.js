const enviroment = require('./src/enum/enum');

var settings = {
    PORT:8080,
    HOST: "localhost",
    enviroment : enviroment.Develop
};

module.exports = settings;