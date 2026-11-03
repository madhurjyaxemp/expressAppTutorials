import express from "express";
import dotenv from "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import {connectDB} from "./config/db.js";



const app = express();
const PORT = 3000;

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const publicDirectoryPath = path.join(__dirName,"../public");


app.use(express.static(publicDirectoryPath));
// Connecting to mongoDB
connectDB();
app.listen(PORT,()=>{
    console.log(`The server is running at "http://localhost:3000"`)
});