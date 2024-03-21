const express = require("express");
const {getAllElement, checkout,verify} = require("../controller/userController");
const router = express.Router();

router.route('/').get(getAllElement);
router.route('/order').post(checkout);
router.route('/verify').post(verify)

module.exports = router;