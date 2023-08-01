import jwt from "jsonwebtoken";
import userSchemaModel from "../model/UserSchema.js";
import { securePassword, comparePassword } from "../utils/bcrypt.js";
import { userValidation, isExistingUser, loginValidation } from "../utils/userValidation.js";


// Add new User
 export const signUpController = async (req, res) => {
    try {
        const { userName, userEmail, userPassword } = req.body;
        // Validate Using Joi
        const { error } = userValidation.validate(req.body) 
        
        //Check if isEXistingUser
        const existingUser = await isExistingUser(userEmail, userName);

        //If this statement is true it will return a Error.
        if (existingUser || error ) {
            const errorMessage = error ? error.details[0].message : '';
            const message = existingUser ? `A user with this ${existingUser} already exist` : errorMessage;
            return res.status(400).json({ message });
        }
        //if validation is okay. will continue to register
        //Hashing the Password for Securites
        const hashedPassword = await securePassword(userPassword);
        //query to add data in database
        const userRegister = await userSchemaModel.create({
            userName,
            userEmail,
            userPassword: hashedPassword,
        })
        delete userRegister.userPassword;

        const token = jwt.sign({
            userId: userRegister._id,
            userName: userRegister.userName
        },process.env.JWT_SECRET)

        res.status(200).json({ message: "Register Successful", token: token});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
 }

//Login
export const logInController = async (req, res) => {
    try {
        const { userName, userPassword } = req.body;
        const { error } = loginValidation.validate(req.body)
        
        // find user in the database
        const userCredentials = await userSchemaModel.findOne({ userName });

        // Validate if the user is found or not
        if (!userCredentials || !(await comparePassword(userPassword, userCredentials.userPassword))) {
            const errorMessage = error ? error.details[0].message : '';
            const message = !userCredentials || !(await comparePassword(userPassword, userCredentials.userPassword)) ? 'Username and Password is incorrect' : errorMessage;
         res.status(400).json({ message: message })
        } else {
            // If login Successful
            console.log('Login Successful');
            delete userCredentials.userPassword;
            // Create session token
            const token = jwt.sign({
                userId: userCredentials._id,
                userName: userCredentials.userName
            },process.env.JWT_SECRET)
            //Notice 
           
            res.status(200).json({ message: "Login successful", token: token, user: {
                email: userCredentials.userEmail,
                role: userCredentials.role,
                fullname: userCredentials.fullName
            }});
        
        }
    } catch ( error ) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

//Edit User
// Needs validation
export const editUserCredentials = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedData = req.body;
        const updateInfo = await userSchemaModel.findByIdAndUpdate(userId, updatedData, { new: true });

        if (!updateInfo) {
            res.status(400).json({ message: "Update Failed Please try Again" });
        } else {
            res.status(201).json({ message: "Update Successul" });
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//Delete user
export const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.userId;

        const deleteUserAccount = await userSchemaModel.findByIdAndDelete(userId);

        if (!deleteUserAccount) {
            res.status(400).json({ message: "Delete Failed Please try Again" });
        }

        res.status(201).json({ message: "Delete Successul" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" }); 
    }
}

// Project of User
// Get ProjectBoard Details by UserId
export const getAllUserProjectBoards = async(res, req) => {
    try {
        const userParams = req.params.id
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


