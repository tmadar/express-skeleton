var express = require('express');
var router = express.Router();
const cors = require('cors');
const userController = require("../controllers/UserController");

router.use(cors())

/* GET users listing. */
router.get('/', userController.user);

module.exports = router;
