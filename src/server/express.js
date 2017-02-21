import express from 'express';
import Config from 'app/conf/Config';
import expressBodyParser from 'pr-express-body-parser';
import { Player } from '../models';
import RepositoryDispatcher from '../repository/repository_dispatcher';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(Config.baseJsPath, express.static('lib/static/js'));
app.use(Config.baseImagePath, express.static('lib/static/img'));
app.use(expressBodyParser());

app.use(require('connect-multiparty')());
app.use(cookieParser());
app.use(session({ secret: 'ThisIsVerySecret' }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(Player.createStrategy());
passport.serializeUser(Player.serializeUser());
passport.deserializeUser(Player.deserializeUser());


/** Define express routes */

app.post('/submit_character_sheet', (req, res) => {
    let rd = new RepositoryDispatcher();
    //todo validate request with ajv
    rd.createNewCharacterSheet(JSON.parse(req.body));

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