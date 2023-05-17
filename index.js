import express from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
const PORT = process.env.PORT || 4001

app.use(cors())
app.use(express.json())

app.get('/*', (req, res) => {
    res.send({ status: 400, message: 'Rout not found', method: req.method, url: req.url, error: true })
})
app.post('/*', (req, res) => {
    res.send({ status: 400, message: 'Rout not found', method: req.method, url: req.url, error: true })
})
app.put('/*', (req, res) => {
    res.send({ status: 400, message: 'Rout not found', method: req.method, url: req.url, error: true })
})
app.delete('/*', (req, res) => {
    res.send({ status: 400, message: 'Rout not found', method: req.method, url: req.url, error: true })
})

app.use((error, req, res, next) => {

    if (error.name == 'ValidationError') {
        return res.status(error.status).json({
            status: error.status,
            message: error.message.details[0].message,
            errorName: error.name,
            error: true,
        })
    }

    if (error.status != 500) {
        return res.status(error.status).json({
            status: error.status,
            message: error.message,
            errorName: error.name,
            error: true,
        })
    }

    fs.appendFileSync('./log.txt', `${req.url}__${req.method}__${Date.now()}__${error.name}__${error.message}\n`)

    return res.status(error.status).json({
        status: error.status,
        message: 'Internal Server Error',
        errorName: error.name,
        error: true,
    })
})




app.listen(PORT, () => {
    console.log('http://localhost:' + PORT + " is running");
})