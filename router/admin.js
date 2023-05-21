import { Router } from 'express'
import { Login, adminCheck } from '../controller/admin.js'
const rout = Router()

rout.post('/login', Login)
rout.get('/', adminCheck)

export default rout