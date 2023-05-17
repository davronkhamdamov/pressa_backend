import jwt from 'jsonwebtoken'

const sign = (params) => {
    return jwt.sign(params, process.env.JWT_SECRET)
}
const verify = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

export { sign, verify }