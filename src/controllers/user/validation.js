import {check} from 'express-validator/check'

const addUserValidation = [
    check('name',"User Name is required").isLength({min:1}),
    check('email','please enter valid email').isEmail(),
    check('contactNumber','contact number is required').isLength({min:1}),
    check('courseLevel','course level is required').isLength({min:1})
];


export {addUserValidation};