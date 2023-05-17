import { Router } from 'express'
import { Login } from '../controller/admin.js'
const rout = Router()

rout.post('/login', Login)

export default rout