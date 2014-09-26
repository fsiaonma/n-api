var response = require("../../../common/response");
var constant = require("../../../common/constant");
var sysConfig = require("../../../conf/config.json");

var Memcached = require('memcached');
var memcached = new Memcached(sysConfig.memcached[0].host + ":" + sysConfig.memcached[0].port);

exports.getlist = function(req, res) {
	memcached.get(req.query.sign, function (err, data) {
    	if (!data) {
    		var result = {
    			total: 36,
	    		data: [{
					a: "1"
				}, {
					b: "2"
				}, {
					c: "3"
				}]
			};
    		memcached.set(req.query.sign, result, 10000, function() {
			    console.log("set success");
			});
			res.send(result);
    	} else {
    		res.send(data);
    	}
    });
}

