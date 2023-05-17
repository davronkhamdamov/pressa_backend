import announcement from '../database/announcement.js'
import { InternalServerError, ValidationError } from '../utils/errors.js'
announcement.sync({ force: false })
const createAnnouncement = async (req, res, next) => {
    try {
        const newAnnouncement = await announcement.create(req.body)
        res.status(201).send(newAnnouncement, {
            message: "Successfully created"
        })
    } catch (error) {
        return next(new ValidationError(400, error.message))
    }
}
const getAllAnnouncement = async (req, res) => {
    try {
        const announcements = await announcement.findAll()
        res.status(200).send(announcements, {
            message: "Successfully fetched"
        })
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}
export { createAnnouncement, getAllAnnouncement }