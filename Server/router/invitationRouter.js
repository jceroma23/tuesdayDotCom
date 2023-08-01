import { Router } from "express";
import { sendProjectInvitation, getAllInvites } from "../controller/invitationController.js";

const invitationRouter = Router();

invitationRouter.post('/:userId/sendInvitation', sendProjectInvitation);
invitationRouter.get('/:userId/getInvitation', getAllInvites);

export { invitationRouter };
