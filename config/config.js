import { Sequelize, DataTypes, UUIDV4 } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()
const sequelize = new Sequelize(process.env.ELEPHANTSQL_URL, { logging: false })

sequelize.authenticate()
    .then(() => console.log('connected'))
    .catch(e => console.log(e))

export { sequelize, DataTypes, UUIDV4 }