import { Router } from 'express'
import { createAnnouncement, getAllAnnouncement } from '../controller/announcement.js'
const rout = Router()

rout.get('/list', getAllAnnouncement)
rout.post('/create', createAnnouncement)


export default rout