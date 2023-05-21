import { Router } from 'express'
import {
    createAnnouncement,
    getAllAnnouncement,
    getAcceptAnnouncement,
    getAwaitAnnouncement,
    getRejectAnnouncement,
    updateAnnouncement
} from '../controller/announcement.js'
const rout = Router()

rout.get('/list', getAllAnnouncement)
rout.post('/create', createAnnouncement)
rout.get('/accept', getAcceptAnnouncement)
rout.get('/reject', getRejectAnnouncement)
rout.get('/awaits', getAwaitAnnouncement)
rout.post('/update', updateAnnouncement)


export default rout