import express from 'express';
import Config from 'app/conf/Config';
import expressBodyParser from 'pr-express-body-parser';

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

export default app;