import invitationProjectBoard from "../model/invitationSchema.js";
import mongoose from "mongoose";
//Sent Invites of Sender to Reciever
export const sendProjectInvitation = async(req, res) => {
    try {
        const userId = req.params.userId
        const { reciever, invitationStatus, access, projectBoard } = req.body
        console.log( reciever, invitationStatus, access, projectBoard )
        const newInvite = await invitationProjectBoard.create({
            invitationCards: [{
                sender: userId,
                reciever,
                invitationStatus,
                access,
                projectBoard
            }]
        })
        res.status(200).json({ message: "Sent Invitation Successful"});

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
        // const findInvites = await invitationProjectBoard.findById(userId, {
        //     $or: [
        //         { 'invitationCards.sender': userId },
        //         { 'invitationCards.receiver': userId }
        //       ]
        // })

        const findInvites = await invitationProjectBoard.aggregate([
            {
                $match: {
                  $expr: {
                    $or: [
                      { $eq: ['$_id', userIdObject] },
                      { $in: [userIdObject, '$invitationCards.sender'] },
                      { $in: [userIdObject, '$invitationCards.receiver'] }
                    ]
                  }
                }
              },
            {
                $project: {
                    _id: 1, // Include the _id field if you want it
                    // Include other fields you need from the document
                    // For example:
                    'invitationCards.sender': 1,
                    // Add other fields you want to display
                }
            }
        ]);
        // I need to extract this
        // Extracting senders and receivers from findInvites array
        const senders = findInvites.map((invite) => invite.invitationCards.sender);
        const receivers = findInvites.map((invite) => invite.invitationCards.receiver);

        console.log('Senders:', senders);
        console.log('Receivers:', receivers);

        res.status(200).json({ message: "Found", findInvites});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error"});
    }
}