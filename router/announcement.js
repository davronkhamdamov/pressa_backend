import { Router } from 'express'
import {
    createAnnouncement,
    getAllAnnouncement,
    getAcceptAnnouncement,
    getAwaitAnnouncement,
    getRejectAnnouncement
} from '../controller/announcement.js'
const rout = Router()

rout.get('/list', getAllAnnouncement)
rout.post('/create', createAnnouncement)
rout.get('/accept', getAcceptAnnouncement)
rout.get('/reject', getRejectAnnouncement)
rout.get('/await', getAwaitAnnouncement)


export default rout