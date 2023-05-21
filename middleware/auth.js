import { AuthorizationError } from '../utils/errors.js'
import { verify } from '../utils/jwt.js'

const auth = async (req, res, next) => {
    try {
        if ('/announcement/await', '/admin' === (req.url)) {
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
    } catch (error) {
        next(new AuthorizationError(400, error.message))
    }
}
export default auth