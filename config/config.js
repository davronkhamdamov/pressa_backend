import { Sequelize, DataType, UUIDV4 } from 'sequelize'


const sequelize = new Sequelize(process.env.ELEPHANTSQL_URL, { logging: false })

sequelize.authenticate()
    .then(() => console.log('connected'))
    .catch(e => console.log(e))


export { sequelize, DataType, UUIDV4 }