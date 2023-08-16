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
            createdBy: userId
        });

        // Second update User Owned Project
        const addProjecttoUser = await userSchemaModel
        .findByIdAndUpdate(userId, {
            $push: { projects: [{ownedProjectsBoard: newProjectBoard._id}] }
        }, {new: true})
        .populate('projects.ownedProjectsBoard', 'boardName description')
        .populate('projects.acceptedProjectsBoard', 'boardName description')
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
        const getUserProjectDetail = await userSchemaModel
        .findById(userId)
        .populate('projects.ownedProjectsBoard')
        .populate('projects.acceptedProjectsBoard')
        .select('projects.ownedProjectsBoard projects.acceptedProjectsBoard');
        res.status(200).json({ message: "Successful", getUserProjectDetail: getUserProjectDetail  });
        
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

