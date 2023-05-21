import admin from '../database/admin.js'
import { AuthorizationError } from '../utils/errors.js'
import { sign } from '../utils/jwt.js'

admin.sync({ force: false })

const Login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const admins = await admin.findOne({ where: { username } })
        if (!admins) {
            return next(new AuthorizationError(404, 'User Not Found!'))
        }
        if (admins.password !== password) {
            return next(new AuthorizationError(401, 'Invalid Password!'))
        }
        res.send({
            token: sign({ id: admins.id, agent: req.headers['user-agent'] }),
            message: "Successfulll login"
        })
    } catch (error) {
        return next(new AuthorizationError(400, error.message))
    }
}
const adminCheck = (req, res) => {
    res.send({
        message: "successfully"
    })
}
export { Login, adminCheck }