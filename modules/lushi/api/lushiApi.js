var response = require("../../../common/response");
var constant = require("../../../common/constant");

exports.getlist = function(req, res) {
	res.send(new response(constant.responseType.SUCCESS, {
		total: 36,
		data: [{
			a: "1"
		}, {
			b: "2"
		}, {
			c: "3"
		}]
	}));
}