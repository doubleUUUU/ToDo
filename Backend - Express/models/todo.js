'use strict';
const { v4: uuid_v4 } = require('uuid');
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define(
    'ToDo',
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
          type: Sequelize.STRING
        },
        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: 'ToDo'
    }
)
  return ToDo;
};