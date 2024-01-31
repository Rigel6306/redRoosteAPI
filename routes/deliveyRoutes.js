const express = require('express')
const controller = require('../controllers/deliveryController')
const router = express.Router();


router.route('/addstaff').post(controller.addStaff)

module.exports= router;