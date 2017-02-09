const models = require('../models');
const sequelizeFixtures = require('sequelize-fixtures');

models.sequelize.sync({force: true}).then(function () {
    let fixtures = [];
    let names = models.Aptitude.aptitudesNames;
    let e = names.length;
    let i = 0;

    for (i; i < e; i++) {
        fixtures.push({
            model: "Aptitude",
            data: {
                name: names[i],
            }
        });
    }

    sequelizeFixtures.loadFixtures(fixtures, models);
});

