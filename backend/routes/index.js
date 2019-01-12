const express = require('express');
const router = express.Router();

require('./news')(router);
require('./events')(router);
require('./admins')(router);


module.exports = router;