"use strict";

module.exports = function(sequelize, DataTypes) {
    let Aptitude = sequelize.define("Aptitude", {
        name: { type: DataTypes.STRING, unique: true, allowNull: false }
    });

    Aptitude.aptitudesNames = ['cog', 'coo', 'int', 'ref', 'sav', 'som', 'wil'];

    return Aptitude;
};
