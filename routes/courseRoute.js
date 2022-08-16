const express = require('express');
const courseController = require('../controllers/courseController')

const router = express.Router();

router.route('/').post(courseController.createCourse); //localhost:300/courses/ yani /courses den sonrasını alıcak burası ör:/yeni diye
//bir route tanımlasaydık /course/yeni olarak gelicekti


module.exports = router;
