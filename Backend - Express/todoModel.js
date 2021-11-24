const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_URL)

const ToDo = sequelize.define(
    'ToDo',
    {
        uuid: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        done: {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: 'ToDo'
    }
)

  
module.exports = ToDo
