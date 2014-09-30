var response = require("../../../common/response");
var constant = require("../../../constant/responseType");
var memcached = require("../../../../server/memcached");

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

