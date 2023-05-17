import jwt from 'jsonwebtoken'

const sign = async (params) => {
    return jwt.sign(params, process.env.JWT_SECRET)
}
const verify = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

export { sign, verify }