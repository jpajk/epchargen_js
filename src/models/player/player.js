"use strict";

module.exports = function(sequelize, DataTypes) {
    const player = sequelize.define("Player", {
        email: DataTypes.STRING,
        nickname: DataTypes.STRING,
        hash: DataTypes.STRING,
    });

    return player;
};
