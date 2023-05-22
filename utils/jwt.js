import jwt from 'jsonwebtoken'

const sign = (params) => {
    return jwt.sign(params, process.env.JWT_SECRET, { expiresIn: "1h" })
}
const verify = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

export { sign, verify }