"use strict";

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("AptitudeValue", {
        value: { type: DataTypes.INTEGER, allowNull: false }
    });
};