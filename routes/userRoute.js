const express = require('express');
const authController = require('../controllers/authController')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { body } = require('express-validator');
const User = require('../models/User')

router.route('/signup').post(
    [
        body('name').not().isEmpty().withMessage('Please enter your name'),
        body('email').isEmail().withMessage('Please enter valid email')
        .custom((userEmail)=>{
            return User.findOne({email:userEmail}).then(user =>{
                if(user){
                    return Promise.reject('Email is already Exist')
                }
            })

        }),
        body('password').isEmpty().withMessage('Please enter your password')
    ]
    
    
    
   , authController.createUser); 
router.route('/login').post(authController.loginUser); 
router.route('/logout').get(authController.logoutUser); 
router.route('/dashboard').get(authMiddleware,authController.getDashboardPage);
router.route('/:id').delete(authController.deleteUser);  


module.exports = router;
