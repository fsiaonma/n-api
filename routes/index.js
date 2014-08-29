var express = require('express');
var router = express.Router();
var dispatch = require("../controllers/eventDispatch");

router.post('/api/:api', function(req, res) {
  	dispatch.run(req, res);
});

module.exports = router;