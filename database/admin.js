import { DataTypes, UUIDV4, sequelize } from '../config/config.js'

const admin = sequelize.define("admin", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
export default admin