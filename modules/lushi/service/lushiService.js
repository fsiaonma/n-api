var response = require("../../../common/response");
var constant = require("../../../common/constant");
var sysConfig = require("../../../common/sysConfig");

var Memcached = require('memcached');
var memcached = new Memcached(sysConfig.memcached);

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
			setTimeout(function() {
				res.send(result);
			}, 5000);
    	} else {
    		res.send(data);
    	}
    });
}

