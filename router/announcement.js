import { Router } from 'express'
import {
    createAnnouncement,
    getAcceptAnnouncement,
    getAwaitAnnouncement,
    getRejectAnnouncement,
    updateAnnouncement,
    filterData
} from '../controller/announcement.js'
const rout = Router()

rout.post('/create', createAnnouncement)
rout.get('/accept', getAcceptAnnouncement)
rout.get('/reject', getRejectAnnouncement)
rout.get('/awaits', getAwaitAnnouncement)
rout.post('/update', updateAnnouncement)
rout.post('/filter', filterData)


export default rout