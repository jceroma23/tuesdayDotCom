import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotEnv from "dotenv";
import { userRouter } from "./router/UserRouter.js";

const app = express();
mongoose.Promise = global.Promise;
// Middleware
dotEnv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cors());


//Routers
app.use('/api/auth', userRouter);


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