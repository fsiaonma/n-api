var Memcached = require('memcached');
var sysConfig = require("../conf/config.json");
var memcached = new Memcached(sysConfig.memcached[0].host + ":" + sysConfig.memcached[0].port);
module.exports = memcached;