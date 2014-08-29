exports.responseType = {
	SUCCESS: {
		code: 2000000,
		msg: "请求成功"
	},
	MISSING_PARAMS: {
		code: 4000000,
		msg: "缺少必填参数"
	},
	JSON_FORMAT_ERROR: {
		code: 5000001,
		msg: "JSON 格式错误"
	},
	UNKNOWN_CALLER: {
		code: 5000002,
		msg: "未识别 caller"
	},
	UNCORRECT_SIGN: {
		code: 5000003,
		msg: "签名错误"
	}
}