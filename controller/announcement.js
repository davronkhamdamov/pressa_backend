import announcement from '../database/announcement.js'
import { InternalServerError, ValidationError } from '../utils/errors.js'
announcement.sync({ force: false })

const createAnnouncement = async (req, res, next) => {
    try {
        await announcement.create(req.body)
        res.status(201).send({
            message: "Successfully created"
        })
    } catch (error) {
        return next(new ValidationError(400, error))
    }
}

const getAllAnnouncement = async (req, res, next) => {
    try {
        const announcements = await announcement.findAll()
        res.status(200).send(announcements)
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}

const getAwaitAnnouncement = async (req, res, next) => {
    try {
        const announcements = await announcement.findAll(
            { where: { isAccept: null } })
        res.status(200).send(announcements)
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}

const getAcceptAnnouncement = async (req, res, next) => {
    try {
        const announcements = await announcement.findAll({ where: { isAccept: true } })
        res.status(200).send(announcements)
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}

const getRejectAnnouncement = async (req, res, next) => {
    try {
        const announcements = await announcement.findAll({
            where: {
                isAccept: false
            }
        })
        res.status(200).send(announcements)
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}
export {
    createAnnouncement,
    getAllAnnouncement,
    getAcceptAnnouncement,
    getRejectAnnouncement,
    getAwaitAnnouncement
}