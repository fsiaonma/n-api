var os = require('os');
var cluster = require("cluster");

var logger = require('./logger');
var app = require("./app");

if (cluster.isMaster) {
    for (var i = 0, cpuCount = os.cpus().length; i < cpuCount; i++) {
        cluster.fork();
    }
    cluster.on('exit', function (worker) {
        logger.error('Worker ' + worker.id + 'died :(');
        cluster.fork();
    });
} else {
    var server = app.listen(app.get('port'), function() {
        logger.info('Express server listening on port ' + server.address().port);
    });
}