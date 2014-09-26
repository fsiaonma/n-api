var express = require('express');
var router = express.Router();
var dispatch = require("../controllers/eventDispatch");

router.post('/api/:module/:api', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
  	dispatch.run(req, res);
});

module.exports = router;
