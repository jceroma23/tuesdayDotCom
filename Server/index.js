import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotEnv from "dotenv";
import { userRouter } from "./router/UserRouter.js";
import { projectBoardRouter } from "./router/ProjectBoardRouter.js";
import { invitationRouter } from "./router/invitationRouter.js";
import { taskRouter } from "./router/taskRouter.js";
import { columnRouter } from "./router/columnRouter.js";


const app = express();
mongoose.Promise = global.Promise;
// Middleware
dotEnv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
}));


//Routers
app.use('/api/auth', userRouter);
app.use('/api/auth', projectBoardRouter);
app.use('/api/auth', invitationRouter);
app.use('/api/auth', taskRouter);
app.use('/api/auth', columnRouter);
// Connection to DATABASE and LOCAL PORT
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then (() => {
    console.log(`Successfully Connected to the Database Locally`)
}).catch(() => {
    console.log(`Error, Please Check Database Connection`)
})

app.listen(process.env.PORT, () => {
    console.log("Listening to the Local PORT")
});