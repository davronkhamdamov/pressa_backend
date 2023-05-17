import { AuthorizationError } from '../utils/errors.js'
import { verify } from '../utils/jwt.js'

const auth = async (req, res, next) => {
    if (req.url === '/admin') {
        const token = req.headers.token
        if (!token) {
            return next(new AuthorizationError(400, 'Token is required'))
        }
        const verifedToken = verify(token)
        if (verifedToken.agent !== req.headers['user-agent']) {
            return next(new AuthorizationError(400, 'Device wrong!'))
        }
        req.user_id = verifedToken.id
        next()
    }
    next()
}
export default auth