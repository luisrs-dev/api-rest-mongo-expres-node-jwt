import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {login, register, infouser, refreshToken} from './controllers/auth.controllers.js'
import authRouter from "./routes/auth.routes.js";

const app = express();
app.use(express.json())
app.use(cookieParser())

const router = express.Router()

app.use("/api/auth/", authRouter)

app.use(express.static('public'))

// app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("😍😍 http://localhost:" + PORT));