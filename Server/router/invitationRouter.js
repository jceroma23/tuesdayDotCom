import { Router } from "express";
import { sendProjectInvitation, getAllInvites, updateMyInvitation, deleteInvitation } from "../controller/invitationController.js";

const invitationRouter = Router();

invitationRouter.post('/sendInvitation/:userId', sendProjectInvitation);
invitationRouter.get('/getInvitation/:userId', getAllInvites);
invitationRouter.post('/updateInvitation/:userId', updateMyInvitation);
invitationRouter.delete('/deleteInvitation/:invitationId', deleteInvitation);

export { invitationRouter };
