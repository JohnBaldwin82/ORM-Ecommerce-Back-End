const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { toDefaultValue } = require('sequelize/types/lib/utils.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primareKey: true,
      autoIncrement: true,
    },
  tag_name: {
    type: DataTypes.STRING,
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  },
 
);

module.exports = Tag;
