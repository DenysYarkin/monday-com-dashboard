import express from 'express';
import path from 'path';

import routes from './routes/routes';
import config from './config/config';

import {extractToken} from './services/authService';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin',
                config.frontendUri);
    res.header('Access-Control-Allow-Headers',
               'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(extractToken)

app.use('/', routes);

app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
});
