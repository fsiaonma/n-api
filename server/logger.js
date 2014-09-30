var log4js = require("log4js");

log4js.loadAppender('file');
log4js.configure('../conf/log4js.json', { 
    cwd: '../private/log'
});

var logger = log4js.getLogger('api-logger');

module.exports = logger;