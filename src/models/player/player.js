"use strict";

import passportLocalSequelize from 'passport-local-sequelize';

module.exports = function(sequelize, DataTypes) {
    const player = sequelize.define("Player", {
        email: DataTypes.STRING,
        nickname: DataTypes.STRING,
        hash: DataTypes.STRING,
        mysalt: DataTypes.STRING
    });

    passportLocalSequelize.attachToUser(player, {
        usernameField: 'nickname',
        hashField: 'hash',
        saltField: 'salt'
    });

    return player;
};
