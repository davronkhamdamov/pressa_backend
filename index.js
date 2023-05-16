import express from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
const PORT = process.env.PORT || 4001

app.use(cors())
app.use(express.json())



app.listen(PORT, () => {
    console.log('http://localhost:' + PORT + " is running");
})