import { AuthorizationError } from '../utils/errors.js'
import { verify } from '../utils/jwt.js'

const auth = async (req, res, next) => {
    try {
        if ('/admin' === (req.url)) {
            const { token } = req.headers
            if (!token) {
                return next(new AuthorizationError(400, 'Token is required'))
            }
            const verifedToken = await verify(token)
            if (verifedToken.agent !== req.headers['user-agent']) {
                return next(new AuthorizationError(400, 'Device wrong!'))
            }
            return res.send({
                message: "Successfully checked"
            })
        }
        next()
    } catch (error) {
        return next(new AuthorizationError(400, error))
    }
}
export default auth