import Joi from "joi";
import userSchemaModel from "../model/UserSchema.js";


const userValidation = Joi.object({
    userName: Joi.string().alphanum().min(5).max(20).trim(true).required(),
    userEmail: Joi.string().email().trim(true).required(),
    userPassword: Joi.string().min(6).trim(true).required(),
});

const loginValidation = Joi.object({
    userName: Joi.string().alphanum().min(3).max(25).trim(true).required(),
    userPassword: Joi.string().min(8).trim(true).required()
});

const isExistingUser = async ( inputUserEmail, inputUserName ) => {
    const email = await userSchemaModel.findOne({
        userEmail: inputUserEmail
    })
    const username = await userSchemaModel.findOne({
        userName: inputUserName
    })

    // Return a Message
    if (email) {
       const messageError = `${inputUserEmail}`;
        return messageError;
    }
    if (username) {
        const messageError = `${inputUserName}`;
        return messageError;
    }
}

export { userValidation, isExistingUser, loginValidation };