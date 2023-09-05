import mongoose from "mongoose";
import userSchemaModel from "../model/UserSchema.js";
import projectBoardSchema from "../model/projectBoardSchema.js";
// Add Board Projects, Also update the userAccount that add the projects.
// Add Projects with User ID
export const addProjectBoard = async(req, res) => {
    try {
        // Set the Id of the user
        const userId = req.params.userId
        // First Step for ProjectBoard
        // Create Board after Registration.
        const { boardName, description } = req.body;
        const newProjectBoard = await projectBoardSchema.create({
            boardName, 
            description, 
            createdBy: userId,
            members:[{
                user: userId,
                typeOfUser: 'owner',
                access: 'admin'
            }]
        });
        
        
        console.log('Successfully Added Owned Project')
        res.status(200).json({ message: "Board Creation Successful", newProjectBoard, addProjecttoUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Project of User
// Get ProjectBoard Details by UserId
// getAllProjects for login User
export const getUserProject = async(req, res) => {
    try {
        const userId = req.params.userId
        // const objectIdUserId = new mongoose.Types.ObjectId(userId);
        const userProjects = await projectBoardSchema.find({ 
            $or: [
                { 'createdBy': userId },
                { 'members.userId': userId }
            ]
         })
         .populate('members.userId')
        if (!userProjects || userProjects.length === 0) {
        console.log('No Projects found');
        res.status(404).json({ message: "No Projects found" });
        return;
        }

        res.status(200).json({ message: "Projects Found", userProjects: userProjects});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


// Edit Board Projects overall
export const editProjectBoard = async(req, res) => {
    try {
        // Codes here for edit
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const searchProject = async(req, res) => {
    try {
        // Code for Search Here
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getSingleUserProject = async(req, res) => {
    try {
        const projectId = req.params.projectId

        const projectBoard = await projectBoardSchema.findById(projectId)
        .populate('taskBoards.taskBoard')
        .populate('createdBy') //Need to change to Full name

        if (!projectBoard) {
            console.log('No Projects found');
            res.status(404).json({ message: "No Projects found" });
            return;
        }
        console.log(projectBoard.createdBy.userName)
        res.status(200).json({ message: "Projects Board Found", projectBoard: projectBoard});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}