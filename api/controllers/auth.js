import User from "../models/User.js";
import bcryptjs from 'bcryptjs';
import {errorHandler} from './../utils/error.js'
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {
        const salt = bcryptjs.genSaltSync(10)
        const hashedPassword = bcryptjs.hashSync(req.body.password, salt)
        const newUser = new User({
            ...req.body,
            password: hashedPassword
        });
        await newUser.save();
        res.status(200).json("user save successfully");
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) return next(errorHandler(404, "User not found"));

        const isPasswordCurrect = bcryptjs.compareSync(req.body.password, user.password);

        if(!isPasswordCurrect) return next(errorHandler(400, "Invalid password or username"))
        
        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET
          );

        const {password, isAdmin, ...otherFields } = user._doc;
        res
        .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ details: {...otherFields}, isAdmin });
    } catch (error) {
        next(error);
    }
}