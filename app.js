import express from 'express';
import router from './src/routes/web'
import hbs from 'express-handlebars';
import path from 'path';

const app = express();

app.use(router);

app.engine('hbs', hbs(
    {
        extname: 'hbs',
        defaultLayout: 'welcome',
        layoutsDir: path.join(__dirname, '/src/views')
    }
));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'hbs');

export default app;