'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import cnf from '../conf/db';

let basename  = path.basename(module.filename);
let env       = process.env.NODE_ENV || 'development';
let config    = cnf[env];
let db        = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

let recursiveWalk = function(dir, filelist) {
    filelist = filelist || [];
    let files = fs.readdirSync(dir);

    files.forEach(function(file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = recursiveWalk(path.join(dir, file), filelist);
        } else {
            if (file !== basename) {
                filelist.push(path.join(dir, file));
            }
        }
    });

    return filelist;
};

let fileList = recursiveWalk(__dirname, []);

fileList.forEach(function(file) {
    let model = sequelize['import'](file);
    db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/** Define associations */

/** Player Character belongs to Player */
db.PlayerCharacter.belongsTo(db.Player);

/** AptitudeValue belongs to Aptitude */
db.AptitudeValue.belongsTo(db.Aptitude);

/** AptitudeValue also belongs to PlayerCharacter */
db.AptitudeValue.belongsTo(db.PlayerCharacter);

module.exports = db;
