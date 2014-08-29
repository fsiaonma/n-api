var md5 = require("blueimp-md5").md5;

var callerMap = require("../common/callerMap");
var response = require("../common/response");
var constant = require("../common/constant");
var apiConfig = require("../common/config");

exports.run = function(req, res) {
	var caller = req.query.caller;
	var data = req.query.data;
	var sign = req.query.sign;

	try {
		checkRequire(caller);
		checkRequire(data);
		checkRequire(sign);

		checkCaller(caller);
		var reqJson = parseJSON(data);
		checkSign(sign, caller, reqJson);
	} catch (e) {
		res.send(e);
	}
}

var checkRequire = function(key) {
	if (null == key || undefined == key || "" == key) {
		throw new response(constant.responseType.MISSING_PARAMS);
	}
}

var checkCaller = function(caller) {
	var flag = false;
	for (var i in callerMap) {
		if (i == caller) {
			flag = true;
		}
	}
	if (!flag) {
		throw new response(constant.responseType.UNKNOWN_CALLER);
	}
}

var parseJSON  = function(data)  {
	var result = null;
	try {
		result = JSON.parse(data);
	} catch (e) {
		throw new response(constant.responseType.JSON_FORMAT_ERROR);
	}
	return result;	
}

var checkSign = function(sign, caller, reqJson) {
	var strs = [];
	for (var i in reqJson) {
		strs.push(i);
	}
	strs.sort(function(a,b) { 
		return a.localeCompare(b);
	});
	var params = "";
	strs.map(function(item) {
		params += item + "=" + reqJson[item];
	});
	if (!(sign == md5(caller + params + callerMap[caller]))) {
		console.log(caller + params + callerMap[caller]);
		console.log("签名错误 传入签名：" + sign + " 正确签名：" + md5(caller + params + callerMap[caller]));
		throw new response(constant.responseType.UNCORRECT_SIGN);
	}
}

