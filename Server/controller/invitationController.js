import invitationProjectBoard from "../model/invitationSchema.js";
import userSchemaModel from "../model/UserSchema.js";
import mongoose from "mongoose";
//Sent Invites of Sender to Reciever
export const sendProjectInvitation = async(req, res) => {
    try {
        const userId = req.params.userId
        const { receiver, invitationStatus, access, projectBoard } = req.body

        // Need to convert projectBoard to projectId
        if (mongoose.Types.ObjectId.isValid(projectBoard)) {
            const projectId = new mongoose.Types.ObjectId(projectBoard);
            console.log('ProjectId Converted Successfully')
            const newInvite = await invitationProjectBoard.create({
                    sender: userId,
                    receiver,
                    invitationStatus,
                    access,
                    projectBoard: projectId
            })
        console.log('Sucessful Invite', newInvite )
        res.status(200).json({ message: "Sent Invitation Successful", newInvite });
    }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error"});
    }
}

// Display all invites(Sent and Receive) by params ID;
export const getAllInvites = async(req, res) => {
    try {
        const userId = req.params.userId;
        // params is passing user ID as string. But we need and ObjectID to aggreagate in our Schema Model.
        // So we convert it using mongoose

        const userIdObject = new mongoose.Types.ObjectId(userId);

        // This will get all invites for send and recieve
        const findInvites = await invitationProjectBoard.find({
            $or: [
                { sender: userIdObject },
                { receiver: userIdObject }
            ]
        })
        findInvites.forEach((invite) => {
            console.log('Get Invites');
            console.log('Sender:', invite.sender);
            console.log('Receiver:', invite.receiver);
        });
        // I need to extract this
        // Extracting senders and receivers from findInvites array
        res.status(200).json({ message: "Found", findInvites});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error"});
    }
}

// Accept or refuse Invite
// After getting the Invitation, accept or reject it then update the field for invitation and add prject to the user.
export const updateMyInvitation = async(req, res) => {
    try {
        // Will Need User Id
        // This will Get user Id and Invitation Id and status to be updated
        const { invitationId, invitationStatus } = req.body;
        // function that will udpate status of invitation to accept or reject the invitation
        const invitation = await invitationProjectBoard.findByIdAndUpdate(invitationId,
            { $set: { 'invitationStatus': invitationStatus } },
            { new: true } // To return the updated document after the update
        );
        // After Invitation if accepted or rejected. This will add or remove the invitation. If accepted add project to the user
        if (invitationStatus === 'accepted') {
            const userId = req.params.userId
            const addUserProject = await userSchemaModel.findByIdAndUpdate(userId, {
                $push: { projects: [{ acceptedProjectsBoard: invitation.projectBoard }] }
            })

            console.log('Added to User Project', addUserProject)
            res.status(200).json({ message: "Invitation Accepted, Added to User Project"});
        } else if (invitationStatus === 'rejected') {

            const deleteInvite = await invitationProjectBoard.findByIdAndDelete(invitationId);

            console.log('Rejected Invitation', deleteInvite);
            res.status(200).json({ message: "Rejected Invitation"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error"});
    }
}



export const deleteInvitation = async(req, res) => {
   try {
    const invitationId = req.params.invitationId;
    console.log('This is Id of reqbody', invitationId);

    // const ConvertedInvitationId = new mongoose.Types.ObjectId(invitationId);
    // console.log('ConvertedId', ConvertedInvitationId)
    // if (!ConvertedInvitationId) {
    //     console.log('Please Select Invitation to Delete')
    // }

    const deleteInvitationId = await invitationProjectBoard.findByIdAndDelete(invitationId);
    
    console.log('Successfully Deleted Invitation', deleteInvitationId)
    res.status(200).json({ message: "Invitation Successfully Deleted"});
   } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error"});
   }
}