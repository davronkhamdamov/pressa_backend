import { DataTypes, UUIDV4, sequelize } from '../config/config.js'
const announcement = sequelize.define('announcement', {
    id: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isOnline: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    yonalish: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ichki_yonalish: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subject_text: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default announcement