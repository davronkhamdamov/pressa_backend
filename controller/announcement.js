import announcement from '../database/announcement.js'
import { InternalServerError, ValidationError } from '../utils/errors.js'
announcement.sync({ force: false })

import { Op } from "sequelize";

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
const updateAnnouncement = async (req, res, next) => {
    try {
        const foundAnnouncement = await announcement.findOne({ where: { id: req.body.id } })
        if (!foundAnnouncement) {
            return next(new ValidationError(400, 'Announcement not found'))
        }
        await announcement.update(req.body, {
            where: { id: req.body.id }
        })
        res.status(200).send(await announcement.findAll({
            where: {
                isAccept: !req.body.isAccept
            }
        }))
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}
const filterData = async (req, res, next) => {
    try {
        const { yonalish, isOnline, date, fullname } = req.body

        const data = await announcement.findAll({
            where: {
                yonalish: {
                    [Op.in]: yonalish.map(e => e.title),
                },
                fullname: {
                    [Op.in]: fullname.map(e => e.title),
                },
                isOnline: isOnline === "Online" ? true : false,
                date: date
            },
        })
        res.send(data)
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}

export {
    createAnnouncement,
    getAllAnnouncement,
    getAcceptAnnouncement,
    getRejectAnnouncement,
    getAwaitAnnouncement,
    updateAnnouncement,
    filterData
}