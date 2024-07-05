import express from 'express';
import path from 'path';

// TODO: find out why i need to specify file here
import routes from './routes/routes';
import config from './config';

const app = express();

// handling CORS
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin",
//                "http://localhost:4200");
//     res.header("Access-Control-Allow-Headers",
//                "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
});
