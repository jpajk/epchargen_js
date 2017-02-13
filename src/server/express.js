import express from 'express';
import Config from 'app/conf/Config';
import expressBodyParser from 'pr-express-body-parser';
import models from '../models';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(Config.baseJsPath, express.static('lib/static/js'));
app.use(Config.baseImagePath, express.static('lib/static/img'));
app.use(expressBodyParser());

/** Define express routes */

app.post('/submit_character_sheet', (req, res) => {
    res.send(req.body);
});

app.post('/create_seed', (req, res) => {
    let Aptitude = models.Aptitude;

    Aptitude.findAll().then((aptitudes) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(aptitudes));
    });
});

export default app;