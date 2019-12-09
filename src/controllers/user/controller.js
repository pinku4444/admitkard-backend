import { validationResult } from 'express-validator/check'
import User from '../../models/User'
import configuration from '../../config/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class UserController {

    async addUser(req, res, next) {
        // check validation error 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err = new Error();
            err.code = 400;
            err.msg = errors.array();
            return next(err);

        }
        const { name, email, contactNumber, courseLevel, country, dob } = req.body;
        try {
            // check user exist or not 
            let user = await User.findOne({ email });
            if (user) {
                const userData = {
                    name,
                    email,
                    contactNumber,
                    courseLevel,
                    country,
                    dob
                }
                await User.findOneAndUpdate({ _id: user._id }, { $set: userData }, { new: true });
            } else {
                user = new User({
                    name,
                    email,
                    contactNumber,
                    courseLevel,
                    country,
                    dob
                })
                await user.save();
            }
            const response = {
                msg: "user Created Successfully",
                code: 200
            }
            res.status(200).json({ response })




        } catch (err) {
            console.log(err.message);
            const error = new Error();
            err.code = 500;
            err.msg = "server error";
            next(err);
        }
    }

    async getUser(req, res, next) {
        if (req.params.email !== undefined) {
            const email = req.params.email;
            const user = await User.findOne({ email });
            const response = {
                msg: "user fetch Successfully",
                code: 200,
                data : user !== null ? user: []
            }
            res.status(200).json({ response })
    
        }else {
            const error = new Error();
            err.code = 500;
            err.msg = "server error";
            next(err)

        }
    }


}

export default new UserController