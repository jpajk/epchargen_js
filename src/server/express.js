import express from 'express';
import Config from 'app/conf/Config';
import expressBodyParser from 'pr-express-body-parser';
import models from '../models';
import RepositoryDispatcher from '../repository/repository_dispatcher';
import Password from '../service/password';


const app = express();

app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(Config.baseJsPath, express.static('lib/static/js'));
app.use(Config.baseImagePath, express.static('lib/static/img'));
app.use(expressBodyParser());

/** Define express routes */

/**
 * todo also validate on-server
 * Create account
 */
app.post('/submit_account', (req, res) => {
    let req_body = JSON.parse(req.body);
    let r = req_body.register;

    Password.hashPassword(
        r.password,
    (hash) => {
            r.password = hash;
            let repo = (new RepositoryDispatcher()).getRepository('player');
            repo.createPlayer(r.email, r.nick, r.password);
        });

    res.send(req.body);
});

/**
 * Handle submitting the character sheet
 */
app.post('/submit_character_sheet', (req, res) => {
    let rd = new RepositoryDispatcher();
    //todo validate request with ajv
    rd.createNewCharacterSheet(JSON.parse(req.body));

    res.send(req.body);
});

/**
 * Seed the character sheet with initial data
 */
app.post('/create_seed', (req, res) => {
    let Aptitude = models.Aptitude;

    Aptitude.findAll().then((aptitudes) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(aptitudes));
    });
});

export default app;